import React, {useEffect} from 'react';
import ProjectPages from './ProjectPages';
import Main from './Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components';

import { useLocation } from "react-router";

const WrapScroll = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

const App = () => {

  return (
      <Router>
        <WrapScroll>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element = {<Main/>} />
              <Route path="/project/:projectName" element = {<ProjectPages/>} />
            </Routes>
          </div>
        </WrapScroll>
      </Router>
    
  )
}

export default App
