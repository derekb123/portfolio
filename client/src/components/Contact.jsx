import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import ContactItem from './ContactItem';
import { ImLinkedin, ImGithub, ImMail, ImPacman  } from "react-icons/im";
import { IconContext } from "react-icons";


const Contact = () => {

  return (
    <section className='contact'>
      <Container className='contact'>
        <Title title='Connect'/>
        <Row classname='contact-row'>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div>
                <ImMail />
              </div>
            </IconContext.Provider>
            <div className='contact-text'>
              derekbutvin@gmail.com
            </div>
          </Col>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div>
                <ImLinkedin />
              </div>
            </IconContext.Provider>
            <div className='contact-text'>
              derekbutvin
            </div>
          </Col>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div>
                <ImGithub />
              </div>
            </IconContext.Provider>
            <div className='contact-text'>
              derekb123
            </div>
          </Col>
          <Col className='contact-item' xs={3}>
            <IconContext.Provider value={{ size: '3em', color: "rgb(99, 126, 141)", className: "contact-icon" }}>
              <div>
                <ImPacman />
              </div>
            </IconContext.Provider>
            <div className='contact-text'>
              dsbutvin.myportfolio.com
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;