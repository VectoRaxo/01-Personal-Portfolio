
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';

export function ShowModal(props) {
    const { src, isMobile, ind, ...modalProps } = props
    
    const [index, setIndex] = useState();

    useEffect(() => {
      if (ind === ind)
      setIndex(ind);
    }, [ind]);

    
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex)
      console.log(`selectedIndex: ${selectedIndex}`)
      console.log(`ind: ${ind}`)
      console.log(`index: ${index}`) 
    }

    if (src === 'contact'){
      return (
      <Modal
        {...modalProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='contact-modal-content'
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
        <Button variant="Secondary" type="submit">
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
        
        <Modal.Body>
            {isMobile ? (
              <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false}> 
                        <Carousel.Item>
                            <Image id="martaModal" src="assets/img/marta640.PNG" rounded fluid  />
                        </Carousel.Item >
                        <Carousel.Item >
                            <Image id="abModal" src="assets/img/ab640.png" rounded fluid  />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image id="noobModal" src="assets/img/noob640.png" rounded fluid />
                        </Carousel.Item>
              </Carousel>
            ) : (
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false}>
                            <Carousel.Item >
                                <Image id="martaModal" src="assets/img/marta640.PNG" rounded   />
                            </Carousel.Item>
                            <Carousel.Item >
                                <Image id="abModal" src="assets/img/ab640.png" rounded   />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image id="noobModal" src="assets/img/noob640.png" rounded  />
                            </Carousel.Item>
                </Carousel>
            )}
        </Modal.Body>
      </Modal>
    );
  }