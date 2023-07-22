/**
 * Author: Paweł Szlendak
 * Github: https://github.com/shlendakh
 * 
 * This code is released under the MIT license.
 */

import React, { useState } from "react";
import DrumPad from "./DrumPad";
import './DrumMachine.scss';

// Array containing data for the drum pads
// Each drum pad data contains an id, a keyboard letter, and the path to the audio file
const pads = [
    { id: 'heater-1', letter: 'Q', src: 'sounds/heater-1.mp3' },
    { id: 'heater-2', letter: 'W', src: 'sounds/heater-2.mp3' },
    { id: 'heater-3', letter: 'E', src: 'sounds/heater-3.mp3' },
    { id: 'heater-4', letter: 'A', src: 'sounds/heater-4.mp3' },
    { id: 'clap', letter: 'S', src: 'sounds/clap.mp3' },
    { id: 'open-hh', letter: 'D', src: 'sounds/open-hh.mp3' },
    { id: 'kick-n-hat', letter: 'Z', src: 'sounds/kick-n-hat.mp3' },
    { id: 'kick', letter: 'X', src: 'sounds/kick.mp3' },
    { id: 'closed-hh', letter: 'C', src: 'sounds/closed-hh.mp3' }
  ];

// DrumMachine Component
const DrumMachine = () => {
  // State for the current display
  const [display, setDisplay] = useState("");

  // Rendering the drum machine with the display and drum pads
  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      {pads.map((pad) => (
        // Rendering a DrumPad component for each drum pad in the array
        <DrumPad key={pad.id} id={pad.id} letter={pad.letter} src={pad.src} handleDisplay={setDisplay} />
      ))}
    </div>
  );
};

export default DrumMachine;