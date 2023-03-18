import React, { useState, useEffect } from 'react';
import { useStateContext } from './context/StateContext';
import {urlFor} from './client';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { client } from './client';


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
  const [vWork, setVwork] = useState({});
  const [proj, setProj] = useState([]);


  const { slugUrl } = useStateContext();

  const params = useParams()

  const getItem = (x) => {
    let foundItem = proj.find(item => slugUrl(item.title) === x)
    return foundItem
  }

  const worksQuery = '*[_type == "works"]'

  useEffect(() => {
    client.fetch(worksQuery)
    .then((data) => {
      setProj(data)
    }).then(() => {
      setVwork(getItem(params.name))
      // console.log(vWork)

    }).then(() => {
    })

  }, [vWork, getItem, params.name]);

    return (
      <AnimatePage>
          { vWork? <div className='clicked__work'>
              <div className='work__details'>
                <motion.div className='work__details-img' initial={{opacity: 0}} whileInView={{opacity: 1}}>
                  {vWork.imgUrl && <img src={urlFor(vWork?.imgUrl)} alt={vWork.name} />}
                </motion.div>
                    <motion.h4 
                      className='bold-text' 
                      initial={{opacity: 0}} 
                      whileInView={{opacity: 1}}
                      transition={{delay: 0.5}}
                    >
                      {vWork?.title}
                    </motion.h4>
                    <motion.p 
                      className='p-text' 
                      style={{marginTop: 10}}
                      initial={{opacity: 0}} 
                      whileInView={{opacity: 1}}
                      transition={{delay: 0.6}}
                    >{vWork?.description}</motion.p>
                    <div>
                      <motion.p 
                        className='p-text'
                        initial={{opacity: 0}} 
                      whileInView={{opacity: 1}}
                      transition={{delay: 0.7}}
                      >My Role: {vWork?.Role}</motion.p>
                    </div>
                    <motion.div 
                      className='tools-div'
                      initial={{opacity: 0}} 
                      whileInView={{opacity: 1}}
                      transition={{delay: 0.8}}
                    >{vWork?.Tools?.map((item, i) => (
                      <span className='p-text tools' key={i}>{item}</span>
                    ))}</motion.div>
                  <div className='work__details-links'>
                    <a className='work__details-link view' href={vWork?.projectLink} target="_blank" rel="noreferrer">View Project</a>
                    {vWork?.codeLink? <a className='work__details-link code' href={vWork?.codeLink} target="_blank" rel="noreferrer">github repo</a> : ''}
                  </div>
              </div>  
          </div> : ""}
         
      </AnimatePage>
      
    )
  }

  

export default ProjectPages