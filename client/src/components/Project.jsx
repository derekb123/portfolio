import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { Flip} from 'react-reveal';
import Subtitle from './Subtitle';


const Project = ({name, image}) => {

  return (
    <Container className='project'>
      <Row>
        <Row className='projects-info'>
          <Flip top={true} duration={1300} delay={400} distance='30px'>
            <Subtitle subtitle={name}/>
          </Flip>
            <p className='projects-info-text'>
                    {'I have an ecclectic technical and creative background which has taught me many things. Through my previous career in architecture and design, I have learned a great deal projects technical problem solving, forming innovative solutions, and working in various dynamics with different personalities.'}
            </p>
        </Row>
        <Row className='projects-image'>
          {/* <Fade bottom={true} duration={1000} delay={400} distance='60px' className='projects-image'> */}
            <img className='projects-image' src={ image } alt='this is an amazing project'/>
          {/* </Fade> */}
        </Row>
      </Row>
    </Container>
  )
}

export default Project;