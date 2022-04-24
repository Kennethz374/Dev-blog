import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Post from "./Pages/Post/Post";
import Write from "./Pages/Write/Write";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	// const user = true;
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/posts">
						<Home />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/write">
						<Write />
					</Route>
					<Route path="/profile">
						<UserProfile />
					</Route>
					<Route path="/post/:Id">
						<Post />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
