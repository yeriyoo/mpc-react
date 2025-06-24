//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

const Ct2Sub2Menu6 = () => {

  return (
    <>
    {/* 분석 - 해상영역 분석 게시물 - 수정 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">MDA 플랫폼</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>통계</Nav.Link>
          <Nav.Link active>분석</Nav.Link>
        </Nav>

        <Nav className="nav-gnb ms-auto">
          <Nav.Link className="nav-category nav-bg1">
            <i className="icon-admin icon-nav icon-chart-bar"></i>
            관리모드
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
        <div className="lnb">
          <div className="lnb-menu-title">분석</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#2">
              <ListGroup.Item action href="#1">알림 게시판</ListGroup.Item>
              <ListGroup.Item action href="#2">해상영역 분석 게시물</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>관리모드</Breadcrumb.Item>
              <Breadcrumb.Item>분석</Breadcrumb.Item>
              <Breadcrumb.Item>해상영역 분석 게시물</Breadcrumb.Item>
              <Breadcrumb.Item active>상세 정보 수정</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">상세 정보 수정</div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="forms-group">
                  <Table>
                    <colgroup>
                      <col style={{width: '140px',}} />
                      <col />
                      <col style={{width: '140px',}} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>제목</th>
                        <td>
                          <Form.Control type="text" />
                        </td>
                        <th>날짜</th>
                        <td>
                          <Form.Control type="text" />
                        </td>
                      </tr>
                      <tr>
                        <th>공유 여부</th>
                        <td className="align-middle">
                          <Form.Check type="radio" inline id="" label="공유" className="mb-0" />
                          <Form.Check type="radio" inline id="" label="공유안함" className="mb-0" />
                        </td>
                        <th>공유 그룹</th>
                        <td>                    
                          <Form.Select>
                            <option>선택</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <th>첨부파일</th>
                        <td colSpan={3}>
                          {/* <Form.Control type="file" /> */}
                          <InputGroup className="form-control-file">
                            <Form.Control type="text" />
                            <div className="btn btn-outline-primary btn-text-icon btn-file ms-2">
                              <div className="text">
                                찾기 <i className="icon-admin icon-button icon-search2 ms-1"></i>
                              </div>
                              <Form.Control type="file" />
                            </div>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <th>내용</th>
                        <td colSpan={3}>
                          <Form.Control as="textarea" rows={8} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="footer">
                <div className="right">
                  <div className="buttons">
                    <Button variant="primary ms-2 mw-80px">저장</Button>
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

export default Ct2Sub2Menu6;
