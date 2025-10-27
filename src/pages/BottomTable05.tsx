import { useState } from 'react';
import { Modal, Button, Form, Pagination } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Modal02 from './Modal02';

type BottomTableProps = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  windowWidth: number;
};

type AccidentRow = {
  id: number;
  서비스구분: string;
  제목: string;
  담당부서: string;
  등록일자: string;
  수정: string;
};


const BottomAccordionList = ({
  handleClose,
  isShow,
  onWriteClick,
}: {
  handleClose: () => void;
  isShow: boolean;
  onWriteClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(isShow);
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const accidentList = [
     {
      title: '1',
      details: [
        '서비스구분 : 국토정보플랫폼',
        '제목 : 샘플 제목 001',
        '담당부서 : 국토조사과',
        '등록일자 : 2025-09-23',
        '수정 : 수정',
      ],
    },
    {
       title: '2',
      details: [
        '서비스구분 : 국토정보플랫폼',
        '제목 : 샘플 제목 001',
        '담당부서 : 국토조사과',
        '등록일자 : 2025-09-23',
        '수정 : 수정',
      ],
    },
    {
       title: '3',
      details: [
        '서비스구분 : 국토정보플랫폼',
        '제목 : 샘플 제목 001',
        '담당부서 : 국토조사과',
        '등록일자 : 2025-09-23',
        '수정 : 수정',
      ],
    },
    {
       title: '4',
      details: [
        '서비스구분 : 국토정보플랫폼',
        '제목 : 샘플 제목 001',
        '담당부서 : 국토조사과',
        '등록일자 : 2025-09-23',
        '수정 : 수정',
      ],
    },
    {
       title: '5',
      details: [
        '서비스구분 : 국토정보플랫폼',
        '제목 : 샘플 제목 001',
        '담당부서 : 국토조사과',
        '등록일자 : 2025-09-23',
        '수정 : 수정',
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
          <span>공지사항</span>
          <button className="close-btn" onClick={handleClose}>
            <Icon path={mdiClose} size={1} />
          </button>
        </div>

        <div className="btn-group">
          <Button>삭제</Button>
          <Button onClick={onWriteClick} aria-label="글쓰기">글쓰기</Button>
        </div>

        <div className="bottom-vertical-table-wrapper">
            <div className="bottom-vertical-table">
                {accidentList.map((item, idx) => (
                    <table key={idx} className="table table-bordered table-sm mb-3">
                    <tbody>
                    <tr>
                        <th style={{ width: '150px' }}>
                        <input
                        type="checkbox"
                        id={`check-${idx}`}
                        name={`check-${idx}`}
                        className="me-2"
                        style={{ transform: 'scale(1.2)', marginRight: '8px' }}
                        />
                        </th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>번호</th>
                        <td>{item.title}</td>
                    </tr>
                    <tr>
                        <th>서비스구분</th>
                        <td>{item.details[0].split(' : ')[1]}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{item.details[1].split(' : ')[1]}</td>
                    </tr>
                    <tr>
                        <th>담당부서</th>
                        <td>{item.details[2].split(' : ')[1]}</td>
                    </tr>
                    <tr>
                        <th>등록일자</th>
                        <td>{item.details[3].split(' : ')[1]}</td>
                    </tr>
                    <tr>
                        <th>수정</th>
                        <td>{item.details[4].split(' : ')[1]}</td>
                    </tr>
                    </tbody>
                </table>
                ))}
                </div>
            </div>
      </div>
    </div>
  );
};

const BottomTable05 = ({ isShow, setIsShow, windowWidth }: BottomTableProps) => {
  const handleClose = () => setIsShow(false);
  const [showModal02, setShowModal02] = useState(false);
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
            삭제
          </Button>
          <Button variant="success" size="sm" className="me-2 custom-btn"
           onClick={() => setShowModal02(true)}>
            글쓰기
          </Button>
        </div>
      </div>

      <div className="bottom-inline-table">
        <table className="table table-bordered table-sm mb-0">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>번호</th>
              <th>서비스구분</th>
              <th>제목</th>
              <th>담당부서</th>
              <th>등록일자</th>
              <th>수정</th>
            </tr>
          </thead>
            <tbody>
                {[
                {
                    id: 1,
                    서비스구분: '국토정보플랫폼',
                    제목: '샘플 제목 001',
                    담당부서: '국토조사과',
                    등록일자: '2024-09-23',
                    수정: '수정',
                },
                {
                    id: 2,
                    서비스구분: '국토정보플랫폼',
                    제목: '샘플 제목 001',
                    담당부서: '국토조사과',
                    등록일자: '2024-09-23',
                    수정: '수정',
                },
                {
                    id: 3,
                    서비스구분: '국토정보플랫폼',
                    제목: '샘플 제목 001',
                    담당부서: '국토조사과',
                    등록일자: '2024-09-23',
                    수정: '수정',
                },
                ].map((row, index) => (
                <tr key={row.id}>
                    <td style={{ verticalAlign: 'middle' }}>
                    <input 
                    id={`row-check-${index}`}
                    name={`row-check-${index}`}
                    type="checkbox"
                     />
                    
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>{index + 1}</td> 
                    <td style={{ verticalAlign: 'middle' }}>{row.서비스구분}</td>
                    <td style={{ verticalAlign: 'middle' }}>{row.제목}</td>
                    <td style={{ verticalAlign: 'middle' }}>{row.담당부서}</td>
                    <td style={{ verticalAlign: 'middle' }}>{row.등록일자}</td>
                    <td>
                    <Button className="modify-btn">수정</Button></td>
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
    {isAccordionView && (
    <BottomAccordionList
    handleClose={handleClose}
    isShow={isShow}
    onWriteClick={() => setShowModal02(true)}
    />
    )}

      {isModalView && (
        <div className="bottom-table-modal">
          <Modal.Header>
            <Modal.Title>공지사항</Modal.Title>
            <div className="ms-auto">
              <Button variant="link-dark" size="sm" onClick={handleClose} aria-label="닫기">
                <Icon path={mdiClose} size={1} />
              </Button>
            </div>
          </Modal.Header>

          <Modal.Body>{tableContent}</Modal.Body>
        </div>
      )}

       {/* Modal02 팝업 */}
      <Modal02 show={showModal02} onHide={() => setShowModal02(false)} />
    </>
  );
};
export default BottomTable05;
