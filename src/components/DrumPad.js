/**
 * Author: Paweł Szlendak
 * Github: https://github.com/shlendakh
 * 
 * This code is released under the MIT license.
 */

import React, { useEffect, useRef } from "react";
import './DrumPad.scss';

// DrumPad Component
const DrumPad = ({ id, letter, src, handleDisplay }) => {
  // Reference to the audio element
  const audio = useRef();
  // Reference to the drum pad div
  const drumPad = useRef();

  // Adding an event listener for keypresses when the component mounts
  useEffect(() => {
    const upHandler = (e) => {
      if (e.key.toUpperCase() === letter) {
        drumPad.current.classList.remove('drum-pad--active');
        console.log(e);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', upHandler);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keyup', upHandler);
    };
  }, []);

  // Function to handle keypresses
  const handleKeyPress = (e) => {
    // If the key is the same as the letter of the drum pad, play the sound
    if (e.key.toUpperCase() === letter) {
      drumPad.current.classList.add('drum-pad--active');
      playSound();
    }
  };

  const playSound = () => {
    // Reset audio time to the start to ensure it plays if rapidly clicked
    audio.current.currentTime = 0;
  
    // Play the sound
    audio.current.play().then(() => {
      console.log('Audio played!');
      handleDisplay(id);
    }).catch((error) => {
      console.error('Failed to play audio:', error);
    });
  };

  // Rendering the drum pad with its letter and audio
  return (
    <div 
      ref={drumPad}
      className={`drum-pad`} 
      id={id} 
      onMouseDown={() => drumPad.current.classList.add('drum-pad--active')} 
      onMouseUp={() => drumPad.current.classList.remove('drum-pad--active')} 
      onMouseLeave={() => drumPad.current.classList.remove('drum-pad--active')} 
      onClick={playSound}
    >
      {letter}
      <audio ref={audio} src={src} className="clip" id={letter} />
    </div>
  );
};

export default DrumPad;