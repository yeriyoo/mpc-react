//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
//Component
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

const Login2 = () => {
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
              회원가입
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="items-group">
              <div className="header">
                <div className="left">
                  <div className="title">계정등록</div>
                </div>
                <div className="right">
                  <div>필수입력<i className="icon-require"></i></div>
                </div>
              </div>
              <div className="body">
                <div className="forms-group">
                  <Table>
                    <colgroup>
                      <col style={{width: '140px',}} />
                      <col />
                      <col style={{width: '140px',}} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>계정아이디<i className="icon-require"></i></th>
                        <td colSpan={3}>
                          <div className="d-flex align-items-center">
                            <Form.Control type="text" style={{width: 'calc(50% - 80px)',}} />
                            <Button variant="outline-primary" className="ms-2">중복확인</Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>패스워드<i className="icon-require"></i></th>
                        <td colSpan={3}>
                          <div className="d-flex align-items-center">
                            <Form.Control type="text" style={{width: 'calc(50% - 80px)',}} />
                            <div className="info-text ms-2">
                              <div className="text">영문/숫자 조합 20자 이내, 특수문자 조합</div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>패스워드 확인<i className="icon-require"></i></th>
                        <td colSpan={3}>
                          <Form.Control type="text" style={{width: 'calc(50% - 80px)',}} />
                        </td>
                      </tr>
                      <tr>
                        <th>이름<i className="icon-require"></i></th>
                        <td><Form.Control type="text" /></td>
                        <th>이메일<i className="icon-require"></i></th>
                        <td><Form.Control type="text" /></td>
                      </tr>
                      <tr>
                        <th>전화번호</th>
                        <td><Form.Control type="text" /></td>
                        <th>모바일 전화번호</th>
                        <td><Form.Control type="text" /></td>
                      </tr>
                      <tr>
                        <th>기관 전화번호</th>
                        <td><Form.Control type="text" /></td>
                        <th>소속 기관<i className="icon-require"></i></th>
                        <td>
                          <Form.Select>
                            <option>선택</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <th>직급<i className="icon-require"></i></th>
                        <td>
                          <Form.Select>
                            <option>선택</option>
                          </Form.Select>
                        </td>
                        <th>계정 타입<i className="icon-require"></i></th>
                        <td>
                          <Form.Select>
                            <option>선택</option>
                          </Form.Select>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="footer">
                <div className="left"></div>
                <div className="right">                  
                  <div className="button-group">
                    <Button variant="primary" className="w-140px">등록</Button>
                    <Button variant="secondary" className="w-140px">취소</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login2;
