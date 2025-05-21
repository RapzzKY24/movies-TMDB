import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../Contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} 
      size="sm" 
      onClick={toggleTheme}
      className="ms-2"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ThemeToggle;
