
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
  
  useEffect(() => {
    // Obtener la URL de la imagen de fondo según el tema
    // const backgroundColor = theme === 'dark' ? 'linear-gradient(90deg, rgba(201,0,255,1) 0%, rgba(9,9,121,1) 20%, rgba(2,0,36,1) 40%, rgba(2,0,36,1) 60%, rgba(9,9,121,1) 80%, rgba(201,0,255,1) 100%)' :
    //                                             'linear-gradient(90deg, rgba(255,229,93,1) 0%, rgba(148,187,233,1) 25%, rgba(222,176,207,1) 40%, rgba(238,174,202,1) 60%, rgba(148,187,233,1) 75%, rgba(255,229,93,1) 100%)'
    const backgroundImageUrl = theme === 'dark' ? 'assets/img/dark-bg.jpg' : 'assets/img/light-bg.jpg'
    // Establecer la imagen de fondo del body
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
    // document.body.style.background= `${backgroundColor}`
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
      introButtonElement.addEventListener('animationend', handleAnimationEnd)
      return () => {
        introButtonElement.removeEventListener('animationend', handleAnimationEnd)
      }
    }, [animation])
    

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
    </>
  )
}

export default App
