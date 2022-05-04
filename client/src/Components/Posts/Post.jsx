import "./Post.css";
import { Link } from "react-router-dom";
// home page single post layout

const Post = ({ post }) => {
	const publicFile = "http://localhost:5000/images/";
	return (
		<div className="singlePost">
			{post.photo && (
				<img
					src={publicFile + post.photo}
					alt="Bootcamp"
					className="postImage"
				/>
			)}

			<div className="postInfo">
				<div className="postCat">
					{post.categories.map((category) => {
						<span className="postCategories">{category.name}</span>;
					})}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>

				<hr />

				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className="postDes">{post.desc}</p>
		</div>
	);
};

export default Post;
