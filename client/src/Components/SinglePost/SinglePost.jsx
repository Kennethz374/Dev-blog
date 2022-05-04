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
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${singlePost._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (error) {}
	};

	const handleUpdate = async () => {
		try {
			await axios.put(`/posts/${singlePost._id}`, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (error) {}
	};

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`/posts/${path}`);
			setSinglePost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
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

				{updateMode ? (
					<input
						type="text"
						value={title}
						className="singlePostTitleInput"
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="singlePostTitle">
						{title}
						{singlePost.username === user?.username && (
							<div className="singlePostEdit">
								<i
									className="singlePostIcon fa-solid fa-pen-to-square"
									onClick={() => setUpdateMode(true)}
								></i>
								<i
									className="singlePostIcon fa-solid fa-trash-can"
									onClick={handleDelete}
								></i>
							</div>
						)}
					</h1>
				)}

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
				{updateMode ? (
					<>
						<textarea
							value={desc}
							className="singlePostDesInput"
							onChange={(e) => setDesc(e.target.value)}
						/>
						<button className="singlePostButton" onClick={handleUpdate}>
							Update
						</button>
					</>
				) : (
					<p className="singlePostDes">{desc}</p>
				)}
			</div>
		</div>
	);
};

export default SinglePost;
