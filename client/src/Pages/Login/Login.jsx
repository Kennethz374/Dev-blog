import "./Login.css";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
		} catch (error) {
			dispatch({ type: "LOGIN_FAILURE" });
		}
	};
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label htmlFor="">Username</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your username..."
					ref={userRef}
				/>
				<label htmlFor="">Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password..."
					ref={passwordRef}
				/>
				<button className="loginButton" type="submit" disabled={isFetching}>
					Login
				</button>
			</form>
			<Link to="/register" className="link">
				<button className="loginRegisterButton">Register</button>
			</Link>
		</div>
	);
};

export default Login;
