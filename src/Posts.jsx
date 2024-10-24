import { useEffect, useState } from "react"
import Post from "./Post";
import './Post.css'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='box'>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}
/**
 * To load Data
 * 1.   create a state to store the data
 * 2.   create use effect with no dependencies
 */