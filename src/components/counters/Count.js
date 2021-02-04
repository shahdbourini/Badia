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
    <div id="counters" className="back cs">
      <Row style={{ paddingTop: `166px` }}>
        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 5, offset: 5 }}
        >
          <div className="counters">
            <img src={count1} alt="img" />
            {/* <h1>6</h1> */}
            <h1 style={{ top: `-35px` }}>
              <CountUp end={9} delay={5} />
            </h1>
          </div>
          <div className="title-count">
            <h4>Products</h4>
            <div className="count-line"></div>
          </div>
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters">
            <img src={count2} alt="img" />
            {/* <h1>15</h1> */}
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
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters">
            <img src={count3} alt="img" />
            {/* <h1>12</h1> */}
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
      <div className="down-arrow arr5" style={{ cursor: `pointer` }}>
        <Link to="nav" spy={true} smooth={true}>
          <img src={top} />
        </Link>
      </div>
    </div>
  );
}

export default Count;
