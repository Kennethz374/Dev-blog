import "./Posts.css"
import Post from "./Post"

const Posts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map(post=> {
                return <Post post={post}/>
            })}
       
        </div>
    )
}

export default Posts
