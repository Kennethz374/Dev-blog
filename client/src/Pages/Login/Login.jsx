import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label htmlFor="">Email</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your email"
				/>
				<label htmlFor="">Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password"
				/>
				<button className="loginButton">Login</button>
			</form>
			<Link to="/register" className="link">
				<button className="loginRegisterButton">Register</button>
			</Link>
		</div>
	);
};

export default Login;
