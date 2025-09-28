import React from 'react'
import "./Home.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


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
                                    <Nav.Link href="#Contact" className='text-white nav_link'>Experience</Nav.Link>
                                    <Nav.Link href="#action2" className='text-white nav_link'>Projects</Nav.Link>
                                    <Nav.Link href="#Contact" className='text-white nav_link'>Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className='Home_SM'>
                    <a href='https://www.linkedin.com/in/naveenkumar-rm/'><FaLinkedinIn color='white'/></a>
                    <a href='https://github.com/naveenkumar-rm'><FaGithub color='white'/></a>
                </div>
                <p className='Home_heading'>Hi, i am Naveenkumar</p>
                <a className='Home_button' href=''>Download Resume</a>
                <a className='Home_button' href='#Contact'>Connect with me</a>
            </div>
        </div>
    )
}

export default Home
