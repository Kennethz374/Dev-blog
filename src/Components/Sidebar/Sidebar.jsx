import "./Sidebar.css"

const Sidebar = () => {
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
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Study</li>
                    <li className="sidebarListItem">Games</li>
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
