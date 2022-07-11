import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import {Modal, Grid} from '@mui/material';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../client';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
//   bottom: '100%',
//   right: '0%',
  transform: 'translate(-50%, -50%)',

};

export default function BasicModal() {
  const { open, clickedWork, handleClose } = useStateContext();
  
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='app__work-details-div'>
                
                <div className='app__work-details'>
                    <div className='x-cont'>
                        <div className='x-icon' onClick={handleClose}>
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
        </Box>
      </Modal>
    </div>
  );
}
