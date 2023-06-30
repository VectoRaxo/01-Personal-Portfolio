import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { ShowModal } from "./Modal";
import { NavBar } from './NavBar';

export const MainPage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const handleImageClick = (src, alt) => {
      setSelectedImage({ src, alt });
      setModalShow(true);
    };

    useEffect(() => {
      const handleResize = () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)');
        setIsMobile(mediaQuery.matches);
      };
      handleResize(); // Verificar el tamaño inicial de la pantalla
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])
  return (
<>
    <NavBar />
    <Container className='main-frame introMainPage'>
    <Row>
        <div className='main-title'>
        <h1>Julián Alberti</h1>
        </div>
    </Row>
    <Row className="formButton">
        <div data-bs-toggle="modal" data-bs-target="#contactModal" onClick={() => handleImageClick('contact')}>
        <a className="btn btn-xl btn-outline-light" id='contactModal'>
            Contact me!
        </a>
        </div>
    </Row>

    <Row>
        <h1 className='sub-main-title'>About Me</h1>
    </Row>
    <Row className='about-me'>
        <h5>
        I am an enthusiastic person, creative, and always willing to explore new ideas and concepts. <br />
        I have a desire to learn, and that drives me to develop my skills and apply them in innovative projects.
        </h5>
    </Row>
    <Row className='thumbnails'>
        <div>
        {isMobile ? (
            <Carousel>
            <Carousel.Item data-bs-toggle="modal" data-bs-target="#martaModal"
                    onClick={() => handleImageClick("src/assets/img/vector/640/marta640.PNG", "Netherworld Queen")}  >
                <Image id="martaModal" src="src/assets/img/vector/marta1.PNG" alt='First' rounded className="img-fluid"  />
            </Carousel.Item>
            <Carousel.Item data-bs-toggle="modal" data-bs-target="#abModal"
                    onClick={() => handleImageClick("src/assets/img/vector/640/ab640.PNG", "Woman with flower")}  >
                <Image id="abModal" src="src/assets/img/vector/ab.PNG" alt='Second' rounded className="img-fluid"  />
            </Carousel.Item>
            <Carousel.Item data-bs-toggle="modal" data-bs-target="#noobModal"
                    onClick={() => handleImageClick("src/assets/img/vector/640/noob640.png", "Noob-Saibot NEON")}  >
                <Image id="noobModal" src="src/assets/img/vector/noob.png" alt='Noob-Saibot NEON' rounded className="img-fluid"  />
            </Carousel.Item>
            </Carousel>
        ) : (
            <Container>
            <Row>
                <Col xs={6} md={4} className="mx-1">
                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#martaModal"
                    onClick={() => handleImageClick("src/assets/img/vector/640/marta640.PNG", "Netherworld Queen")}>
                    <Image id="martaModal" src="src/assets/img/vector/marta1.PNG" alt='First' rounded className="img-fluid" />
                </div>
                </Col>
                <Col xs={6} md={4} className="mx-1">
                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#abModal"
                    onClick={() => handleImageClick("src/assets/img/vector/640/ab640.PNG", "Woman with flower")}>
                    <Image id="abModal" src="src/assets/img/vector/ab.PNG" alt='Second' rounded className="img-fluid"/>
                </div>
                </Col>
                <Col xs={6} md={4} className="mx-1">
                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#noobModal"
                    onClick={() => handleImageClick("src/assets/img/vector/640/noob640.png", "Noob-Saibot NEON")}>
                    <Image id="noobModal" src="src/assets/img/vector/noob.png" alt='Noob-Saibot NEON' rounded className="img-fluid"/>
                </div>
                </Col>
            </Row>
            </Container>
            
        )}

        </div>
    </Row>
    <Row>
        <ShowModal
        show={modalShow}
        onHide={() => setModalShow(false)}
         src={selectedImage?.src}
        alt={selectedImage?.alt}
        isMobile={isMobile}
      />
    </Row>
    </Container>
  </>
)

}
