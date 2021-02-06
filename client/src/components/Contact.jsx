import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import ContactItem from './ContactItem';
import { ImLinkedin, ImGithub, ImMail, ImPacman  } from "react-icons/im";
import { IconContext } from "react-icons";


const Contact = () => {

  return (
    <section className='contact'>
      <Container className='contact'>
      <h2 className='comp-title2'>
        Connect
      </h2>
        <Row classname='contact-row'>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div onClick = {() => window.open("mailto:derekbutvin@gmail.com")}>
                <ImMail />
              </div>
            </IconContext.Provider>
            <div className='contact-text' >
              derekbutvin@gmail.com
            </div>
          </Col>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div onClick={() => window.open('https://www.linkedin.com/in/derekbutvin/')}>
                <ImLinkedin />
              </div>
            </IconContext.Provider>
            <div className='contact-text'>
              derekbutvin
            </div>
          </Col>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div onClick={() => window.open('https://github.com/derekb123')}>
                <ImGithub />
              </div>
            </IconContext.Provider>
            <div className='contact-text'>
              derekb123
            </div>
          </Col>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div onClick={() => window.open('https://dsbutvin.myportfolio.com/')}>
                <ImPacman />
              </div>
            </IconContext.Provider>
            <div className='contact-text'>
              design_portfolio
            </div>
          </Col>
        </Row>
        <Row className='thank-you-text'>
          Thank you for visiting!
        </Row>
        <Row className='footer-text'>
          This site was built with React.js. 
          <br/>
          {/* (And will include more state management in the future :)) */}
        </Row>
      </Container>
    </section>
  )
}

export default Contact;