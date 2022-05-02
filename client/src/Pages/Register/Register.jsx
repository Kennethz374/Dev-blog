import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await axios.post("/auth/register", {
				username,
				email,
				password,
			});
			res.data && window.location.replace("/login");
		} catch (error) {
			console.log(error);
			setError(true);
		}
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
					type="email"
					className="registerInput"
					placeholder="Enter your email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="">Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your password..."
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
			<Link to="/login" className="link">
				<button className="registerLoginButton">Login</button>
			</Link>
			{error && (
				<span style={{ color: "red", marginTop: "20px" }}>
					Something Went Wrong...
				</span>
			)}
		</div>
	);
};

export default Register;
