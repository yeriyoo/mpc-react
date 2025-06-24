//Icon
import Icon from '@mdi/react';
import { mdiAnchor } from '@mdi/js';

const Sample16 = () => {

  return (
    <>    
    <div className="d-flex flex-column flex-wrap gap-2 p-3">
      <h1>Bootstrap icon + Material icon Sample</h1>      
      
      <div className="mt-3">
        <h4>1. Bootstrap icon - <small>https://icons.getbootstrap.com</small></h4>
        <i className="bi-alarm"></i>
      </div>

      <div className="mt-3">
        <h4>2. Material icon - <small>https://pictogrammers.com/library/mdi</small></h4>
        <Icon path={mdiAnchor} size={1} />
      </div>
    </div>

    </>
  );
};

export default Sample16;
