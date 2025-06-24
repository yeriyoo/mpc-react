/**
 * 설명: 관리자 -> 기준정보 -> 지도관리 -> 민감자원지도 등록 모달
 **/
import { Button, Form, InputGroup, Modal, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AddSensitiveModal = ({ isShow, setIsShow }: CommonModalProps) => {
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
                      <InputGroup className="align-items-center">
                        <Form.Select>
                          <option>대분류</option>
                        </Form.Select>
                        <Form.Select className="ms-2">
                          <option>중분류</option>
                        </Form.Select>
                        <Form.Select className="ms-2">
                          <option>소분류</option>
                        </Form.Select>
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <th>아이콘 선택</th>
                    <td className="align-middle">
                      <Form.Control type="file" />
                    </td>
                  </tr>
                  <tr>
                    <th>강조색상 선택</th>
                    <td className="align-middle">
                      <Form.Control type="color" />
                    </td>
                  </tr>
                  <tr>
                    <th>표출 순위</th>
                    <td className="align-middle">
                      <Form.Select>
                        <option>Level</option>
                      </Form.Select>
                    </td>
                  </tr>
                  <tr>
                    <th>위도/경도/지도 위치 표시</th>
                    <td className="align-middle">
                      <Form.Control type="text" />
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

export default AddSensitiveModal;
