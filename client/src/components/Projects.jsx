import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Title from './Title';
import Project from './Project';
import regeneroot3 from '../images/regeneroot3.gif'
import resto from '../images/resto.png'
import scheduler from '../images/scheduler.png'


const Projects = () => {

  return (
    <section className="projects">
      <Container className="projects">
        <Title title='Projects'/>
        <Row>
            <Project name='Regeneroot' image={regeneroot3} />
        </Row>
        <Row>
          {/* <Fade top={true} duration={1200} delay={400} distance='50px'> */}
            <Project name='Rest-O' image={resto}/>
          {/* </Fade> */}
        </Row>
        <Row>
          {/* <Fade top={true} duration={1200} delay={400} distance='50px'> */}
            <Project name='Scheduler' image={scheduler}/>
          {/* </Fade> */}
        </Row>
      </Container>
    </section>
  )
}

export default Projects;