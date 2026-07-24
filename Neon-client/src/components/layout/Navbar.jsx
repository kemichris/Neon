import { Link } from "react-router-dom"
import { IoSparkles } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Button } from "../common/Button"
import Logo from "../../assets/images/neon-logo.png"

export function Navbar() {
    return (
        <nav className="navBar">
            <img src={Logo} alt="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="nav-left">
                <button><IoIosSettings /></button>
                <Link to="/login">Login</Link>
                <Button
                    icon={<IoSparkles />}
                    text="Open Account"
                    to="/register"
                />

            </div>

        </nav>
    )
}