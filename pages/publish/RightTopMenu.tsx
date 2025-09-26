import RightQuickMenu1440 from './RightQuickMenu1440';

import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMagnify, mdiBell, mdiAccount } from '@mdi/js';

const RightTopMenu = () => {
  return (
    <div className="icon-group-wrapper">
      <Button className="search-button">
        <Icon path={mdiMagnify} size={1.2} color="#fff" />
      </Button>
      <Button className="search-button">
        <Icon path={mdiBell} size={1} color="#fff" />
      </Button>
      <Button className="search-button">
        <Icon path={mdiAccount} size={1} color="#fff" />
      </Button>
      <RightQuickMenu1440 /> {/*좌측퀵메뉴*/}
    </div>
  );
};

export default RightTopMenu;
