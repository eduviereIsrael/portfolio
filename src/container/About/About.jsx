import React from 'react';
import { motion } from 'framer-motion';
// import { images } from '../../constants'
import {urlFor} from '../../client'
import { useStateContext } from '../../context/StateContext';

import { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss';


const About = () => {

  const { abouts } = useStateContext();


  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query)
  //     .then((data) => {
  //       setAbouts(data)
  //     })
     
  // }, []);

  // console.log(abouts)
  

  return (
    <>
      <h2 className='head-text'>
        My <span>Roles</span> <br /> and <span>Specialty</span> 
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div whileInView={{opacity: 1}} whileHover={{scale: 1.1}}transition = {{ duration: 0.5, type: 'tween'}} className="app__profile-item" key={about.title + index}
          >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
  'app__whitebg'
)