//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
//Component
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Login4 = () => {
  return (
    <div className="gcsc-wrap gcsc-regist">
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
            <div className="page-title">
              사용자 인증서 등록
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="page-center">
              <div className="certification-group">
                <div className="image">
                  <i className="icon-gcsc icon-certification icon-certification2"></i>
                </div>
                <div className="info-group">
                  <div className="text">아이디와 비밀번호를 입력하세요.</div>
                </div>
                <Form className="signin-form">
                  <Form.Group as={Row}>
                    <Form.Label column>아이디</Form.Label>
                    <Col>                
                      <div className="form-control-image">
                        <div className="form-control-id"></div>
                        <Form.Control type="text" placeholder="아이디 입력" />
                      </div>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column>비밀번호</Form.Label>
                    <Col>
                      <div className="form-control-image">
                        <div className="form-control-password"></div>
                        <Form.Control type="password" placeholder="비밀번호 입력" />
                      </div>
                    </Col>
                  </Form.Group>
                </Form>
                <div className="button-group btn-block">
                  <Button variant="primary" size="lg">사용자 인증서 등록</Button>
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

export default Login4;
