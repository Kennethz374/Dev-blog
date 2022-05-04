import "./SinglePost.css";
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const SinglePost = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	//post id
	const [singlePost, setSinglePost] = useState({});
	const publicFile = "http://localhost:5000/images/";
	const { user } = useContext(Context);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${singlePost._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (error) {}
	};

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`/posts/${path}`);
			setSinglePost(res.data);
		};
		getPost();
	}, [path]);
	return (
		<div className="singlePost">
			<div className="postWrapper">
				{singlePost.photo && (
					<img
						src={publicFile + singlePost.photo}
						alt="postImg"
						className="singlePostImage"
					/>
				)}

				<h1 className="singlePostTitle">
					{singlePost.title}
					{singlePost.username === user?.username && (
						<div className="singlePostEdit">
							<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
							<i
								className="singlePostIcon fa-solid fa-trash-can"
								onClick={handleDelete}
							></i>
						</div>
					)}
				</h1>

				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author:
						<Link to={`/?user=${singlePost.username}`} className="link">
							<b>{singlePost.username}</b>
						</Link>
					</span>
					<span className="singlePostDate">
						{new Date(singlePost.createdAt).toDateString()}
					</span>
				</div>

				<p className="singlePostDes">{singlePost.desc}</p>
			</div>
		</div>
	);
};

export default SinglePost;
