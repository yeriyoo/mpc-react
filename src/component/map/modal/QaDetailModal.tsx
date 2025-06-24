/**
 * 설명: Q&A 모달
 **/
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';
import Icon from '@mdi/react';
import { mdiPaperclip } from '@mdi/js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const QaDetailModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>Q&A</Modal.Title>
            <CloseButton onClick={setIsShow} />
          </Modal.Header>
          <Modal.Body>
            <div className="ct-group">
              <div className="ct-header">
                <div className="ct-title h5">질문</div>
              </div>
              <div className="ct-body">
                <Form className="form-grid form-label-horizontal label-width-lg">
                  <Row className="row-cols-1 row-cols-md-1 row-cols-lg-3">
                    <Form.Group as={Col}>
                      <Form.Label>서비스 구분</Form.Label>
                      <div className="form-item">
                        <Form.Select readOnly>
                          <option>항공사진</option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>오류유형</Form.Label>
                      <div className="form-item">
                        <Form.Select readOnly>
                          <option>맵</option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>작성자</Form.Label>
                      <div className="form-item">
                        <Form.Control type="text" value="홍길동" readOnly />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} className="cols-12 col-md-12 col-lg-12">
                      <Form.Label>제목</Form.Label>
                      <div className="form-item">
                        <Form.Control type="text" readOnly />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>등록일자</Form.Label>
                      <div className="form-item">
                        <Form.Control type="datetime-local" readOnly />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>공개여부</Form.Label>
                      <div className="form-item">
                        <Form.Check type="checkbox" label="공개" checked readOnly />
                        <Form.Check type="checkbox" label="비공개" disabled />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>조회수</Form.Label>
                      <div className="form-item">10</div>
                    </Form.Group>
                  </Row>
                  <Row className="row-cols-1">
                    <Form.Group as={Col}>
                      <Form.Label>첨부파일</Form.Label>
                      <div className="form-item">
                        <div className="file-upload-group">
                          {/* <Form.Control type="file" /> */}
                          {/* <div className="file-upload-area">
                            <div className="info-text">업로딩하려면 파일을 올리거나 클릭하십시오.</div>
                          </div> */}
                          <div className="add-files">
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>내용</Form.Label>
                      <div className="form-item">
                        <Form.Control as="textarea" rows="5" readOnly />
                      </div>
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </div>

            <div className="ct-group mt-3">
              <div className="ct-header">
                <div className="ct-title h5">답변</div>
              </div>
              <div className="ct-body">
                <Form className="form-grid form-label-horizontal label-width-lg">
                  <Row className="row-cols-1 row-cols-md-1 row-cols-lg-2">
                    <Form.Group as={Col}>
                      <Form.Label>작성자</Form.Label>
                      <div className="form-item">
                        <Form.Control type="text" value="홍길동" readOnly />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>담당부서</Form.Label>
                      <div className="form-item">
                        <Form.Control type="text" readOnly />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>이메일</Form.Label>
                      <div className="form-item">
                        <Form.Control type="text" readOnly />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>등록일자</Form.Label>
                      <div className="form-item">
                        <Form.Control type="datetime-local" readOnly />
                      </div>
                    </Form.Group>
                  </Row>
                  <Row className="row-cols-1">
                    <Form.Group as={Col}>
                      <Form.Label>첨부파일</Form.Label>
                      <div className="form-item">
                        <div className="file-upload-group">
                          {/* <Form.Control type="file" /> */}
                          {/* <div className="file-upload-area">
                            <div className="info-text">업로딩하려면 파일을 올리거나 클릭하십시오.</div>
                          </div> */}
                          <div className="add-files">
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                            <div className="add-file-item">
                              <Icon path={mdiPaperclip} title="사용자" className="mpci mdi mdi-paperclip size-xs" />
                              파일명.png <span className="text-unit">(1,000 byte)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>내용</Form.Label>
                      <div className="form-item">
                        <Form.Control as="textarea" rows="5" readOnly />
                      </div>
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" className="text-nowrap">
              목록으로 돌아가기
            </Button>
            <div className="spacer" />
            <Button variant="secondary" onClick={setIsShow}>
              닫기
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};
