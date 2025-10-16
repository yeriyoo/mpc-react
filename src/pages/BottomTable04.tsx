import { useState } from 'react';
import { Modal, Button, Form, Pagination, Dropdown, InputGroup } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose, mdiTrayArrowDown, mdiMagnify } from '@mdi/js';

type BottomTableProps = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  windowWidth: number;
};

type AccidentRow = {
  해경자산: string;
  관할해경: string;
  기관업체명: string;
  자원명: string;
  단위: string;
  육해상구분: string;
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
      title: 'MOB-1W',
      details: [
        '관할해경 : 부산',
        '기관업체명 : 안마도내연발전소',
        '자원명 : 고압세척기',
        '수량 : 2',
        '단위 : 대',
        '육해상구분 : 해상',
      ],
    },
    {
      title: 'MOB-1W',
      details: [
        '관할해경 : 부산',
        '기관업체명 : 안마도내연발전소',
        '자원명 : 고압세척기',
        '수량 : 2',
        '단위 : 대',
        '육해상구분 : 해상',
      ],
    },
    {
      title: 'MOB-1W',
      details: [
        '관할해경 : 부산',
        '기관업체명 : 안마도내연발전소',
        '자원명 : 고압세척기',
        '수량 : 2',
        '단위 : 대',
        '육해상구분 : 해상',
      ],
    },
    {
      title: 'MOB-1W',
      details: [
        '관할해경 : 부산',
        '기관업체명 : 안마도내연발전소',
        '자원명 : 고압세척기',
        '수량 : 2',
        '단위 : 대',
        '육해상구분 : 해상',
      ],
    },
    {
      title: 'MOB-1W',
      details: [
        '관할해경 : 부산',
        '기관업체명 : 안마도내연발전소',
        '자원명 : 고압세척기',
        '수량 : 2',
        '단위 : 대',
        '육해상구분 : 해상',
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
          <span>전체 해경자산 정보</span>
          <button className="close-btn" onClick={handleClose}>
            <Icon path={mdiClose} size={1} />
          </button>
        </div>


          <div className="accordion-filter-group">
            <InputGroup size="sm" className="me-2" style={{ width: '200px' }}>
              <Form.Control placeholder="검색..." />
              <Button variant="outline-secondary">
                <Icon path={mdiMagnify} size={1} />
              </Button>
            </InputGroup>

            <Dropdown className="accordion-dropdown">
              <Dropdown.Toggle id="dropdown-basic" className="custom-add-btn">
                해경자산 필터
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>개인보호창구</Dropdown.Item>
                <Dropdown.Item>고압세척기</Dropdown.Item>
                <Dropdown.Item>공기압축기</Dropdown.Item>
                <Dropdown.Item>나노뜰채</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="accordion-dropdown">
              <Dropdown.Toggle id="dropdown-basic" className="custom-add-btn">
                관할해경 필터
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>강릉해양경찰서</Dropdown.Item>
                <Dropdown.Item>군산해양경찰서</Dropdown.Item>
                <Dropdown.Item>동해해양경찰서</Dropdown.Item>
                <Dropdown.Item>목포해양경찰서</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           <Button
              className="police-add-btn-02"
              onClick={() => {
              console.log('추가 버튼 클릭!');
              }}
              >
              <Icon path={mdiTrayArrowDown} size={1} />
              다운로드
          </Button>
        </div>
       
     <div className="bottom-vertical-table-wrapper">
      <div className="bottom-vertical-table">
          {accidentList.map((item, idx) => (
              <table key={idx} className="table table-bordered table-sm mb-3">
            <tbody>
              <tr>
                <th style={{ width: '150px' }}>해경자산</th>
                <td>{item.title}</td>
              </tr>
              <tr>
                <th>관할해경</th>
                <td>{item.details[0].split(' : ')[1]}</td>
              </tr>
              <tr>
                <th>기관업체명</th>
                <td>{item.details[1].split(' : ')[1]}</td>
              </tr>
              <tr>
                <th>자원명</th>
                <td>{item.details[2].split(' : ')[1]}</td>
              </tr>
              <tr>
                <th>수량</th>
                <td>{item.details[3].split(' : ')[1]}</td>
              </tr>
              <tr>
                <th>단위</th>
                <td>{item.details[4].split(' : ')[1]}</td>
              </tr>
              <tr>
                <th>육해상구분</th>
                <td>{item.details[5].split(' : ')[1]}</td>
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

const BottomTable04 = ({ isShow, setIsShow, windowWidth }: BottomTableProps) => {
  const handleClose = () => setIsShow(false);
  const isAccordionView = windowWidth <= 991;
  const isModalView = windowWidth >= 992;

  if (!isShow) return null;

  const tableContent = (
    <>
      <div className="custom-top-bar d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center">
          <span className="me-2 fw-bold">총 7건</span>
          <Form.Select size="sm" style={{ width: '100px', height: '34px' }}>
            <option>7건</option>
            <option>14건</option>
            <option>28건</option>
          </Form.Select>

        <Button
          className="police-add-btn ms-2"
          onClick={() => {
          console.log('추가 버튼 클릭!');
          }}
          >
          <Icon path={mdiTrayArrowDown} size={1} />
          다운로드
          </Button>
        </div>

        
         <div className="d-flex align-items-center">
        {/* 상황전파 → 검색창 */}
        <InputGroup size="sm" className="me-2">
          <Form.Control
          style={{
          border: '1px solid #000'
          }}
          placeholder="검색..." />
          <Button variant="outline-secondary">
            <Icon path={mdiMagnify} size={1} />
          </Button>
        </InputGroup>

        <Dropdown className="police-custom-dropdown">
        <Dropdown.Toggle
          id="dropdown-basic"
          className="custom-add-btn"
        >
          해경자산 필터
        </Dropdown.Toggle>


          <Dropdown.Menu>
            <Dropdown.Item onClick={() => console.log('개인보호창구')}>
              개인보호창구
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('고압세척기')}>
              고압세척기
            </Dropdown.Item>
             <Dropdown.Item onClick={() => console.log('공기압축기')}>
              공기압축기
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('나노뜰채')}>
              나노뜰채
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="police-custom-dropdown">
        <Dropdown.Toggle
          id="dropdown-basic"
          className="custom-add-btn"
        >
          관할해경 필터
        </Dropdown.Toggle>


          <Dropdown.Menu>
            <Dropdown.Item onClick={() => console.log('개인보호창구')}>
              강릉해양경찰서
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('고압세척기')}>
              군산해양경찰서
            </Dropdown.Item>
             <Dropdown.Item onClick={() => console.log('공기압축기')}>
              동해해양경찰서
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('공기압축기')}>
              목포해양경찰서
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>

      <div className="bottom-inline-table">
        <table className="table table-bordered table-sm mb-0">
          <thead className="table-light">
            <tr>
              <th>해경자산</th>
              <th>관할해경</th>
              <th>기관업체명</th>
              <th>자원명</th>
              <th>수량</th>
              <th>단위</th>
              <th>육해상구분</th>
            </tr>
          </thead>

          <tbody>
          {[
            {
              id: 1,
              해경자산: 'MOB-1W',
              관할해경: '부산',
              기관업체명: '안마도내연발전소',
              자원명: '고압세척기',
              수량: 2,
              단위: '대',
              육해상구분: '해상',
            },
            {
              id: 2,
              해경자산: 'MOB-1W',
              관할해경: '목포',
              기관업체명: '(주)경동탱크터미널',
              자원명: '발전기',
              수량: 2,
              단위: '대',
              육해상구분: '해상',
            },
            {
              id: 3,
              해경자산: 'MOB-1W',
              관할해경: '부산',
              기관업체명: '안마도내연발전소',
              자원명: '고압세척기',
              수량: 2,
              단위: '대',
              육해상구분: '해상',
            },
            {
              id: 4,
              해경자산: 'MOB-1W',
              관할해경: '목포',
              기관업체명: '(주)경동탱크터미널',
              자원명: '발전기',
              수량: 2,
              단위: '대',
              육해상구분: '해상',
            },
          ].map((row) => (
            <tr key={row.id}>
              <td>{row.해경자산}</td>
              <td>{row.관할해경}</td>
              <td>{row.기관업체명}</td>
              <td>{row.자원명}</td>
              <td>{row.수량}</td>
              <td>{row.단위}</td>
              <td>{row.육해상구분}</td>
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
            <Modal.Title>전체 해경자산 정보</Modal.Title>
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
export default BottomTable04;
