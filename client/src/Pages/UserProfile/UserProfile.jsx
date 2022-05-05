import Sidebar from "../../Components/Sidebar/Sidebar";
import "./UserProfile.css";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

const UserProfile = () => {
	const { user, dispatch } = useContext(Context);
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
	const publicFile = "http://localhost:5000/images/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updateUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			//file name will be different even usering keeeps uploading the same image
			data.append("name", filename);
			data.append("file", file);
			updateUser.profilePic = filename;

			try {
				await axios.post("/upload", data);
			} catch (error) {
				console.log(error);
			}
		}
		try {
			const res = await axios.put("/users/" + user._id, updateUser);
			console.log("UPDATE SUCCESS!!!");
			setIsUpdateSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (error) {
			console.log(error);
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};
	return (
		<div className="settings">
			<div className="settingWrapper">
				<div className="settingTitle">
					<span className="settingUpdateTitle">Account Infomation</span>
					<span className="settingDeleteTitle">Delete</span>
				</div>
				<form className="settingForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingProfilePicture">
						<img
							src={
								file ? URL.createObjectURL(file) : publicFile + user.profilePic
							}
							alt="profile picture"
						/>
						<label htmlFor="fileInput">
							<i class="settingProfilePictureIcon fa-solid fa-user"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="email"
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="settingSubmit" type="submit">
						Update
					</button>
					{isUpdateSuccess && (
						<span
							style={{ textAlign: "center", color: "green", marginTop: "30px" }}
						>
							Profile has been updated
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default UserProfile;
