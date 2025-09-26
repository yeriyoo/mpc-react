import { useState } from 'react';

import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlus, mdiMinus, mdiFormatListBulleted, mdiChevronDown, mdiAccountCog } from '@mdi/js';

const RightQuickMenu1440 = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <Dropdown
      className="d-inline mx-2"
      autoClose="outside"
      onToggle={(isOpen) => setIsProfileDropdownOpen(isOpen)}
    >
      <Dropdown.Toggle id="dropdown-autoclose-outside" className="navbar__toggle">
        <Icon
          path={mdiChevronDown}
          size={1.2}
          color="#fff"
          className={`dropdown-icon ${isProfileDropdownOpen ? 'rotate' : ''}`}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-icon-menu">
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-1">선박항적</Tooltip>}>
            <img src="src/assets/dr-icon-00.svg" alt="icon1" />
          </OverlayTrigger>
        </Dropdown.Item>

        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-1">레이아웃</Tooltip>}>
            <img src="src/assets/dr-icon-01.svg" alt="icon1" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-2">구역설정</Tooltip>}>
            <img src="src/assets/dr-icon-02.svg" alt="icon2" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-3">거리</Tooltip>}>
            <img src="src/assets/dr-icon-03.svg" alt="icon3" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-4">거리환산</Tooltip>}>
            <img src="src/assets/dr-icon-04.svg" alt="icon4" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-5">다운로드</Tooltip>}>
            <img src="src/assets/dr-icon-05.svg" alt="icon5" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-6">캡처</Tooltip>}>
            <img src="src/assets/dr-icon-06.svg" alt="icon6" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-6">초기화</Tooltip>}>
            <img src="src/assets/dr-icon-07.svg" alt="icon7" />
          </OverlayTrigger>
        </Dropdown.Item>

        <Dropdown.Item className="dropdown-item-with-label">
          <img
            src="src/assets/map-small-01.png"
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
            src="src/assets/map-small-01.png"
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
            src="src/assets/map-small-01.png"
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
  );
};

export default RightQuickMenu1440;
