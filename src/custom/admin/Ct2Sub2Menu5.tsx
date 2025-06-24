//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

const Ct2Sub2Menu5 = () => {

  return (
    <>
    {/* 분석 - 해상영역 분석 게시물 - 상세 */}
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
              <Breadcrumb.Item active>상세 정보</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">상세 정보</div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="forms-group">
                  <Table>
                    <colgroup>
                      <col />
                      <col style={{width: '140px',}} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>제목</th>
                        <th className="text-end">2024-01-01</th>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <div className="d-flex aligh-items-center">
                            <i className="icon-admin icon-form icon-clip me-2"></i> aaa.jpg
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="bg-detail">
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
                    <Button variant="primary mw-80px">수정</Button>
                    <Button variant="secondary ms-2 mw-80px">삭제</Button>
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

export default Ct2Sub2Menu5;
