import { useEffect, useState } from "react"

export default function Posts() {
    const [Posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div className=''>
            <h3>Posts: {Posts.length}</h3>
        </div>
    )
}
/**
 * To load Data
 * 1.   create a state to store the data
 * 2.   create use effect with no dependencies
 */