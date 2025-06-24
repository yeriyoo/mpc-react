/**
 * 설명: 관리자 -> 모니터링 -> 수집관리 -> 수집작업등록 모달
 **/
import { Button, Form, Modal, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const CollectionAddModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>수집 작업 등록</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">수집 작업명</div>
            </div>
          </div>
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <td>
                      <Form.Control type="text" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="items-group mt-20">
          <div className="header">
            <div className="left">
              <div className="title size-16">수집 스케쥴</div>
            </div>
          </div>
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{ width: '140px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>수집 기간</th>
                    <td>
                      <div className="date-range-group">
                        <Form.Control type="date" />
                        <div className="during">~</div>
                        <Form.Control type="date" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>수집 시간</th>
                    <td>
                      <div className="datetime-group">
                        <div className="datetime-item">
                          <div className="picker">
                            <Button variant="month">1</Button>
                            <Button variant="month">2</Button>
                            <Button variant="month" active>
                              3
                            </Button>
                            <Button variant="month">4</Button>
                            <Button variant="month">5</Button>
                            <Button variant="month">6</Button>
                            <Button variant="month">7</Button>
                            <Button variant="month">8</Button>
                            <Button variant="month">9</Button>
                            <Button variant="month">10</Button>
                            <Button variant="month">11</Button>
                            <Button variant="month">12</Button>
                          </div>
                          <div className="unit">월</div>
                        </div>
                        <div className="datetime-item">
                          <div className="picker">
                            <div className="progress-group">
                              <input type="range" min="0" max="100" step="10" value="0" />
                              <div className="progress-bar-track" style={{ width: `0` }}>
                                <div className="data">1</div>
                              </div>
                            </div>
                          </div>
                          <div className="unit">일</div>
                        </div>
                        <div className="datetime-item">
                          <div className="picker">
                            <div className="progress-group">
                              <input type="range" min="0" max="100" step="10" value="28" />
                              <div className="progress-bar-track" style={{ width: `28%` }}>
                                <div className="data">3</div>
                              </div>
                            </div>
                          </div>
                          <div className="unit">시</div>
                        </div>
                        <div className="datetime-item">
                          <div className="picker">
                            <div className="progress-group">
                              <input type="range" min="0" max="100" step="10" value="50" />
                              <div className="progress-bar-track" style={{ width: `50%` }}>
                                <div className="data">30</div>
                              </div>
                            </div>
                          </div>
                          <div className="unit">분</div>
                        </div>
                        <div className="datetime-item">
                          <div className="picker">
                            <div className="progress-group">
                              <input type="range" min="0" max="100" step="10" value="100" />
                              <div className="progress-bar-track" style={{ width: `100%` }}>
                                <div className="data">60</div>
                              </div>
                            </div>
                          </div>
                          <div className="unit">초</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>수집 수행</th>
                    <td>
                      <Form.Check type="switch" id="custom-switch" label="" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="items-group mt-20">
          <div className="header">
            <div className="left">
              <div className="title size-16">수집 형태</div>
              <Form.Select>
                <option>DATABASE(티베로)</option>
              </Form.Select>
            </div>
            <div className="right">
              <OverlayTrigger placement="top" overlay={<Tooltip>툴팁내용</Tooltip>}>
                <Button variant="icon">
                  <i className="icon-admin icon-information"></i>
                </Button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{ width: '140px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>수집 룰</th>
                    <td>
                      <Form.Control type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>수집 룰</th>
                    <td>
                      <Form.Control type="text" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">삭제</Button>
        <Button variant="primary" className="ms-auto">
          저장
        </Button>
        <Button variant="secondary" onClick={setIsShow}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CollectionAddModal;
