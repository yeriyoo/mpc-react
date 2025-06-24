//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

const Mpc1Sub1Menu2 = () => {

  return (
    <>
    {/* 환경설정 - 메뉴관리 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">관리자</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>모니터링</Nav.Link>
          <Nav.Link active>환경설정</Nav.Link>
          <Nav.Link>사용자정보</Nav.Link>
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
          <div className="lnb-menu-title">환경설정</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#2">
              <ListGroup.Item action href="#1">공통코드관리</ListGroup.Item>
              <ListGroup.Item action href="#2">메뉴관리</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>환경설정</Breadcrumb.Item>
              <Breadcrumb.Item active>메뉴관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">메뉴관리</div>
            <div className="contents-info mb-3">
              해양환경 위기대응 통합시스템 관리자 및 사용자별로 메뉴 권한을 관리할 수 있습니다.<br />
              관리자 및 사용자를 우선 선택하여 이용하세요.
            </div>

            <Row>
              <Col md="6" lg="4">
                <div className="items-group">
                  <div className="header" style={{height: '38px',}}>
                    <div className="left">
                      <div className="title size-16">메뉴</div>
                      <Form.Select>
                        <option>관리자</option>
                        <option>사용자</option>
                      </Form.Select>
                    </div>
                    <div className="right">
                      <Button variant="outline-primary">추가</Button>
                      <Button variant="secondary">삭제</Button>
                    </div>
                  </div>
                  <div className="body">
                    <div className="tree-group border">
                      트리 들어가는 곳
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="items-group">
                  <div className="header">
                    <div className="left">
                      <div className="title size-16">메뉴 상세 및 수정</div>
                    </div>
                    <div className="right">
                      <Button variant="primary">등록</Button>
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
                            <th>메뉴구분</th>
                            <td className="align-middle">
                              관리자
                            </td>
                          </tr>
                          <tr>
                            <th>상위메뉴</th>
                            <td className="align-middle">
                              ROOT
                            </td>
                          </tr>
                          <tr>
                            <th>메뉴구분</th>
                            <td className="align-middle">
                              카테고리
                            </td>
                          </tr>
                          <tr>
                            <th>메뉴명</th>
                            <td><Form.Control type="text" /></td>
                          </tr>
                          <tr>
                            <th>메뉴순서</th>
                            <td><Form.Control type="text" /></td>
                          </tr>
                          <tr>
                            <th>메뉴주소</th>
                            <td><Form.Control type="text" /></td>
                          </tr>
                          <tr>
                            <th>좌측메뉴타이틀</th>
                            <td>
                              <InputGroup className="align-items-center">
                                <Form.Control type="text" />
                                <Button variant="outline-primary" className="ms-2">찾아보기</Button>
                              </InputGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>메뉴설명</th>
                            <td><Form.Control as="textarea" rows={5} /></td>
                          </tr>
                          <tr>
                            <th>사용구분</th>
                            <td className="align-middle">
                              <Form.Check type="radio" inline id="" label="사용함" className="mb-0" />
                              <Form.Check type="radio" inline id="" label="사용안함" className="mb-0" />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Mpc1Sub1Menu2;
