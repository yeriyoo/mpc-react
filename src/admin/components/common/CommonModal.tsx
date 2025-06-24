/**
 * 설명: 공통 모달
 **/
import { Button, Modal } from 'react-bootstrap';
import { useCommonModalStore } from '@/store/commonModalStore.ts';

export const CommonModal = () => {
  const { size, isShow, title, content, okCallback, closeCommonModal } = useCommonModalStore();

  const handleClickOk = () => {
    if (okCallback) {
      okCallback();
    }
    closeCommonModal();
  };

  return (
    <Modal size={size} show={isShow} onHide={closeCommonModal} centered={true}>
      <Modal.Header closeButton={true}>{title && <Modal.Title>{title}</Modal.Title>}</Modal.Header>
      <Modal.Body>
        <div className="alert-text-group">
          <div className="text1">{content && content}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClickOk}>
          확인
        </Button>
        <Button variant="secondary" onClick={closeCommonModal}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CommonModal;
