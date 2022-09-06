import React, { useState, useEffect } from 'react';
import { useStateContext } from './context/StateContext';
import {urlFor} from './client';
import { motion } from 'framer-motion';


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

  const {setClickedWork, clickedWork, project, setProject} = useStateContext()

  useEffect(() => {
    const project = JSON.parse(localStorage.getItem('project'));
    if (project) {
     setClickedWork(project);
    } else {
      setClickedWork(clickedWork)
    }
  }, []);

  // const {clickedWork} = useStateContext()
  // let params = useParams()
  // const viewedWork = proj.find(work => work.title === params.projectName)




  return (
    <AnimatePage>
        <div className='clicked__work'>
            {clickedWork? 
              <div className='work__details'>
                <div className='work__details-img'>
                  <img src={urlFor(clickedWork?.imgUrl)} alt="" />
                </div>
                
                    <h4 className='bold-text'>
                      {clickedWork?.title}
                    </h4>
                    <p className='p-text' style={{marginTop: 10}}>{clickedWork?.description}</p>
                    <div>
                      <p className='p-text'>My Role: {clickedWork?.Role}</p>
                    </div>
                    <div className='tools-div'>{clickedWork?.Tools.map((item, i) => (
                      <span className='p-text tools' key={i}>{item}</span>
                    ))}</div>
                  <div className='work__details-links'>
                    <a className='work__details-link view' href={clickedWork.projectLink} target="_blank" rel="noreferrer">view project</a>
                    {clickedWork?.codeLink? <a className='work__details-link code' href={clickedWork?.codeLink} target="_blank" rel="noreferrer">github repo</a> : ''}
                  </div>
                </div>  

              :
              <></>
            }
          
        </div>
    </AnimatePage>

  )
}

export default ProjectPages