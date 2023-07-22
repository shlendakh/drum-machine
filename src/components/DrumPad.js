/**
 * Author: Paweł Szlendak
 * Github: https://github.com/shlendakh
 * 
 * This code is released under the MIT license.
 */

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './DrumPad.scss';

// Function to generate a random RGB color
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// DrumPad Component
const DrumPad = ({ id, letter, src, handleDisplay }) => {
  const audio = useRef();
  const drumPad = useRef();
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const upHandler = (e) => {
      if (e.key.toUpperCase() === letter) {
        drumPad.current.classList.remove('drum-pad--active');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', upHandler);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keyup', upHandler);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === letter) {
      drumPad.current.classList.add('drum-pad--active');
      playSound();
    }
  };

  const playSound = () => {
    audio.current.currentTime = 0;
    audio.current.play().then(() => {
      handleDisplay(id);
      // Add a new animation
      setAnimations(animations => [...animations, {color: generateRandomColor()}]);
    }).catch((error) => {
      console.error('Failed to play audio:', error);
    });
  };

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
      {animations.map((animation, index) => (
        <FontAwesomeIcon 
          className="drum-pad__note" 
          style={{ color: animation.color }}
          key={index} 
          icon={faMusic} 
        />
      ))}
      <audio ref={audio} src={src} className="clip" id={letter} />
    </div>
  );
};

export default DrumPad;