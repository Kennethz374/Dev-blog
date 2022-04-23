import "./Post.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import SinglePost from '../../Components/SinglePost/SinglePost'
// single post page 

const Post = () => {
    return (
        <div className="post">
            {/* Single post */}
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Post
