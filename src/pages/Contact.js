import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact(){

    return(
        <>
        <div>

      <p>Let me help you with my resume </p>
        
        <Button variant="dark"> <a href="https://docs.google.com/document/d/1j6OBYQKlXFKX66BvLI46cRUAFXfVnCEpJRqhn1b098Q/edit?usp=sharing" >Resume</a></Button>

        <p> If you have any questions, please fill the form below. I will get back to you asap !</p>
      
        </div>
        <h1>I am not available on these days!</h1>


        <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Please provide your email.</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Kindly brief about how I can help you !</Form.Label>
        <Form.Control type="password" placeholder="Message" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
         
            </div>
            </>    
    )
    }
    export default Contact;