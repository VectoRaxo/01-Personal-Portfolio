import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ThemeContext from './ThemeContext';



export const ContactForm = () => {
  const [formContent, setFormContent] = useState({email: '', message: ''});
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  const themeFormTitle = {
    light: {
        color: '#F2D64B',
        fontFamily:'Montse' 
    },
    dark : {
        color: '#8DF2F2',
        fontFamily:'Montse'
    }
  }
  let buttonTheme = 'outline-warning'
  if (theme === 'light'){
    buttonTheme = 'outline-warning'
  }else{
    buttonTheme = 'outline-info'
  }
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formContent })
      });
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
    // setFormContent({ email: formContent.email, message: formContent.message })
  };
  
  return(
    isSubmitted? (
      <h5 style={themeFormTitle[theme]}>Thank you!</h5>
    ) : (
      <section>
      <h1 style={themeFormTitle[theme]}>Contact me</h1>
    <Form className='formContact' method='POST' name="contact" data-netlify="true" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="contact" />
        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="name@example.com"
        value={formContent.email}
        onChange={(e) => setFormContent({ ...formContent, email: e.target.value })}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message"
        value={formContent.message}
        onChange={(e) => setFormContent({ ...formContent, message: e.target.value })}/>
        <Button style={{marginTop: '1rem'}} variant={buttonTheme} id='contactModal' type="submit">
          {isLoading?   <Spinner animation="border" size="sm" />: 'Submit'}
        </Button>
        </Form.Group>
    </Form>
    </section>
      
    )
  )
}