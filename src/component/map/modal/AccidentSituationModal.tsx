/**
 * 설명: 사고상황 모달
 **/
import Icon from '@mdi/react';
import { mdiCarBrakeAlert, mdiCrosshairsGps, mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AccidentSituationModal = ({ setIsShow }: CommonModalProps) => {
  return (
    <div className="modal modal-position width-sm" style={{ top: '50px', right: '90px' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>사고 상황</Modal.Title>
            <div className="ms-auto">
              <Button variant="link-dark" size="sm">
                <Icon path={mdiWindowMinimize} title="최소화" className="mpci mdi mdi-window-minimize" />
              </Button>
              <Button variant="link-dark" size="sm">
                <Icon path={mdiWindowMaximize} title="최대화" className="mpci mdi mdi-window-maximize" />
              </Button>
              <Button variant="link-dark" size="sm" onClick={setIsShow}>
                <Icon path={mdiWindowClose} title="창닫기" className="mpci mdi mdi-window-close" />
              </Button>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Accordion defaultActiveKey="0" className="accordion-accident">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="accident-header">
                    <div className="left">
                      <div className="title">
                        <div className="accident-icon color1">
                          <Icon path={mdiCarBrakeAlert} title="사고알림" className="mpci mdi mdi-car-brake-alert" />
                        </div>
                        선박 충돌 후 좌초(수영만)
                      </div>
                      <div className="date">2024-08-21 23:12:50</div>
                      <div className="area">
                        <span>위치</span> 39.8, 124.4
                      </div>
                    </div>
                    <div className="right">
                      <Button variant="link-dark" className="btn-target">
                        <Icon path={mdiCrosshairsGps} title="위치찾기" className="mpci mdi mdi-crosshairs-gps" />
                      </Button>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Card className="card-accident">
                    <Card.Header>
                      <div className="card-title h6">
                        <div className="text-area">서울시</div>
                        피해보고
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="text-date">2024-08-21 23:12:50</div>
                      <div className="text-detail">인명피해, 형사상피해</div>
                    </Card.Body>
                  </Card>
                  <Card className="card-accident">
                    <Card.Header>
                      <div className="card-title h6">
                        <div className="text-area">수영만본부</div>
                        피해보고
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="text-date">2024-08-21 23:12:50</div>
                      <div className="text-detail">인명피해, 형사상피해</div>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="accident-header">
                    <div className="left">
                      <div className="title">
                        <div className="accident-icon color1">
                          <Icon path={mdiCarBrakeAlert} title="사고알림" className="mpci mdi mdi-car-brake-alert" />
                        </div>
                        선박 충돌 후 좌초(수영만)
                      </div>
                      <div className="date">2024-08-21 23:12:50</div>
                      <div className="area">
                        <span>위치</span> 39.8, 124.4
                      </div>
                    </div>
                    <div className="right">
                      <Button variant="link-dark" className="btn-target">
                        <Icon path={mdiCrosshairsGps} title="위치찾기" className="mpci mdi mdi-crosshairs-gps" />
                      </Button>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Card className="card-accident">
                    <Card.Header>
                      <div className="card-title h6">
                        <div className="text-area">서울시</div>
                        피해보고
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="text-date">2024-08-21 23:12:50</div>
                      <div className="text-detail">인명피해, 형사상피해</div>
                    </Card.Body>
                  </Card>
                  <Card className="card-accident">
                    <Card.Header>
                      <div className="card-title h6">
                        <div className="text-area">수영만본부</div>
                        피해보고
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="text-date">2024-08-21 23:12:50</div>
                      <div className="text-detail">인명피해, 형사상피해</div>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="accident-header">
                    <div className="left">
                      <div className="title">
                        <div className="accident-icon color1">
                          <Icon path={mdiCarBrakeAlert} title="사고알림" className="mpci mdi mdi-car-brake-alert" />
                        </div>
                        선박 충돌 후 좌초(수영만)
                      </div>
                      <div className="date">2024-08-21 23:12:50</div>
                      <div className="area">
                        <span>위치</span> 39.8, 124.4
                      </div>
                    </div>
                    <div className="right">
                      <Button variant="link-dark" className="btn-target">
                        <Icon path={mdiCrosshairsGps} title="위치찾기" className="mpci mdi mdi-crosshairs-gps" />
                      </Button>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Card className="card-accident">
                    <Card.Header>
                      <div className="card-title h6">
                        <div className="text-area">서울시</div>
                        피해보고
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="text-date">2024-08-21 23:12:50</div>
                      <div className="text-detail">인명피해, 형사상피해</div>
                    </Card.Body>
                  </Card>
                  <Card className="card-accident">
                    <Card.Header>
                      <div className="card-title h6">
                        <div className="text-area">수영만본부</div>
                        피해보고
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="text-date">2024-08-21 23:12:50</div>
                      <div className="text-detail">인명피해, 형사상피해</div>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={setIsShow}>
              상황전파
            </Button>
            <Button variant="success" onClick={setIsShow}>
              상황보고
            </Button>
            <Button variant="success" onClick={setIsShow}>
              조치보고
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};

export default AccidentSituationModal;
