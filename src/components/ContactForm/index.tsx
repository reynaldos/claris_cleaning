"use client"

import React, { useState } from 'react';
import { FormWrap } from './ContactForm.styles';

import Button from '../Buttons';
import TextInput from '../TextInput';
import TextArea from '../TextArea';

const ContactForm = () => {

    const [formProps, setFormProps] = useState({
      name: '',
      phone: '',
      email: '',
      message: ''
    })

    const handleFormSubmit = (e : any) =>{
        e.preventDefault();
    }

  return (
    <FormWrap>
      <span>
        <h2 className='title'>Chat with Us</h2>
      </span>
      <span>
        <TextInput
          label="Name"
          value={formProps.name}
          onChange={(e) => {
            setFormProps((old) => ({ ...old, name: e.target.value }));
          }}
          required
        />
        <TextInput
          label="Phone Number (optional)"
          type='phone'
          value={formProps.phone}
          onChange={(e) => {
            setFormProps((old) => ({ ...old, phone: e.target.value }));
          }}
        />
      </span>
      <span>
        <TextInput
          label="Email"
          type='email'
          value={formProps.email}
          onChange={(e) => {
            setFormProps((old) => ({ ...old, email: e.target.value }));
          }}
          required
        />
      </span>
      <span>
        <TextArea
          label="Message"
          type="textarea"
          value={formProps.message}
          onChange={(e) => {
            setFormProps((old) => ({ ...old, message: e.target.value }));
          }}
          required
          height="162px"
        />
      </span>
      <Button style={{ width: "fit-content" }} type='submit' onClick={handleFormSubmit}>Send Message</Button>
    </FormWrap>
  );
}

export default ContactForm