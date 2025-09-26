import { useEffect, useState } from 'react';
import RightTopMenu from './RightTopMenu';
import SlideMenu from './SlideMenu';
import LeftMainMenu from './LeftMainMenu';
import BottomTable01 from './BottomTable01';
import BottomTable02 from './BottomTable02';
import BottomTable03 from './BottomTable03';

import { Navbar, Container, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

type InterPage1440Props = {
  isBottomTableOpen: boolean;
  setIsBottomTableOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSheet: 'BottomTable01' | 'BottomTable02'| 'BottomTable03' | null;
  setActiveSheet: React.Dispatch<React.SetStateAction<'BottomTable01' | 'BottomTable02' | 'BottomTable03' | null>>;
};

const InterPage1440: React.FC<InterPage1440Props> = ({
  isBottomTableOpen,
  setIsBottomTableOpen,
  activeSheet,
  setActiveSheet,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);


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

  return (
    <div className="main-background">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#action0" className="navbar__brand-box d-flex align-items-center">
              <img src="src/assets/winglogo.svg" alt="로고" className="navbar__brand-logo" />
              <strong>해양환경 위기대응 통합지원 시스템</strong>
            </Navbar.Brand>

            <Button
              variant="light"
              className="hamburger-button ms-2 d-lg-none"
              onClick={() => setIsSlideMenuOpen(true)}
            >
              <Icon path={mdiMenu} size={1.3} />
            </Button>
          </div>
          <Navbar.Collapse id="navbarScroll">
            {/* 좌측메인메뉴 */}
            <LeftMainMenu
              handleOpenBottomTable={handleOpenBottomTable01}
              handleOpenBottomTable02={handleOpenBottomTable02}
              handleOpenBottomTable03={handleOpenBottomTable03}
            />
          </Navbar.Collapse>
          <RightTopMenu /> 
        </Container>


        {/*슬라이드메뉴*/}
        <SlideMenu
          isOpen={isSlideMenuOpen}
          onClose={() => setIsSlideMenuOpen(false)}
          setIsBottomTableOpen={setIsBottomTableOpen}
          setActiveSheet={setActiveSheet}
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
      </Navbar>
    </div>
  );
};

export default InterPage1440;
