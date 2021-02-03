import React from 'react';
// import { Flip } from 'react-reveal';

const Title = ({ title }) => {

  return(
    // <Flip top duration={1200} delay={200} distance="20px">
    <h2 className="comp-title">
      { title }
    </h2>
  // </Flip>
  )
}

export default Title;