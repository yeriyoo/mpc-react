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

const Mpc1Sub3Menu3S3 = () => {

  return (
    <>
    {/* 게시판관리 - QNA - 답변 등록/수정 */}
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
              <Breadcrumb.Item active>QNA 답변 등록/수정</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">QNA 답변 등록/수정</div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="forms-group">
                  <Table>
                    <colgroup>
                      <col style={{width: '140px',}} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>제목</th>
                        <td>
                          <Form.Control type="text" />
                        </td>
                      </tr>
                      <tr>
                        <th>등록자</th>
                        <td className="align-middle">                    
                          김공지
                        </td>
                      </tr>
                      <tr>
                        <th>내용</th>
                        <td>
                          <Form.Control as="textarea" rows={8} />
                        </td>
                      </tr>
                      <tr>
                        <th>첨부파일</th>
                        <td>
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
                          <div className="info2-group mt-2">
                            <ul className="list-style-square">
                              <li>첨부가능 파일 확장자: ppt, pptx, xls, xlsx, doc, docx, jpg, bmp, png, gif, pdf</li>
                              <li>최대 5MB까지 업로드 가능합니다.</li>
                            </ul>
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
                    <Button variant="primary ms-2 mw-80px">답변 등록</Button>
                    <Button variant="secondary ms-2 mw-80px">취소</Button>
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

export default Mpc1Sub3Menu3S3;
