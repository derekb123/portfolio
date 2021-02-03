import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Fade } from 'react-reveal';
import heroImage from '../images/heroImage.png'


const Hero = () => {

  return (
    <section className="hero">
      <Container>
        <Row>
          <Col>
            <Fade left={true} duration={1200} delay={400} distance='50px'>
              <h1 className="hero-title">
                Hello, I'm
                <br />
                <span className="hero-accent"> Derek Butvin</span>
                .
              </h1>
            </Fade>
            <Fade left={true} duration={1700} delay={1500} distance='50px'>
              <h1 className="hero-title">
                I'm a
                <br />
                full-stack
                <br />
                developer.
              </h1>
            </Fade>
          </Col>
          <Col xs={1}>
          </Col>
          <Col>
          <Fade right={true} duration={1700} delay={1500} distance='50px'>
              <img src={ heroImage } alt='this is a cowboy riding a computer mouse'/>
            </Fade>
          </Col>
        </Row>
        <Row className='hero-arrow'>
          <Fade bottom={true} duration={1200} delay={2400} distance='50px'>
            <p><i className='arrow down'></i></p>
          </Fade>
        </Row>
      </Container>
    </section>
  )
}

export default Hero;