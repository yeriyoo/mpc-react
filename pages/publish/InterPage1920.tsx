import { useEffect, useState } from 'react';
import { Navbar, Container, Form, InputGroup, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMagnify, mdiStar, mdiBell, mdiAccount } from '@mdi/js';

import LeftMainMenu from './LeftMainMenu';
import RightQuickMenu from './RightQuickMenu';
import BottomTable01 from './BottomTable01';
import BottomTable02 from './BottomTable02';
import BottomTable03 from './BottomTable03';


type InterPage1920Props = {
  isBottomTableOpen: boolean;
  setIsBottomTableOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSheet: 'BottomTable01' | 'BottomTable02' | 'BottomTable03'| null;
  setActiveSheet: React.Dispatch<React.SetStateAction<'BottomTable01' | 'BottomTable02'| 'BottomTable03' | null>>;
};

const InterPage1920: React.FC<InterPage1920Props> = ({
  isBottomTableOpen,
  setIsBottomTableOpen,
  activeSheet,
  setActiveSheet,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 메뉴 클릭 핸들러
  const handleOpenBottomTable01 = () => {
  setActiveSheet(prev => (prev === 'BottomTable01' ? null : 'BottomTable01'));
  setIsBottomTableOpen(true);
  };
  const handleOpenBottomTable02 = () => {
  setActiveSheet(prev => (prev === 'BottomTable02' ? null : 'BottomTable02'));
  setIsBottomTableOpen(true);
  };
 const handleOpenBottomTable03 = () => {
  setActiveSheet(prev => (prev === 'BottomTable03' ? null : 'BottomTable03'));
  setIsBottomTableOpen(true);
  };

  const handleClick = () => console.log('지도 버튼 클릭됨');

  return (
    <div className="main-background">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#action0" className="navbar__brand-box">
            <img src="src/assets/winglogo.svg" alt="로고" className="navbar__brand-logo" />
            <strong>해양환경 위기대응 통합지원 시스템</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* 좌측 메뉴 */}
            <LeftMainMenu
              handleOpenBottomTable={handleOpenBottomTable01}
              handleOpenBottomTable02={handleOpenBottomTable02}
              handleOpenBottomTable03={handleOpenBottomTable03}
            />
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

            {/* 검색 */}
            <Form className="d-flex">
              <InputGroup className="navbar_search-group">
                <InputGroup.Text className="navbar_search-icon">
                  <Icon path={mdiMagnify} size={1.2} style={{ color: '#fff' }} />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="검색"
                  aria-label="Search"
                  className="custom-search-input"
                />
              </InputGroup>
            </Form>

            {/* 버튼들 */}
            <Button variant="" className="ms-2 custom-button-01" onClick={handleClick}>
              <Icon path={mdiStar} size={1} color="#fff" />
            </Button>
            <Button variant="" className="ms-2 custom-button-02" onClick={handleClick}>
              <Icon path={mdiBell} size={1} color="#fff" />
            </Button>
            <Button variant="" className="ms-2 custom-button-02" onClick={handleClick}>
              <Icon path={mdiAccount} size={1} color="#fff" />
            </Button>

            <RightQuickMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default InterPage1920;
