
//Form
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Sample13 = () => {

  return (
    <>    
    <div className="d-flex flex-column flex-wrap gap-2 p-3">
      <h1>Datepicker + timepicker Sample</h1>      
      
      <div className="mt-3">
        <h4>1. Datepicker - 기본</h4>
        <div><Form.Control type="date" /> </div>
      </div>

      <div className="mt-3">
        <h4>2. Datepicker + timepicker</h4>
        <div><Form.Control type="datetime-local" /> </div>
      </div>
      
    </div>
    </>
  );
};

export default Sample13;
