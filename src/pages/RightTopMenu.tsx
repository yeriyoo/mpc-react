import RightQuickMenu1440 from './RightQuickMenu1440';

import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMagnify, mdiBell, mdiAccount } from '@mdi/js';


type RightTopMenuProps = {
  mapImage: string;
  setMapImage: React.Dispatch<React.SetStateAction<string>>;
  defaultMap: string;
};

const RightTopMenu: React.FC<RightTopMenuProps> = ({ mapImage, setMapImage, defaultMap }) => {
  return (
    <div className="icon-group-wrapper">
      <Button className="search-button" aria-label="검색">
        <Icon path={mdiMagnify} size={1.2} color="#fff" />
      </Button>
      <Button className="search-button" aria-label="알림">
        <Icon path={mdiBell} size={1} color="#fff" />
      </Button>
      <Button className="search-button" aria-label="계정">
        <Icon path={mdiAccount} size={1} color="#fff" />
      </Button>

      <RightQuickMenu1440
      mapImage={mapImage} 
      setMapImage={setMapImage} 
      defaultMap={defaultMap}
      />
      
    </div>
  );
};

export default RightTopMenu;
