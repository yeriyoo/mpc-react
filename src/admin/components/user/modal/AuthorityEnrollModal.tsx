/**
 * 설명: 사용자정보 -> 권한관리 -> 권한 그룹 등록 모달
 **/
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AuthorityEnrollModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>권한 그룹 추가</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">권한 정보</div>
            </div>
          </div>
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{ width: '140px' }} />
                  <col style={{ width: '240px' }} />
                  <col style={{ width: '140px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      그룹명
                      <i className="icon-require" />
                    </th>
                    <td colSpan={3}>
                      <Form.Control type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>정렬순서</th>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <th>
                      사용여부
                      <i className="icon-require" />
                    </th>
                    <td>
                      <Form.Select>
                        <option>선택</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <th>그룹설명</th>
                    <td colSpan={3}>
                      <Form.Control as="textarea" rows={5} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">신규저장</Button>
        <Button variant="secondary" onClick={setIsShow}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthorityEnrollModal;
