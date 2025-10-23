import { useState } from 'react';
import { Modal, Button, Form, Pagination, Accordion } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose, mdiPlusCircleOutline, mdiMinusCircle, mdiCrosshairsGps } from '@mdi/js';

type BottomTableProps = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  windowWidth: number;
};

type AccidentRow = {
  id: number;
  사고명: string;
  사고시각: string;
  사고위치?: string;
  등록일?: string;
  상세내용?: string;
  진행상태: string;
  작성자?: string;
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
      title: '부산 북항5부두 장기계류선박 장성호 침몰',
      details: [
        '사고 시각 : 2024-09-23 00:00:00',
        '진행상태 : 진행중',
        '사고위치 : 39.8, 124.4',
        '작성자 : 해경',
        '등록일 : 2024-09-23 19:29:00',
        '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
      ],
    },
    {
      title: '부산 북항5부두 해양오염사고',
      details: [
        '사고 시각 : 2024-09-23 00:00:00',
        '진행상태 : 진행중',
        '사고위치 : 39.8, 124.4',
        '작성자 : 해경',
        '등록일 : 2024-09-23 19:29:00',
        '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
      ],
    },
    {
      title: 'gs칼텍스 해양오염사고',
      details: [
        '사고 시각 : 2024-09-23 00:00:00',
        '진행상태 : 진행중',
        '사고위치 : 39.8, 124.4',
        '작성자 : 해경',
        '등록일 : 2024-09-23 19:29:00',
        '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
      ],
    },
    {
      title: '여수 백야도 선착장 인근해상 해양오염',
      details: [
        '사고 시각 : 2024-09-23 00:00:00',
        '진행상태 : 진행중',
        '사고위치 : 39.8, 124.4',
        '작성자 : 해경',
        '등록일 : 2024-09-23 19:29:00',
        '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
      ],
    },
    {
      title: '여수 선소대교 인근해상 해양오염',
      details: [
        '사고 시각 : 2024-09-23 00:00:00',
        '진행상태 : 진행중',
        '사고위치 : 39.8, 124.4',
        '작성자 : 해경',
        '등록일 : 2024-09-23 19:29:00',
        '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
      ],
    },
    {
      title: '여수항 기름 유출',
      details: [
        '사고 시각 : 2024-09-23 00:00:00',
        '진행상태 : 진행중',
        '사고위치 : 39.8, 124.4',
        '작성자 : 해경',
        '등록일 : 2024-09-23 19:29:00',
        '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
      ],
    },
    {
      title: '부산남항우양냉장 일대 제201연창호 오염사고',
      details: [
        '사고 시각 : 2024-09-23 00:00:00',
        '진행상태 : 진행중',
        '사고위치 : 39.8, 124.4',
        '작성자 : 해경',
        '등록일 : 2024-09-23 19:29:00',
        '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
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
          <span>사고상황</span>
          <button className="close-btn" onClick={handleClose}>
            <Icon path={mdiClose} size={1} />
          </button>
        </div>

        <div className="btn-group">
          <Button>상황전파</Button>
          <Button>상황보고</Button>
          <Button>조치보고</Button>
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
                      <Icon
                        path={mdiCrosshairsGps}
                        size={1}
                        color={isActive ? '#008AFF' : '#000000'}
                      />
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

const BottomTable01 = ({ isShow, setIsShow, windowWidth }: BottomTableProps) => {
  const handleClose = () => setIsShow(false);
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
          <Button variant="primary" size="sm" className="me-2 custom-btn">
            상황전파
          </Button>
          <Button variant="success" size="sm" className="me-2 custom-btn">
            상황보고
          </Button>
          <Button variant="danger" size="sm" className="me-2 custom-btn">
            조치보고
          </Button>
        </div>
      </div>

      <div className="bottom-inline-table">
        <table className="table table-bordered table-sm mb-0">
          <thead className="table-light">
            <tr>
              <th>번호</th>
              <th>사고명</th>
              <th>사고시각</th>
              <th>사고위치</th>
              <th>등록일</th>
              <th>상세내용</th>
              <th>진행상태</th>
              <th>작성자</th>
              <th>실시간 위치</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, 사고명: '부산 북항5부두 장기계류선박 장성호 침몰', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일:'2024-09-23 19:29:00', 상세내용:'서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자:'해경', ['실시간 위치']: <Icon path={mdiCrosshairsGps} size={1} className="realtime-icon"/> },
              { id: 2, 사고명: '부산 북항5부두 해양오염사고', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일:'2024-09-23 19:29:00', 상세내용:'서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자:'해경', ['실시간 위치']: <Icon path={mdiCrosshairsGps} size={1} className="realtime-icon"/> },
              { id: 3, 사고명: 'gs칼텍스 해양오염사고', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일:'2024-09-23 19:29:00', 상세내용:'서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자:'해경', ['실시간 위치']: <Icon path={mdiCrosshairsGps} size={1} className="realtime-icon"/> },
              { id: 4, 사고명: '여수 백야도 선착장 인근해상 해양오염', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일:'2024-09-23 19:29:00', 상세내용:'서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자:'해경', ['실시간 위치']: <Icon path={mdiCrosshairsGps} size={1} className="realtime-icon"/> },
            ].map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.사고명}</td>
                <td>{row.사고시각}</td>
                <td>{row.사고위치}</td>
                <td>{row.등록일}</td>
                <td>{row.상세내용}</td>
                <td>{row.진행상태}</td>
                <td>{row.작성자}</td>
                <td>{row['실시간 위치']}</td>


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
            <Modal.Title>사고 상황</Modal.Title>
            <div className="ms-auto">
              <Button variant="link-dark" size="sm" onClick={handleClose}>
                <Icon path={mdiClose} size={1} />
              </Button>
            </div>
          </Modal.Header>

          <Modal.Body>{tableContent}</Modal.Body>
        </div>
      )}
    </>
  );
};
export default BottomTable01;
