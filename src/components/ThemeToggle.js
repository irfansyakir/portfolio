import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './themeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="theme-toggle" aria-label="Toggle dark mode">
      <input 
        type="checkbox" 
        checked={isDarkMode} 
        onChange={toggleTheme} 
      />
      <span className="toggle-slider">
        <FontAwesomeIcon icon={faMoon} className="toggle-icon moon-icon" />
        <FontAwesomeIcon icon={faSun} className="toggle-icon sun-icon" />
        
      </span>
    </label>
  );
};

export default ThemeToggle;
