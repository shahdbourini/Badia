import { Row, Col, Button } from 'antd';
import lamp from '../../images/lamp.svg';
import background from '../../images/background.svg';
import arrow from '../../images/main-arrow.svg';
import './style-main.css';

function Main(props) {
  return (
    <div className="col-img">
      <Row style={{ marginTop: `20px` }}>
        <Col
          xs={{ span: 8, offset: 2 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 3 }}
        >
          <div className="left">
            <p>
              A <bold style={{ color: '#94C529' }}>Venture Builder </bold> Built
              On Proof<bold style={{ color: '#94C529' }}>. </bold>
            </p>
            <Button>Let's talk</Button>
            <Button className="scd-btn">More info</Button>
          </div>
          <div className="main-arrow">
            <img src={arrow} />
          </div>
          <p className="about">WHO WE ARE</p>
          <div className="under-line"></div>
        </Col>

        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 9, offset: 0 }}
          lg={{ span: 7, offset: 0 }}
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
