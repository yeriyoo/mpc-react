import Icon from '@mdi/react';
import { mdiPrinterPosOutline } from '@mdi/js';

//Component
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';

import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';
import RealGrid from '@/pages/publish/RealGrid.tsx';

export const SamplePage2 = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>Grid</Modal.Title>
            <CloseButton onClick={setIsShow} />
          </Modal.Header>
          <Modal.Body>
            <div className="ct-group grid-group">
              <div className="ct-header">
                <div className="ct-title h5">제목</div>
                <div className="ct-total">
                  총 <span>15</span>건
                </div>
                <div className="spacer" />
                <Button variant="outline-dark" size="sm">
                  <Icon path={mdiPrinterPosOutline} title="인쇄" className="mpci mdi mdi-printer-pos-outline" />
                </Button>
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
