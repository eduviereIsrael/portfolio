import React from 'react';
import {motion} from 'framer-motion'; 
import {images} from '../../constants'

import { AppWrap } from '../../wrapper'

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity:[0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div  className='app__header app__flex'>
      <motion.div
      initial={{x: -100, opacity: 0}}
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.5}}
      className="app__header-info"
      >

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello I am</p>
              <h1 className='head-text'>Israel</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full Stack web developer</p>
            <p className='p-text'>UI/UX design</p>
          </div>
        </div>

      </motion.div>


      <motion.div
      whileInView={{opacity: [0, 1]}}
      initial={{opacity: 0}}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
        whileInView={{scale: [0, 1]}}
        initial={{scale: 0}}
        transition={{duration: 1, ease: 'easeInOut'}}
        className="overlay_circle"
        src={images.circle}
        alt="profile_circle"
        />


      </motion.div>

      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.sass, images.react, images.api].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')