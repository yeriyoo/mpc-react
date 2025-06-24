/**
 * 설명: 예측시스템 -> 현장탐색 정보 표출 -> 업로드 모달
 **/
import Icon from '@mdi/react';
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Pagination from 'react-bootstrap/Pagination';
import RealGrid from '../../../../pages/publish/RealGrid.tsx';

const FieldInfoUploadModal = ({ setIsShow }) => {
  return (
    <div
      className="modal modal-position modal-upload width-full"
      style={{ bottom: '10px', left: '10px', height: '470px' }}
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content h-100">
          <Modal.Header>
            <Modal.Title>업로드</Modal.Title>
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
          <div className="modal-tab tab-container">
            <Tab.Container defaultActiveKey="tab1">
              <Nav variant="underline">
                <Nav.Item>
                  <Nav.Link eventKey="tab1">유/무인기 업로드</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2">디지털카메라(NHS) 업로드</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3">유/무인기 업로드 목록</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab4">디지털카메라(NHS) 업로드 목록</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="tab1">
                  <div className="ct-group">
                    <div className="ct-header">
                      <div className="ct-text">
                        <i className="mpci icon-required" title="필수" /> 필수 입력
                      </div>
                      <div className="spacer" />
                      <Button variant="primary">업로드</Button>
                      <Button variant="secondary">파일 초기화</Button>
                      <Button variant="outline-dark">목록</Button>
                    </div>
                    <div className="ct-body">
                      <Form className="form-grid form-label-horizontal label-width-lg">
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                          <Form.Group as={Col}>
                            <Form.Label>사고정보</Form.Label>
                            <div className="form-item">
                              <Form.Select>
                                <option>부산 북항5부두 장기계류선박 장성호 침몰</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>촬영 데이터 구분</Form.Label>
                            <div className="form-item">
                              <Form.Check type="radio" label="이미지" />
                              <Form.Check type="radio" label="영상" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>카메라 종류</Form.Label>
                            <div className="form-item">
                              <Form.Select>
                                <option>선택</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>촬영시각</Form.Label>
                            <div className="form-item">
                              <Form.Control type="datetime-local" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>초점거리(nm)</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>고도(m)</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>항공기 경도</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>항공기 위도</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>타겟 경도</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>타겟 위도</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>종합평가 진행</Form.Label>
                            <div className="form-item">
                              <Form.Check type="checkbox" label="진행" />
                            </div>
                          </Form.Group>
                        </Row>
                        <Row className="row-cols-1">
                          <Form.Group as={Col}>
                            <Form.Label>파일 업로딩</Form.Label>
                            <div className="form-item">
                              <div className="file-upload-group">
                                <div className="info-text">업로딩하려면 파일을 올리거나 클릭하십시오.</div>
                              </div>
                            </div>
                          </Form.Group>
                        </Row>
                      </Form>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab2">
                  <div className="ct-group">
                    <div className="ct-header">
                      <div className="ct-text">
                        <i className="mpci icon-required" title="필수" /> 필수 입력
                      </div>
                      <div className="spacer" />
                      <Button variant="primary">업로드</Button>
                      <Button variant="secondary">파일 초기화</Button>
                      <Button variant="outline-dark">목록</Button>
                    </div>
                    <div className="ct-body">
                      <Form className="form-grid form-label-horizontal label-width-lg">
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                          <Form.Group as={Col}>
                            <Form.Label>사고정보</Form.Label>
                            <div className="form-item">
                              <Form.Select>
                                <option>부산 북항5부두 장기계류선박 장성호 침몰</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>카메라센서</Form.Label>
                            <div className="form-item">
                              <Form.Select>
                                <option>RGB</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              촬영시각 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="datetime-local" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              카메라화각 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              위도 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              경도 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              촬영각도 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              촬영방향 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              촬영높이 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>
                              노출시간 <i className="mpci icon-required" title="필수" />
                            </Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>조리개</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>ISO</Form.Label>
                            <div className="form-item">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>종합평가 진행</Form.Label>
                            <div className="form-item">
                              <Form.Check type="checkbox" label="진행" />
                            </div>
                          </Form.Group>
                        </Row>
                        <Row className="row-cols-1">
                          <Form.Group as={Col}>
                            <Form.Label>파일 업로딩</Form.Label>
                            <div className="form-item">
                              <div className="file-upload-group">
                                <div className="info-text">업로딩하려면 파일을 올리거나 클릭하십시오.</div>
                              </div>
                            </div>
                          </Form.Group>
                        </Row>
                      </Form>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab3">
                  <div className="ct-group grid-group">
                    <div className="ct-header row mx-0">
                      <div className="col-12 col-md-auto d-flex align-items-center gap-2 px-0">
                        <div className="ct-total">
                          총 <span>15</span>건
                        </div>
                        <Form.Select className="form-auto">
                          <option>10개씩</option>
                        </Form.Select>
                      </div>
                      <div className="col-12 col-md-auto ms-auto px-0">
                        <div className="d-flex align-items-center gap-1">
                          <Form.Control type="text" placeholder="검색어를 입력하세요." />
                          <Form.Control type="date" />
                          <span>~</span>
                          <Form.Control type="date" />
                          <Button variant="dark" className="text-nowrap">
                            검색
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="ct-body">
                      <div className="realgrid-group">
                        <RealGrid />
                        <div className="pagination-group">
                          <Pagination size="sm">
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                          </Pagination>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab4">
                  <div className="ct-group grid-group">
                    <div className="ct-header row mx-0">
                      <div className="col-12 col-md-auto d-flex align-items-center gap-2 px-0">
                        <div className="ct-total">
                          총 <span>15</span>건
                        </div>
                        <Form.Select className="form-auto">
                          <option>10개씩</option>
                        </Form.Select>
                      </div>
                      <div className="col-12 col-md-auto ms-auto px-0">
                        <div className="d-flex align-items-center gap-1">
                          <Form.Control type="text" placeholder="검색어를 입력하세요." />
                          <Form.Control type="date" />
                          <span>~</span>
                          <Form.Control type="date" />
                          <Button variant="dark" className="text-nowrap">
                            검색
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="ct-body">
                      <div className="realgrid-group">
                        <RealGrid />
                        <div className="pagination-group">
                          <Pagination size="sm">
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                          </Pagination>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldInfoUploadModal;
