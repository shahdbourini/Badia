import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import './style-footer.css';
import { useHistory } from 'react-router-dom';

function Footerr(props) {
  let history = useHistory();

  const { Footer } = Layout;
  return (
    <>
      <Layout className="layout">
        <Footer style={{ textAlign: 'center' }}>
          <i className="fa fa-facebook icons" aria-hidden="true"></i>
          <i className="fa fa-twitter icons" aria-hidden="true"></i>
          <i className="fa fa-linkedin icons" aria-hidden="true"></i>

          <i className="fa fa-envelope icons" aria-hidden="true"></i>
          <p className="p1">
            <a href="/Badia"> Home .</a>
            <a href="/Products"> Products .</a>
            <a href="/About"> About .</a>
            <a href="/Contact"> Contact Us</a>
          </p>
          <p className="p2">8000-150, faro, PORTUGAL</p>
          <p className="p3">© 2020 BADIAVENTURES</p>
        </Footer>
      </Layout>
    </>
  );
}

export default Footerr;
