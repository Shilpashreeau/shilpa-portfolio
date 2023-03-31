import React from "react";
import styled from "styled-components";
console.log(process.env.REACT_APP_APIKEY);
function Contact(props) {
  const { days } = props;
  // console.log(days.response.holidays);
  const result =
    days &&
    days.response.holidays.map((ele) => {
      return { name: ele.name, date: ele.date.iso };
    });
  console.log(result);

  console.log(result);
  return (
    <>
      <div className="resume">
        <p>Don't forget to check my resume! </p>

        <a
          id="res"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1j6OBYQKlXFKX66BvLI46cRUAFXfVnCEpJRqhn1b098Q/edit?usp=sharing"
        >
          Resume
        </a>
        <h3 id="query">For queries please fill the form below</h3>
        <div className="form">
          <StyledContactForm>
            <form>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </div>
        <br />
        <br />
        <h4>Apologies, I am not available on these days!</h4>
      </div>
      <br />
      <div className="cl">
        {" "}
        {result &&
          result.map((ele, id) => (
            <p className="calendar" key={id}>
              {ele.date} <em>{ele.name}</em>
            </p>
          ))}
      </div>
      <div id="cal-f"></div>
    </>
  );
}
export default Contact;
// Styles for contct form
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 30px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #04599a;
      color: white;
      border: none;
    }
  }
`;
