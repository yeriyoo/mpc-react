/**
 * 설명: 관리자 -> 기준정보 -> 지도관리 -> 지도 등록 모달
 **/
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AddMapModal = ({ isShow, setIsShow }: CommonModalProps) => {
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
                    <th>Map Name</th>
                    <td className="align-middle">
                      <Form.Control type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>Map's Lavel</th>
                    <td className="align-middle">
                      <Form.Select>
                        <option>Level</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <th>Data Source</th>
                    <td className="align-middle">
                      <Form.Control type="file" />
                    </td>
                  </tr>
                  <tr>
                    <th>상세 설명</th>
                    <td className="align-middle">
                      <Form.Control type="text" />
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

export default AddMapModal;
