import React from 'react';
import { Container, Row} from 'react-bootstrap';

const ContactItem = ({icon, text}) => {

  return (
      <Container className='contact-item'>
        <Row>
         <icon />
        </Row>
        <Row>
          <text />
        </Row>
      </Container>
  )
}

export default ContactItem;