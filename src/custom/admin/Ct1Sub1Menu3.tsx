//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Ct1Sub1Menu3 = () => {

  return (
    <>
    {/* 모니터링-적재관리 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">MDA 플랫폼</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link active>모니터링</Nav.Link>
          <Nav.Link>선박정보관리</Nav.Link>
          <Nav.Link>해경자산관리</Nav.Link>
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
          <div className="lnb-menu-title">모니터링</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#3">
              <ListGroup.Item action href="#1">수집 관리</ListGroup.Item>
              <ListGroup.Item action href="#2">연계 관리</ListGroup.Item>
              <ListGroup.Item action href="#3">적재 관리</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>분석모드</Breadcrumb.Item>
              <Breadcrumb.Item>모니터링</Breadcrumb.Item>
              <Breadcrumb.Item active>적재 관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">적재 관리</div>

            <Container fluid className="px-0 mt-20">
              <Row>
                <Col xs="auto">
                  <div className="search-status-group">
                    <div className="search-status-item bg1">
                      <div className="name">전체</div>
                      <div className="data">180</div>
                    </div>
                    <div className="search-status-item bg2">
                      <div className="name">성공</div>
                      <div className="data">123</div>
                    </div>
                    <div className="search-status-item bg3">
                      <div className="name">미적재</div>
                      <div className="data">57</div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="search-group">
                    <Row className="g-3"> 
                      <Col>
                        <Form.Group className="form-item-group">
                          <Form.Label>조회일</Form.Label>
                          <InputGroup className="align-items-center">
                            <div className="date-range-group">
                              <Form.Control type="date" /> 
                              <div className="during">~</div>
                              <Form.Control type="date" />
                            </div>
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                        <Button variant="outline-primary" className="btn-text-icon">새로고침 <i className="icon-admin icon-button icon-refresh2 ms-2"></i></Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ct1Sub1Menu3;
