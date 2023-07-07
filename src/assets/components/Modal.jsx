
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';



export function FormModal(props) {
  const {onHide,  ...modalProps } = props
  
  const sendForm = (confirm) => {
    if (confirm){
      console.log('gracias por contactar')
      // aquí iría la parte del back (??)
    }
    onHide()
  }
  return (
    <Modal
      {...modalProps}
      onHide={confirm}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='contact-modal-content'
    >
      <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      *UNDER CONSTRUCTION* <br />
      Click outside :D
    </Modal.Title>
  </Modal.Header>
    <Modal.Footer>
    <Button variant="secondary" type='submit' onClick={() => sendForm(false)} >
          Close
        </Button>
        <Button variant="primary" type='submit' onClick={() => sendForm(true)}>Understood</Button>
        </ Modal.Footer>
  <Modal.Body>
    
  </Modal.Body>
</Modal>
    )
}
export function ShowModal(props) {
    const { src, isMobile, ind,  ...modalProps } = props
    
    const [index, setIndex] = useState();
    
    useEffect(() => {
      if (ind === ind)
      setIndex(ind);
    }, [ind]);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex)
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