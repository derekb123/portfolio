import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Title from './Title';
import Project from './Project';


const Projects = () => {

  return (
    <section className="projects">
      <Container className='projects-info'>
        <Title title='Projects'/>
        <Row>
          <Fade left={true} duration={1200} delay={400} distance='50px'>
            <Project name='Regeneroot' />
          </Fade>
        </Row>
        <Row>
          <Fade left={true} duration={1200} delay={400} distance='50px'>
            <Project name='Rest-O' />
          </Fade>
        </Row>
        <Row>
          <Fade left={true} duration={1200} delay={400} distance='50px'>
            <Project name='Scheduler' />
          </Fade>
        </Row>
      </Container>
    </section>
  )
}

export default Projects;