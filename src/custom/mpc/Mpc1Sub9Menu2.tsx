//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';

import Table from 'react-bootstrap/Table';

const Mpc1Sub9Menu2 = () => {

  return (
    <>
    {/* 연계관리 - 연계관리 */}
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
            <ListGroup defaultActiveKey="#2">
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
              <Breadcrumb.Item active>연계관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">연계관리</div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="realgrid-group">
                    <Table className="text-center">
                      <colgroup>
                        <col /><col /><col /><col /><col />
                        <col /><col /><col /><col /><col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>번호</th>
                          <th>원천기관</th>
                          <th>기관코드</th>
                          <th>정보시스템명</th>
                          <th>연계정보</th>
                          <th>저장장소</th>
                          <th>연계방식</th>
                          <th>수집주기</th>
                          <th>수집건수</th>
                          <th>연결상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>부산항</td>
                          <td>BS</td>
                          <td>VTS_AIS</td>
                          <td>VTS</td>
                          <td>signal.t_dynamic_all_reply</td>
                          <td>KAFKA</td>
                          <td>00:00:00</td>
                          <td>561건</td>
                          <td>
                            <Badge bg="primary" className="me-1" style={{ width: "30px" }}>ON</Badge>
                            2025-05-19 14:20:59
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>부산항</td>
                          <td>BS</td>
                          <td>VTS_AIS</td>
                          <td>VTS</td>
                          <td>signal.t_dynamic_all_reply</td>
                          <td>KAFKA</td>
                          <td>00:00:00</td>
                          <td>561건</td>
                          <td>
                            <Badge bg="secondary" className="me-1" style={{ width: "30px" }}>OFF</Badge>
                            2025-05-19 14:20:59
                          </td>
                        </tr>
                      </tbody>
                    </Table>
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
    </>
  );
};

export default Mpc1Sub9Menu2;
