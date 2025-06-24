/**
 * 설명: Q&A 모달
 **/
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';
import RealGrid from '@/pages/publish/RealGrid.tsx';

export const QaModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>Q&A</Modal.Title>
            <CloseButton onClick={setIsShow} />
          </Modal.Header>
          <Modal.Body>
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
                    <Form.Select className="form-auto">
                      <option>선택</option>
                    </Form.Select>
                    <Form.Select className="form-auto">
                      <option>제목+내용</option>
                    </Form.Select>
                    <Form.Control type="text" placeholder="검색어를 입력하세요." />
                    <Button variant="dark" className="text-nowrap">
                      검색
                    </Button>
                  </div>
                </div>
              </div>
              <div className="ct-body">
                <div className="realgrid-group">
                  <RealGrid />
                  {/* 그리드 내 들어가는 요소 */}
                  {/* <Icon path={mdiLockOutline} title="" className="mpci mdi mdi-oock-outline size-xs" />
                  <span className="badge text-bg-dark">완료</span>
                  <span className="badge text-bg-primary">접수</span>
                  <span className="badge text-bg-success">처리중</span> */}
                  {/* 그리드 내 들어가는 요소 */}
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
