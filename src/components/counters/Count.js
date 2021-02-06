import './style-count.css';
import { Row, Col } from 'antd';
import CountUp from 'react-countup';
import count1 from '../../images/count1.svg';
import count2 from '../../images/count2.svg';
import count3 from '../../images/count3.svg';
import top from '../../images/top-arrow.svg';
import { Link } from 'react-scroll';

function Count(props) {
  return (
    <div id="counters" className="back backCounter cs">
      <Row className="position-counter">
        <Col
          xs={{ span: 15, offset: 8 }}
          sm={{ span: 3, offset: 5 }}
          md={{ span: 5, offset: 5 }}
          lg={{ span: 5, offset: 6 }}
        >
          <div className="counters">
            <img src={count1} alt="img" />
            <h1 className="first-count">
              <CountUp end={9} delay={5} />
            </h1>
          </div>
          <div className="title-count">
            <h4>Products</h4>
            <div className="count-line"></div>
          </div>
        </Col>

        <Col
          xs={{ span: 15, offset: 8 }}
          sm={{ span: 3, offset: 3 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters">
            <img src={count2} alt="img" />
            <h1>
              <CountUp end={15} delay={5} />
            </h1>
          </div>
          <div className="title-count">
            <h4>Partners</h4>
            <div className="count-line"></div>
          </div>
        </Col>

        <Col
          xs={{ span: 15, offset: 8 }}
          sm={{ span: 3, offset: 3 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters">
            <img src={count3} alt="img" />
            <h1>
              <CountUp end={12} delay={5} />
            </h1>
          </div>
          <div className="title-count">
            <h4>Team</h4>
            <div className="count-line line3"></div>
          </div>
        </Col>
      </Row>
      <div className="arr5" style={{ cursor: `pointer` }}>
        <Link to="nav" spy={true} smooth={true}>
          <img src={top} />
        </Link>
      </div>
    </div>
  );
}

export default Count;
