import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Post from "./Pages/Post/Post";
import Write from "./Pages/Write/Write";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
	return (
		<div className="App">
			<NavBar />
			{/* <Home /> */}
			{/* <Post /> */}
			{/* <Write /> */}
			<UserProfile />
		</div>
	);
}

export default App;
