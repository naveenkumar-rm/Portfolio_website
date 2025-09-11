import React from 'react'
import "./Contact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
const Contact = () => {
    return (
        <div id='Contact' className='contactpage'>
            <div>
                <h2 className='title3 name'>GET IN TOUCH</h2>
            </div><br />
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Let's talk</h1>
                            <p>I'm currently avaliable to take on new projects, so feel free to send me <br /> a message about anything that you want me to work on. You can contact <br /> anytime.</p>
                            <p><MdEmail className='log1' />naveenkmayilsamy@gmail.com</p>
                            <p><IoCall className='log1' />+91 9360558370</p>
                        </div>
                        <div className='follow_box'>
                            <h4 className='name'>Follow me</h4>
                            <div className='con_Social'>
                                <a href='https://www.instagram.com/anon.wave_/'><FiInstagram className='con_sm' /></a>
                                <a href='https://www.linkedin.com/in/nk046/'><FaLinkedinIn className='con_sm' /></a>
                                <a href='https://github.com/naveenkmayilsamy'><FaGithub className='con_sm' /></a>
                                <a href='https://leetcode.com/u/UCguvCnxl7/'><SiLeetcode className='con_sm' /></a>
                                <a href='https://wa.me/9360558370'><FaWhatsapp className='con_sm' /></a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Write Your Message Here</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter your Message" />
                            </Form.Group>
                            <button type='submit' className='submit'>Summit</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact