import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { ShowModal } from "./Modal";
import { NavBar } from './NavBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export const MainPage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [key, setKey] = useState('home');

    const handleImageClick = (src, alt) => {
      setSelectedImage({ src, alt });
      setModalShow(true);
    };

    useEffect(() => {
      const handleResize = () => {
        const mediaQuery = window.matchMedia('(max-width: 750px)');
        setIsMobile(mediaQuery.matches);
      };
      handleResize(); // Verificar el tamaño inicial de la pantalla
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])

    function goToHome() {
        // Realiza la acción deseada al hacer clic en el div
        window.location.href = "http://localhost:5173/"; // Redirige a la página de inicio
      }

  return (
<>
    
    <Container className='main-frame introMainPage' style={{backgroundColor:'#D6D58E', padding:'2rem', borderRadius:'2rem'}}>
        {/* <NavBar /> */}
            <Col className='contentFrame' >
                <Row>
                    <div className='main-title'>
                    <h1 >Julián Alberti</h1>
                    </div>
                </Row>
                <Row>
                    <h1 className='sub-main-title'>About Me</h1>
                </Row>
                <Row className='about-me' style={{marginBottom:'2em'}}>
                    <h5 style={{color:'#005C53'}}>
                    I am an enthusiastic person, creative, and always willing to explore new ideas and concepts. <br />
                    I have a desire to learn, and that drives me to develop my skills and apply them in innovative projects.
                    </h5>
                </Row>
            </Col>
            <Container fluid="xs">
                <Tabs
                id="justify-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                justify
                style={{color:'#005C53'}}
                >
                <Tab eventKey="home" title="My Profile" style={{ textAlign: 'left', color: '#005C53', width: '90%', margin:'auto' }}>
                    <Row>
                        <h1>Experience</h1>
                    </Row>
                    <Row style={{width: '90%', margin:'auto' }}>
                        <h5>
                            Web developer - Freelance (2023)
                        </h5>
                    </Row>
                    <Row style={{width: '90%', marginLeft:'3em', fontStyle:'italic'}}>
                        <h6>
                        · Development and maintenance of websites. <br />
                        · Use of Javascript, Typescript, React.js
                        </h6>
                    </Row>
                    <Row style={{width: '90%', margin:'auto' }}>
                        <h5>
                            Developing of videogames in Unity (2023)
                        </h5>
                    </Row>
                    <Row style={{width: '90%', marginLeft:'3em', fontStyle:'italic'}}>
                        <h6>
                        · Development in C#, implementation of interfaces, <br/> use of
                        GitHub and creation of assets.

                        </h6>
                    </Row>
                    <Row style={{width: '90%', margin:'auto' }}>
                        <h5>
                        Technical support and customer service (2021-2022)
                        </h5>
                    </Row>
                    <Row style={{width: '90%', marginLeft:'3em', fontStyle:'italic'}}>
                        <h6>
                        · Incident management and database management. <br/>
                        · Web development and graphic design. <br/>
                        · Teamwork.
                        </h6>
                    </Row>
                    <Row style={{width: '90%', margin:'auto' }}>
                        <h5>
                        Manager - El Baúl Gráfico (2015-2019)
                        </h5>
                    </Row>
                    <Row style={{width: '90%', marginLeft:'3em', fontStyle:'italic'}}>
                        <h6>
                        · Graphic and textile printing, logo design, signage, and
                            event services. <br/>
                        · Proficient in Adobe Suite, web design, and printing
                            machinery.
                        </h6>
                    </Row>
                    <Row style={{width: '90%', margin:'auto' }}>
                        <h5>
                        Application Developer (Internship)
                        </h5>
                    </Row>
                    <Row style={{width: '90%', marginLeft:'3em', fontStyle:'italic'}}>
                        <h6>
                        · Generation of forms, reports, and Excel handling <br/>
                        · Development of applications with Visual Basic and .NET.
                        </h6>
                    </Row>
                    <Row>
                        <h1>Education</h1>
                    </Row>
                    <Row style={{width: '90%', marginLeft:'3em', fontStyle:'italic'}}>
                        <h6>
                        · D.A.I Development of computer applications. (2012) <br/>
                        I.E.S Martín Rivero.
                        </h6>
                    </Row>
                    
                    
                </Tab>


                <Tab eventKey="profile" title="My Hobbies">
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
                            <Row >
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#martaModal"
                                    onClick={() => handleImageClick("src/assets/img/vector/640/marta640.PNG", "Netherworld Queen")}>
                                    <Image id="martaModal" src="src/assets/img/vector/marta1.PNG" alt='First' rounded className="img-fluid" />
                                </div>
                                </Col>
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#abModal"
                                    onClick={() => handleImageClick("src/assets/img/vector/640/ab640.PNG", "Woman with flower")}>
                                    <Image id="abModal" src="src/assets/img/vector/ab.PNG" alt='Second' rounded className="img-fluid"/>
                                </div>
                                </Col>
                                <Col>
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
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Row className="formButton">
                        <div data-bs-toggle="modal" data-bs-target="#contactModal" onClick={() => handleImageClick('contact')}>
                        <a className="btn btn-xl btn-outline-light" id='contactModal'>
                            Contact me!
                        </a>
                        </div>
                    </Row>
                </Tab>
                </Tabs> 
        </Container>
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
        {/* <footer>
            <Container
                style={{position:'absolute',
                backgroundColor:'black',
                width:'100vw',
                color:'white',
                marginLeft:'auto',
                marginRight:'auto'}}>
                <Col>
                    Contact!
                </Col>
            </Container>
        </footer> */}
  </>
)

}
