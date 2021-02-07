import { NavLink, BrowserRouter, useHistory } from 'react-router-dom';
import './style-nav.css';
function Navbar(props) {
  let history = useHistory();

  // function refreshPage() {
  //   window.location.reload();
  // }
  return (
    <>
      <nav
        id="nav"
        className={`navbar navbar-expand-lg ${props.styleColor}`}
        style={{ paddingTop: `24px`, backgroundColor: `${props.back}` }}
      >
        <a className="navbar-brand" href="#">
          <img src={props.logo} className="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <BrowserRouter>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink
                  onClick={() => history.push('/Badia')}
                  to="/Badia"
                  activeClassName="is-active"
                  className="nav-link"
                  style={{ color: `${props.color}` }}
                >
                  Home
                </NavLink>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: `${props.color}` }}
                >
                  Products
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    className="dropdown-item"
                    onClick={() => history.push('/Products')}
                    to="/Products"
                  >
                    Visubuild
                  </NavLink>

                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Imvepe
                  </a>
                </div>
              </li>

              <li class="nav-item">
                <NavLink
                  onClick={() => history.push('/About')}
                  to="/About"
                  activeClassName="is-active"
                  className="nav-link"
                  style={{ color: `${props.color}` }}
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  onClick={() => history.push('/contact')}
                  to="/contact"
                  activeClassName="is-active"
                  className="nav-link"
                  style={{ color: `${props.color}` }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </BrowserRouter>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
