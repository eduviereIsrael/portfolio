import React from 'react';
import {  BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
// import './SocialMedia.scss'
// import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.instagram.com/seda_ux/' target='_blank' rel='noreferrer'>
            <BsInstagram />
        </a>
        <a href='https://www.linkedin.com/in/eduviere-israel/' target='_blank' rel='noreferrer'>
            <BsLinkedin />
        </a>
        <a href='https://github.com/eduviereIsrael' target='_blank' rel='noreferrer'>
            <BsGithub />
        </a>
    </div>
  )
}

export default SocialMedia