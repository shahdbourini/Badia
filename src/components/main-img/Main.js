import { Row, Col, Button } from 'antd';
import lamp from '../../images/lamp.svg';
import arrow from '../../images/main-arrow.svg';
import { Link } from 'react-scroll';
import './style-main.css';
import { NavLink, BrowserRouter, useHistory } from 'react-router-dom';

function Main(props) {
  let history = useHistory();
  return (
    <div className="col-img" id="main">
      <Row className="main-row">
        <Col
          xs={{ span: 8, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 3 }}
        >
          <div className="left">
            <p>
              A <bold style={{ color: '#94C529' }}>Venture Builder </bold> Built
              On Proof<bold style={{ color: '#94C529' }}>. </bold>
            </p>

            <Button onClick={() => history.push('/Contact')}>Let's talk</Button>

            <Button className="scd-btn" onClick={() => history.push('/About')}>
              More info
            </Button>
          </div>
          <div className="main-arrow" style={{ cursor: `pointer` }}>
            <Link to="about" spy={true} smooth={true}>
              <img src={arrow} />
            </Link>
          </div>

          <p className="about">WHO WE ARE</p>
          <div className="under-line"></div>
        </Col>

        <Col
          xs={{ span: 14, offset: 1 }}
          sm={{ span: 12, offset: 1 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
        >
          <div className="main">
            <img src={lamp} />
          </div>
          <div className="name">
            <p>“Startup start here”</p>
            <span>Mosab azizi</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
