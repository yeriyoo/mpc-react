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
              <Form.Control
              id="search-input"
              name="search"
              type="text" 
              placeholder="검색..."
              aria-label="검색"
            />
              <Button variant="outline-secondary">
                <Icon path={mdiMagnify} size={1} />
              </Button>
            </InputGroup>

            <Dropdown className="police-custom-dropdown-02">
              <Dropdown.Toggle id="dropdown-basic" className="custom-add-btn">
                해경자산 필터
              </Dropdown.Toggle>
              <Dropdown.Menu>
            <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
            <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter1"
                  name="filter1" 
                  label="오일펜스"
                />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter2"
                  name="filter2"
                  label="부대자재"
                />
              </div>
            </Dropdown.Item>
             <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter3"
                  name="filter3"
                  label="저장용기"
                />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter4"
                  name="filter4"
                  label="유흡착재"
                />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter5"
                  name="filter5"
                  label="유처리재"
                />
              </div>
            </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="police-custom-dropdown-02">
              <Dropdown.Toggle id="dropdown-basic" className="custom-add-btn">
                관할해경 필터
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
                  <div
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Form.Check
                        type="checkbox"
                        id="filter01"
                        name="filter01"
                        label="강릉해양경찰서"
                      />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
                  <div
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Form.Check
                        type="checkbox"
                        id="filter02"
                        name="filter02"
                        label="군산해양경찰서"
                      />
                    </div>
                  </Dropdown.Item>
                    <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
                  <div
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Form.Check
                        type="checkbox"
                        id="filter03"
                        name="filter03"
                        label="동해해양경찰서"
                      />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
                  <div
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Form.Check
                        type="checkbox"
                        id="filter04"
                        name="filter04"
                        label="목포해양경찰서"
                      />
                    </div>
                  </Dropdown.Item>
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
          id="police-search-input"
          name="police-search"
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
            <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
            <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter001"
                  name="filter001"
                  label="오일펜스"
                />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter002"
                  name="filter002"
                  label="부대자재"
                />
              </div>
            </Dropdown.Item>
             <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter003"
                  name="filter003"
                  label="저장용기"
                />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter004"
                  name="filter004"
                  label="유흡착재"
                />
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter005"
                  name="filter005"
                  label="유처리재"
                />
              </div>
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
            <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
            <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter00001"
                  name="filter00001"
                  label="강릉해양경찰서"
                />
              </div>
            </Dropdown.Item>
             <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
            <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter00002"
                  name="filter00002"
                  label="군산해양경찰서"
                />
              </div>
            </Dropdown.Item>
              <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
            <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter00003"
                  name="filter00003"
                  label="동해해양경찰서"
                />
              </div>
            </Dropdown.Item>
             <Dropdown.Item  onClick={(e) => e.stopPropagation()}>
            <div
                onClick={(e) => e.stopPropagation()}
              >
                <Form.Check
                  type="checkbox"
                  id="filter00004"
                  name="filter00004"
                  label="목포해양경찰서"
                />
              </div>
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
