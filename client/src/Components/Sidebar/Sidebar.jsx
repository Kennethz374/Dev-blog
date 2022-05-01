import "./Sidebar.css"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const Sidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const getCateogries = async () => {
            const res = await axios.get("/categories")
            setCategories(res.data)
        }
        getCateogries()
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="avatar" 
                className="sidebarImage"/>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolores. Eius recusandae adipisci </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {categories.map((cat)=>{
                        return <Link to={`/?cat=${cat.name}`} className="link sidebarListItem">
                                <li >{cat.name}</li> 
                            </Link>                    
                    })}
         
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcons fa-brands fa-github-square"></i>
                    <i className="sidebarIcons fa-brands fa-medium"></i>
                    <i className="sidebarIcons fa-brands fa-linkedin"></i>
                    <i className="sidebarIcons fa-solid fa-envelopes-bulk"></i>
                </div>


            </div>
        </div>
    )
}


export default Sidebar
