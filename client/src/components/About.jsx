import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Stats from './Stats';
import derekImage from '../images/derekImage.png'


const About = () => {

  return (
    <section className="about">
      <Container>
        <Row>
          <Col className='about-info'>
            <h2 className='comp-title1'>
              About
            </h2>
              <div >
                <div className='about-info-top'>
                    <img className='derek-image' src={ derekImage } height={300} alt='this is Dereks face'/>
                    {/* <p className='about-info-text'>
                      {'I have an ecclectic technical and creative background which has taught me many things. Through my previous career in architecture and design, I have learned a great deal about technical problem solving, forming innovative solutions, and working in various dynamics with different personalities.'}
                    </p> */}
                </div>
                <div>
                  <Fade left={true} duration={1200} delay={400} distance='50px'>
                  <p className='about-info-bottom'>
                    {'I bring over a decade of technical, creative, and collaborative experience from various architectural and design roles into full-stack software development.'}
                  </p>
                  <br/>
                  <p className='about-info-bottom'>
                    {'I am very passionate about this work and translating complex problems into beautiful, innovative, and efficient solutions.'}
                  </p>
                  </Fade>
                </div>
              </div>
          </Col>
          <Col xs={1}>
          </Col>
          <Col className='about-skills'>
            <h2 className='comp-title1'>
              Skills
            </h2>
            <Stats />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;