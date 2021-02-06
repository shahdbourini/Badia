import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './style-slide.css';
import img1 from '../../images/img1.svg';
import img2 from '../../images/img2.svg';
import img3 from '../../images/img3.svg';
import img4 from '../../images/img4.svg';
import img5 from '../../images/img5.svg';
import arrow from '../../images/main-arrow.svg';
import { Link } from 'react-scroll';

function Slide(props) {
  var settings = {
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots',
  };
  return (
    <div className="back" id="slide">
      <div className="arr2" style={{ cursor: `pointer` }}>
        <Link to="partners" spy={true} smooth={true} zz>
          <img src={arrow} />
        </Link>
      </div>
      <div className="container">
        <div className="position-list">
          <ul className="list">
            <li>Fintech</li>
            <div className="line-slide"></div>
            <li>Restaurant</li>
            <li>Saas</li>
          </ul>
        </div>
        <Slider {...settings}>
          <div>
            <Row className="slide-height">
              <Col
                xs={{ span: 4, offset: 4 }}
                sm={{ span: 4, offset: 3 }}
                md={{ span: 4, offset: 2 }}
                lg={{ span: 4, offset: 4 }}
              >
                <div className="line"></div>
                <div className="slide-details1">
                  <p>
                    Select theme, identify clusters, research segments, map
                    options and develop PoV/Pitch.
                  </p>
                </div>
              </Col>

              <Col
                xs={{ span: 8, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 12, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
              >
                <div className="rounded-img">
                  <img src={img5} />
                </div>
              </Col>

              <Col
                xs={{ span: 5, offset: 0 }}
                sm={{ span: 5, offset: 0 }}
                md={{ span: 5, offset: 0 }}
                lg={{ span: 5, offset: 0 }}
              >
                <div className="slide-details">
                  <h1>Select</h1>
                  <p>
                    Select theme, identify clusters, research segments, map
                    options and develop PoV/Pitch.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col
                xs={{ span: 9, offset: 5 }}
                sm={{ span: 12, offset: 5 }}
                md={{ span: 12, offset: 5 }}
                lg={{ span: 9, offset: 8 }}
              >
                <div className="rounded-img">
                  <img src={img2} />
                </div>
              </Col>
              <Col
                xs={{ span: 8, offset: 1 }}
                sm={{ span: 6, offset: 1 }}
                md={{ span: 5, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
              >
                <div className="slide-details">
                  <h1>Ideate</h1>
                  <p>
                    Select theme, identify clusters, research segments, map
                    options and develop PoV/Pitch.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col
                xs={{ span: 11, offset: 4 }}
                sm={{ span: 12, offset: 5 }}
                md={{ span: 12, offset: 5 }}
                lg={{ span: 9, offset: 8 }}
              >
                <div className="rounded-img">
                  <img src={img3} />
                </div>
              </Col>
              <Col
                xs={{ span: 6, offset: 1 }}
                sm={{ span: 5, offset: 1 }}
                md={{ span: 4, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
              >
                <div className="slide-details">
                  <h1>Validate</h1>
                  <p>
                    Deep dive into customer needs / pain points, design
                    solutions, craft value proposition, develop MVP, test
                    prototype, gather feedback, validate & revise.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col
                xs={{ span: 10, offset: 4 }}
                sm={{ span: 12, offset: 5 }}
                md={{ span: 12, offset: 5 }}
                lg={{ span: 9, offset: 8 }}
              >
                <div className="rounded-img">
                  <img src={img4} />
                </div>
              </Col>
              <Col
                xs={{ span: 6, offset: 1 }}
                sm={{ span: 5, offset: 1 }}
                md={{ span: 4, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
              >
                <div className="slide-details">
                  <h1>Seed</h1>
                  <p>
                    Detail plans, recruit, identify funding needs, allocate
                    initial capital, setup Ops and go to market.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col
                xs={{ span: 10, offset: 4 }}
                sm={{ span: 12, offset: 5 }}
                md={{ span: 12, offset: 5 }}
                lg={{ span: 9, offset: 8 }}
              >
                <div className="rounded-img">
                  <img src={img1} />
                </div>
              </Col>
              <Col
                xs={{ span: 6, offset: 1 }}
                sm={{ span: 5, offset: 1 }}
                md={{ span: 4, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
              >
                <div className="slide-details">
                  <h1>Scale</h1>
                  <p>
                    Pitch venture, raise capital, recruit talent, execute on
                    plan, report on progress, track financials and funding
                    needs.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
