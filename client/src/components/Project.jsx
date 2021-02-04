import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { Flip} from 'react-reveal';
import Subtitle from './Subtitle';


const Project = ({name, image, text}) => {

  return (
    <Container className='project'>
      <Row>
        <Row className='projects-info'>
          <Flip top={true} duration={1300} delay={400} distance='30px'>
            <Subtitle subtitle={name}/>
          </Flip>
            <p className='projects-info-text'>
              {text}
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