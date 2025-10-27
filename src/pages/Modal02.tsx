import { useState, useEffect } from 'react';
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
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files?.[0]?.name || '';
    const input = document.querySelector<HTMLInputElement>('.file-name-input');
    if (input) input.value = fileName;
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName={`modal584-dialog ${windowWidth < 768 ? 'mobile-view' : ''}`}
      contentClassName="modal584-content"
      className="modal584-wrapper"
    >
    <Modal.Header className="custom-modal-header d-flex align-items-center">
      <h5 className="mb-0 custom-modal-title">{title}</h5>
      <Button variant="link" className="ms-auto p-0 border-0" onClick={onHide} aria-label="닫기">
        <Icon path={mdiClose} size={1} />
      </Button>
    </Modal.Header>

    {/** ✅ PC 전용 레이아웃 */}
    {!isMobile && (
        <Modal.Body className="modal584-body">
        <Container fluid style={{ padding: 0 }}> 
          {/* 1. 서비스구분 드롭다운 */}
          <div className="modal584-line-02 d-flex align-items-center mb-3">
            <div className="modal584-label">서비스구분</div>
            <Form.Select
              id="platform-select"
              name="platform"
              className="modal584-select"
            >
              <option>국토정보플랫폼</option>
              <option>국토정보플랫폼</option>
              <option>국토정보플랫폼</option>
            </Form.Select>
          </div>

          {/* 2. 담당부서 드롭다운 */}
          <div className="modal584-line-02 d-flex align-items-center mb-3">
            <div className="modal584-label">담당부서</div>
            <Form.Select
              id="department-select"
              name="department"
              className="modal584-select"
            >
              <option>국토조사과</option>
              <option>해양팀</option>
              <option>환경팀</option>
            </Form.Select>
          </div>

          {/* 3. 제목 입력란 */}
          <div className="modal584-line-02 d-flex align-items-center mb-3">
            <div className="modal584-label">제목</div>
            <Form.Control
            type="text"
            id="title-input"
            name="title"
            className="modal584-input"
            placeholder="제목 입력"
          />
          </div>

          {/* 4. 내용 입력란 */}
          <div className="modal584-line-02 d-flex align-items-start mb-3">
            <div className="modal584-label" style={{ marginTop: '4px' }}>내용</div>
            <Form.Control
            as="textarea"
            id="content-textarea"
            name="content"
            className="modal584-textarea"
            rows={4}
            placeholder="내용 입력"
          />
          </div>

          {/* 5. 파일 업로드 */}
          <div className="modal584-line-02 d-flex align-items-center mb-3">
            <div className="modal584-label">첨부파일</div>
            <div className="custom-file-wrapper" style={{ flex: 1, display: 'flex' }}>
                <input
                type="text"
                id="file-name-input-pc"
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
                name="filePc"
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
      )}

       {/** ✅ 모바일 전용 레이아웃 */}
{isMobile && (
  <Modal.Body className="modal584-body mobile-body">
    <Container fluid style={{ padding: 0 }}>
      {/* 1. 서비스구분 */}
      <div className="mobile-line d-flex align-items-center mb-3">
        <div className="mobile-label">서비스구분</div>
        <Form.Select
          id="platform-select-mb"
          name="platform-mb"
          className="mobile-select flex-grow-1"
        >
          <option>국토정보플랫폼</option>
          <option>국토정보플랫폼</option>
          <option>국토정보플랫폼</option>
        </Form.Select>
      </div>

      {/* 2. 담당부서 */}
      <div className="mobile-line d-flex align-items-center mb-3">
        <div className="mobile-label">담당부서</div>
        <Form.Select
          id="department-select-mb"
          name="department-mb"
          className="mobile-select flex-grow-1"
        >   
          <option>국토조사과</option>
          <option>해양팀</option>
          <option>환경팀</option>
        </Form.Select>
      </div>

      {/* 3. 제목 */}
      <div className="mobile-line d-flex align-items-center mb-3">
        <div className="mobile-label">제목</div>
        <Form.Control
          type="text"
          id="mobile-input-title-mb"
          name="mobile-input-title-mb"
          className="mobile-input flex-grow-1"
          placeholder="제목 입력"
        />
      </div>

      {/* 4. 내용 */}
      <div className="mobile-line d-flex align-items-start mb-3">
        <div className="mobile-label" style={{ marginTop: '4px' }}>내용</div>
      <Form.Control
        as="textarea"
        id="mobile-textarea-content-mb"
        name="mobile-textarea-content-mb"
        className="mobile-textarea flex-grow-1"
        rows={4}
        placeholder="내용 입력"
      />
      </div>

      {/* 5. 첨부파일 */}
      <div className="mobile-line d-flex align-items-center mb-3">
        <div className="mobile-label">첨부파일</div>
        <div className="mobile-file-wrapper flex-grow-1">
          <input
            type="text"
            id="file-name-input-mb"
            className="file-name-input mb-2"
            placeholder="파일을 선택해주세요"
            readOnly
          />
          <label htmlFor="fileInput-mb" className="file-select-btn w-100 text-center">
            파일 선택
          </label>
          <input
            type="file"
            id="fileInput-mb"
            name="fileMb"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </Container>
  </Modal.Body>
)}


      {/* 하단 버튼 */}
      <Modal.Footer className="modal584-footer d-flex justify-content-end">
        <Button className="list-btn" onClick={onHide}>
          목록으로 돌아가기
        </Button>
        <Button className="save-btn">저장</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal02;
