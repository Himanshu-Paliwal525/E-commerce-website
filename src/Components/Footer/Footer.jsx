import "./Footer.css";
import logo from "../Assets/logo.png";
import whatsapp from "../Assets/whatsapp.png";
import instagram from "../Assets/instagram.png";
import pinterest from "../Assets/pinterest.png";
const Footer = () => {
    return (
        <div className="footer">
            <div>
                <img src={logo} alt="" /> <span>Shopper</span>
            </div>
            <ul className="footer-main">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className="footer-icons">
                <li>
                    <img className="icon-size" src={whatsapp} alt="" />
                </li>
                <li>
                    <img className="icon-size" src={pinterest} alt="" />
                </li>
                <li>
                    <img className="icon-size" src={instagram} alt="" />
                </li>
            </ul>
            <hr />
            <div>Copyright @ 2024 - All Rights are Reserved.</div>
        </div>
    );
};

export default Footer;
