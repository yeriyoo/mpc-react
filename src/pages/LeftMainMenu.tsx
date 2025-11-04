import { useState, useEffect, useRef } from 'react';
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import MapWeatherIcon from './MapWeatherIcon'; 

import predictionIcon from '../assets/prediction.svg';
import searchIcon from '../assets/search.svg';
import weatherIcon from '../assets/weather.svg';
import shipIcon from '../assets/ship.svg';
import boardIcon from '../assets/board.svg';
import pollutionIcon from '../assets/pollution.svg';

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


const [openWeatherDropdown, setOpenWeatherDropdown] = useState(false);
const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
const [mapIcons, setMapIcons] = useState<{ top: string; left: string }[]>([]);
const [openPredictionDropdown, setOpenPredictionDropdown] = useState(false);


const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleCheckboxClick = (label: string) => {
  setCheckedItems(prev => {
    const newChecked = !prev[label];

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
            id={`checkbox-${item.label}`}
            name="weatherItem"
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
        as="button"
        className="nav_menu-box"
        onClick={() => {
          handleOpenBottomTable();
          setMapIcons([]); 
        }}
      >
        <img src={searchIcon} alt="" aria-hidden="true" className="navbar__menu-icon" />
        <span>사고조회</span>
      </Nav.Link>

      <Dropdown
      as="div"
      className="nav_menu-box custom-prediction-dropdown"
      show={openPredictionDropdown}
      autoClose="outside"
      onToggle={(isOpen, e) => {
      setOpenPredictionDropdown(isOpen);
      setMapIcons([]);
    }}
    >
      <Dropdown.Toggle
        as="button"
        className="navbar__menu-link"
        aria-haspopup="true"
        aria-expanded={openPredictionDropdown}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpenPredictionDropdown(!openPredictionDropdown);
        }}
      >
        <img src={predictionIcon} alt="" aria-hidden="true" className="navbar__menu-icon" />
        <span className="navbar__menu-title--bold">예측</span>
        <Icon path={mdiChevronDown} size={1} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          as="div"
          onClick={() => setOpenSubmenu(!openSubmenu)}
          className={`nav-dropdown__item-with-submenu ${openSubmenu ? 'open' : ''}`}
          >
          <span className="nav-dropdown__item-label">유출유 확산예측</span>
          <span className="submenu-arrow">
            <Icon
            path={mdiChevronDown}
            size={1}
            color={openSubmenu ? "#fff" : "#000"}
            />
          </span>
        </Dropdown.Item>
        {openSubmenu && (
          <>
            <Dropdown.Item
              onClick={() => {
                handleOpenBottomTable02();  
                setOpenPredictionDropdown(false);
              }}
              className="nav-dropdown__submenu">
              예측 목록
              </Dropdown.Item>
            <Dropdown.Item  className="nav-dropdown__submenu">유출유 확산 예측</Dropdown.Item>
          </>
        )}

        <Dropdown.Item
          as="div"
          onClick={() => setOpenSubmenu3(!openSubmenu3)}
          className={`nav-dropdown__item-with-submenu ${openSubmenu3 ? 'open' : ''}`}
          >
          <span className="nav-dropdown__item-label">현장 탐색 정보 표출</span>
          <span className="submenu-arrow">
            <Icon
            path={mdiChevronDown}
            size={1}
            color={openSubmenu ? "#fff" : "#000"}
            />
          </span>
        </Dropdown.Item>
        {openSubmenu3 && (
          <>
            <Dropdown.Item
             onClick={() => {
              handleOpenBottomTable03();
              setOpenPredictionDropdown(false);
            }}
             className="nav-dropdown__submenu">
            오염정보 목록
            </Dropdown.Item>
            <Dropdown.Item className="nav-dropdown__submenu">현장정보 업로드</Dropdown.Item>
          </>
        )}

        <Dropdown.Item
          as="div"
          onClick={() => setOpenSubmenu2(!openSubmenu2)}
          className={`nav-dropdown__item-with-submenu ${openSubmenu2 ? 'open' : ''}`}
          >
          <span className="nav-dropdown__item-label">정밀 비구조격자 해양예측</span>
          <span className="submenu-arrow">
            <Icon
            path={mdiChevronDown}
            size={1}
            color={openSubmenu ? "#fff" : "#000"}
            />
          </span>
        </Dropdown.Item>
        {openSubmenu2 && (
          <>
            <Dropdown.Item className="nav-dropdown__submenu">예측 목록</Dropdown.Item>
            <Dropdown.Item className="nav-dropdown__submenu">정밀 비구조격자 해양예측</Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>

      <Dropdown
        as="div"
        className="nav_menu-box weather-dropdown"
        autoClose={false}
        show={openWeatherDropdown}
        onToggle={() => setMapIcons([])}
      >
      <Dropdown.Toggle
        as="button"
        className="navbar__menu-link"
        aria-haspopup="true"
        aria-expanded={openWeatherDropdown}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpenWeatherDropdown(!openWeatherDropdown);
        }}
      >
        <img
          src={weatherIcon}
          alt=""
          aria-hidden="true"
          className="navbar__menu-icon"
        />
        <span className="navbar__menu-title--bold">기상정보</span>
        <Icon path={mdiChevronDown} size={1} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {renderTree(weatherItems)}
      </Dropdown.Menu>
      </Dropdown>

      <Nav.Link
        as="button"
        className="nav_menu-box"
        onClick={() => {
          handleOpenBottomTable04();
          setMapIcons([]);
        }}
      >
        <img src={shipIcon} alt="" aria-hidden="true" className="navbar__menu-icon" />
        <span>해경자산</span>
      </Nav.Link>

      <Dropdown
      as="div"
      className="nav_menu-box custom-prediction-dropdown"
      onToggle={() => setMapIcons([])}
      >
      <Dropdown.Toggle
        as="button"
        className="navbar__menu-link"
        aria-haspopup="true"
        aria-expanded={openSubmenu}
      >
        <img
          src={boardIcon}
          alt=""
          aria-hidden="true"
          className="navbar__menu-icon"
        />
        <span className="navbar__menu-title--bold">게시판</span>
        <Icon path={mdiChevronDown} size={1} />
      </Dropdown.Toggle>

        <Dropdown.Menu>
        <NavDropdown.Item
        onClick={() => {
          handleOpenBottomTable05();
          setMapIcons([]);
        }}
        >
        공지사항
      </NavDropdown.Item>
        <NavDropdown.Item href="/board/bulletinboard">게시판</NavDropdown.Item>
        <NavDropdown.Item href="/board/Q&A">Q&A</NavDropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        as="div"
        className="nav_menu-box custom-prediction-dropdown"
        onToggle={() => setMapIcons([])}
      >
        <Dropdown.Toggle
          as="button"
          className="navbar__menu-link"
          aria-haspopup="true"
          aria-expanded={openSubmenu}
        >
          <img
            src={pollutionIcon}
            alt=""
            aria-hidden="true"
            className="navbar__menu-icon"
          />
          <span className="navbar__menu-title--bold">오염조사</span>
          <Icon path={mdiChevronDown} size={1} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/pollution/report">해안오염 조사평가</Dropdown.Item>
          <Dropdown.Item href="/pollution/map">해안오염분포도</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
