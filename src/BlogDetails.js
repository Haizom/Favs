import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails() {

    const { id } = useParams(); //take the parameters of the url
    const {blogs : blog, loading, error} = useFetch("http://localhost:8000/blogs/" + id)

    const history = useHistory()

    const handelDelete = () => {
        fetch("http://localhost:8000/blogs/" + id,{
            method:"DELETE"
        }).then(() => {
            console.log("Deleted")
            history.push('/')
        })
    }
    
    return (
        <div className="blog-details">
            
            {error && <div>{error}</div>} 
            {loading && <div>Loading...</div>} 
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written By: {blog.author}</h3>
                    <p>    {blog.body}</p>
                    <button onClick={handelDelete}>Not Fav anymore!</button>
                </article>
            )} 
        </div>
    )
}
