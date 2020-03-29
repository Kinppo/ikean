import React, { useState } from "react";
import Popup from "../components/Popup";
import styled from "styled-components";

const Container = styled.div`
  padding: 10em 10px;
  margin: auto;
  padding-left: 90px;
  width: 100%;
  background: #fff;
  color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${require("../images/index-5.jpg")});
  h2 {
    max-width: 1300px;
    display: block;
    margin: auto;
    font-size: 40px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    margin-bottom: 1.5em;
    color: #118eda;
  }
  form {
    text-align: center;
    max-width: 600px;
    padding: 5px;
    margin: auto;
    .inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1em;
    }

    label {
      position: absolute;
      font-size: 1px;
      padding: 0;
      color: #1b1b1b;
    }

    .form-input {
      width: 100%;
      color: #6b6b6b;
      background-color: #f6f8fc;
      resize: none;
      border-radius: 3px;
      font-size: 18px;
      box-sizing: border-box;
      padding: 0.5em;
      border: none;
    }
    .form-input::-webkit-input-placeholder {
      color: #6b6b6b;
    }
    #name,
    #email {
      height: 46px;
    }
    #message {
      grid-column-start: 1;
      grid-column-end: 3;
      height: 150px;
    }
    #submit {
      font-size: 16px;
      font-weight: 600;
      background: #118eda;
      color: #fff;
      border-radius: 100px;
      padding: 12px 30px;
      border: 2px solid #118eda;
      margin-top: 40px;
      transition: all 0.4s;
      &:hover {
        background: transparent;
      }
    }
  }
  @media only screen and (max-width: 1035px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px !important;
    }
  }
  @media only screen and (max-width: 500px) {
    #email {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    #name {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [contact, setState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [popupState, setPopup] = useState("walo");

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact })
    })
      .then(() => {
        setPopup("sucess");
      })
      .catch(() => {
        setPopup("error");
      });

    e.preventDefault();
  };
  return (
    <Container>
      <h2>GET IN TOUCH WITH US</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="email-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="inputs">
          <label htmlFor="name">i</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="form-input"
            required
            value={contact.name}
            onChange={e => {
              const val = e.target.value;
              setState(prevState => {
                return { ...prevState, name: val };
              });
            }}
          />
          <label htmlFor="email">i</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="form-input"
            required
            value={contact.email}
            onChange={e => {
              const val = e.target.value;
              setState(prevState => {
                return { ...prevState, email: val };
              });
            }}
          />
          <label htmlFor="message">i</label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="form-input"
            placeholder="Message"
            value={contact.message}
            required
            onChange={e => {
              const val = e.target.value;
              setState(prevState => {
                return { ...prevState, message: val };
              });
            }}
          />
        </div>
        <button type="submit" id="submit">
          Get In Touch
        </button>
        <Popup type={popupState} setPopup={setPopup} />
      </form>
    </Container>
  );
}

export default Contact;
