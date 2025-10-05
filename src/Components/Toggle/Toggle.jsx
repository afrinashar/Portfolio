import React from 'react';
import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };
  return (
    <button
      className="toggle"
      onClick={handleClick}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      tabIndex={0}
      type="button"
    >
      <span className="toggle-icon" aria-hidden="true"><Moon /></span>
      <span className="toggle-icon" aria-hidden="true"><Sun /></span>
      <div
        className="t-button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
        aria-hidden="true"
      ></div>
    </button>
  );
};

export default Toggle;