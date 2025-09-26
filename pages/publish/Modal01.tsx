import { useState, useEffect } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose, mdiMapMarker } from '@mdi/js';

type Modal01Props = {
  show: boolean;
  onHide: () => void;
  title?: string;
};

const Modal01 = ({ show, onHide, title = '사고정보 입력' }: Modal01Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 모바일/데스크톱 기준
  const isAccordionView = windowWidth <= 991;

  const rows = [
    {
      label: '사고시각',
      type: 'datetime',
      options: ['사고발생 시각', '0000-00-00', '0000-00-00'],
      required: true,
    },
    { label: '발생위치', type: 'location', required: true },
    { label: '사고선박명', type: 'input' },
    { label: '유출유종', type: 'select', options: ['KuwaitM', 'KuwaitM', 'KuwaitM'] },
    { label: '유출량', type: 'input', subType: 'triple' },
    { label: '예측수행시간', type: 'select', options: ['0000-00-00', '0000-00-00', '0000-00-00'] },
  ];

  const lines = rows.map((row, i) => (
    <div key={i} className="modal584-line">
      {/* 라벨 영역 */}
      <div className="modal584-line-text">
        {row.label}
        {row.required && <span className="required-mark">*</span>}
      </div>

      {/* 입력 영역 */}
      <div className="modal584-line-sub">
        {row.type === 'datetime' ? (
          <div className="datetime-wrapper">
            <select className="form-select">
              {row.options?.map((opt, idx) => (
                <option key={idx}>{opt}</option>
              ))}
            </select>
            <input type="text" className="form-control datetime-input" />
            <span>:</span>
            <input type="text" className="form-control datetime-input" />
          </div>
        ) : row.type === 'location' ? (
          <div className="location-grid-wrapper">
            <div className="location-grid">
              {/* 위도 */}
              <div className="location-row">
                <div className="location-label">위도</div>
                <input className="location-cell" />
                <input className="location-cell" />
                <input className="location-cell" />
                <span className="location-equal">=</span>
                <input className="location-cell" />
              </div>
              {/* 경도 */}
              <div className="location-row">
                <div className="location-label">경도</div>
                <input className="location-cell" />
                <input className="location-cell" />
                <input className="location-cell" />
                <span className="location-equal">=</span>
                <input className="location-cell" />
              </div>
            </div>

            <div className="location-btn-wrapper">
              <button className="location-btn">
                <span className="icon-wrapper">
                  <Icon path={mdiMapMarker} size={1} color="#FF0000" />
                </span>
                <br />
                지도에서
                <br />
                직접 입력
              </button>
            </div>
          </div>
        ) : row.type === 'input' ? (
          row.subType === 'triple' ? (
            <div className="oil-amount-wrapper">
              <input type="text" className="form-control oil-amount-input" />
              <span>KL=</span>
              <input type="text" className="form-control oil-amount-input" />
              <span>BBL=</span>
              <input type="text" className="form-control oil-amount-input" />
              <span>metric ton</span>
            </div>
          ) : (
            <input type="text" className="form-control" />
          )
        ) : row.type === 'textarea' ? (
          <textarea className="form-control" />
        ) : row.type === 'select' ? (
          row.label === '유출유종' ? (
            <div className="select-radio-wrapper">
              <select className="form-select">
                {row.options?.map((opt, idx) => (
                  <option key={idx}>{opt}</option>
                ))}
              </select>
              <div className="radio-group">
                <label className="radio-item">
                  <input type="radio" name="oilType" value="option1" /> 비연속유출
                </label>
                <label className="radio-item">
                  <input type="radio" name="oilType" value="option2" /> 연속유출
                </label>
              </div>
            </div>
          ) : (
            <select className="form-select">
              {row.options?.map((opt, idx) => (
                <option key={idx}>{opt}</option>
              ))}
            </select>
          )
        ) : null}
      </div>
    </div>
  ));

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered={true}
      dialogClassName={`modal584-dialog ${!isAccordionView ? 'mobile-view' : ''}`}
      contentClassName="modal584-content"
      className="modal584-wrapper"
    >
      <Modal.Header className="modal584-header d-flex align-items-center">
        <h5 className="mb-0 modal584-title">{title}</h5>
        <Button variant="link" className="ms-auto p-0 border-0" onClick={onHide} aria-label="닫기">
          <Icon path={mdiClose} size={1} color="#fff" />
        </Button>
      </Modal.Header>

      <Modal.Body className="modal584-body">
        <Container fluid style={{ padding: 0 }}>
          {lines}
        </Container>

        <div className="modal-center-btn-wrapper">
          <span>* 다른 사용자의 예측모델 작업 시 지연될 수 있으니 확인하세요.</span>
          <button className="modal-center-btn">예측 시작</button>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal584-footer">
        <Button className="modal584-footer-btn">예측모델 대기 현황</Button>
        <Button className="modal584-footer-btn">과거 사고 예측조회</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal01;
