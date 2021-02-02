import React from 'react';
import StatBar from './StatBar';
import { Container} from 'react-bootstrap';

const Stats = () => {
  return(
    <Container>
      <StatBar delayTime='1000' label='Javascript' amount='7'/>
      <StatBar delayTime='1500' label='React.js' amount='6'/>
      <StatBar delayTime='2000' label='Node.js' amount='5'/>
      <StatBar delayTime='2500' label='Express' amount='5'/>
      <StatBar delayTime='3000' label='SQL' amount='4'/>
      <StatBar delayTime='3500' label='HTML' amount='7'/>
      <StatBar delayTime='4500' label='CSS' amount='5'/>
      <StatBar delayTime='5000' label='Jest' amount='4'/>
      <StatBar delayTime='5500' label='Ruby' amount='2'/>
      <StatBar delayTime='6000' label='Rails' amount='1'/>
    </Container>
  )
}

export default Stats;