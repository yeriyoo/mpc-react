//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
//Component
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';

const Ct1Sub6Menu1 = () => {

  return (
    <>
    {/* 사용자 관리 - 사용자 목록 관리 */}
    <div className="admin-wrap admin-dashboard">
      <Navbar>
        <Navbar.Brand>
          <div className="logo-admin"><div className="d-none">해양경찰청 Korea Coast Guard</div></div>
          <div className="divider-vertical height-16" />
          <div className="name">MDA 플랫폼</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>모니터링</Nav.Link>
          <Nav.Link>선박정보관리</Nav.Link>
          <Nav.Link>해경자산관리</Nav.Link>
          <Nav.Link>권한설정</Nav.Link>
          <Nav.Link>회원관리</Nav.Link>
          <Nav.Link active>사용자관리</Nav.Link>
          <Nav.Link>그룹관리</Nav.Link>
          <Nav.Link>메뉴관리</Nav.Link>
          <Nav.Link>로그인관리</Nav.Link>
          <Nav.Link>공통코드관리</Nav.Link>
          <Nav.Link>로그관리</Nav.Link>
          <Nav.Link>통계관리</Nav.Link>
          <Nav.Link>AI모델성능관리</Nav.Link>
        </Nav>

        <Nav className="nav-gnb ms-auto">
          <Nav.Link className="nav-category nav-bg1">
            <i className="icon-admin icon-nav icon-chart-bar"></i>
            분석모드
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
          <div className="lnb-menu-title">사용자 관리</div>
          <div className="lnb-menu">
            <ListGroup defaultActiveKey="#1">
              <ListGroup.Item action href="#1">사용자 목록 관리</ListGroup.Item>
              <ListGroup.Item action href="#2">권한 관리</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="contents">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item><i className="icon-admin icon-home"></i></Breadcrumb.Item>
              <Breadcrumb.Item>분석모드</Breadcrumb.Item>
              <Breadcrumb.Item>사용자 관리</Breadcrumb.Item>
              <Breadcrumb.Item active>사용자 목록 관리</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="contents-items">
            <div className="contents-title">사용자 목록 관리</div>

            <div className="items-group mt-20">
              <div className="header">
                <div className="left">
                  <div className="title">목록 리스트</div>
                </div>
              </div>
            </div>

            <div className="search-group">
              <Row className="g-3">
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>기관</Form.Label>
                    <Form.Select>
                      <option>선택</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>상태</Form.Label>
                    <Form.Select>
                      <option>선택</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form-item-group">
                    <Form.Label>ID/성명</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">개힌정보 열람 사유 <i className="icon-admin icon-button icon-information-sm ms-2"></i></Button>
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                  <Button variant="secondary" className="ms-2">초기화</Button>
                </Col>
              </Row>
            </div>

            <div className="items-group mt-20">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary">추가</Button>
                        <Button variant="outline-primary">엑셀</Button>
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

            <div className="info2-group mt-20">
              <ul className="list-style-square">
                <li>본 메뉴에서 내부 시스템 사용자의 정보를 추가 및 수정할 수 있습니다.</li>
                <li>조회 혹은 수정을 원하는 사용자의 보기 버튼을 클릭하여 상세정보를 조회하거나 수정할 수 있습니다.</li>
                <li>회원 추가 시, ID 중복체크를 반드시 수행하셔야 하며, 필수입력 정보를 모두 충족하셔야 합니다.</li>
                <li>비밀번호 변경을 하실 경우 조회 및 수정 화면에서 별도로 수정 가능합니다.</li>
                <li>회원 정보의 완전한 삭제는 불가능하며, 상태코드 변경을 통해 사용정지 혹은 계정정지 등의 상태로 변경 가능합니다.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ct1Sub6Menu1;
