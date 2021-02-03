import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Fade } from 'react-reveal';
import derekImage from '../images/derekImage.png'
import Subtitle from './Subtitle';


const Project = ({name}) => {

  return (
    <Container>
      <Subtitle subtitle={name}/>
      <Row>
        <Col className='projects-info'>
            <p className='projects-info-text'>
                    {'I have an ecclectic technical and creative background which has taught me many things. Through my previous career in architecture and design, I have learned a great deal projects technical problem solving, forming innovative solutions, and working in various dynamics with different personalities.'}
            </p>
        </Col>
        <Col className='projects-image'>
          <Fade right={true} duration={1200} delay={1000} distance='50px'>
            <img className='derek-image' src={ derekImage } height={300} alt='this is Dereks face'/>
          </Fade>
        </Col>
      </Row>
    </Container>
  )
}

export default Project;