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
import Pagination from 'react-bootstrap/Pagination';

const Ct1Sub12Menu4 = () => {

  return (
    <>
    {/* 통계 관리 - 에러 로그 통계 */}
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
          <Nav.Link>로그관리</Nav.Link>
          <Nav.Link active>통계관리</Nav.Link>
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
          <div className="lnb-menu-title">통계 관리</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#4">
              <ListGroup.Item action href="#1">로그인 통계</ListGroup.Item>
              <ListGroup.Item action href="#2">개인정보 열람 통계</ListGroup.Item>
              <ListGroup.Item action href="#3">감사 로그 통계</ListGroup.Item>
              <ListGroup.Item action href="#4">에러 로그 통계</ListGroup.Item>
              <ListGroup.Item action href="#5">보고서 로그 통계</ListGroup.Item>
              <ListGroup.Item action href="#6">배치 로그 통계</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>분석모드</Breadcrumb.Item>
              <Breadcrumb.Item>통계 관리</Breadcrumb.Item>
              <Breadcrumb.Item active>에러 로그 통계</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">에러 로그 통계</div>

            <div className="items-group mt-20">
              <div className="header">
                <div className="left">
                  <div className="title">에러 통계 목록</div>
                </div>
              </div>
            </div>

            <div className="search-group">
            <Row className="g-3">
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>연도/월</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                  <Button variant="secondary" className="ms-2">초기화</Button>
                </Col>
              </Row>
            </div>
            
            <Container fluid>
              <Row>
                <Col>
                  <div className="items-group mt-20">
                    <div className="body">
                      <div className="grid-group">
                        <div className="grid-header">
                          <div className="left">
                            <div className="title">에러 일자별 현황</div>
                          </div>
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
                </Col>
                <Col>
                  <div className="info2-group mt-header">
                    <ul className="list-style-square">
                      <li>에러의 일자별 통계입니다.</li>
                      <li>통계자료는 '실시간통계'입니다. 그러므로 '에러로그'에서 조회한 정보는 바로 통계자료에 반영합니다.</li>
                      <li>일자</li>
                      <li>DB, JS, JAVA가 일자만 리스트로 출력합니다.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="items-group mt-20">
                    <div className="body">
                      <div className="grid-group">
                        <div className="grid-header">
                          <div className="left">
                            <div className="title">에러 사용자별 현황</div>
                          </div>
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
                </Col>
                <Col>
                  <div className="info2-group mt-header">
                    <ul className="list-style-square">
                      <li>에러의 사용자별 통계입니다.</li>
                      <li>통계자료는 '실시간통계'입니다. 그러므로 '에러로그'에서 조회한 정보는 바로 통계자료에 반영합니다.</li>
                      <li>사용자</li>
                      <li>DB, JS, JAVA한 사용자만 리스트로 출력합니다.</li>
                    </ul>
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

export default Ct1Sub12Menu4;
