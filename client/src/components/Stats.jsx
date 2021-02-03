import React from 'react';
import StatBar from './StatBar';
import { Container} from 'react-bootstrap';

const Stats = () => {
  return(
    <Container>
      <StatBar delayTime={1000} label='Javascript' amount='7'/>
      <StatBar delayTime={1250} label='React.js' amount='6'/>
      <StatBar delayTime={1500} label='Node.js' amount='5'/>
      <StatBar delayTime={1750} label='Express' amount='5'/>
      <StatBar delayTime={2000} label='SQL' amount='4'/>
      <StatBar delayTime={2500} label='HTML' amount='7'/>
      <StatBar delayTime={3000} label='CSS' amount='5'/>
      <StatBar delayTime={3250} label='Jest' amount='4'/>
      <StatBar delayTime={3500} label='Ruby' amount='2'/>
      <StatBar delayTime={3750} label='Rails' amount='1'/>
      <StatBar delayTime={4000} label='C' amount='1'/>
      <StatBar delayTime={4250} label='Adobe CC' amount='7'/>
    </Container>
  )
}

export default Stats;