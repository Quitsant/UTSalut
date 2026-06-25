import logo from "../assets/logo1.png"

function Header() {
    
    return (
        <header>
            <img className="logo" src={logo} alt="Hero Image" />
            <nav>
                <p className="nav-link">Dashboard</p>
                <p className="nav-link">Profile</p>
                <p className="nav-link">Maps</p>
            </nav>
        </header>
    )

}

export default Header