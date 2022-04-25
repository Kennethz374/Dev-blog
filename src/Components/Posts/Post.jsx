import "./Post.css"
import { Link } from "react-router-dom";
// home page single post layout

const Post = () => {
    return (
        <div className="singlePost">
           <img src="https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3NvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
           alt="Bootcamp"
           className="postImage"/>

            <div className="postInfo">
                <div className="postCat">
                    <span className="postCategories">Tech</span>
                    <span className="postCategories">Life</span>
                </div>
                <Link to="/post/123" className="link">
                    <span className="postTitle">Lorem ipsum dolor sit amet </span>
                </Link>

                <hr/>

                <span className="postDate">1 hours ago</span>
            </div>
            <p className="postDes">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates eum explicabo molestias blanditiis autem aliquid provident deleniti incidunt vero, cupiditate cumque! Labore facere quod eaque cumque, ratione eveniet voluptas!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates eum explicabo molestias blanditiis autem aliquid provident deleniti incidunt vero, cupiditate cumque! Labore facere quod eaque cumque, ratione eveniet voluptas!
            </p>
        </div>
    )
}

export default Post
