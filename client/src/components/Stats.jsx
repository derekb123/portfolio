import React from 'react';
import StatBar from './StatBar';
import { Container} from 'react-bootstrap';

const Stats = () => {
  return(
    <Container>
      <StatBar delayTime={300} label='Javascript' amount='7'/>
      <StatBar delayTime={400} label='React.js' amount='6'/>
      <StatBar delayTime={500} label='Node.js' amount='5'/>
      <StatBar delayTime={600} label='Express' amount='5'/>
      <StatBar delayTime={700} label='SQL' amount='4'/>
      <StatBar delayTime={800} label='HTML' amount='7'/>
      <StatBar delayTime={900} label='CSS' amount='5'/>
      <StatBar delayTime={1000} label='Jest' amount='4'/>
      <StatBar delayTime={1100} label='Ruby' amount='2'/>
      <StatBar delayTime={1200} label='Rails' amount='1'/>
      <StatBar delayTime={1300} label='C' amount='1'/>
      <StatBar delayTime={1400} label='Adobe CC' amount='7'/>
    </Container>
  )
}
export default Stats;