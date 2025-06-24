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

const Admin = () => {

  return (
    <>
    {/* 관리자 대시보드 */}
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
                <Col xs="4" className="border-end p-main">
                  <Tabs variant="underline" defaultActiveKey="adminTab1">
                    <Tab eventKey="adminTab1" title="특이운항">
                      <div className="lists-group">
                        <ListGroup variant="flush" className="overflow-y-auto border-top-none" style={{height: 'calc(100vh - 453px)',}}>                  
                          <ListGroup.Item className="px-0" action>
                            <div className="list-arrow-item main">
                              <div className="chart-donut-group" style={{height: '68px',}}>
                                <div className="chart-donut-item">
                                  <div className="name">의심</div>
                                  <div className="data">
                                    <div className="number">50</div>
                                    <div className="unit">%</div>
                                  </div>
                                </div>
                                <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                              </div>
                              <div className="item-info">
                                <div className="text-info1">504 FAREKIMHOFAREKIMHO <small>Fishing</small></div>
                                <div className="text-info3">
                                  <Row className="g-1">
                                    <Col><div className="name">ID</div><div className="data">412330220</div></Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">호출부호</div><div className="data">122@</div></Col>
                                  </Row>
                                  <Row className="g-1">
                                    <Col>
                                        <div className="flag">
                                          <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                                        </div>
                                        <div className="name ms-2">Korea(Republic of)</div>
                                    </Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">출처</div><div className="data">ALS</div></Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item className="px-0" action>
                            <div className="list-arrow-item main">
                              <div className="chart-donut-group" style={{height: '68px',}}>
                                <div className="chart-donut-item">
                                  <div className="name">양호</div>
                                  <div className="data">
                                    <div className="number">80</div>
                                    <div className="unit">%</div>
                                  </div>
                                </div>
                                <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                              </div>
                              <div className="item-info">
                                <div className="text-info1">504 FAREKIMHOFAREKIMHO <small>Fishing</small></div>
                                <div className="text-info3">
                                  <Row className="g-1">
                                    <Col><div className="name">ID</div><div className="data">412330220</div></Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">호출부호</div><div className="data">122@</div></Col>
                                  </Row>
                                  <Row className="g-1">
                                    <Col>
                                        <div className="flag">
                                          <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                                        </div>
                                        <div className="name ms-2">Korea(Republic of)</div>
                                    </Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">출처</div><div className="data">ALS</div></Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item className="px-0" action>
                            <div className="list-arrow-item main">
                              <div className="chart-donut-group" style={{height: '68px',}}>
                                <div className="chart-donut-item">
                                  <div className="name">경고</div>
                                  <div className="data">
                                    <div className="number">27</div>
                                    <div className="unit">%</div>
                                  </div>
                                </div>
                                <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                              </div>
                              <div className="item-info">
                                <div className="text-info1">504 FAREKIMHOFAREKIMHO <small>Fishing</small></div>
                                <div className="text-info3">
                                  <Row className="g-1">
                                    <Col><div className="name">ID</div><div className="data">412330220</div></Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">호출부호</div><div className="data">122@</div></Col>
                                  </Row>
                                  <Row className="g-1">
                                    <Col>
                                        <div className="flag">
                                          <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                                        </div>
                                        <div className="name ms-2">Korea(Republic of)</div>
                                    </Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">출처</div><div className="data">ALS</div></Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </Tab>
                    <Tab eventKey="adminTab2" title="비허가 선박">
                      <div className="lists-group">
                        <ListGroup variant="flush" className="overflow-y-auto border-top-none" style={{height: 'calc(100vh - 453px)',}}>                  
                          <ListGroup.Item className="px-0" action>
                            <div className="list-arrow-item main">
                              <div className="chart-donut-group" style={{height: '68px',}}>
                                <div className="chart-donut-item">
                                  <div className="name">의심</div>
                                  <div className="data">
                                    <div className="number">50</div>
                                    <div className="unit">%</div>
                                  </div>
                                </div>
                                <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                              </div>
                              <div className="item-info">
                                <div className="text-info1">504 FAREKIMHOFAREKIMHO <small>Fishing</small></div>
                                <div className="text-info3">
                                  <Row className="g-1">
                                    <Col><div className="name">ID</div><div className="data">412330220</div></Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">호출부호</div><div className="data">122@</div></Col>
                                  </Row>
                                  <Row className="g-1">
                                    <Col>
                                        <div className="flag">
                                          <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                                        </div>
                                        <div className="name ms-2">Korea(Republic of)</div>
                                    </Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">출처</div><div className="data">ALS</div></Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>                          
                        </ListGroup>
                      </div>
                    </Tab>
                    <Tab eventKey="adminTab3" title="제재 선박">
                      <div className="lists-group">
                        <ListGroup variant="flush" className="overflow-y-auto border-top-none" style={{height: 'calc(100vh - 453px)',}}>                  
                          <ListGroup.Item className="px-0" action>
                            <div className="list-arrow-item main">
                              <div className="chart-donut-group" style={{height: '68px',}}>
                                <div className="chart-donut-item">
                                  <div className="name">의심</div>
                                  <div className="data">
                                    <div className="number">50</div>
                                    <div className="unit">%</div>
                                  </div>
                                </div>
                                <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                              </div>
                              <div className="item-info">
                                <div className="text-info1">504 FAREKIMHOFAREKIMHO <small>Fishing</small></div>
                                <div className="text-info3">
                                  <Row className="g-1">
                                    <Col><div className="name">ID</div><div className="data">412330220</div></Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">호출부호</div><div className="data">122@</div></Col>
                                  </Row>
                                  <Row className="g-1">
                                    <Col>
                                        <div className="flag">
                                          <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                                        </div>
                                        <div className="name ms-2">Korea(Republic of)</div>
                                    </Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">출처</div><div className="data">ALS</div></Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>                          
                        </ListGroup>
                      </div>
                    </Tab>
                    <Tab eventKey="adminTab4" title="관심 선박">
                      <div className="lists-group">
                        <ListGroup variant="flush" className="overflow-y-auto border-top-none" style={{height: 'calc(100vh - 453px)',}}>                  
                          <ListGroup.Item className="px-0" action>
                            <div className="list-arrow-item main">
                              <div className="chart-donut-group" style={{height: '68px',}}>
                                <div className="chart-donut-item">
                                  <div className="name">의심</div>
                                  <div className="data">
                                    <div className="number">50</div>
                                    <div className="unit">%</div>
                                  </div>
                                </div>
                                <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                              </div>
                              <div className="item-info">
                                <div className="text-info1">504 FAREKIMHOFAREKIMHO <small>Fishing</small></div>
                                <div className="text-info3">
                                  <Row className="g-1">
                                    <Col><div className="name">ID</div><div className="data">412330220</div></Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">호출부호</div><div className="data">122@</div></Col>
                                  </Row>
                                  <Row className="g-1">
                                    <Col>
                                        <div className="flag">
                                          <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                                        </div>
                                        <div className="name ms-2">Korea(Republic of)</div>
                                    </Col>
                                    <Col xs="auto"><span className="divider-vertical height-16 mx-2"></span></Col>
                                    <Col><div className="name">출처</div><div className="data">ALS</div></Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>                          
                        </ListGroup>
                      </div>
                    </Tab>
                  </Tabs>
                </Col>
                <Col>
                  <Row>
                    <Col className="border-bottom position-relative p-main">
                      <div className="tab-button">
                        <Button variant="outline-secondary" size="sm">다운로드</Button>
                      </div>
                      <Tabs variant="underline" defaultActiveKey="adminTab1" className="tab-chart">
                        <Tab eventKey="adminTab1" title="불법조업 통계">
                          <div className="items-group mt-20">
                            <div className="body">
                              <Row>
                                <Col>
                                  <div className="chart-group min-height" style={{height: 'calc(100vh - 670px)',}}>차트 들어가는 곳</div>
                                  <div className="chart-legend-group no-data">
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color4"></div>
                                        <div className="text">범장망 선택</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color3"></div>
                                        <div className="text">쌍끌이 선박</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color2"></div>
                                        <div className="text">외끌이 선박</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color1"></div>
                                        <div className="text">트롤 선박</div>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col xs="auto">
                                  <div className="chart-donut-group size-sm" style={{width: '128px', height: '128px',}}>
                                    <div className="chart-donut-item">
                                      <div className="data">
                                        <div className="number">356</div>
                                      </div>
                                      <div className="name">Total</div>
                                    </div>
                                    <div className="chart-group h-100">차트 들어가는 곳</div>
                                  </div>

                                  <div className="chart-donut-group size-sm mt-20" style={{width: '128px', height: '128px',}}>
                                    <div className="chart-donut-item">
                                      <div className="data">
                                        <div className="number">356</div>
                                      </div>
                                      <div className="name">Total</div>
                                    </div>
                                    <div className="chart-group h-100">차트 들어가는 곳</div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="adminTab2" title="특이선박 통계">
                          <div className="items-group mt-20">
                            <div className="body">
                              <Row>
                                <Col>
                                  <div className="chart-group min-height" style={{height: 'calc(100vh - 670px)',}}>차트 들어가는 곳</div>
                                  <div className="chart-legend-group no-data">
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color4"></div>
                                        <div className="text">범장망 선택</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color3"></div>
                                        <div className="text">쌍끌이 선박</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color2"></div>
                                        <div className="text">외끌이 선박</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color1"></div>
                                        <div className="text">트롤 선박</div>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col xs="auto">
                                  <div className="chart-donut-group size-sm" style={{width: '128px', height: '128px',}}>
                                    <div className="chart-donut-item">
                                      <div className="data">
                                        <div className="number">356</div>
                                      </div>
                                      <div className="name">Total</div>
                                    </div>
                                    <div className="chart-group h-100">차트 들어가는 곳</div>
                                  </div>

                                  <div className="chart-donut-group size-sm mt-20" style={{width: '128px', height: '128px',}}>
                                    <div className="chart-donut-item">
                                      <div className="data">
                                        <div className="number">356</div>
                                      </div>
                                      <div className="name">Total</div>
                                    </div>
                                    <div className="chart-group h-100">차트 들어가는 곳</div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="adminTab3" title="위험선박 통계">
                          <div className="items-group mt-20">
                            <div className="body">
                              <Row>
                                <Col>
                                  <div className="chart-group min-height" style={{height: 'calc(100vh - 670px)',}}>차트 들어가는 곳</div>
                                  <div className="chart-legend-group no-data">
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color4"></div>
                                        <div className="text">범장망 선택</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color3"></div>
                                        <div className="text">쌍끌이 선박</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color2"></div>
                                        <div className="text">외끌이 선박</div>
                                      </div>
                                    </div>
                                    <div className="chart-legend-item">
                                      <div className="name">
                                        <div className="chart-legend color1"></div>
                                        <div className="text">트롤 선박</div>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col xs="auto">
                                  <div className="chart-donut-group size-sm" style={{width: '128px', height: '128px',}}>
                                    <div className="chart-donut-item">
                                      <div className="data">
                                        <div className="number">356</div>
                                      </div>
                                      <div className="name">Total</div>
                                    </div>
                                    <div className="chart-group h-100">차트 들어가는 곳</div>
                                  </div>

                                  <div className="chart-donut-group size-sm mt-20" style={{width: '128px', height: '128px',}}>
                                    <div className="chart-donut-item">
                                      <div className="data">
                                        <div className="number">356</div>
                                      </div>
                                      <div className="name">Total</div>
                                    </div>
                                    <div className="chart-group h-100">차트 들어가는 곳</div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="p-main">
                      <div className="main-banner-group">
                        <div className="items-group">
                          <div className="header">
                            <div className="left">
                              <div className="title">최근 위성영상 분석</div>
                            </div>
                            <div className="right">
                              <Button variant="link2" size="sm" className="btn-text-icon">자세히보기 <i className="icon-admin icon-button icon-sm icon-arrow-right ms-1"></i></Button>
                            </div>
                          </div>
                          <div className="body">
                            <dl className="list-style-square">
                              <dt>VIRS</dt>
                              <dd>2023-08-11 02:00:00</dd>
                              <dt>이미지</dt>
                              <dd>BSG-117-20230194-orho.tif</dd>
                              <dt>CSV</dt>
                              <dd>2023.07.17_ship_dection.clustog.csv</dd>
                            </dl>
                          </div>
                        </div>

                        <div className="items-group">
                          <div className="header">
                            <div className="left">
                              <div className="title">기상 예보</div>
                            </div>
                            <div className="right">
                              <Button variant="link2" size="sm" className="btn-text-icon">자세히보기 <i className="icon-admin icon-button icon-sm icon-arrow-right ms-1"></i></Button>
                            </div>
                          </div>
                          <div className="body">
                            <div className="admin-weather-group">
                              <div className="image">
                                <img className="image-weather" src={weatherImg0101} alt="맑음" />
                              </div>
                              <div className="info">
                                <div className="info1">전남서부남해앞바다</div>
                                <div className="row justify-content-center">
                                  <div className="col-auto info2">28.1<span className="unit">°C</span></div>
                                  <div className="col-auto">
                                    <div className="info3"><i className="icon-admin icon-weather icon-wind me-1"></i> 남-남서</div>
                                    <div className="info4"><i className="icon-admin icon-weather icon-wave me-1"></i> 0.5~0.5m</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="items-group">
                          <div className="header">
                            <div className="left">
                              <div className="title">VTS 연계 현황</div>
                            </div>
                            <div className="right">
                              <Button variant="link2" size="sm" className="btn-text-icon">자세히보기 <i className="icon-admin icon-button icon-sm icon-arrow-right ms-1"></i></Button>
                            </div>
                          </div>
                          <div className="body">
                            <div className="vts-group">
                              <div className="vts-inner">
                                <div className="vts-item">
                                  <div className="vts-circle circle-on"></div>
                                  <div className="name">경인연안</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">평택항</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">경인항</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">대신항</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">인천항</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">태안연안</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">동해항</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">마산항</div>
                                </div>
                                <div className="vts-item">
                                  <div className="vts-circle circle-off"></div>
                                  <div className="name">목포항</div>
                                </div>
                              </div>
                              <Button variant="icon" className="vts-control vts-control-prev"><i className="icon-admin icon-button icon-prev"></i></Button>
                              <Button variant="icon" className="vts-control vts-control-next"><i className="icon-admin icon-button icon-next"></i></Button>
                            </div>
                          </div>
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

export default Admin;
