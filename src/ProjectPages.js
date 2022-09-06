import React, { useState, useEffect } from 'react';
import { useStateContext } from './context/StateContext';
import {urlFor} from './client';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';


import "./ProjectPages.scss";


const AnimatePage = ({children}) => {

    const animations = {
        initial: {opacity: 0, x: 100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: 100}
    }

  return (
    <motion.div 
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 1}}
        className='animate-page'>
        {children}
    </motion.div>
  )
}



const ProjectPages = () => {

  const { proj, clickedWork} = useStateContext();

  const params = useParams()

  const getItem = (x) => {
    let foundItem = proj.find(item => item.title === x)
    return foundItem
  }

  const vWork = getItem(params.name)
  console.log(vWork)


  return (
    <AnimatePage>
      {/* {vWork?  */}
        <div className='clicked__work'>
            <div className='work__details'>
              <div className='work__details-img'>
                <img src={urlFor(vWork?.imgUrl)} alt={vWork.name} />
                {/* <h1>Hello world</h1> */}
              </div>
                  <h4 className='bold-text'>
                    {clickedWork?.title}
                  </h4>
                  <p className='p-text' style={{marginTop: 10}}>{vWork?.description}</p>
                  <div>
                    <p className='p-text'>My Role: {vWork?.Role}</p>
                  </div>
                  {/* <div className='tools-div'>{clickedWork.Tools.map((item, i) => (
                    <span className='p-text tools' key={i}>{item}</span>
                  ))}</div> */}
                <div className='work__details-links'>
                  <a className='work__details-link view' href={vWork?.projectLink} target="_blank" rel="noreferrer">view project</a>
                  {vWork?.codeLink? <a className='work__details-link code' href={vWork?.codeLink} target="_blank" rel="noreferrer">github repo</a> : ''}
                </div>
            </div>  
        </div>
        {/* : <></>
      } */}
    </AnimatePage>

  )
}

export default ProjectPages