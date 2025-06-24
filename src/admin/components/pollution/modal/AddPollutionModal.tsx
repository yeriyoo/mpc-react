/**
 * 설명: 관리자 -> 오염관리 -> 관리코드
 **/
import { Button, Modal, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AddPollutionModal = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>등록</Modal.Title>
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
                    <th>분류</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>장비명</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>영상장비IP</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>파일형식</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>촬영위치</th>
                    <td className="align-middle"></td>
                  </tr>
                  <tr>
                    <th>메타데이터</th>
                    <td className="align-middle"></td>
                  </tr>
                </tbody>
              </Table>
            </div>
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

export default AddPollutionModal;
