/**
 * 설명: 메인 맵 헤더
 **/
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiAccount, mdiAlertOctagon, mdiBell, mdiBulletinBoard, mdiMapLegend, mdiWeatherSunset } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

interface IProps {
  setIsShow2: VoidFunction;
  setIsShow3: VoidFunction;
  setIsShow4: VoidFunction;
  setIsShow5: VoidFunction;
  setIsShow12: VoidFunction;
  setIsShow13: VoidFunction;
  setIsShow14: VoidFunction;
  setIsShow15: VoidFunction;
}

const Header = ({
  setIsShow2,
  setIsShow3,
  setIsShow4,
  setIsShow5,
  setIsShow12,
  setIsShow13,
  setIsShow14,
  setIsShow15,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar expand="lg" className="mpc-navbar">
        <Container fluid>
          <div className="nav-left">
            <Navbar.Toggle />
            <Navbar.Brand className="user">
              <i className="mpci brand-symbol" title="해양환경 위기대응 통합지원시스템" />
            </Navbar.Brand>
          </div>
          <Navbar.Collapse>
            <Nav className="nav-gnb me-auto">
              <Nav.Link>
                <Icon path={mdiMapLegend} size={1} title="현장 사고 관리" className="mpci mdi mdi-map-legend me-1" />{' '}
                현장 사고 관리
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    <i className="mpci csi icon-menu1 me-1" title="예측(R&D)시스템" /> 예측(R&D)시스템
                  </>
                }
              >
                <NavDropdown.Item className="fw-semibold">유출유 확산예측</NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold">정밀 비구조격자 해양예측</NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.ItemText className="fw-semibold">현장탐색 정보표출</NavDropdown.ItemText>
                <NavDropdown.Item onClick={setIsShow5}>- 오염정보</NavDropdown.Item>
                <NavDropdown.Item onClick={setIsShow2}>- 업로드</NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold" onClick={() => void navigate('/analysis')}>
                  종합분석
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <i className="mpci csi icon-menu2 me-1" title="해경자산" /> 해경자산
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    <Icon path={mdiWeatherSunset} size={1} title="기상" className="mpci mdi mdi-weather-sunset me-1" />{' '}
                    기상
                  </>
                }
              >
                <NavDropdown.ItemText className="fw-semibold">해양관측부이</NavDropdown.ItemText>
                <NavDropdown.Item>- 부이관측정보</NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold">해양기상예보</NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold">해양기상관측</NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold">해양조석</NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold">천문자료</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    <Icon
                      path={mdiBulletinBoard}
                      size={1}
                      title="게시판"
                      className="mpci mdi mdi-bulletin-board me-1"
                    />{' '}
                    게시판
                  </>
                }
              >
                <NavDropdown.Item className="fw-semibold" onClick={setIsShow12}>
                  공지사항
                </NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold" onClick={setIsShow13}>
                  자료실
                </NavDropdown.Item>
                <NavDropdown.Divider className="my-0" />
                <NavDropdown.Item className="fw-semibold" onClick={setIsShow14}>
                  Q&A
                </NavDropdown.Item>
                {/* 상세로 이동 필요 */}
                <NavDropdown.Item className="fw-semibold" onClick={setIsShow15}>
                  Q&A 상세 보기
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={'/admin'} target={'_blank'}>
                관리자
              </Nav.Link>
              {/*<NavDropdown*/}
              {/*  title={*/}
              {/*    <>*/}
              {/*      <Icon*/}
              {/*        path={mdiFileCodeOutline}*/}
              {/*        size={1}*/}
              {/*        title="Sample"*/}
              {/*        className="mpci mdi mdi-file-code-outline me-1"*/}
              {/*      />{' '}*/}
              {/*      Sample*/}
              {/*    </>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <NavDropdown.Item onClick={setIsShowSample1}>Form</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShowSample2}>Grid</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShowSample3}>Button</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShowSample4}>Icon</NavDropdown.Item>*/}
              {/*  <NavDropdown.Divider />*/}
              {/*  <NavDropdown.Header>Popover</NavDropdown.Header>*/}
              {/*  <NavDropdown.Item onClick={setIsShow6}>검색필터조건</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShow7}>오염물질 정보</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShow8}>오염물질 정보 상세</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShow9}>확산예측 내역</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShow10}>확산 예측 시뮬레이션</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item onClick={setIsShow11}>레이어</NavDropdown.Item>*/}
              {/*</NavDropdown>*/}
            </Nav>
          </Navbar.Collapse>
          <Nav className="nav-user">
            <Nav.Link onClick={setIsShow3}>
              <Icon path={mdiAlertOctagon} size={1} title="사고사항" className="mpci mdi mdi-alert-octagon" />
            </Nav.Link>
            <Nav.Link onClick={setIsShow4}>
              <div className="position-relative">
                <Icon path={mdiBell} size={1} title="알람" className="mpci mdi mdi-bell" />
                <i className="badge-new" />
              </div>
            </Nav.Link>
            <Nav.Link>
              <Icon path={mdiAccount} size={1} title="사용자" className="mpci mdi mdi-account" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
