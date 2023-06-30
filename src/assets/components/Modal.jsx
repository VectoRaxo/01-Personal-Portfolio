
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


export function ShowModal(props) {
    const { src, alt, isMobile, ...modalProps } = props
    if (src === 'contact'){
      return (
      <Modal
        {...modalProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Contact me!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form className='formContact' name="contact" data-netlify="true">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
      )
    }
    return (
      <Modal
        {...modalProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {alt}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {isMobile ? (
          <Image src={src} alt={alt} rounded fluid/>
            ) : (
                <Image src={src} alt={alt} rounded/>
            )}
        </Modal.Body>
      </Modal>
    );
  }