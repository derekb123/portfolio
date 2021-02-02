import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Fade } from 'react-reveal';

const StatBar = ({label, amount, delayTime}) => {

  return (
      <Container className='stat-bar'>
        <Fade left={true} duration={1200} delay={delayTime} distance='50px'>
            <Row>
              <Col xs={5} className='stat-bar-label'>
                <h3>
                  {label}
                </h3>
              </Col>
              <Col xs={amount} className='stat-bar-amount'>
              </Col>
              <Col className='stat-bar-void'>
              </Col>
            </Row>
        </Fade>
      </Container>
  )
}

export default StatBar;