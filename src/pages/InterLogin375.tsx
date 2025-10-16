import { Form, Button } from 'react-bootstrap';

const InterLogin375 = () => {
  return (
    <div className="bg-img">
      <div className="main-logo"></div>
      <div className="sub-logo"></div>
      <div className="login-box">
        <Form className="login-form">
          <Form.Group controlId="userid" className="mb-3 custom-group">
            <Form.Control type="text" name="userid" placeholder="사번" required />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3 custom-group">
            <Form.Control type="password" name="password" placeholder="비밀번호" required />
          </Form.Group>

          <Form.Group controlId="remember" className="mb-3 remember-wrapper">
            <Form.Check type="checkbox" label="아이디 저장" className="remember" />
          </Form.Group>

          <Button type="submit" className="custom-login-btn">
            로그인
          </Button>

          {/* <div className="links-wrapper">
            <a href="#password">아이디 / 비밀번호 찾기</a>
            <a href="#joinmembership">회원가입</a>
          </div>

          <div className="divider-line">
            <span>또는</span>
          </div> */}

          <div className="button-row">
            <Button type="submit" className="gpki-btn full-width-btn">
              회원가입
            </Button>
            <Button type="submit" className="gpki-btn full-width-btn">
              GPKI 인증서 로그인
            </Button>
          </div>
        </Form>
      </div>
      <div className="copy-right">COPYRIGHT(C) 2018 Korea Coast Guard. All rights reserved</div>
    </div>
  );
};

export default InterLogin375;
