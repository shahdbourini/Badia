import React from 'react';
import Main from '../components/main-img/Main.js';
import About from '../components/about/About.js';
import Slide from '../components/slider/Slide';
import Partners from '../components/partners/Partners';
import Count from '../components/counters/Count';

function Home(props) {
  return (
    <>
      <Main />
      <About />
      <Slide />
      <Partners />
      <Count />
    </>
  );
}

export default Home;
