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
import YouTube from 'react-youtube';




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
        const mediaQuery = window.matchMedia('(max-width: 900px)');
        setIsMobile(mediaQuery.matches);
      };
      handleResize(); // Verificar el tamaño inicial de la pantalla
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])
    let contentWidth = '90%'
    let contentMargin = '3em'
    let contentAlign = 'left'
    if (isMobile){
        contentAlign = 'center'
        contentMargin = '0em'
        contentWidth = '100%'
    }else{
        contentAlign = 'left'
        contentMargin = 'auto'
        contentWidth = '90%'
    }
  return (
<>
    
    <Container className='main-frame introMainPage'
                style={{ backgroundColor:'#1f04594f',
                maxWidth: '960px',
                minHeight: '100vh',
                
                padding: '1rem',
                // borderColor:'#F2D64B',
                // borderWidth:'0.25em',
                borderRadius: '2em',
                // borderStyle:'solid'
                }}>
        {/* <NavBar /> */}
            <Col>
                <Row>
                    <div className='main-title'>
                    <h1 style={{fontFamily:'Montse'}}>JULIAN ALBERTI</h1>
                    </div>
                </Row>
                <div  className='contentFrame' >
                    <Row>
                        <h1 className='sub-main-title' style={{color:'#F2D64B', fontFamily:'Montse', fontSize:'1.5em'}}>About Me</h1>
                    </Row>
                    <Row className='about-me'>
                        <h5 style={{color:'white'}}>
                        I am an enthusiastic person, creative, and always willing to explore new ideas and concepts. <br />
                        I have a desire to learn, and that drives me to develop my skills and apply them in innovative projects.
                        </h5>
                    </Row>
                </div>
            </Col>
            <Container fluid="xs" style={{ marginTop:'1em'}}>
                <Tabs
                id="justify-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                justify
                >
                <Tab eventKey="home" title="My Profile" style={{ textAlign: contentAlign, color: 'white', width: contentWidth, margin:'auto' }}>
                    <Row style={{marginBottom:'1em'}}>
                        <h1>Experience</h1>
                    </Row>
                    <Row style={{width: contentWidth, color:'#F2D64B', margin:'auto' }}>
                        <h5>
                            Web developer - Freelance (2023)
                        </h5>
                    </Row>
                    <Row style={{width: contentWidth, marginLeft: contentMargin, marginBottom:'1em'}}>
                        <h6>
                        · Development and maintenance of websites. <br />
                        · Use of Javascript, Typescript, React.js
                        </h6>
                    </Row>
                    <Row style={{width: contentWidth, color:'#F2D64B', margin:'auto' }}>
                        <h5>
                            Developing of videogames in Unity (2023)
                        </h5>
                    </Row>
                    <Row style={{width: contentWidth, marginLeft: contentMargin, marginBottom:'1em'}}>
                        <h6>
                        · Development in C#, implementation of interfaces, <br/> use of
                        GitHub and creation of assets.

                        </h6>
                    </Row>
                    <Row style={{width: contentWidth, color:'#F2D64B', margin:'auto' }}>
                        <h5>
                        Technical support and customer service (2021-2022)
                        </h5>
                    </Row>
                    <Row style={{width: contentWidth, marginLeft: contentMargin, marginBottom:'1em'}}>
                        <h6>
                        · Incident management and database management. <br/>
                        · Web development and graphic design. <br/>
                        · Teamwork.
                        </h6>
                    </Row>
                    <Row style={{width: contentWidth, color:'#F2D64B', margin:'auto' }}>
                        <h5>
                        Manager - El Baúl Gráfico (2015-2019)
                        </h5>
                    </Row>
                    <Row style={{width: contentWidth, marginLeft: contentMargin, marginBottom:'1em'}}>
                        <h6>
                        · Graphic and textile printing, logo design, signage, and
                            event services. <br/>
                        · Proficient in Adobe Suite, web design, and printing
                            machinery.
                        </h6>
                    </Row>
                    <Row style={{width: contentWidth, color:'#F2D64B', margin: contentMargin }}>
                        <h5>
                        Application Developer (Internship)
                        </h5>
                    </Row>
                    <Row style={{width: contentWidth, marginLeft: contentMargin, marginBottom:'1em'}}>
                        <h6>
                        · Generation of forms, reports, and Excel handling <br/>
                        · Development of applications with Visual Basic and .NET.
                        </h6>
                    </Row>
                    <Row >
                        <h1>Education</h1>
                    </Row>
                    <Row style={{width: contentWidth, marginLeft: contentMargin}}>
                        <h6>
                        · D.A.I Development of computer applications. (2012) <br/>
                        I.E.S Martín Rivero.
                        </h6>
                    </Row>
                    
                    
                </Tab>


                <Tab eventKey="profile" title="My Hobbies">
                <h1 style={{paddingBottom:'0.5em'}}>
                            Vector Illustration
                        </h1>
                    <Row className='thumbnails'>
                        <div>
                        {isMobile ? (
                            <Carousel>
                            <Carousel.Item data-bs-toggle="modal" data-bs-target="#martaModal"
                                    onClick={() => handleImageClick("assets/img/marta640.PNG")}  >
                                <Image id="martaModal" src="assets/img/marta1.PNG" rounded className="img-fluid"  />
                            </Carousel.Item>
                            <Carousel.Item data-bs-toggle="modal" data-bs-target="#abModal"
                                    onClick={() => handleImageClick("assets/img/ab640.png")}  >
                                <Image id="abModal" src="assets/img/ab.PNG" rounded className="img-fluid"  />
                            </Carousel.Item>
                            <Carousel.Item data-bs-toggle="modal" data-bs-target="#noobModal"
                                    onClick={() => handleImageClick("assets/img/noob640.png")}  >
                                <Image id="noobModal" src="assets/img/noob.png" rounded className="img-fluid"  />
                            </Carousel.Item>
                            </Carousel>
                        ) : (
                            <Container>
                            <Row >
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#martaModal"
                                    onClick={() => handleImageClick("assets/img/marta640.PNG")}>
                                    <Image id="martaModal" src="assets/img/marta1.PNG" rounded className="img-fluid" />
                                </div>
                                </Col>
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#abModal"
                                    onClick={() => handleImageClick("assets/img/ab640.png")}>
                                    <Image id="abModal" src="assets/img/ab.PNG" rounded className="img-fluid"/>
                                </div>
                                </Col>
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#noobModal"
                                    onClick={() => handleImageClick("assets/img/noob640.png")}>
                                    <Image id="noobModal" src="assets/img/noob.png" rounded className="img-fluid"/>
                                </div>
                                </Col>
                            </Row>
                            </Container>
                            
                        )}

                        </div>
                    </Row>
                        {/* <h1 style={{paddingTop:'1em'}}>
                            Drone footage
                        </h1>
                    <Row style={{padding:'2em'}}>
                        
                        <YouTube videoId="https://www.youtube.com/watch?v=gyDIBpEuYQc" width={640} height={360} />
                    </Row> */}
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
