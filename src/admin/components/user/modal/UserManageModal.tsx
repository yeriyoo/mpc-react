/**
 * 설명: 사용자정보 -> 사용자관리 -> 사용자 상세 모달
 **/
import { Button, Modal, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const UserManageModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>사용자 관리</Modal.Title>
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
                    <th>아이디</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>구분</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>조직</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>함정구분</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>핸드폰번호</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>회사주소</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>팩스</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>등록일</th>
                    <td className="align-middle"></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={setIsShow}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserManageModal;
