import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './style-footer.css';

function Footer(props) {
  return (
    <>
      <Row style={{ paddingTop: `75px` }} className="footer">
        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 5, offset: 9 }}
        >
          <div className="icons">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <p style={{ color: '#94c529' }}>
            Home . Products . About . Contact Us
          </p>
          <p
            style={{
              color: '#9d9d9d',
              position: `relative`,
              top: `-14px`,
              left: `11% `,
            }}
          >
            8000-150, faro, PORTUGAL
          </p>
          <p
            style={{
              color: '#9d9d9d',
              position: `relative`,
              top: `-29px`,
              left: `18% `,
              fontSize: `11px`,
            }}
          >
            © 2020 BADIAVENTURES
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
