import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

interface LeftMainMenuProps {
  handleOpenBottomTable: () => void;
  handleOpenBottomTable02: () => void;
  handleOpenBottomTable03: () => void;
}

const LeftMainMenu = ({ handleOpenBottomTable, handleOpenBottomTable02,handleOpenBottomTable03 }: LeftMainMenuProps) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openSubmenu2, setOpenSubmenu2] = useState(false);
  const [openSubmenu3, setOpenSubmenu3] = useState(false);

  return (
    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
      <Nav.Link className="nav_menu-box" onClick={handleOpenBottomTable}>
        <img src="src/assets/search.svg" alt="사고조회" className="navbar__menu-icon" />
        <span className="navbar__menu-text--bold">사고조회</span>
      </Nav.Link>

      {/* 예측 메뉴 */}
      <NavDropdown
        className="nav_menu-box custom-prediction-dropdown"
        title={
          <span>
            <img src="src/assets/prediction.svg" alt="예측" className="navbar__menu-icon" />
            <span className="navbar__menu-title--bold">예측</span>
            <Icon path={mdiChevronDown} size={1} />
          </span>
        }
        id="dropdown-prediction"
      >
        <div
          className={`nav-dropdown__item-with-submenu ${openSubmenu3 ? 'open' : ''}`}
          onClick={() => setOpenSubmenu3(!openSubmenu3)}
        >
          <span className="nav-dropdown__item-label">현장 탐색 정보 표출</span>
          <span className="submenu-arrow">
            <Icon path={mdiChevronDown} size={1} />
          </span>
        </div>
        {openSubmenu3 && (
          <div className="nav-dropdown__submenu">
            <NavDropdown.Item>
              <div onClick={handleOpenBottomTable03}>오염정보 목록</div>
            </NavDropdown.Item>
            <NavDropdown.Item>현장정보 업로드</NavDropdown.Item>
          </div>
        )}

        <div
          className={`nav-dropdown__item-with-submenu ${openSubmenu ? 'open' : ''}`}
          onClick={() => setOpenSubmenu(!openSubmenu)}
        >
          <span className="nav-dropdown__item-label">유출유 확산예측</span>
          <span className="submenu-arrow">
            <Icon path={mdiChevronDown} size={1} />
          </span>
        </div>
        {openSubmenu && (
          <div className="nav-dropdown__submenu">
            <NavDropdown.Item>
              <div onClick={handleOpenBottomTable02}>예측 목록</div>
            </NavDropdown.Item>
            <NavDropdown.Item>유출유 확산 예측</NavDropdown.Item>
          </div>
        )}

        <div
          className={`nav-dropdown__item-with-submenu ${openSubmenu2 ? 'open' : ''}`}
          onClick={() => setOpenSubmenu2(!openSubmenu2)}
        >
          <span className="nav-dropdown__item-label">정밀 비구조격자 해양예측</span>
          <span className="submenu-arrow">
            <Icon path={mdiChevronDown} size={1} />
          </span>
        </div>
        {openSubmenu2 && (
          <div className="nav-dropdown__submenu">
            <NavDropdown.Item>예측 목록</NavDropdown.Item>
            <NavDropdown.Item>정밀 비구조격자 해양예측</NavDropdown.Item>
          </div>
        )}
      </NavDropdown>

      <Nav.Link className="nav_menu-box">
        <img src="src/assets/weather.svg" alt="기상정보" className="navbar__menu-icon" />
        <span className="navbar__menu-text--bold">기상정보</span>
      </Nav.Link>

      <Nav.Link className="nav_menu-box">
        <img src="src/assets/ship.svg" alt="해경자산" className="navbar__menu-icon" />
        <span className="navbar__menu-text--bold">해경자산</span>
      </Nav.Link>

      <NavDropdown
        className="nav_menu-box custom-prediction-dropdown"
        title={
          <span>
            <img src="src/assets/board.svg" alt="게시판" className="navbar__menu-icon" />
            <span className="navbar__menu-title--bold">게시판</span>
            <Icon path={mdiChevronDown} size={1} />
          </span>
        }
        id="dropdown-board"
      >
        <NavDropdown.Item>공지사항</NavDropdown.Item>
        <NavDropdown.Item>게시판</NavDropdown.Item>
        <NavDropdown.Item>Q&A</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        className="nav_menu-box custom-prediction-dropdown"
        title={
          <span>
            <img src="src/assets/pollution.svg" alt="오염조사" className="navbar__menu-icon" />
            <span className="navbar__menu-title--bold">오염조사</span>
            <Icon path={mdiChevronDown} size={1} />
          </span>
        }
        id="dropdown-pollution"
      >
        <NavDropdown.Item>해안오염 조사평가</NavDropdown.Item>
        <NavDropdown.Item>해안오염분포도</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default LeftMainMenu;
