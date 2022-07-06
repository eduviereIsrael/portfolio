import React from 'react'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../client';

const WorkDetails = () => {

  const { showDetails, setShowDetails, clickedWork } = useStateContext();
  console.log(clickedWork)
  
  return (
    <div>
        {showDetails? 
          <div className='app__work-details-div'>
            
              <div className='app__work-details'>
                <div className='x-cont'>
                  <div className='x-icon' onClick={() => setShowDetails(!showDetails)}>
                    <div className='x-1'></div>
                    <div className='x-2'></div>
                  </div>
                </div>
                <div className='work__details'>
                  <div className='work__details-img'>
                    <img src={urlFor(clickedWork.imgUrl)} alt="" />
                  </div>
                  <div className='work__details-desc'>
                    <h4 className='bold-text'>
                      {clickedWork.title}
                    </h4>
                    <p className='p-text' style={{marginTop: 10}}>{clickedWork.description}</p>
                    <div className='work__details-links'>
                      <a className='work__details-link view' href={clickedWork.projectLink} target="_blank" rel="noreferrer">view project</a>
                      {clickedWork.codeLink? <a className='work__details-link code' href={clickedWork.codeLink} target="_blank" rel="noreferrer">github repo</a> : ''}
                    </div>
                  </div>
                  
                </div>

              </div>
          </div> 
          :
          <></>
        }
      
    </div>
  )
}

export default WorkDetails