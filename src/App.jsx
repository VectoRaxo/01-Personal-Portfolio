
import './App.css'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { ShowModal } from "./assets/components/Modal";
import { MainPage } from "./assets/components/MainPage";
import { useSpring, animated } from '@react-spring/web';




function App() {
  
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
    <div className='button-frame'>
        <animated.div
          id="intro-button"
          className='border-button'
          style={fadeAnimation}
          onClick={handleClic}
        >
          <Container className="name-button tp-transform">
            <h1 style={{color:'white', fontSize:'2em'}}>Welcome</h1>
          </Container>
        </animated.div>
    </div>
     {animationCompleted && <MainPage />}
       
    
      
   
    <div>
      <ShowModal />      
    </div>
    </>
  )
}

export default App
