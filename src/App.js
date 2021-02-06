import Slide from './components/slider/Slide';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/Contact';
import Footerr from './components/footer/Footerr';
import black from './images/black-logo.svg';
import logo from './images/logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Badia">
            <Navbar
              logo={logo}
              back="white"
              color="black"
              styleColor="navbar-light"
            />
            <Home />
          </Route>

          <Route exact path="/Products">
            <Navbar
              logo={logo}
              back="white"
              color="black"
              styleColor="navbar-light"
            />
            <Products />
          </Route>

          <Route exact path="/About">
            <Navbar
              logo={logo}
              back="white"
              color="black"
              styleColor="navbar-light"
            />
            <About />
          </Route>

          <Route exact path="/Contact">
            <Navbar
              logo={black}
              back="black"
              color="white"
              styleColor="navbar-dark"
            />
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footerr />
    </>
  );
}

export default App;
