/* Contact form that uses EmailJS
    to send messages to your inbox. */

import emailjs from '@emailjs/browser'
import {AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin }  from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
import './Contact.css';
import { useState } from 'react';

function Contact(){

    const contact_info = [
        {idx: 1,name:"Email", handle:"shreevindia02@gmail.com", icon:<AiOutlineMail/>},
        {idx: 2,name:"Github", handle:"github.com/shreevi480", icon:<AiOutlineGithub/>},
        {idx: 3,name:"LinkedIN", handle:"www.linkedin.com/in/shreevi-patel-57960630a", icon:<AiOutlineLinkedin/>},
        {idx: 4,name:"Location", handle:"Raipur,India", icon:<TfiLocationPin />},
    ]

    
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[subject, setSubject] = useState("");
    const[message, setMessage] = useState("");
    const[status,setStatus] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();
        
        setStatus("sending")

        const templateParams= {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        }

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus("success");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

        })
        .catch(() => {
            setStatus("error");
        })
        
    }

    return(
        <div className="contact-us-page">
            <section className='heading-section'>
                <h4>Contact Us</h4>
                <h2>Lets Connect</h2>
                <p>Whether you have a question, feedback, collaboration idea, or an opportunity to discuss, 
                    feel free to reach out. I'd be happy to hear from you and will do my best to respond as soon as possible.
                </p>
            </section>

            <div className='main-section'>
                <div className='contact-form'>
                    <h3>Get In Touch</h3>
                    <p>Have something on your mind? Send a message and I'll get back to you as soon as possible.</p>

                    <div className='form'>
                        <form onSubmit={handleSubmit}>

                            <div className='form-group'>
                                <label htmlFor='name'>Your Name</label>
                                <input 
                                type='text' 
                                placeholder='Enter Your full Name' required 
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input 
                                type='email' 
                                placeholder='xyz@gmail.com' required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className='form-group'> 
                                <label htmlFor='subject'>Subject</label>
                                <input 
                                type='text' 
                                placeholder='' required 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}/>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='message'>Message</label>
                                <textarea  
                                placeholder='Tell me more about your message' required 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}/>
                            </div>

                            <button type='submit' disabled={status === "sending"}>
                                {status === "sending" ? "Sending..." : "Send Message →"}
                            </button>

                            {status === "success" && 
                                <p className="success-msg">✅ Message sent successfully!</p>}
                            {status === "error" && 
                                <p className="error-msg">❌ Something went wrong. Try again.</p>}
                        </form>
                    </div>
                </div>

                <div className='contact-info'>
                    <h3>Contact Information</h3>
                    <div>
                        {contact_info.map((info,idx) => (
                            <div key={idx} className='each-info'>
                                <div className='head-info'>
                                    <span>{info.icon}</span>
                                    <h4>{info.name}</h4>
                                </div>

                                <div className='desc-info'>
                                    <p>{info.handle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='thanking-note'>
                <h3>Thank You for Visiting FundLens</h3>
                <p>Thank you for exploring FundLens. 
                    Your feedback and suggestions are always appreciated and help make the experience better for everyone.
                </p>
            </div>
        </div>
    );
}

export default Contact;