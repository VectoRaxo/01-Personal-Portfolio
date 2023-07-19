import React, { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [ isChecked, setIsChecked ] = useState(theme === 'light' ? false : true)

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }
  return (
    <div>
      <Form style={{width: '130px', color: 'white'}}>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={`${theme} mode`}
        onClick={toggleTheme}
        onChange={handleChange}
        checked={isChecked}
      />
    </Form>
    </div>
    
  );
};

export default ThemeSwitcher;