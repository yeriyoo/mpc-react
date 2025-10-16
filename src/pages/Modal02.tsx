import { useState } from 'react';
import { Modal, Button, Container, Form } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

type Modal02Props = {
  show: boolean;
  onHide: () => void;
  title?: string;
};

const Modal02 = ({ show, onHide, title = '공지사항 작성' }: Modal02Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isAccordionView = windowWidth < 768;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName={`modal584-dialog ${windowWidth < 768 ? 'mobile-view' : ''}`}
      contentClassName="modal584-content"
      className="modal584-wrapper"
    >
      {/* 헤더 */}
      <Modal.Header className="custom-modal-header d-flex align-items-center">
        <h5 className="mb-0 custom-modal-title">{title}</h5>
        <Button variant="link" className="ms-auto p-0 border-0" onClick={onHide} aria-label="닫기">
          <Icon path={mdiClose} size={1} />
        </Button>
      </Modal.Header>

      {/* 바디 */}
      <Modal.Body className="modal584-body">
        <Container fluid style={{ padding: 0 }}>
          {/* 1. 서비스구분 드롭다운 */}
          <div className="modal584-line d-flex align-items-center mb-3">
            <div className="modal584-label">서비스구분</div>
            <Form.Select className="modal584-select">
              <option>국토정보플랫폼</option>
              <option>국토정보플랫폼</option>
              <option>국토정보플랫폼</option>
            </Form.Select>
          </div>

          {/* 2. 담당부서 드롭다운 */}
          <div className="modal584-line d-flex align-items-center mb-3">
            <div className="modal584-label">담당부서</div>
            <Form.Select className="modal584-select">
              <option>국토조사과</option>
              <option>해양팀</option>
              <option>환경팀</option>
            </Form.Select>
          </div>

          {/* 3. 제목 입력란 */}
          <div className="modal584-line d-flex align-items-center mb-3">
            <div className="modal584-label">제목</div>
            <Form.Control type="text" className="modal584-input" placeholder="제목 입력" />
          </div>

          {/* 4. 내용 입력란 */}
          <div className="modal584-line d-flex align-items-start mb-3">
            <div className="modal584-label" style={{ marginTop: '4px' }}>내용</div>
            <Form.Control as="textarea" className="modal584-textarea" rows={4} placeholder="내용 입력" />
          </div>

          {/* 5. 파일 업로드 */}
          <div className="modal584-line d-flex align-items-center mb-3">
            <div className="modal584-label">첨부파일</div>
            <div className="custom-file-wrapper" style={{ flex: 1, display: 'flex' }}>
                <input
                type="text"
                className="file-name-input"
                placeholder="파일을 선택해주세요"
                readOnly
                />
                <label htmlFor="fileInput" className="file-select-btn">
                파일 선택
                </label>
                <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => {
                const fileName = e.target.files?.[0]?.name || '';
                const input = document.querySelector<HTMLInputElement>('.file-name-input');
                if (input) input.value = fileName;
                }}
                />
            </div>
          </div>
        </Container>
      </Modal.Body>

      {/* 하단 버튼 */}
      <Modal.Footer className="modal584-footer d-flex justify-content-end">
        <Button className="list-btn">
          목록으로 돌아가기
        </Button>
        <Button className="save-btn">저장</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal02;
