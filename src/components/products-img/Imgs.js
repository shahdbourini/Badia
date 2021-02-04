import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import visue from '../../images/visue.png';
import './style-imgs.css';
import { Row, Col } from 'antd';

function Imgs(props) {
  return (
    <div className="st-img">
      <Row style={{ paddingTop: `166px`, marginBottom: `170px` }}>
        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 5, offset: 5 }}
        >
          <div className="counters" style={{ height: '195px' }}>
            <img
              src={p1}
              alt="img"
              style={{
                width: '59%',
                position: 'relative',
                top: '82px',
                left: '37px',
              }}
            />
          </div>
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters" style={{ height: '195px' }}>
            <img
              src={p2}
              alt="img"
              style={{
                width: '59%',
                position: 'relative',
                top: '82px',
                left: '37px',
              }}
            />
          </div>
        </Col>

        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div className="counters" style={{ height: '195px' }}>
            <img
              src={visue}
              alt="img"
              style={{
                width: '53%',
                position: 'relative',
                top: '43px',
                left: '45px',
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Imgs;
