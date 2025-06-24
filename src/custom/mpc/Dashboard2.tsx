import flagImg from '@/custom/assets/img/flag/KOR-KOREA.svg';
import weatherImg0101 from '@/custom/assets/img/weather/weather0101.svg';

//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavDropdown } from 'react-bootstrap';

const Dashboard2 = () => {

  return (
    <>
    {/* 관리자 대시보드 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">관리자</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link active>모니터링</Nav.Link>
          <NavDropdown title="환경설정">
            <NavDropdown.Item>공통코드관리</NavDropdown.Item>
            <NavDropdown.Item>메뉴관리</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="사용자정보" active>
            <NavDropdown.Item>사용자관리</NavDropdown.Item>
            <NavDropdown.Item active>권한관리</NavDropdown.Item>
            <NavDropdown.Item>동접제한</NavDropdown.Item>
            <NavDropdown.Item>접속IP관리</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="게시판관리">
            <NavDropdown.Item>공지사항</NavDropdown.Item>
            <NavDropdown.Item>게시판</NavDropdown.Item>
            <NavDropdown.Item>QNA</NavDropdown.Item>
          </NavDropdown>
          {/* <NavDropdown title="보고서관리">
            <NavDropdown.Item>레포트 생성</NavDropdown.Item>
            <NavDropdown.Item>레포트 출력</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link>보고서관리</Nav.Link>
          <Nav.Link>통합관리</Nav.Link>
          <NavDropdown title="기준정보">
            <NavDropdown.Item>지도관리</NavDropdown.Item>
            <NavDropdown.Item>민감자원지도</NavDropdown.Item>
            <NavDropdown.Item>해경자산</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="환경정보">
            <NavDropdown.Item>해양관측부이</NavDropdown.Item>
            <NavDropdown.Item>해양기상예보</NavDropdown.Item>
            <NavDropdown.Item>해양기상관측</NavDropdown.Item>
            <NavDropdown.Item>해양조석</NavDropdown.Item>
            <NavDropdown.Item>천문자료</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="오염관리">
            <NavDropdown.Item>오염정보관리</NavDropdown.Item>
            <NavDropdown.Item>관리코드</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="연계관리">
            <NavDropdown.Item>수집관리</NavDropdown.Item>
            <NavDropdown.Item>연계관리</NavDropdown.Item>
            <NavDropdown.Item>적재관리</NavDropdown.Item>
          </NavDropdown>
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
        <div className="contents main">
          <div className="contents-items">
            <Container fluid>
              <Row>
                <Col className="border-end border-bottom p-main">
                  <div className="items-group">
                    <div className="header">
                      <div className="left">
                        <div className="title">해역별 통항량</div>
                      </div>
                      <div className="right">
                        <dl className="list-style-square">
                          <dt>해구번호</dt>
                          <dd>123-456</dd>
                          <dt>해역 전체 통항량</dt>
                          <dd>12,456 <span className="unit">(척)</span></dd>
                        </dl>
                      </div>
                    </div>
                    <div className="body">
                      <div className="info2-group d-flex align-items-center">
                        <dl className="list-style-square">
                          <dt>기준</dt>
                          <dd>2023-09-25 14:56</dd>
                        </dl>                        
                        <Button variant="icon" className="ms-2 me-3"><i className="icon-admin icon-button size-30 icon-refresh"></i></Button>
                        <div className="main-search">
                          <InputGroup className="align-items-center">
                            <Form.Control type="text" placeholder="해역 또는 해구 번호 검색" />
                            <Button variant="icon" className="mx-1"><i className="icon-admin icon-button size-30 icon-search"></i></Button>
                          </InputGroup>
                        </div>
                      </div>
                      <div className="passage-group mt-10">
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage1"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">통합</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage2"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">AIS</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage3"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">E-Nav</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage4"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">여객선</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage5"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">중국어선</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage6"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">V-PASS</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage7"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">함정</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                        <div className="passage-item">
                          <div className="passage-icon">
                            <i className="icon-admin icon-passage icon-passage8"></i>
                          </div>
                          <div className="passage-info">
                            <div className="name">위험물</div>
                            <div className="data">1,350</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="border-end border-bottom p-main">
                  <div className="items-group">
                    <div className="header">
                      <div className="left">
                        <div className="title">안전도 분석</div>
                      </div>
                    </div>
                    <div className="body">
                      <Row>
                        <Col>
                          <div className="chart-donut-group" style={{height: '164px',}}>
                            <div className="chart-donut-item semi-circle">
                              <div className="data">
                                <div className="number">50.2</div>
                                <div className="unit">%</div>
                              </div>
                              <div className="name">종합 위험지수</div>
                            </div>
                            <div className="chart-group h-100">차트 들어가는 곳</div>
                          </div>
                        </Col>
                        <Col>
                          <div className="chart-donut-group" style={{height: '164px',}}>
                            <div className="chart-donut-item semi-circle">
                              <div className="data">
                                <div className="number">73.0</div>
                                <div className="unit">%</div>
                              </div>
                              <div className="name">종합 안전지수</div>
                            </div>
                            <div className="chart-group h-100">차트 들어가는 곳</div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div> 
                </Col>
                <Col className="border-bottom p-main">
                  <div className="items-group">
                    <div className="header">
                      <div className="left">
                        <div className="title">관심영역 안전도</div>
                      </div>                      
                      <div className="right">
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className="body">
                      <Row>
                        <Col>
                          <div className="chart-legend-group main mt-30">
                            <div className="chart-legend-item">
                              <div className="name">
                                <div className="chart-legend-icon"><i className="icon-admin icon-legend icon-legend1"></i></div>
                                <div className="text">특이운항</div>
                              </div>
                              <div className="data">
                                정상
                              </div>
                            </div>
                            <div className="chart-legend-item">
                              <div className="name">
                                <div className="chart-legend-icon"><i className="icon-admin icon-legend icon-legend2"></i></div>
                                <div className="text">불법조업</div>
                              </div>
                              <div className="data">
                                정상
                              </div>
                            </div>
                            <div className="chart-legend-item">
                              <div className="name">
                                <div className="chart-legend-icon"><i className="icon-admin icon-legend icon-legend3"></i></div>
                                <div className="text">비허가</div>
                              </div>
                              <div className="data">
                                정상
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="chart-donut-group" style={{height: '164px',}}>
                            <div className="chart-donut-item semi-circle">
                              <div className="data">
                                <div className="number">73.0</div>
                                <div className="unit">%</div>
                              </div>
                              <div className="name">안전도</div>
                            </div>
                            <div className="chart-group h-100">차트 들어가는 곳</div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div> 
                </Col>
              </Row>
              <Row>
                <Col className="p-main pe-0">
                  <div className="items-group">
                    <div className="header">
                      <div className="left">
                        <div className="title">일별 모니터링</div>
                      </div>
                    </div>
                    <div className="body">
                      <div className="map-group position-relative" style={{height: 'calc(100vh - 448px)',}}>지도 들어가는 곳</div>
                    </div>
                  </div> 
                </Col>
                <Col>
                  <Row>
                    <Col className="p-main">
                      <div className="items-group">
                        <div className="header">
                          <div className="left">
                            <div className="title">해양오염 일시</div>
                          </div>
                        </div>
                        <div className="body">
                          <div className="chart-group min-height" style={{height: 'calc(50vh - 265px)',}}>차트 들어가는 곳</div>
                        </div>
                      </div> 
                    </Col>
                    <Col className="p-main">
                      <div className="items-group">
                        <div className="header">
                          <div className="left">
                            <div className="title">기상조건</div>
                          </div>
                        </div>
                        <div className="body">
                          <div className="realgrid-group min-height" style={{height: 'calc(50vh - 265px)',}}>
                            리얼그리드 들어가는 곳
                          </div>
                        </div>
                      </div> 
                    </Col>
                  </Row> 
                  <Row>
                    <Col className="p-main">
                      <div className="items-group">
                        <div className="header">
                          <div className="left">
                            <div className="title">오염유형</div>
                          </div>
                        </div>
                        <div className="body">
                          <div className="chart-group min-height" style={{height: 'calc(50vh - 265px)',}}>차트 들어가는 곳</div>
                        </div>
                      </div> 
                    </Col>
                    <Col className="p-main">
                      <div className="items-group">
                        <div className="header">
                          <div className="left">
                            <div className="title">발생장소</div>
                          </div>
                        </div>
                        <div className="body">
                          <div className="chart-group min-height" style={{height: 'calc(50vh - 265px)',}}>차트 들어가는 곳</div>
                        </div>
                      </div> 
                    </Col>
                  </Row>                  
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

export default Dashboard2;
