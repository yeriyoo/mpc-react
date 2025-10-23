import { useState, useEffect, useRef } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import MapWeatherIcon from './MapWeatherIcon'; 

import predictionIcon from '/public/assets/prediction.svg';

interface LeftMainMenuProps {
  handleOpenBottomTable: () => void;
  handleOpenBottomTable02: () => void;
  handleOpenBottomTable03: () => void;
  handleOpenBottomTable04: () => void;
  handleOpenBottomTable05: () => void;
  mapImage: string; // 추가
  setMapImage: React.Dispatch<React.SetStateAction<string>>;
}

interface TreeItem {
  label: string;
  children?: TreeItem[];
}

const weatherItems: TreeItem[] = [
  {
    label: '해양관측부이(KHOA)',
    children: [
      { label: '해양관측부이(KHOA)' },
      { label: '조위관측부이(KHOA)' },
      { label: '해양기상부이(KMA)' },
      { label: '파고부이(KMA)' },
      { label: '등표(KMA)' },
    ],
  },
  {
    label: '해양기상예보',
    children: [{ label: '해상예보' }, { label: '해상특보' }, { label: '예비특보' }],
  },
  {
    label: '해양기상관측',
    children: [{ label: '풍향' }, { label: '풍속' }, { label: '지점별 날씨' }],
  },
  {
    label: '해양조석',
    children: [{ label: '유향' }, { label: '유속현황' }, { label: '고조/저조' }, { label: '물때' }],
  },
  {
    label: '천문자료',
    children: [{ label: '일출/일몰' }, { label: '월출/월몰' }, { label: '월광' }],
  },
];


const LeftMainMenu = ({ handleOpenBottomTable, handleOpenBottomTable02,handleOpenBottomTable03, handleOpenBottomTable04, handleOpenBottomTable05 }: LeftMainMenuProps) => {
const [openSubmenu, setOpenSubmenu] = useState(false);
const [openSubmenu2, setOpenSubmenu2] = useState(false);
const [openSubmenu3, setOpenSubmenu3] = useState(false);


// 기상 트리 메뉴 상태
const [openWeatherDropdown, setOpenWeatherDropdown] = useState(false);
const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
const [mapIcons, setMapIcons] = useState<{ top: string; left: string }[]>([]);

const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenWeatherDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const toggleItem = (label: string) => {
    setOpenItems(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const fixedPositions = [
  { top: '100%', left: '8%', transform: 'translate(-50%, -50%)' },
  { top: '200%', left: '15%', transform: 'translate(-50%, -50%)' },
  ];

  // 체크박스 클릭 시 아이콘 표시
  const handleCheckboxClick = (label: string) => {
  setCheckedItems(prev => {
    const newChecked = !prev[label];

    // ✅ 해양관측부이(KHOA)만 아이콘 제어
    if (label === '해양관측부이(KHOA)') {
      if (newChecked) {
        setMapIcons(fixedPositions); 
      } else {
        setMapIcons([]);  
      }
    }

    return { ...prev, [label]: newChecked };
  });
};

const renderTree = (items: TreeItem[], level = 0) =>
  items.map(item => (
    <div key={item.label} className="tree-node" style={{ paddingLeft: `${level *32}px` }}>
      <div className="tree-item">
        {item.children && (
          <span
            className={`weather-toggle-btn ${openItems[item.label] ? 'open' : 'closed'}`}
            onClick={() => toggleItem(item.label)}
          >
            {openItems[item.label] ? '-' : '+'}
          </span>
        )}

        {level > 0 && (
          <input
            type="checkbox"
            checked={checkedItems[item.label] || false}
            onChange={() => handleCheckboxClick(item.label)}
          />
        )}
        <span className={`tree-label ${checkedItems[item.label] ? 'checked' : ''}`}>{item.label}</span>
      </div>
      {item.children && openItems[item.label] && renderTree(item.children, level + 1)}
    </div>
  ));


  return (
    <>
    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
      <Nav.Link
        className="nav_menu-box"
        onClick={() => {
          handleOpenBottomTable();
          setMapIcons([]); 
        }}
      >
        <img src="/mpc-react/assets/search.svg" alt="사고조회" className="navbar__menu-icon" />
        <span>사고조회</span>
      </Nav.Link>

      {/* 예측 메뉴 */}
      <NavDropdown
        className="nav_menu-box custom-prediction-dropdown"
        title={
          <span>
            <img src={predictionIcon} alt="예측" className="navbar__menu-icon" />
            <span className="navbar__menu-title--bold">예측</span>
            <Icon path={mdiChevronDown} size={1} />
          </span>
        }
        id="dropdown-prediction"
        onToggle={() => setMapIcons([])}
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

     <NavDropdown
      className="nav_menu-box weather-dropdown"
      title={
        <span>
          <img src="/mpc-react/assets/weather.svg" alt="기상정보" className="navbar__menu-icon" />
          <span className="navbar__menu-title--bold">기상정보</span>
        </span>
      }
      show={openWeatherDropdown}
      onToggle={() => setOpenWeatherDropdown(prev => !prev)}
      autoClose={false} 
    >
      {renderTree(weatherItems)}
    </NavDropdown>


      <Nav.Link
        className="nav_menu-box"
        onClick={() => {
          handleOpenBottomTable04();
          setMapIcons([]);
        }}
      >
        <img src="/mpc-react/assets/ship.svg" alt="해경자산" className="navbar__menu-icon" />
        <span>해경자산</span>
      </Nav.Link>

      <NavDropdown
        className="nav_menu-box custom-prediction-dropdown"
        title={
          <span>
            <img src="/mpc-react/assets/board.svg" alt="게시판" className="navbar__menu-icon" />
            <span className="navbar__menu-title--bold">게시판</span>
            <Icon path={mdiChevronDown} size={1} />
          </span>
        }
        id="dropdown-board"
        onToggle={() => setMapIcons([])}
      >
        <NavDropdown.Item
        onClick={() => {
          handleOpenBottomTable05();
          setMapIcons([]);
        }}
        >
        공지사항</NavDropdown.Item>
        <NavDropdown.Item>게시판</NavDropdown.Item>
        <NavDropdown.Item>Q&A</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        className="nav_menu-box custom-prediction-dropdown"
        title={
          <span>
            <img src="/mpc-react/assets/pollution.svg" alt="오염조사" className="navbar__menu-icon" />
            <span className="navbar__menu-title--bold">오염조사</span>
            <Icon path={mdiChevronDown} size={1} />
          </span>
        }
        id="dropdown-pollution"
        onToggle={() => setMapIcons([])}
      >
        <NavDropdown.Item>해안오염 조사평가</NavDropdown.Item>
        <NavDropdown.Item>해안오염분포도</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    {/* 지도 영역 */}
    <div className="map-container" style={{ position: 'relative', width: '100%', height: '500px', marginTop: '16px' }}>
      <MapWeatherIcon
      positions={mapIcons}
    />
    </div>
    </>
  );
};

export default LeftMainMenu;
