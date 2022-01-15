import { useState } from "react"
import { useHistory } from "react-router-dom"


export default function Create() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Hazim")
    const [loading, setLoading] = useState(false)

    const userHistory = useHistory()

    const handelSubmit = (e) => {
        e.preventDefault();

        setLoading(true)
        const blog = {title, body, author};

        fetch("http://localhost:8000/blogs", {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)       
            }).then(() => {
                console.log("Blog added!!")
                setLoading(false)
                userHistory.push('/')
            })
    }

    return (
        <div className="create">
            <h2>Add a new fav</h2>
            <form onSubmit={handelSubmit}>
                <label>Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Hazim">Hazim</option>
                    <option value="Hezam">Hezam</option>
                    <option value="Abdo">Abdo</option>
                    <option value="Ali">Ali</option>
                </select>

                {!loading && <button>Add a fav</button>}
                {loading && <button disabled>Loading</button>}
            </form>
        </div>
    )
}
