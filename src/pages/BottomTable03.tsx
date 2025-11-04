import { useState } from 'react';
import { Modal, Button, Form, Pagination, Accordion } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose, mdiPlusCircleOutline, mdiMinusCircle, mdiMapMarker, mdiFileDocumentEditOutline, mdiRadar } from '@mdi/js';
import Modal01 from './Modal01';

type BottomTableProps = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  windowWidth: number;
};

type AccidentRow = {
  id: number;
  사고시각: string;
  예측시간: string;
  유종: string;
  예측유출량: string;
  ['사고지점']: null;
  진행률: string;
  ['바로실행']: null;
  ['실시간 위치']: null;
};


const BottomAccordionList = ({
  handleClose,
  isShow,
}: {
  handleClose: () => void;
  isShow: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(isShow);
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const accidentList = [
    {
      title: '0001 / 2025-05-25 00:00',
      details: [
        '예측시간 : 12H',
        '유종 : Disel',
        '유출량 : 1kl',
        '위성탐지 : SAR(2)',
        '현장탐지 : 무인기(2)',
        '예측 유출량 : 1kl',
        <span>확산예측 : <Icon path={mdiRadar} size={1} color="#008AFF" /></span>,
      ],
    },
   {
      title: '0001 / 2025-05-25 00:00',
      details: [
        '예측시간 : 12H',
        '유종 : Disel',
        '유출량 : 1kl',
        '위성탐지 : SAR(2)',
        '현장탐지 : 무인기(2)',
        '예측 유출량 : 1kl',
        <span>확산예측 : <Icon path={mdiRadar} size={1} color="#008AFF" /></span>,
      ],
    },
    {
      title: '0001 / 2025-05-25 00:00',
      details: [
        '예측시간 : 12H',
        '유종 : Disel',
        '유출량 : 1kl',
        '위성탐지 : SAR(2)',
        '현장탐지 : 무인기(2)',
        '예측 유출량 : 1kl',
        <span>확산예측 : <Icon path={mdiRadar} size={1} color="#008AFF" /></span>,
      ],
    },
    {
      title: '0001 / 2025-05-25 00:00',
      details: [
        '예측시간 : 12H',
        '유종 : Disel',
        '유출량 : 1kl',
        '위성탐지 : SAR(2)',
        '현장탐지 : 무인기(2)',
        '예측 유출량 : 1kl',
        <span>확산예측 : <Icon path={mdiRadar} size={1} color="#008AFF" /></span>,
      ],
    },
    {
      title: '0001 / 2025-05-25 00:00',
      details: [
        '예측시간 : 12H',
        '유종 : Disel',
        '유출량 : 1kl',
        '위성탐지 : SAR(2)',
        '현장탐지 : 무인기(2)',
        '예측 유출량 : 1kl',
        <span>확산예측 : <Icon path={mdiRadar} size={1} color="#008AFF" /></span>,
      ],
    },
    {
      title: '0001 / 2025-05-25 00:00',
      details: [
        '예측시간 : 12H',
        '유종 : Disel',
        '유출량 : 1kl',
        '위성탐지 : SAR(2)',
        '현장탐지 : 무인기(2)',
        '예측 유출량 : 1kl',
        <span>확산예측 : <Icon path={mdiRadar} size={1} color="#008AFF" /></span>,
      ],
    },
    {
      title: '0001 / 2025-05-25 00:00',
      details: [
        '예측시간 : 12H',
        '유종 : Disel',
        '유출량 : 1kl',
        '위성탐지 : SAR(2)',
        '현장탐지 : 무인기(2)',
        '예측 유출량 : 1kl',
        <span>확산예측 : <Icon path={mdiRadar} size={1} color="#008AFF" /></span>,
      ],
    },
  ];

  const toggleKey = (key: string) => {
    setActiveKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  return (
    <div className={`accordion-bottom-table ${isOpen ? 'open' : 'closed'}`}>
      <div className={`bottom-sheet ${isOpen ? 'open' : 'closed'}`}>
        <div
          className="sheet-handle"
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-label={isOpen ? '접기' : '펼치기'}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setIsOpen(!isOpen);
          }}
        ></div>

        <div className="sheet-header">
          <span>오염정보 목록</span>
          <button className="close-btn" onClick={handleClose}>
            <Icon path={mdiClose} size={1} />
          </button>
        </div>

        <div className="btn-group">
          <Button>+ 사고정보 추가하기</Button>
        </div>

        <div className={`sheet-content ${isOpen ? 'open' : 'closed'}`}>
          <Accordion
            activeKey={activeKeys}
            onSelect={(k) => {
              if (typeof k === 'string') {
                toggleKey(k);
              }
            }}
            alwaysOpen
          >
            {accidentList.map((item, index) => {
              const eventKey = String(index);
              const isActive = activeKeys.includes(eventKey);

              return (
                <Accordion.Item
                  eventKey={eventKey}
                  key={eventKey}
                  className="custom-accordion-item"
                >
                  <Accordion.Header
                    onClick={(e) => {
                      e.preventDefault();
                      toggleKey(eventKey);
                    }}
                  >
                    <span className="accordion-icon">
                      <Icon
                        path={isActive ? mdiMinusCircle : mdiPlusCircleOutline}
                        size={1}
                        color={isActive ? '#008AFF' : '#000000'}
                      />
                    </span>
                    <span className="accordion-title">{item.title}</span>

                    <span className="accordion-right-icon">
                      <Icon path={mdiMapMarker} size={1} color={isActive ? '#FF0000' : '#FF0000'} />
                    </span>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="details-grid">
                      {item.details.map((detail, i) => (
                        <div key={i} className="detail-item">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

const BottomTable03 = ({ isShow, setIsShow, windowWidth }: BottomTableProps) => {
  const handleClose = () => setIsShow(false);
  const [showModal01, setShowModal01] = useState(false);
  const isAccordionView = windowWidth <= 991;
  const isModalView = windowWidth >= 992;

  if (!isShow) return null;

  const tableContent = (
    <>
      <div className="custom-top-bar d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center">
          <span className="me-2 fw-bold">총 7건</span>
          <Form.Select
          id="items-per-page"
          name="itemsPerPage"
          size="sm"
          style={{ width: '100px', height: '34px' }}
        >
            <option>7건</option>
            <option>14건</option>
            <option>28건</option>
          </Form.Select>
        </div>
        <div>
          <Button
            variant="primary"
            size="sm"
            className="me-2 custom-btn"
            onClick={() => setShowModal01(true)}
          >
            + 사고정보 추가하기
          </Button>
        </div>
      </div>

      <div className="bottom-inline-table bottom-inline-table-03">
              <table className="table table-bordered table-sm mb-0">
                <thead className="table-light">
                <tr>
                    <th colSpan={6} className="text-center">입력결과</th>
                    <th colSpan={4} className="text-center prediction-header">예측결과</th>
                  </tr>
                  <tr>
                    <th>번호</th>
                    <th>사고시각</th>
                    <th>예측시간</th>
                    <th>유종</th>
                    <th>유출량</th>
                    <th>사고지점</th>
                    <th>위성탐지</th>
                    <th>현장탐지</th>
                    <th>예측 유출량</th>
                    <th>확산예측</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      id: 1, 
                      사고시각: '2025-05-25 00:00', 
                      예측시간: '12H', 
                      유종: 'Disel', 
                      유출량:'1kl', 
                      ['사고지점']: <Icon path={mdiMapMarker} size={1} color="#FF0000" />, 
                      위성탐지: 'SAR(2)', 
                      현장탐지: '무인기(2)',
                      진행률: 'FAIL',
                      예측유출량:'1kl',  
                      ['확산예측']: <Icon path={mdiRadar} size={1} color="#008AFF" />, 
                    },
                   { 
                    id: 2, 
                      사고시각: '2025-05-25 00:00', 
                      예측시간: '12H', 
                      유종: 'Disel', 
                      유출량:'1kl', 
                      ['사고지점']: <Icon path={mdiMapMarker} size={1} color="#FF0000" />, 
                      위성탐지: 'SAR(2)', 
                      현장탐지: '무인기(2)',
                      진행률: 'FAIL',
                      예측유출량:'1kl',  
                      사고정보:'1kl', 
                  },
                 { 
                    id: 3, 
                      사고시각: '2025-05-25 00:00', 
                      예측시간: '12H', 
                      유종: 'Disel', 
                      유출량:'1kl', 
                      ['사고지점']: <Icon path={mdiMapMarker} size={1} color="#FF0000" />, 
                      위성탐지: 'SAR(2)', 
                      현장탐지: '무인기(2)',
                      진행률: 'FAIL',
                      예측유출량:'1kl',  
                      ['확산예측']: <Icon path={mdiRadar} size={1} color="#008AFF" />, 
                  },
                 { 
                    id: 4, 
                      사고시각: '2025-05-25 00:00', 
                      예측시간: '12H', 
                      유종: 'Disel', 
                      유출량:'1kl', 
                      ['사고지점']: <Icon path={mdiMapMarker} size={1} color="#FF0000" />, 
                      위성탐지: 'SAR(2)', 
                      현장탐지: '무인기(2)',
                      진행률: 'FAIL',
                      예측유출량:'1kl',  
                      ['확산예측']: <Icon path={mdiRadar} size={1} color="#008AFF" />, 
                  },

                  ].map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.사고시각}</td>
                      <td>{row.예측시간}</td>
                      <td>{row.유종}</td>
                      <td>{row.유출량}</td>
                      <td  style={{ cursor: 'pointer' }}>{row.사고지점}</td>
                      <td style={{ cursor: 'pointer' }}>{row.위성탐지}</td>
                      <td>{row.현장탐지}</td>
                      <td>{row.예측유출량}</td>
                      <td style={{ cursor: 'pointer' }}>{row.확산예측}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
      <div className="pagination-group mt-3">
        <Pagination size="sm">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );

  return (
    <>
      {isAccordionView && <BottomAccordionList handleClose={handleClose} isShow={isShow} />}

      {isModalView && (
        <div className="bottom-table-modal">
          <Modal.Header>
            <Modal.Title>오염정보 목록</Modal.Title>
            <div className="ms-auto">
              <Button variant="link-dark" size="sm" onClick={handleClose} aria-label="닫기">
                <Icon path={mdiClose} size={1} />
              </Button>
            </div>
          </Modal.Header>
          <Modal.Body>{tableContent}</Modal.Body>
        </div>
      )}

      {/* Modal01 팝업 */}
      <Modal01 show={showModal01} onHide={() => setShowModal01(false)} />
    </>
  );
};

export default BottomTable03;
