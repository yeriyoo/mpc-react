/**
 * 설명: 확산 예측 시뮬레이션 모달
 **/
import Icon from '@mdi/react';
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import { Col, Row, Button, Form, Modal, InputGroup } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const SpreadPredictModal = ({ setIsShow }: CommonModalProps) => {
  return (
    <div className="modal modal-position width-sm" style={{ top: '100px', right: '470px' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>확산예측 시뮬레이션</Modal.Title>
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
            <Form className="form-grid form-label-horizontal label-width-sm">
              <Row className="row-cols-1">
                <Form.Group as={Col}>
                  <Form.Label>진행상태</Form.Label>
                  <div className="form-item">
                    <Form.Select>
                      <option>전체</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>기간</Form.Label>
                  <div className="form-item">
                    <Form.Control type="datetime-local" />
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>사고명</Form.Label>
                  <div className="form-item">
                    <Form.Control type="text" />
                    <Button variant="dark" className="text-nowrap">
                      영역선택
                    </Button>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>오염물질</Form.Label>
                  <div className="form-item">
                    <Form.Select>
                      <option>선택</option>
                      <option>KuwaitM</option>
                      <option>Brent</option>
                      <option>ArabianL</option>
                      <option>ArabianM</option>
                      <option>Bunker-C</option>
                      <option>Bunker-A</option>
                      <option>Diesel</option>
                      <option>Gasoline</option>
                      <option>IFO180</option>
                      <option>IFO300</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>사고명</Form.Label>
                  <div className="form-item">
                    <InputGroup>
                      <Form.Control />
                      <InputGroup.Text>KL</InputGroup.Text>
                    </InputGroup>
                  </div>
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={setIsShow}>
              확산예측 추가
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};

export default SpreadPredictModal;
