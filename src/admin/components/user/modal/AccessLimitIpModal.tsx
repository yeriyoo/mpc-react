/**
 * 설명: 관리자 -> 사용자정보 -> 동접 제한 -> 접속 IP 관리 수정 모달
 **/
import { Button, Form, InputGroup, Modal, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AccessLimitIpModal = ({ isShow, setIsShow }: CommonModalProps) => {
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
                    <td className="align-middle">
                      <InputGroup className="align-items-center">
                        <Form.Control type="text" />
                        <div className="px-1">-</div>
                        <Form.Control type="text" />
                        <div className="px-1">-</div>
                        <Form.Control type="text" />
                        <div className="px-1">-</div>
                        <Form.Control type="text" />
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <th>선택사항</th>
                    <td className="align-middle">
                      <Form.Check type="checkbox" inline id="" label="허용여부" className="mb-0" />
                      <Form.Check type="checkbox" inline id="" label="사용유무" className="mb-0" />
                    </td>
                  </tr>
                  <tr>
                    <th>인증방법</th>
                    <td className="align-middle">
                      <Form.Select>
                        <option>ID/Password</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <th>공지 시작일</th>
                    <td className="align-middle">
                      <Form.Control type="date" value="2024-01-01" />
                    </td>
                  </tr>
                  <tr>
                    <th>공지 종료일</th>
                    <td className="align-middle">
                      <Form.Control type="date" value="2024-01-01" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">저장</Button>
        <Button variant="secondary" onClick={setIsShow}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccessLimitIpModal;
