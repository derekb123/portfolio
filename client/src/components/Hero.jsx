import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Fade } from 'react-reveal';
import heroImage from '../images/heroImage.jpg'


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
                <br />
                I'm a 
                <br />
                full-stack
                <br />
                developer.
              </h1>
            </Fade>
          </Col>
          <Col>
          </Col>
          <Col>
          <Fade right={true} duration={1200} delay={400} distance='50px'>
              <img src={ heroImage } alt='this is a cowboy riding a computer mouse'/>
            </Fade>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Hero;