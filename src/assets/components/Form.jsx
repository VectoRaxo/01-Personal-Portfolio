import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export const ContactForm = () => {
  const [formContent, setFormContent] = useState({email: '', contact: ''});
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (formContent.email === '' || formContent.contact === ''){
      setIsSubmitted(false)
      throw alert('E-mail & Message must have some content!')
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
    setFormContent(formContent.email,formContent.contact)
  }
  
  return(
    isSubmitted? (
      <h5>Thank you!</h5>
    ) : (
      <section>
      <h1 style={{fontFamily:'Montse'}}>Contact me</h1>
    <Form className='formContact' method='POST' name="contact" data-netlify="true" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="name@example.com"
        value={formContent.email}
        onChange={(e) => setFormContent({ ...formContent, email: e.target.value })}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message"
        value={formContent.contact}
        onChange={(e) => setFormContent({ ...formContent, contact: e.target.value })}/>
        <Button style={{marginTop: '1rem'}} variant="outline-warning" id='contactModal' type="submit">
          {isLoading?   <Spinner animation="border" size="sm" />: 'Submit'}
        </Button>
        </Form.Group>
    </Form>
    </section>
      
    )
  )
}