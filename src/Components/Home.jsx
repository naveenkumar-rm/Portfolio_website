import React from 'react'
import "./Home.css"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";


const Home = () => {
    return (
        <div className='home_page'>
            {/* Navbar */}
                <div className='Nav_bar'>
                    <div className='Nav_first'>
                        <a href='/'>NK</a>
                        <Button><FaArrowLeft /></Button>
                        <a target="_blank" href="mailto:hareeshprogrammer@gmail.com"><h3>Say hi..</h3></a>
                    </div>

                    <div className='nav_second'>

                        <div className='side_bar'>
                            <a href='#home'>
                                <p>Resume</p>
                            </a>
                            <a href='#home'>
                                <p>Project</p>
                            </a>
                        </div>

                        <div className='social'>
                            <a href='https://www.linkedin.com/in/nk046/'>
                                <FaLinkedinIn />
                            </a>

                            <a href='https://github.com/naveenkumar-nest'>
                                <FaGithub />
                            </a>

                            <a href='https://leetcode.com/u/UCguvCnxl7/'>
                                <SiLeetcode />
                            </a>
                        </div>

                    </div>
                </div>
                </div>
    )
}

export default Home
