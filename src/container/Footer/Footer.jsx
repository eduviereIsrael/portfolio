import React, { useState } from 'react';


import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:''
  })

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({...formData, [name]: value})
  }

 

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(()=> {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }


  return (
    
    <>
      <h2 className='head-text'>Let's get in touch</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:eduviereisrael@gmail.com" target="_blank" className='p-text'>eduviereisrael@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: 08081095271" target="_blank" className='p-text'>08081095271</a>
        </div>
      </div>
    {!isFormSubmitted? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type="text" 
          className='p-text' 
          placeholder='your name' 
          value={name} 
          name="name"
          onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input type="email" 
          className='p-text' 
          placeholder='your email' 
          value={email} 
          name="email"
          onChange={handleChangeInput} />
        </div>

        <div>
          <textarea className='p-text' 
          placeholder='your message'
          value={message}
          name="message"
          onChange={handleChangeInput}/>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>
          { loading ? 'Sending' : 'Send Message' }
        </button>
      </div> :
      <div>
        <h3 className='head-text'>Thanks for reaching out</h3>
        <p>you will get a response shortly</p>
      </div>
    }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
  )