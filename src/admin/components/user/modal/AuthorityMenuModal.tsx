/**
 * 설명: 사용자정보 -> 권한관리 -> 그룹 메뉴 권한 관리 모달
 **/
import { Modal, Row } from 'react-bootstrap';
import MenuListGridContent from '@/admin/components/user/modal/contents/MenuListGridContent.tsx';
import MenuAuthorityGridContent from '@/admin/components/user/modal/contents/MenuAuthorityGridContent.tsx';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AuthorityMenuModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>그룹메뉴 권한 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">[1] 기획운영과</div>
            </div>
          </div>
        </div>
        <Row>
          <MenuListGridContent />
          <MenuAuthorityGridContent />
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AuthorityMenuModal;
