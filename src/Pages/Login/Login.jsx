import "./Login.css"

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email"/>
                <label htmlFor="">Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="registerButton">Register</button>
        </div>
    )
}

export default Login
