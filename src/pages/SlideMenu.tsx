import { useState } from 'react';
import { Offcanvas, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

type SlideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  setIsBottomTableOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSheet: React.Dispatch<React.SetStateAction<'BottomTable01' | 'BottomTable02' | 'BottomTable03' | 'BottomTable04' | 'BottomTable05' | null>>;
  setMapIcons: React.Dispatch<React.SetStateAction<{ top: string; left: string; label?: string }[]>>;
};

const SlideMenu = ({ isOpen, onClose, setIsBottomTableOpen, setActiveSheet, setMapIcons }: SlideMenuProps) => {
  const [openPredictDropdown, setOpenPredictDropdown] = useState(false);
  const [openPredictDropdown2, setOpenPredictDropdown2] = useState(false);
  const [openPredictDropdown3, setOpenPredictDropdown3] = useState(false);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(false);
  const [openNestedDropdown2, setOpenNestedDropdown2] = useState(false);
  const [openNestedDropdown3, setOpenNestedDropdown3] = useState(false);
  
  //기상메뉴//
  const [openWeatherDropdown, setOpenWeatherDropdown] = useState(false);
  const [openWeatherNested1, setOpenWeatherNested1] = useState(false);
  const [openWeatherNested2, setOpenWeatherNested2] = useState(false);
  const [openWeatherNested3, setOpenWeatherNested3] = useState(false);
  const [openWeatherNested4, setOpenWeatherNested4] = useState(false);
  const [openWeatherNested5, setOpenWeatherNested5] = useState(false);


  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="start" className="slide-menu">
      <Offcanvas.Header closeButton>
      <Offcanvas.Title id="slide-menu-title">전체메뉴</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link
            onClick={() => {
              setActiveSheet('BottomTable01');
              setIsBottomTableOpen(true);
              onClose();
            }}
          >
            <span>사고조회</span>
          </Nav.Link>

          <NavDropdown
            title={
              <span className="sub-toggle">
                예측
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openPredictDropdown ? 'rotate' : ''}`}
                />
              </span>
            }
            id="nav-dropdown-predict"
            className="nav-dropdown custom-prediction-dropdown"
            onToggle={(isOpen) => setOpenPredictDropdown(isOpen)}
          >
             <Dropdown
              drop="end"
              as="div"
              show={openNestedDropdown2}
              onToggle={(isOpen) => setOpenNestedDropdown2(isOpen)}
            >
              <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>유출유 확산 예측</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openNestedDropdown2 ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item
                  onClick={() => {
                    setActiveSheet('BottomTable02');
                    setIsBottomTableOpen(true);
                    onClose();
                  }}
                >
                  예측 목록
                </Dropdown.Item>
                <Dropdown.Item>유출유 확산 예측</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              drop="down"
              as="div"
              show={openNestedDropdown}
              onToggle={(isOpen) => setOpenNestedDropdown(isOpen)}
            >
              <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>현장 탐색 정보 표출</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openNestedDropdown ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item
                 onClick={() => {
                    setActiveSheet('BottomTable03');
                    setIsBottomTableOpen(true);
                    onClose();
                  }}
                >
                오염정보 목록</Dropdown.Item>
                <Dropdown.Item>현장정보 업로드</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              drop="end"
              as="div"
              show={openNestedDropdown3}
              onToggle={(isOpen) => setOpenNestedDropdown3(isOpen)}
            >
              <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>정밀 비구조격자 해양예측</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openNestedDropdown3 ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item>예측 목록</Dropdown.Item>
                <Dropdown.Item>정밀 비구조격자 해양예측</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavDropdown>

           <NavDropdown
            title={
              <span className="sub-toggle">
                기상정보
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openWeatherDropdown ? 'rotate' : ''}`}
                />
              </span>
            }
            id="nav-dropdown-weather"
            className="nav-dropdown custom-prediction-dropdown"
            onToggle={(isOpen) => setOpenWeatherDropdown(isOpen)}
          >
            <Dropdown
              drop="down"
              as="div"
              show={openWeatherNested1}
              onToggle={(isOpen) => setOpenWeatherNested1(isOpen)}
            >
              <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>해양관측부이(KHOA)</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openWeatherNested1 ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item
                  onClick={() => {
                    if (window.innerWidth >= 633) {
                      // 데스크탑 좌표
                      setMapIcons([
                        { top: '120px', left: '470px', label: '현수원_진하 해양관측부이' },
                        { top: '200px', left: '570px', label: '현수원_진하 해양관측부이' },
                        { top: '250px', left: '570px', label: '현수원_진하 해양관측부이' },
                      ]);
                    } else {
                      // 모바일 좌표
                      setMapIcons([
                        { top: '60px', left: '150px', label: '현수원_진하 해양관측부이' },
                        { top: '100px', left: '220px', label: '현수원_진하 해양관측부이' },
                        { top: '130px', left: '220px', label: '현수원_진하 해양관측부이' },
                      ]);
                    }
                    onClose();
                  }}
                >
                해양관측부이(KHOA)
                </Dropdown.Item>
                <Dropdown.Item>조위관측부이(KHOA)</Dropdown.Item>
                <Dropdown.Item>해양기상부이(KMA)</Dropdown.Item>
                <Dropdown.Item>파고부이(KMA)</Dropdown.Item>
                <Dropdown.Item>등표(KMA)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              drop="end"
              as="div"
              show={openWeatherNested2}
              onToggle={(isOpen) => setOpenWeatherNested2(isOpen)}
            >
              <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>해양기상예보</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openWeatherNested2 ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item>해상예보</Dropdown.Item>
                <Dropdown.Item>해상특보</Dropdown.Item>
                <Dropdown.Item>예비특보</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              drop="end"
              as="div"
              show={openWeatherNested3}
              onToggle={(isOpen) => setOpenWeatherNested3(isOpen)}
            >
              <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>해양기상관측</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openWeatherNested3 ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item>풍향</Dropdown.Item>
                <Dropdown.Item>풍속</Dropdown.Item>
                <Dropdown.Item>지점별 날씨</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              drop="end"
              as="div"
              show={openWeatherNested4}
              onToggle={(isOpen) => setOpenWeatherNested4(isOpen)}
            >
               <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>해양조석</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openWeatherNested4 ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item>유향</Dropdown.Item>
                <Dropdown.Item>유속현황</Dropdown.Item>
                <Dropdown.Item>고저/저조</Dropdown.Item>
                <Dropdown.Item>물때</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              drop="end"
              as="div"
              show={openWeatherNested5}
              onToggle={(isOpen) => setOpenWeatherNested5(isOpen)}
            >
               <Dropdown.Toggle as="div" className="sub-toggle-02" style={{ cursor: 'pointer' }}>
                <span>천문자료</span>
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openWeatherNested5 ? 'rotate' : ''}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-menu-dropdown">
                <Dropdown.Item>일출/일몰</Dropdown.Item>
                <Dropdown.Item>월출/월몰</Dropdown.Item>
                <Dropdown.Item>월광</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </NavDropdown>

         <Nav.Link
            onClick={() => {
              setActiveSheet('BottomTable04');
              setIsBottomTableOpen(true); 
              onClose();   
            }}
          >
            <span>해경자산</span>
          </Nav.Link>

          <NavDropdown
            title={
              <span className="sub-toggle">
                게시판
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openPredictDropdown2 ? 'rotate' : ''}`}
                />
              </span>
            }
            id="nav-dropdown-predict-2"
            className="nav-dropdown custom-prediction-dropdown"
            onToggle={(isOpen) => setOpenPredictDropdown2(isOpen)}
          >
            <NavDropdown.Item
            onClick={() => {
              setActiveSheet('BottomTable05');
              setIsBottomTableOpen(true); 
              onClose();   
            }}
            >
            공지사항
            </NavDropdown.Item>
            <NavDropdown.Item>게시판</NavDropdown.Item>
            <NavDropdown.Item>Q&A</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <span className="sub-toggle">
                오염조사
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`ms-2 dropdown-icon ${openPredictDropdown3 ? 'rotate' : ''}`}
                />
              </span>
            }
            id="nav-dropdown-predict-3"
            className="nav-dropdown custom-prediction-dropdown"
            onToggle={(isOpen) => setOpenPredictDropdown3(isOpen)}
          >
            <NavDropdown.Item>해안오염 조사평가</NavDropdown.Item>
            <NavDropdown.Item>해안오염분포도</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="nav-bg-fill"></Nav.Link>

          <Nav.Link>
            <span>즐겨찾기</span>
          </Nav.Link>
          <Nav.Link>
            <span>알림</span>
          </Nav.Link>
          <Nav.Link>
            <span>나의 계정</span>
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SlideMenu;
