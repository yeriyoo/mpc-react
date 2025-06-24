//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';
//Utilities
import { useState } from 'react';

const Mpc1Sub9Menu1 = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false); //수집 작업 등록
  const [modal2show, setmodal2Show] = useState(false); //수집 작업 등록2
  const [modal3show, setmodal3Show] = useState(false); //수집 작업 등록3
  const [modal4show, setmodal4Show] = useState(false); //수집 작업 삭제

  return (
    <>
    {/* 연계관리 - 수집관리 */}
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
            <ListGroup defaultActiveKey="#1">
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
              <Breadcrumb.Item active>수집관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">
              수집관리
              <Button variant="outline-primary" className="ms-auto" onClick={() => setmodal1Show(true)}>수집작업 등록</Button>
              <Button variant="outline-primary" className="ms-2">수정</Button>
              <Button variant="secondary" className="ms-2">삭제</Button>
              <Button variant="outline-primary" className="ms-2">목록</Button>
            </div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="realgrid-group">
                    리얼그리드 들어가는 곳

                    {/* 그리드내 태그 */}
                    <div className="grid-bar" style={{width: '30%',}}></div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* 수집 작업 등록 */}
    <Modal size="xl" centered show={modal1show} onHide={() => setmodal1Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>수집 작업 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">프로세스명</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon" onClick={() => setmodal2Show(true)}>수집 작업 등록 <i className="icon-admin icon-button icon-download ms-2"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <Row>
            <Col>
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title size-16">수집 서버 선택</div>
                  </div>
                </div>
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="right">
                        <div className="buttons">
                          <Button variant="outline-primary" className="mw-auto text-nowrap">TXT</Button>
                          <Button variant="outline-primary" className="mw-auto">FILE</Button>
                          <Button variant="outline-primary" className="mw-auto">FTP</Button>
                          <InputGroup className="align-items-center">
                            <Form.Control type="text" />
                            <Button variant="outline-primary" className="ms-2 btn-text-icon">조회 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                          </InputGroup>
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
            <Col>
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title size-16">수집 스케쥴</div>
                  </div>
                </div>
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="right">
                        <div className="buttons">
                          <InputGroup className="align-items-center">
                            <Form.Control type="text" />
                            <Button variant="outline-primary" className="ms-2 btn-text-icon">조회 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                          </InputGroup>
                        </div>
                      </div>
                    </div>
                    <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                    <div className="pagination-group">
                      {/* <Pagination size="sm">
                        <Pagination.First className="page-control page-first" />
                        <Pagination.Prev className="page-control page-prev" />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next className="page-control page-next" disabled />
                        <Pagination.Last className="page-control page-last" />
                      </Pagination> */}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 수집 작업 등록2 */}
      <Modal size="lg" centered show={modal2show} onHide={() => setmodal2Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>수집 작업 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">수집 작업명</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="title size-16">수집 스케쥴</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>수집 기간</th>
                      <td>
                        <div className="date-range-group">
                          <Form.Control type="date" /> 
                          <div className="during">~</div>
                          <Form.Control type="date" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>수집 시간</th>
                      <td>
                        <div className="datetime-group">
                          <div className="datetime-item">
                            <div className="picker">
                              <Button variant="month">1</Button>
                              <Button variant="month">2</Button>
                              <Button variant="month" active>3</Button>
                              <Button variant="month">4</Button>
                              <Button variant="month">5</Button>
                              <Button variant="month">6</Button>
                              <Button variant="month">7</Button>
                              <Button variant="month">8</Button>
                              <Button variant="month">9</Button>
                              <Button variant="month">10</Button>
                              <Button variant="month">11</Button>
                              <Button variant="month">12</Button>
                            </div>
                            <div className="unit">월</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="0" />
                                <div className="progress-bar-track" style={{ width: `0`, }}>
                                  <div className="data">1</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">일</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="28" />
                                <div className="progress-bar-track" style={{ width: `28%`, }}>
                                  <div className="data">3</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">시</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="50" />
                                <div className="progress-bar-track" style={{ width: `50%`, }}>
                                  <div className="data">30</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">분</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="100" />
                                <div className="progress-bar-track" style={{ width: `100%`, }}>
                                  <div className="data">60</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">초</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>수집 수행</th>
                      <td>
                        <Form.Check type="switch" id="custom-switch" label="" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="title size-16">수집 형태</div>
                <Form.Select>
                  <option>DATABASE(티베로)</option>
                </Form.Select>
              </div>
              <div className="right">
                <OverlayTrigger placement="top" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                  <Button variant="icon"><i className="icon-admin icon-information"></i></Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>수집 룰</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>수집 룰</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal4Show(true)}>삭제</Button>
          <Button variant="primary" className="ms-auto" onClick={() => setmodal3Show(true)}>저장</Button>
          <Button variant="secondary" onClick={() => setmodal2Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 수집 작업 등록3 */}
      <Modal size="sm" centered show={modal3show} onHide={() => setmodal3Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              작성중인 수집 작업을 등록할까요?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">등록</Button>
          <Button variant="secondary" onClick={() => setmodal3Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 수집 작업 삭제 */}
      <Modal size="sm" centered show={modal4show} onHide={() => setmodal4Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              현재 수집 작업을 삭제할까요?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal4Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mpc1Sub9Menu1;
