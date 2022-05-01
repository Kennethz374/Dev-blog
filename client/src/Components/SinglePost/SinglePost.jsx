import "./SinglePost.css"
import {useLocation} from "react-router"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const SinglePost = () => {
    const location = useLocation ()
    const path = location.pathname.split("/")[2]
    const [singlePost, setSinglePost] = useState({})

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get(`/posts/${path}`)
            setSinglePost(res.data)
        }
        getPost()
    },[path])
    return (
        <div className="singlePost">
            <div className="postWrapper">
                {singlePost.photo && <img src={singlePost.photo} alt="postImg" className="singlePostImage"/>}
                
                <h1 className="singlePostTitle">
                    {singlePost.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: 
                    <Link to={`/?user=${singlePost.username}`} className="link">
                        <b>{singlePost.username}</b>
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date(singlePost.createdAt).toDateString()}</span>
                </div>

                <p className="singlePostDes">
                    {singlePost.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost
