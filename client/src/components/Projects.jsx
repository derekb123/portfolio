import React from 'react';
import {Container, Row} from 'react-bootstrap';
// import { Fade } from 'react-reveal';
import Title from './Title';
import Project from './Project';
import regeneroot3 from '../images/regeneroot3.gif'
import resto from '../images/resto.png'
import scheduler from '../images/scheduler.png'


const Projects = () => {

  return (
    <section className="projects">
      <Container className="projects">
        <h2 className='comp-title2'>
          Projects
        </h2>
        <Row>
            <Project 
            name='Regeneroot' 
            image={regeneroot3} 
            demo={true}
            demoPath='https://regeneroot3.netlify.app/'
            githubPath='https://github.com/derekb123/regeneroot3'
            text='A full-stack web app that helps urban farmers connect with land owners who would like to lease their land (essentially an Airbnb for urban farmers!). Gardeners can log in, search lots in various ways, message owners, and checkout a lease agreement. Owners can login, create, edit, delete and manage their properties. This was a group project (with 2 other team members) built in less than 2 weeks.'
            secondText='(Only search for Edmonton, Canada, and Langley, Canada in the demo :))'
            />
        </Row>
        <Row>
          {/* <Fade top={true} duration={1200} delay={400} distance='50px'> */}
            <Project 
            name='Rest-O' 
            image={resto}
            githubPath='https://github.com/derekb123/LHL-Midterm'
            text='RestO! is your friendly food ordering web application, which allows users to place orders and receive SMS notifications about their order status. It was a group project (with 2 other team members) built in one week using Node, Express, PSQL, Twilio, JavaScript, jQuery, HTML and SASS. My main contributions were to the backend routing, database interaction, and the frontend requests for the cart functions.'
            />
          {/* </Fade> */}
        </Row>
        <Row>
          {/* <Fade top={true} duration={1200} delay={400} distance='50px'> */}
            <Project 
            name='Scheduler' 
            image={scheduler}
            githubPath='https://github.com/derekb123/scheduler'
            text='An app to facilitate a student scheduling an interview appointment with an interviewer on a specific time and day of the week. I worked to implement the React components and the testing.'
            />
          {/* </Fade> */}
        </Row>
      </Container>
    </section>
  )
}

export default Projects;