import  {useState, useEffect, useContext} from 'react'
import { Container } from 'react-bootstrap'
import ThemeContext from './ThemeContext'

export const ContactMe = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const themeTitles = {
    light: {
        color: '#F2D64B',
        fontFamily:'Montse'
    },
    dark: {
        color: '#8DF2F2',
        fontFamily:'Montse'
    },
  }
  return (
    <Container>
    <h1 style={themeTitles[theme]}>Contact me:</h1>
    <h6>julialberti666@gmail.com</h6>
    </Container>
  )
}