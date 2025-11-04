import { Form, Button } from 'react-bootstrap';

import PoliceLogo from '../assets/police_logo.svg';
import MainLogo from '../assets/main_logo_login.svg';
import BgImage from '../assets/bg_login.jpg';

const InterLogin375 = () => {
  return (
    <div
      className="bg-img"
      style={{ backgroundImage: `url(${BgImage})` }}
      >
      <div className="logo-container">
        <img src={PoliceLogo} alt="해양경찰청 로고" className="main-logo" />
        <img src={MainLogo} alt="해양환경 위기대응 통합지원 시스템 로고" className="sub-logo" />
      </div>

      <div className="login-box">
        <Form className="login-form">
          <Form.Group controlId="userid" className="mb-3 custom-group">
            <Form.Label>사번</Form.Label>
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
            <Form.Label>비밀번호</Form.Label>
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

          <Button type="submit" className="custom-login-btn" aria-label="로그인">
            로그인
          </Button>

          <div className="button-row">
            <Button type="submit" className="gpki-btn full-width-btn" aria-label="회원가입">
              회원가입
            </Button>
            <Button type="submit" className="gpki-btn full-width-btn" aria-label="PKI 인증서 로그인">
              GPKI 인증서 로그인
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default InterLogin375;
