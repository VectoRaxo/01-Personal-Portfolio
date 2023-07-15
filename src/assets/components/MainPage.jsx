import  {useState, useEffect, useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FormModal, ShowModal } from "./Modal";
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import YouTube from 'react-youtube';
import { ContactForm } from './Form';
import ThemeContext from './ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'



export const MainPage = () => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    let contentWidth = '90%'
      let contentMargin = '3em'
      let contentAlign = 'left'
      // let avatarWidth = '120px'
      let avatarPadding = '3em'
      
      if (isMobile){
          contentAlign = 'center'
          contentMargin = '0em'
          contentWidth = '100%'
          // avatarWidth = '160px'
          avatarPadding = '3em'
      }else{
          contentAlign = 'left'
          contentMargin = 'auto'
          contentWidth = '90%'
          // avatarWidth = '240px'
          avatarPadding = '2em'
      }
       // config del video (responsive)
    const videoId = 'gyDIBpEuYQc'
    let videoHeight = '360'
    let videoWidth = '640'
    if (isMobile){
        videoHeight = '145'
        videoWidth = '260'
    }
    if (isTablet){
        videoHeight = '240'
        videoWidth = '480'
    }
    const opts = {
        height: videoHeight,
        width: videoWidth,
        playerVars: {
          autoplay: 0,
        },
      };

  useEffect(() => {
    // Obtener la URL de la imagen de fondo según el tema
    const backgroundImageUrl = theme === 'dark' ? 'assets/img/dark-bg.jpg' : 'assets/img/light-bg.jpg';
    // Establecer la imagen de fondo del body
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
    console.log(theme)
    // Limpiar la imagen de fondo al desmontar el componente
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [theme]);
   
    
      const themeTitles = {
        light: {
            color: '#F2D64B',
        },
        dark: {
            color: '#8DF2F2',
        },
      }
      const themeStylesSubTitles = {
        light: {
            color: 'white',
        },
        dark: {
            color: 'white',
        },
      }
      const themeContentFrame = {
        light: {
            borderStyle: 'solid',
            borderColor: '#f2d64b60',
            backgroundColor: '#1f04592f',
            width:'90%',
            margin: '1em auto auto auto',
            marginTop: '1em',
            borderRadius: '2em',
            padding:'2em',
            textAlign: 'center',
            color: 'white',
        },
        dark: {
            borderStyle: 'solid',
            borderColor: '#742BD9',
            backgroundColor: '#1f04592f',
            width:'90%',
            margin: '1em auto auto auto',
            marginTop: '1em',
            borderRadius: '2em',
            padding:'2em',
            textAlign: 'center',
            color: 'white',
        },
      }
      const themeCvContentFrame = {
        light: {
            borderStyle: 'solid',
            borderColor: '#f2d64b60',
            backgroundColor: '#1f04592f',
            width:'90%',
            margin: '1em auto auto auto',
            marginTop: '1em',
            borderRadius: '2em',
            padding:'2em',
            textAlign: contentAlign,
            color: 'white',
        },
        dark: {
            borderStyle: 'solid',
            borderColor: '#742BD9',
            backgroundColor: '#1f04592f',
            width:'90%',
            margin: '1em auto auto auto',
            marginTop: '1em',
            borderRadius: '2em',
            padding:'2em',
            textAlign: contentAlign,
            color: 'white',
        },
      }
      const themeCvSubtitles = {
        light: {
            width: contentWidth,
            color:'#F2D64B',
            margin:'auto' 
        },
        dark : {
            width: contentWidth,
            color:'#8DF2F2',
            margin:'auto' 
        }
      }
      const themeFooterFrame = {
        light: {
                display:'flex',
                justifyContent:'center',
                contentAlign:'center',
                textAlign:'center',
                margin:'1em auto',
                width:'75%',
                padding:'1em',
                borderStyle:'solid',
                backgroundColor:'#1f04592f',
                borderColor:'#f2d64b60',
                borderRadius:'2em'
        },
        dark: {
            display:'flex',
                justifyContent:'center',
                contentAlign:'center',
                textAlign:'center',
                margin:'1em auto',
                width:'75%',
                padding:'1em',
                borderStyle:'solid',
                backgroundColor:'#1f04592f',
                borderColor:'#742BD9',
                borderRadius:'2em'
        }
      }
      

    const handleImageClick = (src, alt, ind) => {
      setSelectedImage({ src, alt, ind });
      setModalShow(true);
    };
    

    useEffect(() => {
        const handleResize = () => {
            const mediaQuerySmall = window.matchMedia('(max-width: 600px)');
            const mediaQueryMedium = window.matchMedia('(max-width: 900px)');
            
            if (mediaQuerySmall.matches) {
              setIsMobile(true);
              setIsTablet(false);
            } else if (mediaQueryMedium.matches) {
              setIsMobile(false);
              setIsTablet(true);
            } else {
              setIsMobile(false);
              setIsTablet(false);
            }
          };
      handleResize(); // Verificar el tamaño inicial de la pantalla
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])
  return (
<>
<ThemeContext.Provider value={{ theme, toggleTheme }}>    
<BrowserRouter> 
    <Container className='main-frame introMainPage' id='about-me'
                style={{ backgroundColor:'#1f04594f',
                maxWidth: '960px',
                minHeight: '100vh',
                borderRadius: '2em',
                }}>
        <NavBar />
            <Col style={{paddingTop:avatarPadding}}>
            <Row>
                    <div className='main-title' style={themeTitles[theme]}>
                    <h1 style={{fontFamily:'Montse'}}>JULIAN ALBERTI</h1>
                    <h6  style={themeStylesSubTitles[theme]}>Web developer - Graphic artist</h6>
                    </div>
                </Row>
                <div style={themeContentFrame[theme]} >
                
                    <Row style={themeTitles[theme]}>
                        <h1 className='sub-main-title' style={{fontFamily:'Montse', fontSize:'1.5em'}}>About Me</h1>
                    </Row>
                    <Row className='about-me' >
                        <h5 style={themeStylesSubTitles[theme]} id='other-stuff'>
                        I am an enthusiastic person, creative, and always willing to explore new ideas and concepts. <br />
                        I have a desire to learn, and that drives me to develop my skills and apply them in innovative projects.
                        </h5>
                    </Row>
                </div>
            </Col>
            <Container fluid="xs" style={{ marginTop:'1em'}} >
                <Container style={themeCvContentFrame[theme]}>
                    <Row style={{marginBottom:'1em', fontFamily:'Montse'}}>
                        <h1 style={themeTitles[theme]}>Experience</h1>
                    </Row>
                    <Row style={themeCvSubtitles[theme]}>
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
                    <Row style={themeCvSubtitles[theme]}>
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
                    <Row style={themeCvSubtitles[theme]}>
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
                    <Row style={themeCvSubtitles[theme]}>
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
                    <Row style={themeCvSubtitles[theme]}>
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
                    <Row style={{fontFamily:'Montse'}}>
                        <h1 style={themeTitles[theme]}>Education</h1>
                    </Row>
                    <Row style={{width: contentWidth, marginLeft: contentMargin}}>
                        <h6>
                        · D.A.I Development of computer applications. (2012) <br/>
                        I.E.S Martín Rivero.
                        </h6>
                    </Row>
                    
                </Container>
                <Container style={themeContentFrame[theme]}>
                <h1 style={{paddingBottom:'0.5em', fontFamily:'Montse'}}>
                            Vector Illustration
                        </h1>
                    <Row className='thumbnails'>
                        <div>
                        {isMobile || isTablet ? (
                            <Carousel>
                            <Carousel.Item data-bs-toggle="modal" data-bs-target="#martaModal" interval={null}
                                    onClick={() => handleImageClick("assets/img/marta640.PNG", '', 0)}  >
                                <Image id="martaModal" src="assets/img/marta1.PNG" rounded className="img-fluid"  />
                            </Carousel.Item>
                            <Carousel.Item data-bs-toggle="modal" data-bs-target="#abModal" interval={null}
                                    onClick={() => handleImageClick("assets/img/ab640.png", '', 1)}  >
                                <Image id="abModal" src="assets/img/ab.PNG" rounded className="img-fluid"  />
                            </Carousel.Item>
                            <Carousel.Item data-bs-toggle="modal" data-bs-target="#noobModal" interval={null}
                                    onClick={() => handleImageClick("assets/img/noob640.png", '', 2)}  >
                                <Image id="noobModal" src="assets/img/noob.png" rounded className="img-fluid"  />
                            </Carousel.Item>
                            </Carousel>
                        ) : (
                            <Container>
                            <Row >
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#martaModal"
                                    onClick={() => handleImageClick("assets/img/marta640.PNG", '', 0)}>
                                    <Image id="martaModal" src="assets/img/marta1.PNG" rounded className="img-fluid" />
                                </div>
                                </Col>
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#abModal"
                                    onClick={() => handleImageClick("assets/img/ab640.png", '', 1)}>
                                    <Image id="abModal" src="assets/img/ab.PNG" rounded className="img-fluid"/>
                                </div>
                                </Col>
                                <Col>
                                <div className="image-wrapper" data-bs-toggle="modal" data-bs-target="#noobModal"
                                    onClick={() => handleImageClick("assets/img/noob640.png", '', 2)}>
                                    <Image id="noobModal" src="assets/img/noob.png" rounded className="img-fluid"/>
                                </div>
                                </Col>
                            </Row>
                            </Container>
                            
                        )}

                        </div>
                    </Row>
                        <h1 style={{paddingTop:'1em', paddingBottom:'0.5em', fontFamily:'Montse'}}>
                            Drone footage
                        </h1>
                    <Row  >
                        <YouTube videoId={videoId} opts={opts} />
                    </Row>
                </Container>
                <Container  id='contact' style={themeContentFrame[theme]}>
                    
                        <ContactForm />
                </Container>
               
                
        </Container>
    <Row>
        
        <ShowModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        src={selectedImage?.src}
        alt={selectedImage?.alt}
        ind={selectedImage?.ind}
        isMobile={isMobile}
        isTablet={isTablet}
      />
    </Row>
    <Row>
        <Container className='footerContainer'
            style={themeFooterFrame[theme]}>
            <Col style={{display:'flex',
                flexDirection:'column',
                contentAlign:'center',
                color:'#F2D64B',
                
                }}>
                <h5>LOCATION</h5>
                <h6 style={{color:'white'}}>Malaga - Spain <br /> (29003)</h6>

            </Col>
            <Col style={{display:'flex',
                flexDirection:'column',
                contentAlign:'center',
                color:'#F2D64B',
                }}>
                <h5>AROUND THE WEB</h5>
                <Link to="https://www.linkedin.com/in/juli%C3%A1n-alberti-vargas-122651238/" target="_blank"> 
                <Container style={{color:'white'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="svgIcons" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" ></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
                </Container>
                 </Link>
            </Col>
            <Col style={{display:'flex',
                flexDirection:'column',
                contentAlign:'center',
                color:'#F2D64B',
                }}>
                <h6>By me - 2023 <br />
                Under construction <br />
                </h6> 
                <h6 style={{color:'white'}}>julialberti666@gmail.com</h6>
            </Col>
        </Container>
        
    </Row>
    </Container>
    </BrowserRouter>
    </ThemeContext.Provider>
  </>
)

}
