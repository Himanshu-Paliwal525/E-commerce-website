import "./Navbar.css";
import nav_logo from "../../assets/nav-logo.svg";
import nav_Profile from '../../assets/nav-profile.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={nav_logo} alt="" className="nav-logo" />
            <img src={nav_Profile} alt="" className="nav-profile" />
        </div>
    );
};

export default Navbar;