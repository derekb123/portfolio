import React from 'react';
import { Fade } from 'react-reveal';

const Title = ({ title }) => {

  return(
    <Fade top duration={1200} delay={200} distance="20px">
    <h2 className="comp-title">
      { title }
    </h2>
  </Fade>
  )
}

export default Title;