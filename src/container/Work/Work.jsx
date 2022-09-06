import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


import { useStateContext } from '../../context/StateContext';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {

  const {showDetails, setShowDetails, setClickedWork, handleWorkClick } = useStateContext();
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  const [works, setWorks] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  // const settingFilterWork = async () => {
  //   await works.length
  //   setFilterWork(works)
  // }
  // settingFilterWork();


  const handleWorkFilter = item => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }
  
  // if (works.length > 1) handleWorkFilter();

  return (
    <>
      <h2 className='head-text'>
        Selected <span>Projects <br /> I've worked on</span> in the past <span></span> 
      </h2>
      <div className='app__work-filter'>
        {['All','ReactJs Apps','VanillaJs Apps' ,'CMS'].map((item, index) => (
          <div key={index}
          onClick={() => handleWorkFilter(item)}
          className = {`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
      animate = {animateCard}
      transition ={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio">
        {filterWork.length? filterWork.map((work, index) => (
          <Link to={`/project/${work.title}`}>
            <div className='app__work-item app__flex' key={index} onClick={() => {
                // setShowDetails(!showDetails)
                setClickedWork(work)
              }}>
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name}/>
                
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>
                  {work.title}
                </h4>
                
                <div className='app__work-tag app__flex'  >
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>

            </div>
          </Link>
          
        )): ''}
      </motion.div>
      
    </>
  )
}

// export default AppWrap(Work, 'work')

export default AppWrap(
  MotionWrap(Work,'app__works'),
  'work',
)