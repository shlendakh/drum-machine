/**
 * Author: Paweł Szlendak
 * Github: https://github.com/shlendakh
 * 
 * This code is released under the MIT license.
 */

import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const url = window.location.href;

if (url.includes('?test=true')) {
  const body = document.getElementsByTagName("body")[0];
  const script = document.createElement("script");
  script.setAttribute("src", "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js");
  body.insertBefore(script, body.firstChild);
  //document.body.appendChild(script);
  console.log("tests");
}

// Quick fix viewport height variable for better performance on mobile 
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);