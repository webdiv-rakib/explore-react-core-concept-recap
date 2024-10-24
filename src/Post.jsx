import './Post.css'
export default function Post({ post }) {
    console.log(post)
    const { title, userId, id ,body} = post;
    return (
        <div className='box'>
            <p>Post ID: {id}</p>
            <p><small>User ID: {userId}</small></p>
            <h4>Title: {title}</h4>
            <p>{body}</p>
        </div>
    )
}