/**
 * 설명: 오염 물질 정보 상세 모달
 **/
import Icon from '@mdi/react';
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';
import { useState } from 'react';
import SpreadPredictListModal from '@/component/map/modal/SpreadPredictListModal.tsx';

const PollutionMaterialDetailModal = ({ setIsShow }: CommonModalProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <div className="modal modal-position width-sm" style={{ top: '270px', left: '470px' }}>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <Modal.Header>
              <Modal.Title>오염물질 정보 상세</Modal.Title>
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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>오염정보 추출일시(2024-07-16 21:03:24)</Accordion.Header>
                  <Accordion.Body>
                    <Table responsive bordered size="sm" className="mb-1">
                      <colgroup>
                        <col style={{ width: '130px' }} />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th rowSpan={2} className="table-primary">
                            상세 정보
                            <Button variant="dark" size="sm" className="ms-2" onClick={() => setIsShowModal(true)}>
                              확산예측
                            </Button>
                          </th>
                          <td>
                            <div className="td-form">
                              <div className="td-label">상세보기</div>
                              <div className="td-item">
                                <Form.Check type="switch" />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="td-form">
                              <div className="td-label">선박항적</div>
                              <div className="td-item">
                                <Form.Check type="switch" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Table responsive bordered size="sm" className="mb-1">
                      <colgroup>
                        <col style={{ width: '130px' }} />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>알고리즘 종류</th>
                          <td>무지개</td>
                        </tr>
                        <tr>
                          <th>오염물질 종류</th>
                          <td>유막(&gt;300nm)</td>
                        </tr>
                        <tr>
                          <th>오염물질 면적(m²)</th>
                          <td>미추출</td>
                        </tr>
                        <tr>
                          <th>오염물질 두께(m)</th>
                          <td>0.0001 이하</td>
                        </tr>
                        <tr>
                          <th>오염물질 체적(m²)</th>
                          <td>미추출</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table responsive bordered size="sm" className="mb-1">
                      <colgroup>
                        <col style={{ width: '130px' }} />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>알고리즘 종류</th>
                          <td>무지개</td>
                        </tr>
                        <tr>
                          <th>오염물질 종류</th>
                          <td>유막(&gt;300nm)</td>
                        </tr>
                        <tr>
                          <th>오염물질 면적(m²)</th>
                          <td>미추출</td>
                        </tr>
                        <tr>
                          <th>오염물질 두께(m)</th>
                          <td>0.0001 이하</td>
                        </tr>
                        <tr>
                          <th>오염물질 체적(m²)</th>
                          <td>미추출</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table responsive bordered size="sm" className="mb-1">
                      <colgroup>
                        <col style={{ width: '130px' }} />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>알고리즘 종류</th>
                          <td>무지개</td>
                        </tr>
                        <tr>
                          <th>오염물질 종류</th>
                          <td>유막(&gt;300nm)</td>
                        </tr>
                        <tr>
                          <th>오염물질 면적(m²)</th>
                          <td>미추출</td>
                        </tr>
                        <tr>
                          <th>오염물질 두께(m)</th>
                          <td>0.0001 이하</td>
                        </tr>
                        <tr>
                          <th>오염물질 체적(m²)</th>
                          <td>미추출</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>오염정보 추출일시(2024-07-16 21:03:24)</Accordion.Header>
                  <Accordion.Body>아코디언내용</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>오염정보 추출일시(2024-07-16 21:03:24)</Accordion.Header>
                  <Accordion.Body>아코디언내용</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Modal.Body>
          </div>
        </div>
      </div>
      {isShowModal && <SpreadPredictListModal setIsShow={() => setIsShowModal(false)} />}
    </>
  );
};

export default PollutionMaterialDetailModal;
