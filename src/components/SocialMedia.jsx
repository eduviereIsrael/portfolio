import React from 'react'
import {  BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
// import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsInstagram />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
    </div>
  )
}

export default SocialMedia