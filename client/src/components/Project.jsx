import React from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import { Flip} from 'react-reveal';
import Subtitle from './Subtitle';


const Project = ({name, image, text, demo, demoPath, githubPath}) => {

  return (
    <Container className='project'>
        <Row className='projects-info'>
            <Subtitle subtitle={name}/>
            <Flip top={true} duration={1300} delay={400} distance='30px'>
              <img className='projects-image' src={ image } alt='this is an amazing project'/>
            </Flip>
            <Row className='projects-buttons'>
                {demo &&
                   <Button variant='secondary' className='project-button' onClick={() => window.open(demoPath)}>demo</Button>
                }
                <Button variant='secondary' className='project-button' onClick={() => window.open(githubPath)}>github</Button>
            </Row>
            <p className='projects-info-text'>
              {text}
            </p>
      </Row>
    </Container>
  )
}

export default Project;