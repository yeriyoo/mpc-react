//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Sample02 = () => {
  return (
    <div className="gcsc-wrap gcsc-signin">
      <div className="signin-group">
        <div className="signin-bg">
          <div className="logo"></div>
          <div className="text1">기본에 충실하고 현장에 강한, <br />국민의 해양경찰</div>
          <div className="text2">MDA 플랫폼</div>
        </div>
        <div className="signin-items">
          <div className="title">로그인</div>
          <div className="items-group">
            <Form className="signin-form">
              <Form.Group as={Row}>
                <Form.Label column>사용자계정</Form.Label>
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
              <Button variant="primary" size="lg">로그인</Button>
            </div>
            <div className="button-group btn-block">
              <Button variant="outline-primary">회원가입</Button>
              <Button variant="outline-primary">GPKI 인증서 로그인</Button>
            </div>
            <div className="button-group">
              <Button variant="link2" size="sm">일반 GIS 사용자 매뉴얼</Button>
              <div className="divider-vertical height-14" />
              <Button variant="link2" size="sm">함정 GIS 사용자 매뉴얼</Button>
            </div>
          </div>
        </div>
        <div className="copyright">
          COPYRIGHT(C) 2018 Korea Coast Guard. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Sample02;
