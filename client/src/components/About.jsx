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
                    <p className='about-info-text'>
                      {'Through my initial background in architecture, I worked with many different teams on various projects to take highly complex problems and create beautiful, streamlined, efficient solutions under challenging deadlines. These experiences taught me a great deal about technical problem solving, design, and working in various dynamics with different personalities.'}
                    </p>
                </div>
                <div>
                  <p className='about-info-bottom'>
                    {'I finally decided to further pursue my passion for programming, discovered initially through parametric design, and fueled by my desire to harness the power of code while working in tech-roles. I recently completed a 12-week immersive web development bootcamp at Lighthouse Labs. In that time, I was able to build multiple responsive and tested full-stack web applications. My capstone project, a sort of “Airbnb” for connecting urban farmers with land owners, was built in under 2 weeks using React, Express, Node.js, and  Postgresql.'}
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