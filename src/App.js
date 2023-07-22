/**
 * Author: Paweł Szlendak
 * Github: https://github.com/shlendakh
 * 
 * This code is released under the MIT license.
 */

import React from "react";
import DrumMachine from "./components/DrumMachine";
import './App.scss';

console.log(window.location.href);

// App Component
const App = () => {
  // Rendering DrumMachine Component
  return <DrumMachine />;
};

export default App;