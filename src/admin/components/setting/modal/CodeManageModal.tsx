/**
 * 설명: 환경설정 -> 공통 코드 관리 -> 상세 코드 등록,수정 모달
 **/
import { Button, Form, InputGroup, Modal, Table } from 'react-bootstrap';

interface IProps {
  modalType: string;
  isShow: boolean;
  setIsShow: VoidFunction;
}

const CodeManageModal = ({ modalType, isShow, setIsShow }: IProps) => {
  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>그룹코드 {modalType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{ width: '140px' }} />
                </colgroup>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <th>그룹코드 ID</th>
                    <td>
                      <InputGroup className="align-items-center">
                        <Form.Control type="text" />
                        <Button variant="outline-primary" className="ms-2 btn-text-icon">
                          중복체크 <i className="icon-admin icon-button icon-check ms-2"></i>
                        </Button>
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <th>그룹코드명</th>
                    <td>
                      <Form.Control type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>그룹코드 설명</th>
                    <td>
                      <Form.Control as="textarea" rows={5} />
                    </td>
                  </tr>
                  <tr>
                    <th>사용여부</th>
                    <td className="align-middle">
                      <Form.Check type="radio" inline id="" label="사용함" className="mb-0" />
                      <Form.Check type="radio" inline id="" label="사용안함" className="mb-0" />
                    </td>
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

export default CodeManageModal;
