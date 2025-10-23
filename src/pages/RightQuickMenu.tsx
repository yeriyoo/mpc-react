import { useState } from 'react';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMenu, mdiPlus, mdiMinus, mdiFormatListBulleted, mdiAccountCog } from '@mdi/js';
import Modal03 from './Modal03';
import Modal04 from './Modal04';


type RightQuickMenuProps = {
  mapImage: string;
  setMapImage: React.Dispatch<React.SetStateAction<string>>; 
  defaultMap: string;    
};

const RightQuickMenu: React.FC<RightQuickMenuProps> = ({ mapImage, setMapImage, defaultMap }) => {
  const [showModal03, setShowModal03] = useState(false);
  const [showModal04, setShowModal04] = useState(false);
  const s57Map = '/mpc-react/assets/s-57-map-1440.jpg';

 const handleS57Click = () => {
  setMapImage(mapImage === s57Map ? defaultMap : s57Map);
};


  return (
    <>
    <Dropdown className="d-inline mx-2" autoClose={false}>
      <Dropdown.Toggle id="dropdown-autoclose-outside" className="navbar__toggle">
        <Icon path={mdiMenu} size={1.2} color="#fff" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-icon-menu">
        <Dropdown.Item onClick={() => setShowModal03(true)}>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-1">선박항적</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-00.svg" alt="icon1" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setShowModal04(true)}>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-1">레이아웃</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-01.svg" alt="icon2" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-2">구역설정</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-02.svg" alt="icon3" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-3">거리</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-03.svg" alt="icon4" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-4">거리환산</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-04.svg" alt="icon5" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-5">다운로드</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-05.svg" alt="icon6" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-6">캡처</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-06.svg" alt="icon7" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item>
          <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-6">초기화</Tooltip>}>
            <img src="/mpc-react/assets/dr-icon-07.svg" alt="icon8" />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item
        className="dropdown-item-with-label"
        onClick={handleS57Click}
        >
          <img
            src="/mpc-react/assets/map-small-01.png"
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
            src="/mpc-react/assets/map-small-01.png"
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
            src="/mpc-react/assets/map-small-02.png"
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

export default RightQuickMenu;
