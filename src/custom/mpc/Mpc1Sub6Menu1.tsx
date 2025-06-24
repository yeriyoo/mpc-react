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

const Mpc1Sub6Menu1 = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false); 

  return (
    <>
    {/* 기준정보 - 지도관리 */}
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
          <Nav.Link active>기준정보</Nav.Link>
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
          <div className="lnb-menu-title">기준정보</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#1">
              <ListGroup.Item action href="#1">지도관리</ListGroup.Item>
              <ListGroup.Item action href="#2">민감자원지도</ListGroup.Item>
              <ListGroup.Item action href="#3">해경자산</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>기준정보</Breadcrumb.Item>
              <Breadcrumb.Item active>지도관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">지도관리</div>
            {/* <div className="contents-info mb-3">
              등록된 IP로만 접속할 수 있습니다.<br />
              계정과 IP는 1:1로 매핑되어 사용되어집니다.
            </div> */}

            {/* <div className="search-group">
              <Row>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>IP주소</Form.Label>   
                    <Form.Control type="text" placeholder="IP주소" />
                  </Form.Group>
                </Col>
                <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                  <Button variant="secondary" className="ms-2">초기화</Button>
                </Col>
              </Row>
            </div> */}

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="left">
                      <div className="text-total">
                        총 <span>23</span>건
                      </div>
                    </div>
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary" onClick={() => setmodal1Show(true)}>등록</Button>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    리얼그리드 들어가는 곳

                    {/* 그리드내 태그 */}
                    <div className="mb-0 form-check form-check-inline">
                      <input type="checkbox" className="form-check-input" />
                      <label title="" className="form-check-label">사용함</label>
                    </div>
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

    {/* 등록 */}
    <Modal centered show={modal1show} onHide={() => setmodal1Show(false)}>
      <Modal.Header closeButton>
          <Modal.Title>등록</Modal.Title>
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
                    <th>Map Name</th>
                    <td className="align-middle">                    
                      <Form.Control type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>Map's Lavel</th>
                    <td className="align-middle">                    
                      <Form.Select>
                          <option>Level</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <th>Data Source</th>
                    <td className="align-middle">
                      <Form.Control type="file" />
                    </td>
                  </tr>
                  <tr>
                    <th>상세 설명</th>
                    <td className="align-middle">                    
                      <Form.Control type="text" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">저장</Button>
        <Button variant="secondary" onClick={() => setmodal1Show(false)}>취소</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default Mpc1Sub6Menu1;
