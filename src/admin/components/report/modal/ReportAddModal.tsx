/**
 * 설명: 관리자 -> 보고서관리 -> 보고서 등록 모달
 **/
import { Button, Modal } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const ReportAddModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>보고서 템플릿 작성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="body">
            <div className="wysiwyg-editor-group">wysiwyg-editor 들어가는 곳</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">등록</Button>
        <Button variant="secondary" onClick={setIsShow}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportAddModal;
