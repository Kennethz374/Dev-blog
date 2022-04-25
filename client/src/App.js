import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Post from "./Pages/Post/Post";
import Write from "./Pages/Write/Write";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import { Routes, Route, Link } from "react-router-dom";

function App() {
	const user = true;
	//if no user login
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/write" element={user ? <Write /> : <Register />} />
				<Route
					path="/profile"
					element={user ? <UserProfile /> : <Register />}
				/>
				<Route path="/post/:id" element={<Post />} />
			</Routes>
		</div>
	);
}

export default App;
