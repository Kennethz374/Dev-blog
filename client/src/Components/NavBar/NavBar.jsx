import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
const NavBar = () => {
	const { user, dispatch } = useContext(Context);
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch({ type: "LOGOUT" });
	};
	return (
		<div className="NavBar_Container">
			<div className="left">
				<i className="icons fa-brands fa-github-square"></i>
				<i className="icons fa-brands fa-medium"></i>
				<i className="icons fa-brands fa-linkedin"></i>
				<i className="icons fa-solid fa-envelopes-bulk"></i>
			</div>

			<div className="center">
				<ul className="centerList">
					<li className="listItem">
						<Link to="/" className="link">
							Home
						</Link>
					</li>
					<li className="listItem">
						<Link to="/about" className="link">
							About
						</Link>
					</li>
					<li className="listItem">
						<Link to="/contact" className="link">
							Contact
						</Link>
					</li>
					<li className="listItem">
						<Link to="/write" className="link">
							Write
						</Link>
					</li>
					<li className="listItem" onClick={handleLogout}>
						{user && "Logout"}
					</li>
				</ul>
			</div>

			<div className="right">
				{user ? (
					<Link to="/profile" className="link">
						<img src={user.profilePic} alt="avatar" className="right_image" />
					</Link>
				) : (
					<ul className="centerList">
						<li className="listItem">
							<Link className="link" to="/login">
								Login
							</Link>
						</li>
						<li className="listItem">
							<Link className="link" to="/register">
								Register
							</Link>
						</li>
					</ul>
				)}
				  
				<i className="searchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
};

export default NavBar;
