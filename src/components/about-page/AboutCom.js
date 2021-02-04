import { Row, Col } from 'antd';
import './style-aboutCom.css';

function AboutCom(props) {
  return (
    <>
      <Row style={{ paddingTop: `80px` }}>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 18, offset: 2 }}
          md={{ span: 18, offset: 2 }}
          lg={{ span: 18, offset: 2 }}
        >
          <div className="aboutPar">
            <h1
              style={{
                color: `${props.color1}`,
              }}
            >
              {props.title}{' '}
              <bold style={{ color: '#94C529' }}>{props.color}</bold>
            </h1>
            <div className="line-about2"></div>
            <p>{props.par}</p>
            <p>{props.par2}</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AboutCom;
