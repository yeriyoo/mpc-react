import { useState, useEffect } from 'react';
import RightTopMenu from './RightTopMenu';
import SlideMenu from './SlideMenu';
import BottomTable01 from './BottomTable01';
import BottomTable02 from './BottomTable02';
import BottomTable03 from './BottomTable03';

import { Navbar, Container, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';


type InterPage768Props = {
  activeSheet: 'BottomTable01' | 'BottomTable02' | 'BottomTable03' | null;
  setActiveSheet: React.Dispatch<React.SetStateAction<'BottomTable01' | 'BottomTable02'| 'BottomTable03' | null>>;
  isBottomTableOpen: boolean;
  setIsBottomTableOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const InterPage768: React.FC<InterPage768Props> = ({
  activeSheet,
  setActiveSheet,
  isBottomTableOpen,
  setIsBottomTableOpen,
}) => {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth <= 991;
  const isMobile375 = windowWidth <= 375;

  const showTable = isBottomTableOpen || (isMobile && !isMobile375); 
  const showTable375 = isBottomTableOpen || isMobile375;


  return (
    <div className="main-background-02">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <div className="d-flex align-items-center me-2">
            <Navbar.Brand href="#action0" className="navbar__brand-box d-flex align-items-center">
              <img
                src="src/assets/winglogo.svg"
                alt="로고"
                className="navbar__brand-logo"
              />
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
          <RightTopMenu /> {/*우측상단메뉴*/}
        </Container>

        {/*슬라이드메뉴*/}
        <SlideMenu
          isOpen={isSlideMenuOpen}
          onClose={() => setIsSlideMenuOpen(false)}
          setIsBottomTableOpen={setIsBottomTableOpen}
          setActiveSheet={setActiveSheet}
        />
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
    </div>
  );
};

export default InterPage768;
