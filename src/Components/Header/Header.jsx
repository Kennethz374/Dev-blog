import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__titles">
                <span className="header__title1">Kenneth's</span>
                <span className="header__title2">Blog</span>
            </div>

            <img src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80" alt="header image" className="header__image"/>
        </div>
    )
}

export default Header
