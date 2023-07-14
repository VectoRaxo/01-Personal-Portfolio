import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Button } from 'react-bootstrap';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  let buttonTheme = (theme === 'light'? 'dark' : 'light' )
  return (
    <div>
      <h2>Theme Switcher</h2>
      <p>Tema actual: {theme}</p>
      <Button variant={buttonTheme} onClick={toggleTheme}>Cambiar tema</Button>
    </div>
  );
};

export default ThemeSwitcher;