import "./SinglePost.css"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="postWrapper">
                <img src="https://images.unsplash.com/photo-1629904869742-6e8ccbd0f78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3NvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="postImg" className="singlePostImage"/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ken</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, excepturi adipisci deserunt ipsum dolore quos quia magni, ducimus quaerat nobis minus iure sed quisquam? Explicabo veritatis amet magni deserunt!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, excepturi adipisci deserunt ipsum dolore quos quia magni, ducimus quaerat nobis minus iure sed quisquam? Explicabo veritatis amet magni deserunt!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, excepturi adipisci deserunt ipsum dolore quos quia magni, ducimus quaerat nobis minus iure sed quisquam? Explicabo veritatis amet magni deserunt!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, excepturi adipisci deserunt ipsum dolore quos quia magni, ducimus quaerat nobis minus iure sed quisquam? Explicabo veritatis amet magni deserunt!
                </p>
            </div>
        </div>
    )
}

export default SinglePost
