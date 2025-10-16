import { useState } from 'react';
import { Modal, Button, Accordion, Form } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import ReactDOM from 'react-dom';

type Modal03Props = {
  show: boolean;
  onHide: () => void;
};

const Modal03 = ({ show, onHide }: Modal03Props) => {
const [headerToggle, setHeaderToggle] = useState(false);
const [footerToggle, setFooterToggle] = useState(false);


  if (!show) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered={false}
      dialogClassName="modal03-dialog"
      contentClassName="modal03-content"
      backdrop={false} 
    >
      {/* 헤더 */}
      <Modal.Header className="modal03-header">
        <Modal.Title className="flex-grow-1" style={{ fontSize: '1rem' }}>
            <div className="d-flex align-items-center flex-grow-1">
            <span>선박</span>
        <Form.Check 
            type="switch"
            id="header-toggle"
            checked={headerToggle}
            onChange={() => setHeaderToggle(!headerToggle)}
            label="" 
            className="ms-2"
          />
          </div>
          </Modal.Title>  
        <Button variant="link" className="p-0 border-0" onClick={onHide}>
          <Icon path={mdiClose} size={1} color="#fff"/>
        </Button>
      </Modal.Header>

      <Modal.Body className="modal03-body">
        <div className="modal03-items d-flex justify-content-between mb-3">
          <div className="modal03-item">41.578</div>
          <div className="modal03-item" style={{ color: '#008AFF', fontWeight: 'bold'}}>42,058</div>
          <div className="modal03-item" style={{ color: '#FF7700', fontWeight: 'bold'}}>100%</div>
        </div>

        <Accordion className="modal03-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="modal03-accordian-btn">신호원 필터</Accordion.Header>
            <Accordion.Body>
            <div className="accordicon-body">
                <div className="accordion-body-wrapper">
                <div className="modal03-accordion-box">
                <Form.Check 
                    type="checkbox"
                    id="left-box-1"
                    label="AIS"
                />
                </div>

                <div className="modal03-accordion-box">
                <Form.Check 
                    type="checkbox"
                    id="right-box-1"
                    label="E-NAV"
                />
                </div>
            </div> 
            </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="modal03-accordion">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="modal03-accordian-btn">선종 필터</Accordion.Header>
            <Accordion.Body>
               <div className="accordicon-body">
                <div className="accordion-body-wrapper">
                <div className="modal03-accordion-box">
                <Form.Check 
                    type="checkbox"
                    id="left-box-1"
                    label="어선"
                />
                </div>

                <div className="modal03-accordion-box">
                <Form.Check 
                    type="checkbox"
                    id="right-box-1"
                    label="함정"
                />
                </div>
            </div> 
            </div>
             <div className="accordicon-body">
                <div className="accordion-body-wrapper">
                <div className="modal03-accordion-box">
                <Form.Check 
                    type="checkbox"
                    id="left-box-1"
                    label="화물선"
                />
                </div>

                <div className="modal03-accordion-box">
                <Form.Check 
                    type="checkbox"
                    id="right-box-1"
                    label="여객선"
                />
                </div>
            </div> 
            </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="modal03-footer">
          <span className="me-2">라벨</span>
          <Form.Check 
            type="switch"
            id="footer-toggle"
            checked={footerToggle}
            onChange={() => setFooterToggle(!footerToggle)}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};


export default Modal03;
