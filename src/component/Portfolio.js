import React from 'react'
import img from './images/background.png'
import './portfolio.css'
import Mytypewriter from './typewriter.js'
import ComputerIcon from '@mui/icons-material/Computer';
import TagIcon from '@mui/icons-material/Tag';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinearWithValueLabel from './progress';
import img1 from './images/project.png'
import img2 from './images/project2.png'
import img3 from './images/project3.png'
import img4 from './images/project4.png'
import img5 from './images/project5.png'
import { padding } from '@mui/system';

function Portfolio() {
    return (
        <>
            <div className="main_section">
                <div className="content">
                    <div className="content_text" >
                        <h3>Muhammd Rehan Pasha</h3>
                        <div className="red_box">
                            <h1 className='red_box_text'>Rehan</h1>
                        </div>

                        {/*  typewriter */}

                        <div className="typewriter">
                            <Mytypewriter />
                        </div>
                        <div className="text">
                            <p>Front-end developer | JavaScript developer | Computer science student💻<br /> I want to become a successful programmer <br />❤️ان شاء الل</p>
                        </div>
                        <div className="get_Started">
                            <span className='get_started_text'><a href="#get" >Get Started</a></span>
                        </div>
                    </div>
                </div>

                {/* WHAT I DO */}
                <div className="heading_what_i_DO" id="get" ><h1>WHAT I DO</h1></div>
                <div className="work">
                    <div className="work_section">
                        <div className="icons_section"><ComputerIcon /></div>
                        <div className="icons_text">
                            <b>Responsive Mobile</b>
                            <p>Rehan CSS Template is designed by <br />templatemo. Download, edit and use<br /> this layout</p>
                        </div>
                    </div>

                    <div className="work_section">
                        <div className="icons_section"><TagIcon /></div>
                        <div className="icons_text">
                            <b>Responsive Mobile</b>
                            <p>Rehan CSS Template is designed by <br />templatemo. Download, edit and use<br /> this layout</p>
                        </div>
                    </div>

                    <div className="work_section">
                        <div className="icons_section"><SendIcon /></div>
                        <div className="icons_text">
                            <b>Responsive Mobile</b>
                            <p>Rehan CSS Template is designed by <br />templatemo. Download, edit and use<br /> this layout</p>
                        </div>
                    </div>
                </div>
                <div className="black_content_about">
                    <div className="about_section">
                        <div className="About_texts">
                            <h1 className='about_text'>ABOUT REHAN</h1>
                            <h3 className='about_text_2'>DESIGNER & DEVELOPER</h3>
                            <p>Programming is my passion, fashion, and obsession.
                                As a programming's fan,I love to roam the world of programming.
                                I have won html,css,JavaScript(es6),React,<br />Bootstrap,
                                Also, I am ready to deal with the new technology and the challenges that come with it.</p>
                        </div>
                    </div>
                    <div className="progress_bar">
                        <div className="progress_inner">
                            <b><LinearWithValueLabel /></b>
                        </div>
                    </div>
                </div>
                <div className="projects_heading"><h1>Projects</h1></div>
                <div className="projects">
                    <div className="project_box">
                        <img className='img' src={img1} />
                        <p className='p'>Salt'n Pepper<br /><b className='click'> <a href='https://salt-n-pepper-website.netlify.app/'>Click ME😉 </a></b><br /></p>
                    </div>

                    <div className="project_box">
                        <img className='img' src={img1} />
                        <p className='p'>Calculator<br /><b className='click'> <a href='https://needy-death.surge.sh/'>Click ME😉 </a>
                        </b></p>

                    </div>
                    <div className="project_box">
                        <img className='img' src={img3} />
                        <p className='p'><b style={{ paddingLeft: '50px' }}>FIGO</b><br /><b className='click'> <a href='https://figo-assignment.netlify.app/'>Click ME😉 </a></b><br />
                        </p>


                    </div>
                    <div className="project_box_more">
                        <p className='more_projects'>More Projects on My GitHub Account<br /><a href='https://github.com/Rehanpasha732'><b className='more'>click me</b></a></p>
                    </div>
                    <br />
                    {/* <div className="project_box">
                        <img src={img5} />
                        <p className='p'>Salt And Pepper</p>

                    </div> */}

                </div>

                {/* contact */}

                <div className="contact_me">
                    <h1 className='heading'>Contact Me</h1>
                    <div className="footer">
                        <div className="social"><a className="social" href="https://instagram.com/its.me.joker786" target="blank"><InstagramIcon /></a></div>
                        <div className="social"><a className="social" href="https://fb.com/rehan pasha" target="blank"><FacebookIcon /></a></div>
                        <div className="social"> <a className="social" href="https://twitter.com/itsmejoker786" target="blank"><TwitterIcon /></a></div>

                    </div>

                    <div className="contact_text">

                        <div className="contact_icons_section">
                            <div className="contact_icon"><PhoneIcon /> </div>
                            <div className="contact_data"><b className='contact_data_text_hover'>Mobile Phone 03218986239</b></div>

                        </div>

                        <div className="contact_icons_section">
                            <div className="contact_icon"><EmailIcon /> </div>
                            <div className="contact_data"><b className='contact_data_text_hover'>pasharehan732@gmail.com</b></div>

                        </div>

                        <div className="contact_icons_section">
                            <div className="contact_icon"><LocationOnIcon /> </div>
                            <div className="contact_data"><b className='contact_data_text_hover'>7/47 Model Colony karachi</b></div>

                        </div>
                    </div>


                    {/* <div className="form">
                        <div className="form_section">
                            <input placeholder='Your Name' /><br />
                            <input placeholder='Your Email' /><br />
                            <textarea name="" id="" cols="15" rows="5" placeholder='Your Message'></textarea>


                        </div>
                        <div className='send'>SEND ME</div>
                    </div> */}
                </div>
              


            </div>
        </>
    )
}
export default Portfolio
