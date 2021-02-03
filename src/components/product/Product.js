import './style-product.css';
import { Row, Col } from 'antd';
import visue from '../../images/visue.png';
import trans from '../../images/trans.svg';

function Products(props) {
  return (
    <>
      <Row style={{ paddingTop: `75px` }}>
        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 7, offset: 3 }}
        >
          <div className="product">
            <img src={visue} />
          </div>
        </Col>
        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 1 }}
        >
          <div className="product-par">
            <p>
              A no-code software development house that help businesses and
              entrepreneurs take their solutions live in a fraction of cost and
              with a well-tested nice looking UX/UI with a quick version in less
              than 48 hours.
            </p>
          </div>

          <span className="span-product">Visubuild.com</span>
          <div className="line-product"></div>
        </Col>
      </Row>
    </>
  );
}

export default Products;
