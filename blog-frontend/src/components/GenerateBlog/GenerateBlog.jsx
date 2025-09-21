import React,{useState} from 'react'
import {generateBlog} from '../../services/blogService'
import "./GenerateBlog.css";

export default function GenerateBlog() {
    const [topic, setTopic] = useState("")
    const [response, setResponse] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const result = await generateBlog(topic);
        setResponse(result);
    }
    return (
        <div className="generate-blog">
            <h2>Generate Blog</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter blog topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                />
                <button type="submit">Generate</button>
            </form>

            {response && (
                <div className="result">
                    <p><strong>Status:</strong> {response.statusCode}</p>
                    <p><strong>Message:</strong> {response.message}</p>
                    <p><strong>Key:</strong> {response.key}</p>
                </div>
            )}
        </div>
    )
}