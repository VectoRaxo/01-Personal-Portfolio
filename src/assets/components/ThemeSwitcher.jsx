import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  let checked = false
  if (theme === 'light'){
    checked = false
  }else{
    checked = true
  }
  return (
    <div>
      {/* <h2>Theme Switcher</h2>
      <p>Tema actual: {theme}</p> */}
      {/* <Button variant={buttonTheme} onClick={toggleTheme}>Cambiar tema</Button> */}


      <Form style={{width: '130px', color: 'white'}}>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={`${theme} mode`}
        onClick={toggleTheme}
        checked={checked}
      />
    </Form>
    </div>
    
  );
};

export default ThemeSwitcher;