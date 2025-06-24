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

const Mpc1Sub2Menu1 = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false); 

  return (
    <>
    {/* 사용자정보 - 사용자관리 */}
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
            <ListGroup defaultActiveKey="#1">
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
              <Breadcrumb.Item active>사용자관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">사용자관리</div>
            <div className="contents-info mb-3">
              사용자 사용등록을 마친 사용자만 사용하실 수 있습니다.<br />
              사용자 구분은 일반사용자, 지방청 사용자, 함정 사용자, 본청 관리자로 구분합니다.
            </div>

            <div className="search-group">
              <Row>
                <Col sm="2">
                  <Form.Group className="form-item-group">
                    <Form.Label>개발자구분</Form.Label>                    
                    <Form.Select>
                        <option>전체</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm="2">
                  <Form.Group className="form-item-group">
                    <Form.Label>계정상태</Form.Label>                    
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
                        <option>사용자ID</option>
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
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary">사용자 등록</Button>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    리얼그리드 들어가는 곳

                    {/* 그리드내 태그 */}
                    <button type="button" className="btn btn-primary btn-sm mw-80px">승인</button>
                    <button type="button" className="btn btn-secondary btn-sm mw-80px">정지</button>

                    <Link onClick={() => setmodal1Show(true)}>사용자 관리</Link>

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

    {/* 사용자 관리 */}
    <Modal centered show={modal1show} onHide={() => setmodal1Show(false)}>
      <Modal.Header closeButton>
          <Modal.Title>사용자 관리</Modal.Title>
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
                    <th>아이디</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>구분</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>조직</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>함정구분</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>핸드폰번호</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>회사주소</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>팩스</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                  <tr>
                    <th>등록일</th>
                    <td className="align-middle">
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setmodal1Show(false)}>목록</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default Mpc1Sub2Menu1;
