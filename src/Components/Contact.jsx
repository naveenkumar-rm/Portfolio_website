import React from 'react'
import "./Contact.css"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import Form from 'react-bootstrap/Form';
const Contact = () => {
    return (
        <div id='Contact' className='contactpage'>
            <div>
                <h2 className='title'>GET IN TOUCH</h2>
            </div><br />
          
            <div className='follow_box'>
                <a href='https://www.linkedin.com/in/naveenkumar-rm/'><FaLinkedinIn className='SM_logos' /></a>
                <a href='https://github.com/naveenkumar-rm'><FaGithub className='SM_logos' /></a>
            </div>
        </div>
    )
}

export default Contact