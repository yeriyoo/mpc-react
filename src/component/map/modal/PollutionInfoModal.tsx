/**
 * 설명: 예측시스템 -> 현장탐색 정보 표출 -> 오염정보모달
 **/

import Icon from '@mdi/react';
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';
import SearchFilterModal from '@/component/map/modal/SearchFilterModal.tsx';
import PollutionMaterialModal from '@/component/map/modal/PollutionMetarialModal.tsx';
import PollutionMaterialDetailModal from '@/component/map/modal/PollutionMaterialDetailModal.tsx';

const PollutionInfoModal = ({ setIsShow }: CommonModalProps) => {
  const dragRef = useRef(null);
  const [isShowFilterModal, setIsShowFilterModal] = useState(false);
  const [isShowMaterialModal, setIsShowMaterialModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);

  const onChangeToggle = () => {
    setIsShowMaterialModal(!isShowMaterialModal);
  };

  return (
    <>
      <Draggable handle={'.modal-header'} nodeRef={dragRef as HTMLElement & null}>
        <div
          className="modal modal-position width-md"
          style={{ height: 'calc(100% - 70px)', top: '55px', left: '10px' }}
          ref={dragRef}
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content h-100">
              <Modal.Header className="drag-header">
                <Modal.Title>오염정보</Modal.Title>
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
                <div className="search-btn-group">
                  <Button variant="primary" className="btn-block" onClick={() => setIsShowFilterModal(true)}>
                    검색 필터
                  </Button>
                  <Button variant="secondary" className="btn-block">
                    검색 초기화
                  </Button>
                </div>
                <div className="status-group mt-2">
                  <div className="status-title">상태</div>
                  <div className="status-item-group">
                    <div className="status-item">
                      <div className="item-symbol">
                        <i className="status-icon1 status1">P</i>
                      </div>
                      <div className="item-name">진행중</div>
                    </div>
                    <div className="status-item">
                      <div className="item-symbol">
                        <i className="status-icon1 status2">E</i>
                      </div>
                      <div className="item-name">종료</div>
                    </div>
                  </div>
                </div>
                <div className="ct-group mt-2">
                  <div className="ct-header">
                    <div className="ct-total">
                      전체 <span>15</span>건
                    </div>
                    <div className="spacer" />
                    <div className="badge-group">
                      <div className="badge-item-group">
                        <div className="badge-item">
                          <div className="item-symbol">
                            <i className="badge-icon1 badge1"></i>
                          </div>
                          <div className="item-name">종합평가 여부</div>
                        </div>
                        <div className="badge-item">
                          <div className="item-symbol">
                            <i className="badge-icon1 badge2"></i>
                          </div>
                          <div className="item-name">표출정보</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ct-body">
                    <Card className="card-table">
                      <Card.Header>
                        <div className="card-title h6">
                          <i className="status-icon1 status1 me-1">P</i> 부산 북항5부두 장기계류선박 장송호 침몰
                        </div>
                        <div className="spacer" />
                        <div className="card-control">
                          <Form.Check type="switch" onClick={onChangeToggle} />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Row>
                          <Col>
                            <ul className="mb-0">
                              <li>
                                <span className="fw-bold me-1">사고위치:</span>
                              </li>
                              <li>
                                <span className="fw-bold me-1">위도/경도:</span>35.123/129.053
                              </li>
                              <li>
                                <span className="fw-bold me-1">날짜:</span>2024-09-22 10:00:00
                              </li>
                            </ul>
                          </Col>
                          <Col xs="auto">
                            <Button variant="primary">확산 예측(1)</Button>
                          </Col>
                        </Row>
                      </Card.Body>
                      <Table responsive bordered size="sm" className="mb-0">
                        <tbody>
                          <tr>
                            <th rowSpan={4}>위성탐지</th>
                            <td rowSpan={2}>SAR</td>
                            <td>임계치 기법</td>
                            <td>All(없음)</td>
                          </tr>
                          <tr>
                            <td>Unet</td>
                            <td>All(없음)</td>
                          </tr>
                          <tr>
                            <td rowSpan={2}>광학위성</td>
                            <td>DeeplabV3+</td>
                            <td>All(없음)</td>
                          </tr>
                          <tr>
                            <td>SWIN</td>
                            <td>All(없음)</td>
                          </tr>
                          <tr>
                            <th rowSpan={3}>현장탐지</th>
                            <td>유무인기</td>
                            <td>OCR+DL</td>
                            <td>
                              <div className="d-flex align-items-center">
                                All(
                                <span className="text-orange fw-bold" onClick={() => setIsShowDetailModal(true)}>
                                  2
                                </span>
                                ) <i className="badge-icon1 badge2 ms-1" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>11</td>
                            <td>All(없음)</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>11</td>
                            <td>All(없음)</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </div>
                </div>
              </Modal.Body>
            </div>
          </div>
        </div>
      </Draggable>
      {isShowFilterModal && <SearchFilterModal setIsShow={() => setIsShowFilterModal(false)} />}
      {isShowMaterialModal && <PollutionMaterialModal setIsShow={() => setIsShowMaterialModal(false)} />}
      {isShowDetailModal && <PollutionMaterialDetailModal setIsShow={() => setIsShowDetailModal(false)} />}
    </>
  );
};
export default PollutionInfoModal;
