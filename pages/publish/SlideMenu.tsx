import { useState } from 'react';
import { Offcanvas, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

type SlideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  setIsBottomTableOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSheet: React.Dispatch<React.SetStateAction<'BottomTable01' | 'BottomTable02' | 'BottomTable03' | null>>;
};

const SlideMenu = ({ isOpen, onClose, setIsBottomTableOpen, setActiveSheet }: SlideMenuProps) => {
  const [openPredictDropdown, setOpenPredictDropdown] = useState(false);
  const [openPredictDropdown2, setOpenPredictDropdown2] = useState(false);
  const [openPredictDropdown3, setOpenPredictDropdown3] = useState(false);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(false);
  const [openNestedDropdown2, setOpenNestedDropdown2] = useState(false);
  const [openNestedDropdown3, setOpenNestedDropdown3] = useState(false);

  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="start" className="slide-menu">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>전체메뉴</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link
            href="#1"
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

          <Nav.Link href="#3">
            <span>기상정보</span>
          </Nav.Link>
          <Nav.Link href="#4">
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
            <NavDropdown.Item href="#2-1">공지사항</NavDropdown.Item>
            <NavDropdown.Item href="#2-2">게시판</NavDropdown.Item>
            <NavDropdown.Item href="#2-3">Q&A</NavDropdown.Item>
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
            <NavDropdown.Item href="#3-1">해안오염 조사평가</NavDropdown.Item>
            <NavDropdown.Item href="#3-2">해안오염분포도</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="nav-bg-fill"></Nav.Link>

          <Nav.Link href="#7">
            <span>즐겨찾기</span>
          </Nav.Link>
          <Nav.Link href="#8">
            <span>알림</span>
          </Nav.Link>
          <Nav.Link href="#9">
            <span>나의 계정</span>
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SlideMenu;
