//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Component
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Error = () => {
  return (
    <div className="gcsc-wrap gcsc-error">
      <Navbar className="navbar-default">
        <Navbar.Brand>
          <div className="logo-sm"></div>
          <div className="divider-vertical height-16" />
          <div className="name">관리자</div>
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <div className="page-center page-middle">
              <div className="error-group">
                <div className="image">
                  <i className="icon-gcsc icon-error icon-error1"></i>
                </div>
                <div className="information">
                  {/* <div className="text1">404</div> */}
                  <div className="text2">Not Allowed</div>
                  <div className="text3">
                    현재 해당하는 페이지가 운용되지 않습니다.<br />
                    잠시 후 다시 이용해주시기 바랍니다.
                  </div>
                </div>
              </div>
              <div className="button-group mt-30">
                <Button variant="secondary" className="w-140px">돌아가기</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
