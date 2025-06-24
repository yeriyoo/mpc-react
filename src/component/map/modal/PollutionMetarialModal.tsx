/**
 * 설명: 오염 물질 정보 모달
 **/
import Icon from '@mdi/react';
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const PollutionMaterialModal = ({ setIsShow }: CommonModalProps) => {
  return (
    <div className="modal modal-position width-sm" style={{ top: '55px', left: '470px' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>오염물질 정보</Modal.Title>
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
            <Table responsive bordered size="sm" className="mb-0">
              <thead>
                <tr>
                  <th colSpan={2}>
                    <div className="td-form">
                      <div className="td-label">전체버튼</div>
                      <div className="td-item">
                        <Form.Check type="switch" />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan={2}>OCR+DL</th>
                  <td>
                    <div className="td-form">
                      <div className="td-label">
                        2024-09-23{' '}
                        <Button variant="dark" size="sm">
                          이미지보기
                        </Button>
                      </div>
                      <div className="td-item">
                        <Form.Check type="switch" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="td-form">
                      <div className="td-label">
                        2024-09-23{' '}
                        <Button variant="dark" size="sm">
                          이미지보기
                        </Button>
                      </div>
                      <div className="td-item">
                        <Form.Check type="switch" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={setIsShow}>
              닫기
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};

export default PollutionMaterialModal;
