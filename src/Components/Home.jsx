import React from 'react'
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";

const Home = () => {
    return (
        <div className='Home' id='Home'>
            <div>
                <div className='nav_barContainer'>
                    <Navbar expand="lg" className="Nav_bar" fixed="top">
                        <Container>
                            <Navbar.Brand href="#home"></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse>
                                <Nav>
                                    <Nav.Link href="#Home" className='text-white nav_link'>Home</Nav.Link>
                                    <Nav.Link href="#About" className='text-white nav_link'>About</Nav.Link>
                                    <Nav.Link href="#Skills" className='text-white nav_link'>Skills</Nav.Link>
                                    <Nav.Link href="#project" className='text-white nav_link'>Projects</Nav.Link>
                                    <Nav.Link href="#Contact" className='text-white nav_link'>Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className='Home_SM'>
                    <a target="_blank" href='https://www.linkedin.com/in/naveenkumar-rm/'><FaLinkedinIn className='SM_logo' /></a>
                    <a target="_blank" href='https://github.com/naveenkumar-rm'><FaGithub className='SM_logo' /></a>
                </div>
                <p className='Home_subheading'>Hi, I’m </p>
                <p className='Home_heading'>NAVEENKUMAR M</p>
                <p className='Home_subheading'>A Full Stack Developer</p>
                <p className='Home_description'>From concept to code — making ideas real.</p>
                <div className='Home_button'>
                    <a href='https://github.com/naveenkumar-rm' className='resume'>Resume <MdOutlineDownloading className='SM_logo2' /></a>
                </div>
            </div>
        </div>
    )
}

export default Home
