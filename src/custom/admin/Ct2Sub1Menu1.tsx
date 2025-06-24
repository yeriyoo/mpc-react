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

const Ct2Sub1Menu1 = () => {

  return (
    <>
    {/* 통계 - 밀집도 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">MDA 플랫폼</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link active>통계</Nav.Link>
          <Nav.Link>분석</Nav.Link>
        </Nav>

        <Nav className="nav-gnb ms-auto">
          <Nav.Link className="nav-category nav-bg1">
            <i className="icon-admin icon-nav icon-chart-bar"></i>
            관리모드
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
          <div className="lnb-menu-title">통계</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#1">
              <ListGroup.Item action href="#1">밀집도</ListGroup.Item>
              <ListGroup.Item action href="#2">통항량</ListGroup.Item>
              <ListGroup.Item action href="#3">통계1</ListGroup.Item>
              <ListGroup.Item action href="#4">통계2</ListGroup.Item>
              <ListGroup.Item action href="#5">통계3</ListGroup.Item>
              <ListGroup.Item action href="#6">통계4</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>관리모드</Breadcrumb.Item>
              <Breadcrumb.Item>통계</Breadcrumb.Item>
              <Breadcrumb.Item active>밀집도</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">밀집도</div>
            
            <Container fluid className="px-0">
              <Row>
                <Col>
                  <div className="items-group mt-20">
                    <div className="header">
                      <div className="left">
                        <div className="title">목록</div>
                      </div>
                    </div>
                  </div>

                  <div className="search-group">
                    <Row className="g-3">
                      <Col>
                        <Form.Group className="form-item-group">
                          <Form.Label>일자</Form.Label>
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
                          <Form.Label>구분</Form.Label>
                          <Form.Select>
                            <option>선택</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                        <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                        {/* <Button variant="secondary" className="ms-2">초기화</Button> */}
                      </Col>
                    </Row>
                  </div>

                  <div className="lists-group mt-20">
                    <ListGroup variant="flush" className="overflow-y-auto" style={{height: 'calc(100vh - 465px)',}}>                  
                      <ListGroup.Item className="px-0" action>
                        <div className="list-arrow-item">
                          <div className="item-info">                              
                            <div className="text-info1">2024.10.01~2024.10.31</div>
                            <div className="text-info2">
                              <div className="name">해구도명</div><div className="data">소해구도01</div>
                              <span className="divider-vertical height-16 mx-2"></span>
                              <div className="name">시간 간격</div><div className="data">1시간</div>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="px-0" action>
                        <div className="list-arrow-item">
                          <div className="item-info">                              
                            <div className="text-info1">2024.10.01~2024.10.31</div>
                            <div className="text-info2">
                              <div className="name">해구도명</div><div className="data">소해구도01</div>
                              <span className="divider-vertical height-16 mx-2"></span>
                              <div className="name">시간 간격</div><div className="data">1시간</div>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
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

                </Col>
                <Col>
                  <div className="items-group mt-20">
                    <div className="header">
                      <div className="left">
                        <div className="title">선박 국적별</div>
                      </div>
                    </div>
                    <div className="body">
                      <div className="chart-group" style={{height: 'calc(50vh - 200px)',}}>차트 들어가는 곳</div>
                    </div>
                  </div>

                  <div className="items-group mt-20">
                    <div className="header">
                      <div className="left">
                        <div className="title">선종별 통계 수치</div>
                      </div>
                    </div>
                    <div className="body">
                      <Row>
                        <Col>
                          <div className="chart-donut-group" style={{height: 'calc(50vh - 230px)',}}>
                            <div className="chart-donut-item">
                              <div className="data">
                                <div className="number">27</div>
                                <div className="unit">%</div>
                              </div>
                              <div className="name">예시1</div>
                            </div>
                            <div className="chart-group h-100">차트 들어가는 곳</div>
                          </div>
                        </Col>
                        <Col>
                          <div className="chart-donut-group" style={{height: 'calc(50vh - 230px)',}}>
                            <div className="chart-donut-item">
                              <div className="data">
                                <div className="number">27</div>
                                <div className="unit">%</div>
                              </div>
                              <div className="name">예시1</div>
                            </div>
                            <div className="chart-group h-100">차트 들어가는 곳</div>
                          </div>
                        </Col>
                        <Col>
                          <div className="chart-legend-group">
                            <div className="chart-legend-item">
                              <div className="name">
                                <div className="chart-legend color1"></div>
                                <div className="text">예시1</div>
                              </div>
                              <div className="data">
                                <div className="number">27</div>
                                <div className="unit">%</div>
                              </div>
                            </div>
                            <div className="chart-legend-item">
                              <div className="name">
                                <div className="chart-legend color2"></div>
                                <div className="text">예시2</div>
                              </div>
                              <div className="data">
                                <div className="number">27</div>
                                <div className="unit">%</div>
                              </div>
                            </div>
                            <div className="chart-legend-item">
                              <div className="name">
                                <div className="chart-legend color3"></div>
                                <div className="text">예시3</div>
                              </div>
                              <div className="data">
                                <div className="number">27</div>
                                <div className="unit">%</div>
                              </div>
                            </div>
                            <div className="chart-legend-item">
                              <div className="name">
                                <div className="chart-legend color4"></div>
                                <div className="text">예시4</div>
                              </div>
                              <div className="data">
                                <div className="number">27</div>
                                <div className="unit">%</div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
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

export default Ct2Sub1Menu1;
