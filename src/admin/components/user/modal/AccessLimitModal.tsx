/**
 * 설명: 관리자 -> 사용자정보 -> 동접 제한 -> 동접제한 수정 모달
 **/
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AccessLimitModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>동시접속 제한 설정</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{ width: '140px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>서비스 ID</th>
                    <td className="align-middle">0001</td>
                  </tr>
                  <tr>
                    <th>서비스명</th>
                    <td className="align-middle">Online</td>
                  </tr>
                  <tr>
                    <th>현재 동접제한건수</th>
                    <td className="align-middle">1명(동시접속 불가-단독접속)</td>
                  </tr>
                  <tr>
                    <th>공개여부</th>
                    <td className="align-middle">
                      <Form.Check type="radio" inline id="" label="적용" className="mb-0" />
                      <Form.Check type="radio" inline id="" label="미적용" className="mb-0" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">변경 적용</Button>
        <Button variant="secondary" onClick={setIsShow}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccessLimitModal;
