import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';

import {Navbar} from './components';
import './App.scss';
import WorkDetails from './components/WorkDetails/WorkDetails';
import BasicModal from './container/BasicModal';
// import { useStateContext } from './context/StateContext';

const App = () => {

  // const { works, abouts } = useStateContext();

  // console.log(works, abouts)

  return (
      <div className="app">
        {/* <Navbar /> */}
        <Header />
        <About  />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
        <WorkDetails />
        {/* <BasicModal /> */}
      </div>
  )
}

export default App
