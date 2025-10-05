# AWS Bedrock Blog Generator

A small learning project demonstrating AWS Bedrock integration with a React frontend and Python backend using AWS Lambda, API Gateway, and S3. This project allows generating blog posts using Bedrock models and storing/retrieving them from S3.
>[!NOTE]
 > This project was created for learning purposes. Improvements and optimizations can be made.

# 🚀 Project Overview
  ## Backend (AWS)
   ### Language & Runtime: 
        Python 3.9
   ### Services Used:
        AWS Lambda
        AWS API Gateway (HTTP API)
        AWS S3
        AWS Bedrock (for generating blogs)
  ### Framework: 
        Serverless Framework v3
  ### Features:
      Generate a blog for a given topic (POST /blog)
      Retrieve a saved blog by key (GET /blog?key=<s3-key>)
## Frontend
  ### Framework: 
      React 18 with Vite
  ### Components:
      GenerateBlog – Form to generate blog using Bedrock model
      GetBlog – Form to fetch and display a saved blog
  ### Styling: 
      Separate CSS files for components
  ### Service Layer: 
      blogService.js to handle API calls with Axios

# 💻 Project Structure

  ## backend/
    handler.py
    serverless.yml
  ## frontend/
    src/
      components/
         GenerateBlog.jsx
         GenerateBlog.css
         GetBlog.jsx
         GetBlog.css
      services/
         blogService.js
      models/
         BlogResponse.js
      App.jsx
      App.css
      index.jsx
      index.css
      .env.development

# ⚙️ Configuration & Setup
  ## Prerequisites
    AWS account with Bedrock access
    Node.js & npm/yarn installed
    Python 3.9 installed
    Serverless Framework installed (npm install -g serverless)

  ## 1. Backend Setup
    1. Navigate to the backend folder:
        cd backend
    2. Install Python dependencies if any (e.g., boto3) and configure AWS CLI:
        pip install -r requirements.txt
    3. aws configure
    4. Deploy the backend using Serverless Framework:
       sls deploy
    5. After deployment, note the HTTP API endpoint printed in the console.
    
  ## 2. Frontend Setup
    1. Navigate to the frontend folder:
       cd frontend
    2. Install dependencies:
       npm install
    3. Create .env.development file and set the API base URL:
       VITE_API_BASE_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com
    4. Run the frontend:
       npm run dev
    5. Open http://localhost:5173 in your browser.
  
# 📝 Usage
  ## Generate a Blog:
     Enter a topic in the form
     Click “Generate”
     Response will display the message and S3 key
  ## Get a Blog:
    Enter the S3 key in the form
    Click “Fetch”
    Blog content will be displayed

