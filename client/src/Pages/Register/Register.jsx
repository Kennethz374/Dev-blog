import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preveentDefault();
		const res = await axios.post("/auth/register", {
			username,
			email,
			password,
		});
		console.log(res);
	};
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label htmlFor="">Username</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your username..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="">Email</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your email..."
					onChanage={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="">Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your password..."
					onChanage={(e) => setPassword(e.target.value)}
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
			<Link to="/login" className="link">
				<button className="registerLoginButton">Login</button>
			</Link>
		</div>
	);
};

export default Register;
