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
import Pagination from 'react-bootstrap/Pagination';

const Mpc1Sub9Menu3 = () => {

  return (
    <>
    {/* 연계관리 - 적재관리 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">관리자</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>모니터링</Nav.Link>
          <Nav.Link>환경설정</Nav.Link>
          <Nav.Link>사용자정보</Nav.Link>
          <Nav.Link>게시판관리</Nav.Link>
          <Nav.Link>보고서관리</Nav.Link>
          <Nav.Link>통합관리</Nav.Link>
          <Nav.Link>기준정보</Nav.Link>
          <Nav.Link>환경정보</Nav.Link>
          <Nav.Link>오염관리</Nav.Link>
          <Nav.Link active>연계관리</Nav.Link>
          <Nav.Link>통계</Nav.Link>
        </Nav>

        <Nav className="nav-gnb ms-auto">
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
          <div className="lnb-menu-title">연계관리</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#3">
              <ListGroup.Item action href="#1">수집관리</ListGroup.Item>
              <ListGroup.Item action href="#2">연계관리</ListGroup.Item>
              <ListGroup.Item action href="#3">적재관리</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>연계관리</Breadcrumb.Item>
              <Breadcrumb.Item active>적재관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">적재관리</div>

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
                  <div className="realgrid-group">
                    리얼그리드 들어가는 곳
                  </div>
                  <div className="pagination-group">
                    <Pagination size="sm">
                      <Pagination.First className="page-control page-first" />
                      <Pagination.Prev className="page-control page-prev" />
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Next className="page-control page-next" disabled />
                      <Pagination.Last className="page-control page-last" />
                    </Pagination>
                  </div>
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

export default Mpc1Sub9Menu3;
