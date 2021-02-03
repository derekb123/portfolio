import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Title from './Title';
import Stats from './Stats';
import derekImage from '../images/derekImage.png'


const About = () => {

  return (
    <section className="about">
      <Container>
        <Title title='About'/>
        <Row>
          <Col>
            <Fade left={true} duration={1200} delay={400} distance='50px'>
              <div className='about-info'>
                <div className='about-info-top'>
                    <img className='derek-image' src={ derekImage } height={300} alt='this is Dereks face'/>
                    {/* <p className='about-info-text'>
                      {'I have an ecclectic technical and creative background which has taught me many things. Through my previous career in architecture and design, I have learned a great deal about technical problem solving, forming innovative solutions, and working in various dynamics with different personalities.'}
                    </p> */}
                </div>
                <div>
                  <p className='about-info-bottom'>
                    {'I bring over a decade of technical, creative, and collaborative experience from architecture and other design roles into full-stack software development.'}
                  </p>
                  <br/>
                  <p className='about-info-bottom'>
                    {'I have a passion for this work, and continuing to take highly complex problems and create beautiful, streamlined, efficient solutions.'}
                  </p>
                </div>
              </div>
            </Fade>
          </Col>
          <Col xs={1}>
          </Col>
          <Col>
           <Stats />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;