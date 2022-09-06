import React,{ createContext, useContext, useState, useEffect} from 'react';
// import axios from "axios";
import { client } from '../client';
import { useParams } from 'react-router-dom';




const Context = createContext();


export const StateContext = ({children}) => {
    const [proj, setProj] = useState([]);
    const [abouts, setAbouts] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([])
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([])
    const [showDetails, setShowDetails] = useState(false);
    const [clickedWork, setClickedWork] = useState({})
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState({});
    

  
    
// abouts, works, experiences, skills, testimonials, brands



    useEffect(() => {

        const aboutsQuery = '*[_type == "abouts"]'
        const worksQuery = '*[_type == "works"]'
        const experiencesQuery = '*[_type == "experiences"]'
        const skillsQuery = '*[_type == "skills"]'
        const testimonialsQuery = '*[_type == "testimonials"]'
        const brandsQuery = '*[_type == "brands"]'
    
        client.fetch(aboutsQuery)
          .then((data) => {
            // console.log(data)
            setAbouts(data)
          })

        client.fetch(worksQuery)
          .then((data) => {
            // console.log(data)
            setProj(data)
          })

        client.fetch(experiencesQuery)
          .then((data) => {
            // console.log(data)
            setExperience(data)
          })

        client.fetch(skillsQuery)
          .then((data) => {
            // console.log(data)
            setSkills(data)
          })

        client.fetch(testimonialsQuery)
          .then((data) => {
            // console.log(data)
            setTestimonials(data)
          })

        client.fetch(brandsQuery)
          .then((data) => {
            // console.log(data)
            setBrands(data)
          })

      }, [])

    useEffect(() => {
      localStorage.setItem('project', JSON.stringify(clickedWork));
      // console.log(clickedWork)
    }, [clickedWork]);

    const handleWorkClick = () => {
        setOpen(true)
        // for (let work of works){
        //   if (work._id === id){
        //     console.log(work)
        //   }
        // }
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    return (
        <Context.Provider
            value={{
                // works,
                abouts,
                experience,
                skills,
                brands,
                testimonials,
                clickedWork,
                setClickedWork,
                handleWorkClick,
                showDetails,
                setShowDetails,
                open,
                setOpen,
                handleOpen,
                handleClose,
                project,
                setProject
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);