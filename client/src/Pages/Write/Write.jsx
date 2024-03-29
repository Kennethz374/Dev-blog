import "./Write.css";
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../Context/Context";

const Write = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			title,
			desc,
			username: user.username,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			//file name will be different even usering keeeps uploading the same image
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;

			try {
				await axios.post("/upload", data);
			} catch (error) {
				console.log(error);
			}
		}
		try {
			const res = await axios.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
			//redirect to the new post page
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="write">
			{file && (
				<img
					src={URL.createObjectURL(file)}
					alt="header"
					className="writeImage"
				/>
			)}
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fa-solid fa-plus"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						type="text"
						placeholder="Write your story here"
						className="writeInput writeText"
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button className="writeSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
};

export default Write;
