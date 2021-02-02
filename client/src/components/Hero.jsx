import React from 'react';
import {Container} from 'react-bootstrap';
import { Fade } from 'react-reveal';


const Hero = () => {

  return (
    <section className="hero">
      <Container>
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
      </Container>
    </section>
  )
}

export default Hero;