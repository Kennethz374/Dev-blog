import "./Home.css"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Posts from "../../Components/Posts/Posts"
import {useState, useEffect} from "react" 
import axios from "axios"

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        const fetchPosts = async ()=> {
            const res = await axios.get("/posts")
            console.log(res.data)
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    return (
        <>
            <Header/>
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}

export default Home

