//Component
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

const Loading = () => {

  return (
    <>    

    <div className="d-flex flex-column flex-wrap gap-2 p-3">
      <h1>로딩</h1>
      
      <div className="mt-3 d-flex gap-3">
        <Spinner animation="border" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Spinner animation="border" variant="info">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Spinner animation="grow" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Spinner animation="grow" variant="info">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      
    </div>
    </>
  );
};

export default Loading;
