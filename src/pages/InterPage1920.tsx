import { useEffect, useState } from 'react';
import { Navbar, Container, Form, InputGroup, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMagnify, mdiStar, mdiBell, mdiAccount } from '@mdi/js';
import wingLogo from '../assets/winglogo.svg';

import LeftMainMenu from './LeftMainMenu';
import RightQuickMenu from './RightQuickMenu';
import BottomTable01 from './BottomTable01';
import BottomTable02 from './BottomTable02';
import BottomTable03 from './BottomTable03';
import BottomTable04 from './BottomTable04';
import BottomTable05 from './BottomTable05';


type InterPage1920Props = {
  isBottomTableOpen: boolean;
  setIsBottomTableOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSheet: 'BottomTable01' | 'BottomTable02' | 'BottomTable03'| 'BottomTable04' | 'BottomTable05' |null;
  setActiveSheet: React.Dispatch<React.SetStateAction<'BottomTable01' | 'BottomTable02'| 'BottomTable03'| 'BottomTable04' | 'BottomTable05' | null>>;
};

const InterPage1920: React.FC<InterPage1920Props> = ({
  isBottomTableOpen,
  setIsBottomTableOpen,
  activeSheet,
  setActiveSheet,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mapImage, setMapImage] = useState('/mpc-react/assets/default-map.jpg');

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

  const handleOpenBottomTable04 = () => {
  setActiveSheet(prev => (prev === 'BottomTable04' ? null : 'BottomTable04'));
  setIsBottomTableOpen(true);
  };

  const handleOpenBottomTable05 = () => {
  setActiveSheet(prev => (prev === 'BottomTable05' ? null : 'BottomTable05'));
  setIsBottomTableOpen(true);
  };

  const handleToggleS57Map = () => {
  setMapImage(prev => prev === '/mpc-react/assets/s-57-map.jpg' ? '/mpc-react/assets/default-map.jpg' : '/mpc-react/assets/s-57-map.jpg');
};

  const handleClick = () => console.log('지도 버튼 클릭됨');

  return (
    <div
    className="main-background"
    style={{backgroundImage: `url(${mapImage})`}}
    >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="navbar__brand-box">
            <img src={wingLogo} alt="로고" className="navbar__brand-logo" />
            <strong>해양환경 위기대응 통합지원 시스템</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* 좌측 메뉴 */}
            <LeftMainMenu
              handleOpenBottomTable={handleOpenBottomTable01}
              handleOpenBottomTable02={handleOpenBottomTable02}
              handleOpenBottomTable03={handleOpenBottomTable03}
              handleOpenBottomTable04={handleOpenBottomTable04}
              handleOpenBottomTable05={handleOpenBottomTable05}
              mapImage={mapImage} 
              setMapImage={setMapImage} 
            />

            {/* BottomTable 렌더링 */}
            {activeSheet === 'BottomTable01' && isBottomTableOpen && (
              <BottomTable01
                isShow={isBottomTableOpen}
                setIsShow={() => setIsBottomTableOpen(false)}
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
                  id="navbar-search"
                  name="navbarSearch"
                  className="custom-search-input"
                />
              </InputGroup>
            </Form>

            {/* 버튼들 */}
            <Button variant="" className="ms-2 custom-button-01" title="즐겨찾기" onClick={handleClick}>
              <Icon path={mdiStar} size={1} color="#fff" />
            </Button>
            <Button variant="" className="ms-2 custom-button-02" title="알림" onClick={handleClick}>
              <Icon path={mdiBell} size={1} color="#fff" />
            </Button>
            <Button variant="" className="ms-2 custom-button-02" title="내계정" onClick={handleClick}>
              <Icon path={mdiAccount} size={1} color="#fff" />
            </Button>

            <RightQuickMenu
            mapImage={mapImage}
            setMapImage={handleToggleS57Map}
            defaultMap="/assets/s-57-map.jpg" />
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default InterPage1920;
