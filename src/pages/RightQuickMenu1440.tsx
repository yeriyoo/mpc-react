import { useState } from 'react';

import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlus, mdiMinus, mdiFormatListBulleted, mdiChevronDown, mdiAccountCog } from '@mdi/js';
import Modal03 from './Modal03';
import Modal04 from './Modal04';

import drIcon00 from '../assets/dr-icon-00.svg';
import drIcon01 from '../assets/dr-icon-01.svg';
import drIcon02 from '../assets/dr-icon-02.svg';
import drIcon03 from '../assets/dr-icon-03.svg';
import drIcon04 from '../assets/dr-icon-04.svg';
import drIcon05 from '../assets/dr-icon-05.svg';
import drIcon06 from '../assets/dr-icon-06.svg';
import drIcon07 from '../assets/dr-icon-07.svg';

import mapSmall01 from '../assets/map-small-01.png';
import mapSmall02 from '../assets/map-small-02.png';
import s57MapImage from '../assets/s-57-map-1440.jpg';

type RightQuickMenu1440Props = {
  mapImage: string;
  setMapImage: React.Dispatch<React.SetStateAction<string>>;
  defaultMap: string; 
};

const RightQuickMenu1440: React.FC<RightQuickMenu1440Props> = ({ mapImage, setMapImage, defaultMap }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showModal03, setShowModal03] = useState(false);
  const [showModal04, setShowModal04] = useState(false);
  const [isS57Active, setIsS57Active] = useState(false);

  const handleS57Click = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1440 && screenWidth >= 375) {
      setIsS57Active(prev => {
      const next = !prev;                 // 다음 상태를 계산
      setMapImage(next ? s57MapImage : defaultMap);  // next 기준으로 이미지 설정
      return next;
    });
    } else {
      setMapImage(defaultMap);
    }
  };

  return (
    <>
    <Dropdown
      className="d-inline mx-2"
      autoClose={false}
      onToggle={(isOpen) => setIsProfileDropdownOpen(isOpen)}
    >
      <Dropdown.Toggle id="dropdown-autoclose-outside" className="navbar__toggle" aria-label="퀵메뉴">
        <Icon
          path={mdiChevronDown}
          size={1.2}
          color="#fff"
          className={`dropdown-icon ${isProfileDropdownOpen ? 'rotate' : ''}`}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-icon-menu">
        <Dropdown.Item onClick={() => setShowModal03(true)}>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-1">선박항적</Tooltip>}>
            <img src={drIcon00} alt="icon1" />
          </OverlayTrigger>
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setShowModal04(true)}>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-2">레이아웃</Tooltip>}>
            <img src={drIcon01} alt="icon1" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-3">구역설정</Tooltip>}>
            <img src={drIcon02} alt="icon2" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-4">거리</Tooltip>}>
            <img src={drIcon03} alt="icon3" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-5">거리환산</Tooltip>}>
            <img src={drIcon04} alt="icon4" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-6">다운로드</Tooltip>}>
            <img src={drIcon05} alt="icon5" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-7">캡처</Tooltip>}>
            <img src={drIcon06} alt="icon6" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-8">초기화</Tooltip>}>
            <img src={drIcon07} alt="icon7" />
          </OverlayTrigger>
        </Dropdown.Item>

        <Dropdown.Item
        className="dropdown-item-with-label"
        onClick={handleS57Click}
        >
          <img
            src={mapSmall01}
            style={{
              width: '28px',
              border: '2px solid #C2CDDE',
              borderRadius: '4px',
            }}
          />
          <span>S-57</span>
        </Dropdown.Item>

        <Dropdown.Item className="dropdown-item-with-label">
          <img
            src={mapSmall01}
            style={{
              width: '28px',
              border: '2px solid #C2CDDE',
              borderRadius: '4px',
            }}
          />
          <span>S-101</span>
        </Dropdown.Item>

        <Dropdown.Item className="dropdown-item-with-label">
          <img
            src={mapSmall02}
            style={{
              width: '28px',
              border: '2px solid #C2CDDE',
              borderRadius: '4px',
            }}
          />
          <span>3D</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <Icon path={mdiPlus} size={1} />
        </Dropdown.Item>
        <Dropdown.Item>
          <Icon path={mdiMinus} size={1} />
        </Dropdown.Item>
        <Dropdown.Item>
          <Icon path={mdiFormatListBulleted} size={1} />
        </Dropdown.Item>
        <Dropdown.Item>
          <Icon path={mdiAccountCog} size={1} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

     {/* Modal03 렌더링 */}
      <Modal03 show={showModal03} onHide={() => setShowModal03(false)} />
      <Modal04 show={showModal04} onHide={() => setShowModal04(false)} />
    </>
  );
};

export default RightQuickMenu1440;
