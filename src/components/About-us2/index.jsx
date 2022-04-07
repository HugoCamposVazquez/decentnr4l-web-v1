import React from 'react';
import { render } from 'react-dom';
import { AnimatedBg, Transition } from 'scroll-background';
import Card from '../About-with-skills';

function Example() {
  return (
    <AnimatedBg>
    <div style={{ height: '10px' }} />
    <Transition height="10px" from="#21325E" to="#21325E" position={0.75}/>
    <div style={{ height: '400px' }} />
    <Transition height="400px" from="#21325E" to="#FFF" position={1}>
    </Transition>
  </AnimatedBg>
  )
}

export default Example



