/**
 * 설명: 관리자 헤더
 **/

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const AdminHeader = () => {
  return (
    <header>
      <Navbar>
        <Navbar.Brand href={'/admin'}>
          <div className="logo-admin">
            <div className="d-none">해양경찰청 Korea Coast Guard</div>
          </div>
          <div className="divider-vertical height-16" />
          <div className="name">관리자</div>
        </Navbar.Brand>
        <Nav>
          <NavDropdown title="환경설정">
            <NavDropdown.Item href={'/admin/setting/code'}>공통코드관리</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/setting/menu'}>메뉴관리</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="사용자정보">
            <NavDropdown.Item href={'/admin/user/manage'}>사용자관리</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/user/authority'}>권한관리</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/user/limit'}>동접제한</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/user/ip'}>접속IP관리</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="게시판관리">
            <NavDropdown.Item href={'/admin/board/notice'}>공지사항</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/board/boardList'}>게시판</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/board/qa'}>Q&A</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={'/admin/report'}>보고서관리</Nav.Link>
          <Nav.Link href={'/admin/integration'}>통합관리</Nav.Link>
          <NavDropdown title="기준정보">
            <NavDropdown.Item href={'/admin/standard/map'}>지도관리</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/standard/sensitive'}> 민감자원지도</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/standard/asset'}>해경자산</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="환경정보">
            <NavDropdown.Item href={'/admin/environment/buoy'}>해양관측부이</NavDropdown.Item>
            <NavDropdown.Item>해양기상예보</NavDropdown.Item>
            <NavDropdown.Item>해양기상관측</NavDropdown.Item>
            <NavDropdown.Item>해양조석</NavDropdown.Item>
            <NavDropdown.Item>천문자료</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="오염관리">
            <NavDropdown.Item href={'/admin/pollution/manage'}>오염정보관리</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/pollution/code'}>관리코드</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="모니터링">
            <NavDropdown.Item href={'/admin/monitoring/collection'}>수집관리</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/monitoring/linking'}>연계관리</NavDropdown.Item>
            <NavDropdown.Item href={'/admin/monitoring/carrying'}>적재관리</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="nav-gnb ms-auto">
          <Nav.Link className="nav-user nav-bg2">
            <i className="icon-admin icon-nav icon-user" />
            김수현
          </Nav.Link>
          <Nav.Link className="nav-logout nav-bg2">
            <i className="icon-admin icon-nav icon-logout" />
            로그아웃
          </Nav.Link>
          {/* <Nav.Link className="nav-login nav-bg2">
            <i className="icon-admin icon-nav icon-login"></i>
            로그인
          </Nav.Link> */}
        </Nav>
      </Navbar>
    </header>
  );
};

export default AdminHeader;
