import React from "react";
import {Link,useLocation} from "react-router-dom";
// import icons for navbar
import { IoGitCompareOutline } from "react-icons/io5";
import { AiOutlineInfoCircle, AiOutlineHome } from "react-icons/ai"
import { MdOutlineContactMail } from "react-icons/md"
import './Navbar.css'

const Navbar = () =>{

    const location = useLocation();
    return(
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">FundLens</Link>
            </div>
            <div className="nav-link">
                <Link to="/" 
                className={location.pathname === "/" ? "active" : ""}>
                    <AiOutlineHome/>
                    Home</Link>
                <Link to="/compare" 
                className={location.pathname === "/compare" ? "active" : ""}>
                    <IoGitCompareOutline/>
                    Compare</Link>
                <Link to="/about-us" 
                className={location.pathname === "/about-us" ? "active" : ""}>
                    <AiOutlineInfoCircle/>
                    About</Link>
                <Link to="/contact" 
                className={location.pathname === "/contact" ? "active" : ""}>
                    <MdOutlineContactMail/>
                    Contact US</Link>
            </div>
            
    
        </nav>
    );

}

export default Navbar;
