import React from 'react';
import { motion } from 'framer-motion'
// import ReactTooltip from 'react-tooltip'

import { useStateContext } from '../../context/StateContext';
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor } from '../../client'

import './Skills.scss';




const Skills = () => {

  const { experience, skills } = useStateContext();


  // const [experience, setExperience] = useState([]);
  // const [skills, setSkills] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]'
  //   const skillsQuery = '*[_type == "skills"]'

  //   client.fetch(query)
  //     .then((data) => {
  //       setExperience(data);
  //     })

  //   client.fetch(skillsQuery)
  //     .then((data) => {
  //       setSkills(data);
  //     })
  // }, [])

  return (
    <>
      <h2 className='head-text'>Skills & <span>Experience</span> </h2>

      <div className='app__skills-container'>
        <motion.div className="app__skills-list">
          {skills?.map((skill, i) => (
            <motion.div 
              whileInView = {{ opacity: [0, 1] }}
              initial={{opacity: 0}}
              transition= {{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={i}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {/* {console.log(`HERE ${experience.year}`)} */}
          {experience?.map((experience, i) => (

            <motion.div
              className="app__skills-exp-item"
              key = {i}
              
            >
              <div className="app__skills-exp-year">
               {/* {console.log(experience.year)} */}

                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, i) => (
                  <div key={i}>
                    <motion.div
                      whileInView = {{ opacity: [0, 1] }}
                      transition= {{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      // data-tip={work.desc}
                      // data-for={work.name}
                      
                      
                    >
                        <h4 className = "bold-text">
                          {work.name}
                        </h4>
                        <p className='p-text'>{work.company}</p>
                    </motion.div>
                    {/* <ReactTooltip
                        id = {work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className='skills-tooltip'
                      >
                        {work.desc}
                      </ReactTooltip>  */}
                </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

// export default AppWrap(Skills, 'skills')

export default AppWrap(
  MotionWrap(Skills,'app__skills'),
  'skills',
  'app__whitebg'
)
