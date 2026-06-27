/*What is FundLens, who built it,
│   what's the mission. Good for
│   portfolio — write about yourself! */

import './About.css';
import { CiWarning } from "react-icons/ci";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import IdeaImage from '../../utils/img/about-idea-behind.png';
import { FaGitAlt } from "react-icons/fa6";
import {AiOutlineGithub }  from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import { useState } from 'react';



function About(){

    const metrics = [
        {index :1 , title: "Return", description: "Returns indicate how a fund has performed over a specific period. Although past performance does not guarantee future results, it provides insights into a fund's historical growth and consistency."},
        {index :2 , title: "Risk Level", description:"Risk reflects the degree of fluctuation in a fund's value. Different funds carry different levels of risk, making it important to choose investments that align with individual financial goals and comfort levels."},
        {index :3 , title:"Expense Ratio", description:"The expense ratio represents the annual cost charged for managing the fund. Lower expenses can have a meaningful impact on long-term investment growth."},
        {index :4 , title:"Assets Under Management (AUM)", description:"AUM refers to the total value of assets managed by a fund. It provides an indication of the fund's size and the amount of capital entrusted by investors."},
        {index :5 , title:"Asset Allocation", description:"Asset allocation shows how a fund distributes investments across different asset classes and sectors. A well-diversified allocation helps manage risk and improve portfolio balance."},
    ]

    const frontend = [
        {i: 1, title:'React.js' , icon:<FaReact/>},
        {i: 2 , title:'JavaScript' , icon:<IoLogoJavascript/>},
        {i: 3 , title:'HTML5' , icon:<FaHtml5/>},
        {i: 4, title:'Css3' , icon:<FaCss3Alt/>},
    ]

    const tools = [
        {idx: 1, title:'Git' , icon:<FaGitAlt/>},
        {idx: 2 , title:'GitHub' , icon:<AiOutlineGithub/>},
        {idx: 3 , title:'VS Code' , icon:<VscVscode/>},
        
    ]

    const [openIndex,setOpenIndex] = useState(null);

    return(
        <div className='about-page'>
            <div className='hero-section'>
                <h1>About Fundlens</h1>
                <p>  Making Mutual Fund Analysis
                    Simple and Accessible
                </p>
                <p className='hero-para'>FundLens was created to transform complex
                    mutual fund data into clear and meaningful
                    insights, helping investors focus on
                    understanding rather than just numbers.
                </p>
            </div>

            <section className='idea-behind'>
                <h3>The Idea Behind FundLens</h3>
                <div className='idea-behind-layout'>
                    <div className='idea-behind-description'>
                        <h4>Simplifying Mutual Fund Analysis Through Meaningful Comparisons</h4>
                        <p>Choosing a mutual fund involves more than looking at returns. Important factors such as risk, costs,
                            and portfolio allocation often determine whether a fund aligns with an investor's goals.
                            FundLens was created to bring these insights together in a clean and intuitive experience. 
                            By presenting information side by side and transforming complex data into visual insights, 
                            the platform aims to make fund analysis more accessible and easier to understand
                        </p>
                    </div>
                    <div className='image'>
                        <img src={IdeaImage} alt="description"/>
                    </div>
                </div>
                
            </section>

            <section className='key-metrics'>
                <div className='top-details'>
                    <h2>Understanding Key Metrics</h2>
                    <p>Understanding a few essential metrics can help investors evaluate mutual 
                        funds more effectively and make better-informed decisions.
                    </p>
                </div>
                <div className='metrics-description'>

                    {metrics.map((point,index) => (
                        <article key={index} className='accordion-item'>
                            <button className='accordion-header' onClick={() => setOpenIndex(openIndex === index ? null: index)}>
                                <h4>{point.title}</h4>
                                <h4>{openIndex === index ? "-" : "+"}</h4>
                            </button>
                            {
                                openIndex === index && <div className='accordion-content'>
                                    <p>{point.description}</p>
                                </div>
                            }
                                
                        </article>
                    ))}
                </div>
            </section>

            <section className='tech-stack'>
                <h3>Built With Modern Web Technologies</h3>
                <div className='tech-group'>
                    <h4>Frontend</h4>
                    <div className='badges-row'>
                        {frontend.map((stack,i) => (
                            <div key={i} className='tech-badge'>
                                <span className='badge'>{stack.icon}</span>
                                <span className='tech-title'> {stack.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='tech-group'>
                    <h4>Tools</h4>
                    <div className='badges-row'>
                        {tools.map((tool,idx) => (
                            <div key={idx} className='tech-badge'>
                                <span className='badge'>{tool.icon}</span>
                                <span className='tech-title'> {tool.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
            </section>

            <section className='disclaimer'>
                <div className='heading-dis'>
                    <div className='warning-sign'><CiWarning /></div>
                    <h3>Disclaimer</h3>
                </div>
                <p>FundLens is an educational and portfolio project created to demonstrate frontend development and financial 
                    data visualization concepts. The information presented is intended for informational purposes only and should 
                    not be considered financial or investment advice. Investors should conduct their own research and consult 
                    qualified financial professionals before making investment decisions.
                </p>
            </section>


        </div>
    );
}

export default About;