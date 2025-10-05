import { useState } from "react"
import { getBlogByKey } from '../../services/blogService'
import "./GetBlog.css"
export default function GetBlog() {
    const [blogKey, updateBlogKey] = useState()
    const [blogResult, setBlogResult] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await getBlogByKey(blogKey);
        setBlogResult(result)
    }
    return (
        <div className="get-blog">
            <h2>Get Blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Enter Blog Key"
                    value={blogKey}
                    onChange={(e) => updateBlogKey(e.target.value)}
                />
                <button type="Submit">Get Blog</button>
            </form>

            {
                blogResult && (
                    <div className="result">
                        <p><strong>Message:</strong> {blogResult.message}</p>
                    </div>
                )
            }
        </div>
    )
} 