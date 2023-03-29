import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact(props){
const {days}=props;
// console.log(days.response.holidays);
const result=days && days.response.holidays.map(ele=>{
return ele.name

})
console.log(result);
    return(
        <>
        
        
        <p>Don't forget to check my resume! </p><br/>
        
        <Button variant="dark"> <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1j6OBYQKlXFKX66BvLI46cRUAFXfVnCEpJRqhn1b098Q/edit?usp=sharing" >Resume</a></Button>
        <br/>
        <h4>Apologies, I am not available on these days!</h4>
        <br/>
       <div> {result && result.map(ele=><p class="calendar">1 <em>{ele}</em></p>)}
       </div>
       
       
      
            </>    
    )
    }
    export default Contact;