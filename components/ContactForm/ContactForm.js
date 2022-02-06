import React, { useState } from 'react';
import firebase from '../../FirebaseConfig';
import { StyledForm } from './ContactForm.styled';
import Router from 'next/router';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactForm = firebase.database().ref('contact-form');

  const saveContactInfo = (name, email, message) => {
      const newContactFormRef = contactForm.push();
      newContactFormRef.set({
        name:  name,
        email: email,
        message: message
      }).then(() => {
        alert('Message Sent!')
      }).catch(err => console.log(err.message));
  
      setName('')
      setEmail("");
      setMessage("");


  }
  
  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      <h1>Contact Me</h1>
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        name="email"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        name="message"
        rows="10"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type='submit' onClick={(e) => {
        e.preventDefault();
        saveContactInfo(name, email, message);
        Router.push('/')
      }
      }>
        Submit
      </button>
    </StyledForm>
  );
};

export default ContactForm;
