import Sidebar from "../../Components/Sidebar/Sidebar"
import "./UserProfile.css"

const UserProfile = () => {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update</span>
                    <span className="settingUpdateTitle">Delete</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingProfilePicture">
                        <img src="https://images.unsplash.com/photo-1630332458774-c1786cfb68ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2Zlc3NvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="profile picture"/>
                    <label htmlFor="fileInput">
                        <i class="settingProfilePictureIcon fa-solid fa-user"></i>
                    </label>       
                    <input type="file" id="fileInput" style={{display:"none"}}/>                 
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Current Username"/>
                    <label>Email</label>
                    <input type="email" placeholder="Current email"/>
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default UserProfile
