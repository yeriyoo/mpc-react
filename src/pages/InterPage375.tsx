import { useState } from 'react';
import SlideMenu from './SlideMenu';
import BottomTable01 from './BottomTable01';
import BottomTable02 from './BottomTable02';
import BottomTable03 from './BottomTable03';
import BottomTable04 from './BottomTable04';
import BottomTable05 from './BottomTable05';


import { Button, Container, Navbar, Dropdown, Nav } from 'react-bootstrap';
import Icon from '@mdi/react';
import {
  mdiMenu,
  mdiMagnify,
  mdiChevronDown,
  mdiCrosshairsGps,
  mdiFolderUploadOutline,
  mdiBellOutline,
  mdiAccountOutline,
  mdiFileChartOutline,
} from '@mdi/js';

const InterPage375 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const [isBottomTableOpen, setIsBottomTableOpen] = useState(false);
  const [windowWidth] = useState(window.innerWidth);
  const [isMobile] = useState(window.innerWidth <= 768);
  const [activeSheet, setActiveSheet] = useState<'BottomTable01' | 'BottomTable02' | 'BottomTable03' | 'BottomTable04' | 'BottomTable05' |null>(null);
  const [mapIcons, setMapIcons] = useState<{ top: string; left: string; label?: string }[]>([]);


  return (
    <div className="main-background-03">
       <SlideMenu
          isOpen={isSlideMenuOpen}
          onClose={() => setIsSlideMenuOpen(false)}
          setIsBottomTableOpen={setIsBottomTableOpen}
          setActiveSheet={setActiveSheet}
          setMapIcons={setMapIcons}
        />

      <div className="navbar-wrapper">
        <div className="mobile-white-bg" />

        <Navbar expand="lg" className="mobile-navbar">
          <Container fluid className="no-gutter position-relative">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="ms-2 navbar-toggle-no-border hamburger-button"
              onClick={() => setIsSlideMenuOpen(true)}
            >
              <Icon path={mdiMenu} size={1.2} color="#000" />
            </Navbar.Toggle>

            <div className="navbar-text">해양환경 위기대응 통합지원 시스템</div>

            <div className="icon-group-wrapper">
              <Button className="search-button" variant="light">
                <Icon path={mdiMagnify} size={1.2} />
              </Button>
            </div>
          </Container>
        </Navbar>

        {/* BottomTable 렌더링 */}
        {activeSheet === 'BottomTable01' && isBottomTableOpen && (
          <BottomTable01
            isShow={true}
            setIsShow={() => setActiveSheet(null)}
            windowWidth={windowWidth}
            isMobile={isMobile}
          />
          )}

        {activeSheet === 'BottomTable02' && isBottomTableOpen && (
          <BottomTable02
            isShow={true}
            setIsShow={() => setActiveSheet(null)}
            windowWidth={windowWidth}
            isMobile={isMobile}
          />
          )}

          {activeSheet === 'BottomTable03' && isBottomTableOpen && (
          <BottomTable03
            isShow={true}
            setIsShow={() => setActiveSheet(null)}
            windowWidth={windowWidth}
            isMobile={isMobile}
          />
          )}

           {activeSheet === 'BottomTable04' && isBottomTableOpen && (
          <BottomTable04
            isShow={true}
            setIsShow={() => setActiveSheet(null)}
            windowWidth={windowWidth}
            isMobile={isMobile}
          />
          )}

          {activeSheet === 'BottomTable05' && isBottomTableOpen && (
          <BottomTable05
            isShow={true}
            setIsShow={() => setActiveSheet(null)}
            windowWidth={windowWidth}
            isMobile={isMobile}
          />
          )}

        {/* 우측 퀵메뉴 */}
        <Dropdown className="dropdown-bottom-right" onToggle={(open) => setIsOpen(open)}>
          <Dropdown.Toggle id="dropdown-basic" className="dropdown-circle-btn" variant="primary">
            <Icon path={mdiChevronDown} size={1.2} className={isOpen ? 'rotate' : ''} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="custom-dropdown-menu">
            <Dropdown.Item>
              <img src="/assets/dr-icon-00.svg" />
            </Dropdown.Item>
            <Dropdown.Item>
              <img src="/assets/dr-icon-01.svg" />
            </Dropdown.Item>
            <Dropdown.Item>
              <img src="/assets/dr-icon-02.svg" />
            </Dropdown.Item>
            <Dropdown.Item>
              <img src="/assets/dr-icon-03.svg" />
            </Dropdown.Item>
            <Dropdown.Item>
              <img src="/assets/dr-icon-04.svg" />
            </Dropdown.Item>
            <Dropdown.Item>
              <img src="/assets/dr-icon-05.svg" />
            </Dropdown.Item>
            <Dropdown.Item>
              <img src="/assets/dr-icon-06.svg" />
            </Dropdown.Item>
            <Dropdown.Item>
              <img src="/assets/dr-icon-07.svg" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="map-container">
          <>
            <div className="white-overlay-box" />
            <div>
              <img
                className="logo-on-overlay"
                src="/assets/wing-logo-375.svg"
                alt="logo"
              />
            </div>
            <Navbar fixed="bottom" className="bottom-navbar">
              <Nav className="bottom-nav">
                <Nav.Item>
                  <Nav.Link href="#home"></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#search" className="bottom-nav-link">
                    <Icon path={mdiFolderUploadOutline} size={1} />
                    <div className="nav-label">업로드</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#menu"
                    className="bottom-nav-link"
                    onClick={() => {
                      setActiveSheet('BottomTable02');
                      setIsBottomTableOpen(true);
                    }}
                  >
                    <Icon path={mdiFileChartOutline} size={1} />
                    <div className="nav-label">예측</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#alert" className="bottom-nav-link">
                    <Icon path={mdiBellOutline} size={1} />
                    <div className="nav-label">알림</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#mypage" className="bottom-nav-link">
                    <Icon path={mdiAccountOutline} size={1} />
                    <div className="nav-label">계정</div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </>
        </div>
      </div>
    </div>
  );
};

export default InterPage375;
