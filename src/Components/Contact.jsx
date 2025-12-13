import React from 'react'
import "./Contact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
const contact = {
    email: 'naveenkmayilsamy@gmail.com',
    phone: '9360558370',
    linkedinUrl: 'https://linkedin.com/in/naveenkumar-rm',
    githubUrl: 'https://github.com/naveenkumar-rm',
};
const Contact = () => {
    return (
        <div id='contact' className='contactpage'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div>
                            <h1>GET IN TOUCH</h1>
                            <p>I'm currently available for new projects — feel free to send a message about any opportunity. You can contact me at any time.</p>
                            <p><MdEmail className='log1' /> {contact.email}</p>
                            <p><IoCall className='log1' /> +91 {contact.phone}</p>
                        </div>
                        <div className='follow_box'>
                            <h4 className='name'>Follow me</h4>
                            <div className='con_Social'>
                                <a href={contact.linkedinUrl || '#'} target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='con_sm' /></a>
                                <a href={contact.githubUrl || '#'} target="_blank" rel="noopener noreferrer"><FaGithub className='con_sm' /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
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
                            <button type='submit' className='submit'>Submit</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact