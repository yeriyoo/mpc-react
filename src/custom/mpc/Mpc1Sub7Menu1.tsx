//Layout
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

const Mpc1Sub7Menu1 = () => {

  return (
    <>
    {/* 환경정보 - 해양관측부이 */}
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
          <Nav.Link active>환경정보</Nav.Link>
          <Nav.Link>오염관리</Nav.Link>
          <Nav.Link>연계관리</Nav.Link>
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
          <div className="lnb-menu-title">환경정보</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#1">
              <ListGroup.Item action href="#1">해양관측부이</ListGroup.Item>
              <ListGroup.Item action href="#2">해양기상예보</ListGroup.Item>
              <ListGroup.Item action href="#3">해양기상관측</ListGroup.Item>
              <ListGroup.Item action href="#4">해양조석</ListGroup.Item>
              <ListGroup.Item action href="#5">천문자료</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>환경정보</Breadcrumb.Item>
              <Breadcrumb.Item active>해양관측부이</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">해양관측부이</div>

            <div className="search-group">
              <Row>
                <Col sm="2">
                  <Form.Group className="form-item-group">
                    <Form.Label>지점</Form.Label>                    
                    <Form.Select>
                        <option>전체</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>시간</Form.Label>
                    <InputGroup className="align-items-center">
                      <Form.Control type="datetime-local" />
                      <Button variant="outline-secondary bg-white" className="ms-1">-1시간</Button>
                      <Button variant="outline-secondary bg-white" className="ms-1">-30분</Button>
                      <Button variant="outline-secondary bg-white" className="ms-1">현재</Button>
                      <Button variant="outline-secondary bg-white" className="ms-1">30분</Button>
                      <Button variant="outline-secondary bg-white" className="ms-1">1시간</Button>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                  <Button variant="secondary" className="ms-2">초기화</Button>
                </Col>
              </Row>
            </div>

            <div className="items-group mt-20">
              <div className="map-group position-relative" style={{height: 'calc(100vh - 342px)',}}>
                지도들어가는 곳
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Mpc1Sub7Menu1;
