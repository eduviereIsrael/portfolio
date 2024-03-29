// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { StateContext } from './context/StateContext';



import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateContext>
      <App />
    </StateContext>
  </StrictMode>
);