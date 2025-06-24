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

const Ct1Sub11Menu2 = () => {

  return (
    <>
    {/* 로그 관리 - 개인정보 열람 로그 */}
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
          <Nav.Link>해경자산관리</Nav.Link>
          <Nav.Link>권한설정</Nav.Link>
          <Nav.Link>회원관리</Nav.Link>
          <Nav.Link>사용자관리</Nav.Link>
          <Nav.Link>그룹관리</Nav.Link>
          <Nav.Link>메뉴관리</Nav.Link>
          <Nav.Link>로그인관리</Nav.Link>
          <Nav.Link>공통코드관리</Nav.Link>
          <Nav.Link active>로그관리</Nav.Link>
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
          <div className="lnb-menu-title">로그 관리</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#2">
              <ListGroup.Item action href="#1">감사 로그</ListGroup.Item>
              <ListGroup.Item action href="#2">개인정보 열람 로그</ListGroup.Item>
              <ListGroup.Item action href="#3">에러 로그</ListGroup.Item>
              <ListGroup.Item action href="#4">보고서 로그</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>분석모드</Breadcrumb.Item>
              <Breadcrumb.Item>로그 관리</Breadcrumb.Item>
              <Breadcrumb.Item active>개인정보 열람 로그</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">개인정보 열람 로그</div>

            <div className="items-group mt-20">
              <div className="header">
                <div className="left">
                  <div className="title">개인정보 열람 로그 목록</div>
                </div>
              </div>
            </div>

            <div className="search-group">
              <Row className="g-3"> 
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>기간</Form.Label>
                    <InputGroup className="align-items-center">
                      <div className="date-range-group">
                        <Form.Control type="date" /> 
                        <div className="during">~</div>
                        <Form.Control type="date" />
                      </div>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>출력유형</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>고객번호</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>고객명</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                  <Button variant="secondary" className="ms-2">초기화</Button>
                </Col>
              </Row>
            </div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary">엑셀</Button>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">리얼그리드 들어가는 곳</div>
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

            <div className="info2-group mt-20">
              <div className="info2-text">※ 개인정보 열람 로그</div>
              <ul className="list-style-square">
                <li>엑셀 : 엑셀 버튼을 클릭하면 보고서 로그 정보를 엑셀파일로 다운로드 합니다.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ct1Sub11Menu2;
