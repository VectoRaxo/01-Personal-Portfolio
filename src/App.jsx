
import './App.css'
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { ShowModal } from "./assets/components/Modal";
import { MainPage } from "./assets/components/MainPage";
import { useSpring, animated } from '@react-spring/web';
import ThemeContext from './assets/components/ThemeContext'
import ThemeSwitcher from './assets/components/ThemeSwitcher'





function App() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
    }
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])
  
  useEffect(() => {
    // Obtener la URL de la imagen de fondo según el tema
    const backgroundImageUrl = theme === 'dark' ? 'assets/img/dark-bg.jpg' : 'assets/img/light-bg.jpg'
    // Establecer la imagen de fondo del body
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
    // Limpiar la imagen de fondo al desmontar el componente
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [theme]);

  const themeStyles = {
    light: {
      border: '0.2em solid #F2D64B',
      color: 'white',
    },
    dark: {
      border: '0.2em solid white',
      color: 'white',
    },
  }
  
    const [animation, setAnimation] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);
   
    useEffect(() => {
      const handleAnimationEnd = () => {
        setAnimationCompleted(false)
      }
      if (animation) {
        setAnimationCompleted(true)
      }
      const introButtonElement = document.getElementById('intro-button')
      if (introButtonElement) {
        introButtonElement.addEventListener('animationend', handleAnimationEnd);
      }
      return () => {
        if (introButtonElement) {
        introButtonElement.removeEventListener('animationend', handleAnimationEnd)
        }
      }
    }, [animation, isLoading])
    

    const fadeAnimation = useSpring({
      opacity: animation ? '0%' : '100%',
      pointerEvents: animation ? 'none' : 'auto',
    })

    const handleClic = () => {
      // Cambiar el estado de "animation" al hacer clic
      setAnimation(true);
    }
  
  return (
    <>
    {isLoading ? (
      <Container style={{fontFamily: 'Montse', color: 'white'}}><h6>Loading...</h6></Container>
     ):(
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <animated.div style={fadeAnimation}
         className='button-frame' 
          >
        <div
          id="intro-button"
          className='border-button'
          style={themeStyles[theme]}
          onClick={handleClic}
        >
          <Container  className="name-button tp-transform">
            <h1 style={{ fontSize:'2em'}}>Welcome</h1>
          </Container>
          
        </div>
    </animated.div>
    <Container style={{position: 'sticky',width: '150px', top: '10%'}}>
      {!animationCompleted && <ThemeSwitcher />} 
    </Container>
     {animationCompleted && <MainPage />}
       
    
      
   
    <div>
      <ShowModal />      
    </div>
    </ThemeContext.Provider>
     )
    }
    </>
  )
}

export default App
