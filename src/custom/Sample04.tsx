//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Component
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Sample04 = () => {
  return (
    <div className="gcsc-wrap gcsc-regist">
      <Navbar className="navbar-default">
        <Navbar.Brand>
          <div className="logo-sm"></div>
          <div className="divider-vertical height-16" />
          <div className="name">MDA 플랫폼</div>
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <div className="page-title">
              GPKI 인증서 로그인
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="page-center">
              <div className="certification-group">
                <div className="image">
                  <i className="icon-gcsc icon-certification icon-certification1"></i>
                </div>
                <div className="button-group btn-block">
                  <Button variant="primary" size="lg">인증서 로그인 </Button>
                </div>
                <div className="info-group">
                  <div className="text">인증서 로그인은 최초 시스템 회원가입 후 GPKI인등서 등록이 되어 있어야 이용가능합니다.</div>
                </div>
                <div className="button-group btn-block">
                  <Button variant="outline-primary">사용자 인증서 등록</Button>
                  <Button variant="outline-primary">인증서 프로그램 설치</Button>
                </div>
              </div>
              {/* <div className="button-group mt-30">
                <Button variant="secondary" className="w-140px">돌아가기</Button>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sample04;
