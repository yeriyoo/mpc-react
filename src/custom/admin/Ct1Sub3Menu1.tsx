//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Ct1Sub3Menu1 = () => {

  return (
    <>
    {/* 해경자산 관리 - 해경자산 관리 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">MDA 플랫폼</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>모니터링</Nav.Link>
          <Nav.Link>선박정보관리</Nav.Link>
          <Nav.Link active>해경자산관리</Nav.Link>
          <Nav.Link>권한설정</Nav.Link>
          <Nav.Link>회원관리</Nav.Link>
          <Nav.Link>사용자관리</Nav.Link>
          <Nav.Link>그룹관리</Nav.Link>
          <Nav.Link>메뉴관리</Nav.Link>
          <Nav.Link>로그인관리</Nav.Link>
          <Nav.Link>공통코드관리</Nav.Link>
          <Nav.Link>로그관리</Nav.Link>
          <Nav.Link>통계관리</Nav.Link>
          <Nav.Link>AI모델성능관리</Nav.Link>
        </Nav>

        <Nav className="nav-gnb ms-auto">
          <Nav.Link className="nav-category nav-bg1">
            <i className="icon-admin icon-nav icon-chart-bar"></i>
            분석모드
          </Nav.Link>
          <Nav.Link className="nav-user nav-bg2">
            <i className="icon-admin icon-nav icon-user"></i>
            김수현
          </Nav.Link>
          <Nav.Link className="nav-logout nav-bg2">
            <i className="icon-admin icon-nav icon-logout"></i>
            로그아웃
          </Nav.Link>
          {/* <Nav.Link className="nav-login nav-bg2">
            <i className="icon-admin icon-nav icon-login"></i>
            로그인
          </Nav.Link> */}
        </Nav>        
      </Navbar>

      <div className="admin-content">
        <div className="lnb">
          <div className="lnb-menu-title">해경자산관리</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#1">
              <ListGroup.Item action href="#1">해경자산관리</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>분석모드</Breadcrumb.Item>
              <Breadcrumb.Item>해경자산관리</Breadcrumb.Item>
              <Breadcrumb.Item active>해경자산관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">해경자산관리</div>

            <Container fluid className="px-0">
              <Row>
                <Col xs="5">
                  <div className="items-group mt-20">
                    <div className="header">
                      <div className="left">
                        <div className="title">함정</div>
                      </div>
                      <div className="right">
                        <div className="buttons">
                          <Button variant="outline-primary">수정</Button>
                        </div>
                      </div>
                    </div>
                    <div className="body">
                      <div className="aeest-group">
                        <div className="aeest-item">
                          <div className="name">
                            <i className="icon-admin icon-aeest icon-setting"></i>
                            정비
                          </div>
                          <div className="data">
                            <div className="number">100</div>
                            <div className="unit">대</div>
                          </div>
                        </div>
                        <div className="aeest-item">
                          <div className="name">
                            <i className="icon-admin icon-aeest icon-waiting"></i>
                            대기
                          </div>
                          <div className="data">
                            <div className="number">100</div>
                            <div className="unit">대</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="items-group mt-20">
                    <div className="header">
                      <div className="left">
                        <div className="title">헬기</div>
                      </div>
                      <div className="right">
                        <div className="buttons">
                          <Button variant="outline-primary">수정</Button>
                        </div>
                      </div>
                    </div>
                    <div className="body">
                      <div className="aeest-group">
                        <div className="aeest-item">
                          <div className="name">
                            <i className="icon-admin icon-aeest icon-setting"></i>
                            정비
                          </div>
                          <div className="data">
                            <div className="number">100</div>
                            <div className="unit">대</div>
                          </div>
                        </div>
                        <div className="aeest-item">
                          <div className="name">
                            <i className="icon-admin icon-aeest icon-waiting"></i>
                            대기
                          </div>
                          <div className="data">
                            <div className="number">100</div>
                            <div className="unit">대</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="items-group mt-20">
                    <div className="header">
                      <div className="left">
                        <div className="title">비행기</div>
                      </div>
                      <div className="right">
                        <div className="buttons">
                          <Button variant="outline-primary">확인</Button>
                        </div>
                      </div>
                    </div>
                    <div className="body">
                      <div className="aeest-group">
                        <div className="aeest-item">
                          <div className="name">
                            <i className="icon-admin icon-aeest icon-setting"></i>
                            정비
                          </div>
                          <div className="data">
                            <div className="number">
                              <Form.Control type="text" value={100} />
                            </div>
                            <div className="unit">대</div>
                          </div>
                        </div>
                        <div className="aeest-item">
                          <div className="name">
                            <i className="icon-admin icon-aeest icon-waiting"></i>
                            대기
                          </div>
                          <div className="data">
                            <div className="number">
                              <Form.Control type="text" value={100} />
                            </div>
                            <div className="unit">대</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ct1Sub3Menu1;
