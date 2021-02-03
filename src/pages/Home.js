import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Main from '../components/main-img/Main.js';
import About from '../components/about/About.js';
import Slide from '../components/slider/Slide';
import Partners from '../components/partners/Partners';
import Count from '../components/counters/Count';
// import Footer from '../components/footer/Footer';

function Home(props) {
  return (
    <>
      {/* <Navbar /> */}
      <Main />
      <About />
      <Slide />
      <Partners />
      <Count />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
