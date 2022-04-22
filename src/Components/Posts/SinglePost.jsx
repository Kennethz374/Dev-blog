import "./SinglePost.css"

const SinglePost = () => {
    return (
        <div className="singlePost">
           <img src="https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3NvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
           alt="Bootcamp"
           className="postImage"/>

            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategories">Tech</span>
                    <span className="postCategories">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet </span>

                <hr/>

                <span className="postDate">1 hours ago</span>
            </div>
        </div>
    )
}

export default SinglePost
