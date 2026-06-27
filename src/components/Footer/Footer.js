import {AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin }  from "react-icons/ai";
import './Footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="rights">
                <p>© FundLens. All rights reserved.    Shreevi</p>
            </div>
            <div className="links">
                <a href="mailto:shreevindia02@gmail.com">
                <AiOutlineMail/>
                email</a>

                <a href="https://github.com/shreevi480" target="_blank" rel="noreferrer">
                <AiOutlineGithub/>
                GitHub</a>

                <a href="https://www.linkedin.com/in/shreevi-patel-57960630a" target="_blank" rel="noreferrer">
                <AiOutlineLinkedin/>
                LinkedIN</a>

            </div>

        </footer>
    );
}

export default Footer;