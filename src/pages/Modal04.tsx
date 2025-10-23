import { useState } from 'react';
import { Modal, Button, Accordion, Form } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

type Modal04Props = {
  show: boolean;
  onHide: () => void;
};

const Modal04 = ({ show, onHide }: Modal04Props) => {
  const [activeTab, setActiveTab] = useState<'sensitive' | 'coast' | 'resources'>('sensitive');

  if (!show) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered={false}
      dialogClassName="modal04-dialog"
      contentClassName="modal04-content"
      backdrop={false}
    >
      {/* 헤더 */}
      <Modal.Header className="modal04-header">
        <div className="modal04-header-left">
          <span className="modal04-title">레이어</span>
        </div>
        <Button variant="link" className="modal04-close-btn" onClick={onHide} aria-label="닫기">
          <Icon path={mdiClose} size={1} />
        </Button>
      </Modal.Header>

      {/* 바디 */}
      <Modal.Body className="modal04-body">
        {/* 탭 메뉴 */}
        <div className="modal04-tab-menu">
          <div
            className={`modal04-tab ${activeTab === 'sensitive' ? 'active' : ''}`}
            onClick={() => setActiveTab('sensitive')}
          >
            민감지도
          </div>
          <div
            className={`modal04-tab ${activeTab === 'coast' ? 'active' : ''}`}
            onClick={() => setActiveTab('coast')}
          >
            해경
          </div>
          <div
            className={`modal04-tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            방제자원
          </div>
        </div>

        {/* 탭별 컨텐츠 */}
        {activeTab === 'sensitive' && (
        <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                환경/생태
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {activeTab === 'sensitive' && (
        <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                사회/경제
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {activeTab === 'sensitive' && (
        <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                민감도 평가
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {activeTab === 'sensitive' && (
        <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                개방해
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {activeTab === 'coast' && (
           <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                해경관할구역
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

         {activeTab === 'coast' && (
           <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                해경서소
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

         {activeTab === 'coast' && (
           <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                항공
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {activeTab === 'resources' && (
          <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                오일펜스
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {activeTab === 'resources' && (
          <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                부대자제
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {activeTab === 'resources' && (
          <Accordion className="modal04-accordion">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="modal04-accordion-btn">
                저장용기
            </Accordion.Header>
            <Accordion.Body>
                <div className="accordion-body-wrapper">
                <div className="modal04-accordion-box">
                    <span>블루카본</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                <div className="modal04-accordion-box">
                    <span>ESI</span>
                    <Form.Check 
                    type="switch"
                    id="bluecarbon"
                    label="블루카본 활성화"
                    />
                </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Modal04;