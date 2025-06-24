//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

//Utilities
import { useState } from 'react';

//Icon
import Icon from '@mdi/react';
import { mdiLock } from '@mdi/js';

const Mpc1Sub3Menu3S1 = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false);

  return (
    <>
    {/* 게시판관리 - QNA - 상세 */}
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
          <Nav.Link active>게시판관리</Nav.Link>
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
          <div className="lnb-menu-title">게시판관리</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#3">
              <ListGroup.Item action href="#1">공지사항</ListGroup.Item>
              <ListGroup.Item action href="#2">게시판</ListGroup.Item>
              <ListGroup.Item action href="#3">QNA</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>게시판관리</Breadcrumb.Item>
              <Breadcrumb.Item>QNA</Breadcrumb.Item>
              <Breadcrumb.Item active>QNA 상세</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">QNA 상세</div>
            
            <div className="items-group mt-20">
              <div className="body">
                <div className="forms-group">
                  <Table>
                    <colgroup>
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th><Icon path={mdiLock} className="icon-admin icon-mdi icon-grid icon-lock" /> 제목</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex aligh-items-center gap-3">
                            <div><span className="fw-bold me-2">등록자</span> 김공지</div>
                            <div className="divider-vertical" />
                            <div><span className="fw-bold me-2">등록일</span> 2024-01-01 16:52:10</div>
                            <div className="divider-vertical" />
                            <div><span className="fw-bold me-2">조회수</span> 5002</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex aligh-items-center">
                            <i className="icon-admin icon-form icon-clip me-2"></i> aaa.jpg
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-detail">
                          <pre> {
`내용 들어가는 곳
내용 들어가는 곳
내용`
                            }
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>                          
                          <div className="d-flex aligh-items-center">
                            <i className="icon-admin icon-form icon-arrow-up me-2"></i> <span className="me-3">이전글</span> 제목
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>                          
                          <div className="d-flex aligh-items-center">
                            <i className="icon-admin icon-form icon-arrow-down me-2"></i> <span className="me-3">다음글</span> 제목
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="footer">
                <div className="right">
                  <div className="buttons">
                    <Button variant="primary mw-80px">답변등록</Button>
                    <Button variant="primary ms-2 mw-80px">수정</Button>
                    <Button variant="secondary ms-2 mw-80px" onClick={() => setmodal1Show(true)}>삭제</Button>
                    <Button variant="outline-primary ms-2 mw-80px">목록</Button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <Modal size="sm" centered show={modal1show} onHide={() => setmodal1Show(false)}>
      <Modal.Header closeButton>
        <Modal.Title>알림</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert-text-group">
          <div className="text1">
            해당내용을 삭제 하시겠습니까?
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">확인</Button>
        <Button variant="secondary" onClick={() => setmodal1Show(false)}>취소</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default Mpc1Sub3Menu3S1;
