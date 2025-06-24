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

const Mpc1Sub2Menu2 = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false); 
  const [modal2show, setmodal2Show] = useState(false);
  const [modal3show, setmodal3Show] = useState(false);

  return (
    <>
    {/* 사용자정보 - 권한관리 */}
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
            <ListGroup defaultActiveKey="#2">
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
              <Breadcrumb.Item active>권한관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">권한관리</div>
            <div className="contents-info mb-3">
              사용자 승인관리를 하실 수 있습니다.<br />
              사용자로 요청이 등러온 상태를 확인하시어 승인을 하실 수 있으며, 정지시는 목록에서 삭제처리 됩니다.
            </div>

            <div className="search-group">
              <Row>
                <Col>
                  <Form.Group className="form-item-group">
                    <InputGroup className="align-items-center">
                      <Form.Select className="width-auto">
                        <option>그룹명</option>
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
                        <Button variant="outline-primary" onClick={() => setmodal1Show(true)}>등록</Button>
                        <Button variant="outline-primary">다운로드</Button>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    리얼그리드 들어가는 곳

                    {/* 그리드내 태그 */}
                    <button type="button" className="btn btn-outline-primary btn-sm mw-80px" onClick={() => setmodal2Show(true)}>관리</button>
                    <button type="button" className="btn btn-outline-primary btn-sm mw-80px" onClick={() => setmodal3Show(true)}>관리</button>

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

    {/* 권한 그룹 등록 */}
    <Modal size="lg" centered show={modal1show} onHide={() => setmodal1Show(false)} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>권한 그룹 추가</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">권한 정보</div>
            </div>
          </div>
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{width: '140px',}} />
                  <col style={{width: '240px',}} />
                  <col style={{width: '140px',}} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>그룹명<i className="icon-require"></i></th>
                    <td colSpan={3}><Form.Control type="text" /></td>
                  </tr>
                  <tr>
                    <th>정렬순서</th>
                    <td><Form.Control type="text" /></td>
                    <th>사용여부<i className="icon-require"></i></th>
                    <td>                        
                      <Form.Select>
                        <option>선택</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <th>그룹설명</th>
                    <td colSpan={3}><Form.Control as="textarea" rows={5} /></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">신규저장</Button>
        <Button variant="secondary" onClick={() => setmodal1Show(false)}>초기화</Button>
      </Modal.Footer>
    </Modal>

    {/* 그룹 사용자 관리 */}
    <Modal size="lg" centered show={modal2show} onHide={() => setmodal2Show(false)} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>그룹 사용자 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">[1] 기획운영과</div>
            </div>
          </div>
        </div>

        <Row>
          <Col>
            <div className="search-group">
              <Row>
                <Col>
                  <InputGroup>
                    <Form.Select className="width-auto">
                      <option>선택</option>
                    </Form.Select>
                    <Form.Control type="text" className="ms-2" />
                    <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                    <Button variant="secondary" className="ms-2">초기화</Button>
                  </InputGroup>
                </Col>
              </Row>
            </div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="left">
                      <div className="title size-16">계정 목록</div>
                    </div>
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary">그룹 부여</Button>
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
        </Row>
      </Modal.Body>
    </Modal>

    {/* 그룹메뉴 권한 관리 */}
    <Modal size="xl" centered show={modal3show} onHide={() => setmodal3Show(false)} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>그룹메뉴 권한 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">[1] 기획운영과</div>
            </div>
          </div>
        </div>

        <Row>
          <Col>
            <div className="search-group">
              <Row>
                <Col>
                  <InputGroup>
                    <Form.Select className="width-auto">
                      <option>메뉴명</option>
                    </Form.Select>
                    <Form.Control type="text" className="ms-2" />
                    <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                    <Button variant="secondary" className="ms-2">초기화</Button>
                  </InputGroup>
                </Col>
              </Row>
            </div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="left">
                      <div className="title size-16">메뉴 목록</div>
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
            <div className="search-group">
              <Row>
                <Col>
                  <InputGroup>
                    <Form.Select className="width-auto">
                      <option>권한명</option>
                    </Form.Select>
                    <Form.Control type="text" className="ms-2" />
                    <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                    <Button variant="secondary" className="ms-2">초기화</Button>
                  </InputGroup>
                </Col>
              </Row>
            </div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="left">
                      <div className="title size-16">메뉴 권한 목록</div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    리얼그리드 들어가는 곳
                    
                    {/* 그리드내 태그 */}
                    <button type="button" className="btn btn-primary btn-sm mw-80px">허용</button>
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
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Mpc1Sub2Menu2;
