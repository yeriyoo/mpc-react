import { Form, Button } from 'react-bootstrap';

const InterLogin1920 = () => {
  return (
    <div className="bg-img">
      <div className="main-logo"></div>
      <div className="sub-logo"></div>
      <div className="login-box">
        <Form className="login-form">
          <Form.Group controlId="userid" className="mb-3 custom-group">
            <Form.Control
              type="text"
              id="userid" 
              name="userid"
              placeholder="사번"
              required
              autoComplete="username"
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3 custom-group">
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              required
              autoComplete="current-password"
            />
          </Form.Group>

          <Form.Group controlId="remember" className="mb-3 remember-wrapper">
            <Form.Check 
              type="checkbox"
              id="remember"  
              name="remember" 
              label="아이디 저장"
              className="remember"
            />
          </Form.Group>

          <Button type="submit" className="custom-login-btn">
            로그인
          </Button>

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
    </div>
  );
};

export default InterLogin1920;
