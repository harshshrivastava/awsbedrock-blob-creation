import boto3
import json
import uuid
import os


s3 = boto3.client("s3")
bucketName = os.environ["BUCKET_NAME"]

def generate_blog(event,context):
    try:
        bedrock = boto3.client("bedrock-runtime", region_name = os.environ["BEDROCK_REGION"])
        modelId = os.environ["MODEL_ID"]
        body = json.loads(event['body'])
        if "topic" not in body or not body["topic"]:
            return {
                "statusCode": 400,
                "body": json.dumps({"message":"Property 'topic' is missing"})
            }
        blogTopic = body["topic"]

        prompt=f""" Write a 200 words blog on the topic {blogTopic} """

        response = bedrock.converse(
            modelId=modelId,
            messages=[
                {"role":"user","content": [{"text": prompt}]}
            ]
        )

        blog_text = response["output"]["message"]["content"][0]["text"]
        key = f"blogs/{uuid.uuid4().hex}.txt"
        s3.put_object(Bucket=bucketName, Key=key, Body=blog_text.encode("utf-8"))

        return {
            "statusCode": 201,
            "body": json.dumps({"message":"Blog is generated and saved.", "key":key})
        }
    
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"message": f"Internal server error: {str(e)}"})
        }

def get_blog(event,context):
    try:
        print(json.dumps(event))
        query = event.get("queryStringParameters") or {}
        key = query.get("key")
        if not key:
            return {"statusCode": 400, "body": json.dumps({"message":"Property 'key' is missing"})}
        
        obj = s3.get_object(Bucket=bucketName, Key=key)
        blog_text = obj["Body"].read().decode("utf-8")

        return {
            "statusCode": 200,
            "body": json.dumps({"message": blog_text})
        }
    except s3.exceptions.NoSuchKey:
        return {
            "statusCode": 404, 
            "body": json.dumps({"message":"Blog not found"})
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"message": f"Internal server error: {str(e)}"})
        }