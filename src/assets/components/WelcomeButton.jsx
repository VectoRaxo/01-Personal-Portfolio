import { Container } from 'react-bootstrap'

export const WelcomeButton = ({onClick,animation}) => {
    console.log(animation)
    return (
    <div className='button-frame'>
      <div id="intro-button" className= {`border-button ${animation ? 'introAnimation' : ''}`}
        onClick={onClick}>
        
        <Container className='name-button tp-transform'>
          <h1 style={{color:'#9FC131'}}>Welcome</h1> 
        </Container>
      </div>
    </div>
  )
}
