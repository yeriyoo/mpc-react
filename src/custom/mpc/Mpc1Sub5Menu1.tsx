//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';
//Utilities
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Icon
import Icon from '@mdi/react';
import { mdiArrowRightBottom, mdiChevronLeft, mdiChevronRight, mdiLock, mdiPauseCircleOutline } from '@mdi/js';

const Mpc1Sub5Menu1 = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false); 

  return (
    <>
    {/* 통합관리 */}
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
          <Nav.Link active>통합관리</Nav.Link>
          <Nav.Link>기준정보</Nav.Link>
          <Nav.Link>환경정보</Nav.Link>
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
          <div className="lnb-menu-title">통합관리</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#1">
              <ListGroup.Item action href="#1">통합관리</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item active>통합관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">통합관리</div>
            <Row className="mt-20">
              <Col md="7">
                <div className="items-group">
                  <div className="header">
                    <div className="left">
                      <div className="title size-16">2025년 해양오염현황 통계(월별. 일별)</div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="map-group position-relative" style={{height: '400px',}}>지도 들어가는 곳</div>
                    
                    <div className="grid-group mt-20">
                      <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <Card className="pollution-status-group pollution-status-group1">
                  <Card.Header>
                    <div className="title-info">
                      <div className="title-date">
                        2005
                      </div>
                      <div className="title-name">
                        해양오염현황
                      </div>
                      <div className="title-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="ms-auto">
                      <Button variant="outline-primary" size="sm" onClick={() => setmodal1Show(true)}>상세보기</Button>
                    </div>
                  </Card.Header>
                  <Card.Body className="border-bottom">
                    <div className="body-info body-info1">
                      <div className="body-info-item">
                        <div className="info-name">
                          경기
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          경북
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          강원
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Body>
                    <div className="body-info body-info2">
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>충남</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>경남</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>전남</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>전북</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>충북</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>대구</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>부산</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>울산</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>인천</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>광주</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>대전</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>서울</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>세종</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="body-info-item">
                        <div className="info-name">
                          <Badge bg="secondary" pill>제주</Badge>
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card className="pollution-status-group pollution-status-group2 mt-20" bg="warning"> {/* bg="info", bg="warning", bg="boundary" , bg="danger" */}
                  <Card.Header>
                    <div className="title-info">
                      <div className="title-name">
                        전국
                      </div>
                      <div className="title-value">
                        <Badge bg="warning" pill>주의</Badge>
                      </div>
                      <div className="title-date">
                        2005-05-001 08:00
                      </div>
                    </div>
                    <div className="ms-auto d-flex gap-1">
                      <Button variant="outline-primary" size="sm" className="btn-icon">
                        <Icon path={mdiChevronLeft} className="icon-admin icon-mdi" />
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon">
                        <Icon path={mdiChevronRight} className="icon-admin icon-mdi" />
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon">
                        <Icon path={mdiPauseCircleOutline} className="icon-admin icon-mdi" />
                      </Button>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="bg-white p-2">
                      <Row>
                        <Col>
                            <div className="chart-group">차트 들어가는 곳</div>
                        </Col>
                        <Col>
                            <div className="pollution-statu-info">
                              <dl>
                                <dt>경보단계</dt>
                                <dd><Badge bg="warning" pill>주의</Badge></dd>
                                <dt>발령지역</dt>
                                <dd>전국: 주의 <br />전국: 주의</dd>
                              </dl>
                            </div>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>

                <div className="items-group mt-20">
                  <div className="body">
                    <div className="pollution-status-group pollution-status-group3">
                      <div className="info-item bg1">
                        <div className="info-name">
                          방제작업중
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                      <div className="info-item bg2">
                        <div className="info-name">
                          작업완료
                        </div>
                        <div className="info-value">
                          <span>349</span>건
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </Col>
            </Row>
            
          </div>
        </div>
      </div>
    </div>

    {/* 그룹 사용자 관리 */}
    <Modal size="xl" centered show={modal1show} onHide={() => setmodal1Show(false)} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>그룹 사용자 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <div className="items-group">
              <div className="header">
                <div className="left">
                  <div className="title size-16">2025년 해양오염현황 통계(월별. 일별)</div>
                </div>
              </div>
              <div className="body">
                <div className="chart-group">차트 들어가는 곳</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="items-group">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="left">
                      <div className="title size-16">해양오염현황</div>
                    </div>
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary">CSV다운로드</Button>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                  {/* <div className="pagination-group">
                    <Pagination size="sm">
                      <Pagination.First className="page-control page-first" />
                      <Pagination.Prev className="page-control page-prev" />
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Next className="page-control page-next" disabled />
                      <Pagination.Last className="page-control page-last" />
                    </Pagination>
                  </div> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Mpc1Sub5Menu1;
