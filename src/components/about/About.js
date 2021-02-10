import { Row, Col } from 'antd';
import about1 from '../../images/about1.svg';
import about2 from '../../images/about2.svg';
import about3 from '../../images/about3.svg';
import lineA from '../../images/about-line.svg';
import green from '../../images/green-line.svg';
import arrow from '../../images/main-arrow.svg';
import { Link } from 'react-scroll';
import './style-about.css';

function About(props) {
  return (
    <div className="back1" id="about">
      {/* <div className="main-arrow2" style={{ cursor: `pointer` }}>
        <Link to="slide" spy={true} smooth={true}>
          <img src={arrow} />
        </Link>
      </div> */}
      <Row className="about-row">
        <Col
          xs={{ span: 18, offset: 5 }}
          sm={{ span: 9, offset: 5 }}
          md={{ span: 10, offset: 5 }}
          lg={{ span: 10, offset: 5 }}
        >
          <div className="wwa">
            <h1>
              WHO WE <bold style={{ color: '#94C529' }}>ARE</bold>
            </h1>
            <p>
              Co-founded by a group of entrepreneurs and Tech Enthusiasts,
              creating and co-founding new enterprises off the ground by
              leveraging their cumulative knowledge and resources that are
              shared among their ventures. Badia Ventures is a high-paced tech
              startup, where the product is the venture, the prototype is the
              business model, and ‘shipping code’ means perfect and timely
              execution.
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 10, offset: 8 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 7, offset: 2 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="about-images">
            <div>
              <img src={about1} alt="img" className="about1" />
              <img src={lineA} alt="img" className="lineA" />
            </div>
          </div>
          <img src={about2} alt="img" className="about2" />
          <img src={lineA} alt="img" className="lineA line2" />
          <div>
            <div>
              <img src={about3} alt="img" className="about3" />
            </div>
          </div>
        </Col>
      </Row>
      <div className="down-arrow">
        <Link to="slide" spy={true} smooth={true}>
          <img src={arrow} />
        </Link>
      </div>
    </div>
  );
}

export default About;
