import React from 'react'
import "./Contact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
const Contact = () => {
    return (
        <div id='Contact' className='contactpage'>
            <div>
                <h2 className='title'>GET IN TOUCH</h2>
            </div><br />
            <Container>
                <Row>
                    <Col>
                            <h1>Let's talk</h1>
                            <p>I'm currently avaliable to Work, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                            <p><MdEmail className='log1' />naveenkmayilsamy@gmail.com</p>
                            <p><IoCall className='log1' />+91 9360558370</p>
                        <div className='follow_box'>
                            <span className='name'>Follow me</span>
                               <a href='https://www.linkedin.com/in/naveenkumar-rm/'><FaLinkedinIn className='SM_logos' /></a>
                                <a href='https://github.com/naveenkumar-rm'><FaGithub className='SM_logos' /></a>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group>
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