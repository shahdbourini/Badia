import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import visue from '../../images/visue.png';
import './style-imgs.css';
import { Row, Col } from 'antd';

function Imgs(props) {
  return (
    <div className="st-img">
      <Row className="products-style" gutter={[0, 16]}>
        <Col
          xs={{ span: 15, offset: 8 }}
          sm={{ span: 5, offset: 2 }}
          md={{ span: 6, offset: 2 }}
          lg={{ span: 5, offset: 5 }}
        >
          <div className="counters img-pro">
            <img src={p1} alt="img" />
          </div>
        </Col>

        <Col
          xs={{ span: 15, offset: 8 }}
          sm={{ span: 5, offset: 2 }}
          md={{ span: 6, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters img-pro">
            <img src={p2} alt="img" />
          </div>
        </Col>

        <Col
          xs={{ span: 15, offset: 8 }}
          sm={{ span: 5, offset: 2 }}
          md={{ span: 6, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters last-img">
            <img src={visue} alt="img" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Imgs;
