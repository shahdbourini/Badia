import './style-partner.css';
import { Row, Col } from 'antd';
import part1 from '../../images/part1.png';
import part2 from '../../images/part2.png';
import part3 from '../../images/part3.png';
import part4 from '../../images/part4.png';
import part5 from '../../images/part5.png';
import part6 from '../../images/part6.png';
import arrow from '../../images/main-arrow.svg';
import { Link } from 'react-scroll';

function Partners(props) {
  return (
    <div className="back " id="partners">
      <div className="title-part">
        <h2>Ecosystem PARTNERS</h2>
        <div className="part-line"></div>
      </div>
      <Row
        gutter={[0, 64]}
        style={{ paddingLeft: `20%`, height: `446px` }}
        className="part-img st3"
      >
        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
        >
          <img src={part1} alt="img" />
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
        >
          <img src={part2} alt="img" />
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
        >
          <img src={part3} alt="img" />
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
        >
          <img src={part4} alt="img" />
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
        >
          <img src={part5} alt="img" />
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
        >
          <img src={part6} alt="img" />
        </Col>
      </Row>
      <div className="down-arrow arr4" style={{ cursor: `pointer` }}>
        <Link to="counters" spy={true} smooth={true}>
          <img src={arrow} />
        </Link>
      </div>
    </div>
  );
}

export default Partners;
