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
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
//Utilities
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Mpc1Sub2Menu3 = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false); 
  const [modal2show, setmodal2Show] = useState(false); 

  return (
    <>
    {/* 사용자정보 - 동접제한 */}
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
          <Nav.Link active>사용자정보</Nav.Link>
          <Nav.Link>게시판관리</Nav.Link>
          <Nav.Link>보고서관리</Nav.Link>
          <Nav.Link>통합관리</Nav.Link>
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
          <div className="lnb-menu-title">사용자정보</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#3">
              <ListGroup.Item action href="#1">사용자관리</ListGroup.Item>
              <ListGroup.Item action href="#2">권한관리</ListGroup.Item>
              <ListGroup.Item action href="#3">동접제한</ListGroup.Item>
              <ListGroup.Item action href="#4">접속IP관리</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>사용자정보</Breadcrumb.Item>
              <Breadcrumb.Item active>동접제한</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">동접제한</div>
            <div className="contents-info mb-3">
              플랫폼 정책관리에서 각항목별 최대동시 접속자수 제한하실 수 있습니다.<br />
              서비스 ID별로 최대동시 접속자수를 제한하실 수 있습니다.
            </div>

            <div className="search-group">
              <Row>
                <Col sm="2">
                  <Form.Group className="form-item-group">
                    <Form.Label>서비스구분</Form.Label>                    
                    <Form.Select>
                        <option>전체</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm="2">
                  <Form.Group className="form-item-group">
                    <Form.Label>적용여부</Form.Label>                    
                    <Form.Select>
                        <option>전체</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>키워드검색</Form.Label>
                    <InputGroup className="align-items-center">
                      <Form.Select className="width-auto">
                        <option>서비스명</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
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
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="left">
                      <div className="text-total">
                        총 <span>23</span>건
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    리얼그리드 들어가는 곳

                    {/* 그리드내 태그 */}
                    <Link onClick={() => setmodal1Show(true)}>서비스 ID 링크</Link>
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

    {/* 동시접속 제한 설정 */}
    <Modal centered show={modal1show} onHide={() => setmodal1Show(false)}>
      <Modal.Header closeButton>
          <Modal.Title>동시접속 제한 설정</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{width: '140px',}} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>서비스 ID</th>
                    <td className="align-middle">                    
                      0001
                    </td>
                  </tr>
                  <tr>
                    <th>서비스명</th>
                    <td className="align-middle">                    
                      Online
                    </td>
                  </tr>
                  <tr>
                    <th>현재 동접제한건수</th>
                    <td className="align-middle">                    
                      1명(동시접속 불가-단독접속)
                    </td>
                  </tr>
                  <tr>
                    <th>공개여부</th>
                    <td className="align-middle">
                      <Form.Check type="radio" inline id="" label="적용" className="mb-0" />
                      <Form.Check type="radio" inline id="" label="미적용" className="mb-0" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setmodal2Show(true)}>변경 적용</Button>
        <Button variant="secondary" onClick={() => setmodal1Show(false)}>취소</Button>
      </Modal.Footer>
    </Modal>

    {/* 알림 */}
    <Modal size="sm" centered show={modal2show} onHide={() => setmodal2Show(false)}>
      <Modal.Header closeButton>
        <Modal.Title>알림</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert-text-group">
          <div className="text1">
            동접 제한을 설정하시겠습니까?
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">확인</Button>
        <Button variant="secondary" onClick={() => setmodal2Show(false)}>취소</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default Mpc1Sub2Menu3;
