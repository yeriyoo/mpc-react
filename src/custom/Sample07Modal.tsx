
import carouselImg1 from '@/custom/assets/img/sample1.jpg';
import carouselImg2 from '@/custom/assets/img/sample2.jpg';
import carouselImg3 from '@/custom/assets/img/sample3.jpg';

//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tooltip from 'react-bootstrap/Tooltip';
//Utilities
import Ratio from 'react-bootstrap/Ratio';

import { useState } from 'react';

const Sample07Modal = () => {
  
  const [modal1show, setmodal1Show] = useState(false); //항로예측
  const [modal2show, setmodal2Show] = useState(false); //관심선박 등록
  const [modal3show, setmodal3Show] = useState(false); //승선인원 상세조회
  const [modal4show, setmodal4Show] = useState(false); //선박사진 업로드 => 사진 등록/삭제
  const [modal5show, setmodal5Show] = useState(false); //최근 포트 호출
  const [modal6show, setmodal6Show] = useState(false); //운항 정보
  const [modal7show, setmodal7Show] = useState(false); //위협지수
  const [modal8show, setmodal8Show] = useState(false); //MMSI 위변조
  const [modal9show, setmodal9Show] = useState(false); //CALLSIGN 위변조
  const [modal10show, setmodal10Show] = useState(false); //입출항/위험물
  const [modal11show, setmodal11Show] = useState(false); //항적조회
  const [modal12show, setmodal12Show] = useState(false); //신호정보
  const [modal13show, setmodal13Show] = useState(false); //메모 등록
  const [modal14show, setmodal14Show] = useState(false); //특이사항

  return (
    <>    
    <div className="d-flex flex-wrap gap-2 p-3">
      <div className="w-100">Modal 링크</div>
      <Button variant="outline-primary" onClick={() => setmodal1Show(true)}>항로예측</Button>
      <Button variant="outline-primary" onClick={() => setmodal2Show(true)}>관심선박 등록</Button>
      <Button variant="outline-primary" onClick={() => setmodal3Show(true)}>승선인원 상세조회</Button>
      <Button variant="outline-primary" onClick={() => setmodal4Show(true)}>선박사진 업로드 =&gt; 사진 등록/삭제</Button>
      <Button variant="outline-primary" onClick={() => setmodal5Show(true)}>최근 포트 호출</Button>
      <Button variant="outline-primary" onClick={() => setmodal6Show(true)}>운항 정보</Button>
      <Button variant="outline-primary" onClick={() => setmodal7Show(true)}>위협지수</Button>
      <Button variant="outline-primary" onClick={() => setmodal8Show(true)}>MMSI 위변조</Button>
      <Button variant="outline-primary" onClick={() => setmodal9Show(true)}>CALLSIGN 위변조</Button>
      <Button variant="outline-primary" onClick={() => setmodal10Show(true)}>입출항/위험물</Button>
      <Button variant="outline-primary" onClick={() => setmodal11Show(true)}>항적조회</Button>
      <Button variant="outline-primary" onClick={() => setmodal12Show(true)}>신호정보</Button>
      <Button variant="outline-primary" onClick={() => setmodal13Show(true)}>메모 등록</Button>
      <Button variant="outline-primary" onClick={() => setmodal14Show(true)}>특이사항</Button>
    </div>

      {/* 항로예측 */}
      <Modal size="xl" centered show={modal1show} onHide={() => setmodal1Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>항로예측</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="detail-map-group map2">지도 들어가는 곳</div>
            </div>
          </div> 
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="range-group my-20 row">
                <div className="range-col col">
                  <div className="range-item range-date mb-10">
                    <div className="left">
                      <div className="datepicker"><Form.Control type="datetime-local" /> </div>
                    </div>
                    <div className="right">
                      <div className="datepicker"><Form.Control type="datetime-local" /> </div>
                    </div>
                  </div>
                  <div className="range-bar">
                    <div className="start-ball"></div>
                    <input type="range" min="0" max="100" step="10" value="30" />
                    <div className="progress-bar-track" style={{ width: `30%`, }} />
                    <div className="end-ball"></div>
                  </div>
                </div>
                <div className="range-col col-auto">
                  <Form.Select>
                    <option>2시간</option>
                  </Form.Select>
                </div>
                <div className="range-col col-auto">
                  <Button variant="outline-primary" className="btn-text-icon">조회 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal1Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박 등록 */}
      <Modal centered show={modal2show} onHide={() => setmodal2Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심선박 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="forms-group">
              <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>선명(타켓ID)</th>
                      <td>근명호(123456)</td>
                    </tr>
                    <tr>
                      <th>관심선박 지정사유</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>상세 사유</th>
                      <td>
                        <Form.Control as="textarea" rows={8} />
                      </td>
                    </tr>
                    <tr>
                      <th>설정 옵션</th>
                      <td>
                        <Form.Check inline type="checkbox" label="알림여부" />
                        <Form.Check inline type="checkbox" label="공유여부" />
                        {/* <Form.Control type="file" /> */}
                        <InputGroup className="form-control-file">
                          <Form.Control type="text" />
                          <div className="btn btn-outline-primary btn-text-icon btn-file ms-2">
                            <div className="text">
                              찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i>
                            </div>
                            <Form.Control type="file" />
                          </div>
                        </InputGroup>
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
          <Button variant="secondary" onClick={() => setmodal2Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 승선인원 상세조회 */}
      <Modal centered show={modal3show} onHide={() => setmodal3Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>승선인원 상세조회</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="grid-header">
                  <div className="left">
                    <div className="total">
                      총 인원: <span>100명</span>
                    </div>
                  </div>
                </div>
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                <div className="pagination-group">
                  <Pagination size="sm">
                    <Pagination.First className="page-control page-first" />
                    <Pagination.Prev className="page-control page-prev" />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next className="page-control page-next" disabled />
                    <Pagination.Last className="page-control page-last" />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal3Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 선박사진 업로드 => 사진 등록/삭제 */}
      <Modal centered show={modal4show} onHide={() => setmodal4Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>사진 등록/삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              {/* <Form.Control type="file" /> */}

              <InputGroup className="form-control-file">
                <Form.Control type="text" />
                <div className="btn btn-outline-primary btn-text-icon btn-file ms-2">
                  <div className="text">
                    찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i>
                  </div>
                  <Form.Control type="file" />
                </div>
              </InputGroup>
            </Form.Group>

            <div className="files-group mt-10">
              <ul className="list-images">
                <li>
                  <CloseButton />
                  <Ratio aspectRatio="16x9">
                    <img src={carouselImg1} />
                  </Ratio>
                </li>
                <li>
                  <CloseButton />
                  <Ratio aspectRatio="16x9">
                    <img src={carouselImg2} />
                  </Ratio>
                </li>
                <li>
                  <CloseButton />
                  <Ratio aspectRatio="16x9">
                    <img src={carouselImg3} />
                  </Ratio>
                </li>
                <li>
                  <CloseButton />
                  <Ratio aspectRatio="16x9">
                    <img src={carouselImg3} />
                  </Ratio>
                </li>
                <li>
                  <CloseButton />
                  <Ratio aspectRatio="16x9">
                    <img src={carouselImg3} />
                  </Ratio>
                </li>
              </ul>
            </div>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal4Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 최근 포트 호출 */}
      <Modal size="xl" centered show={modal5show} onHide={() => setmodal5Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>최근 포트 호출</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                <div className="pagination-group">
                  <Pagination size="sm">
                    <Pagination.First className="page-control page-first" />
                    <Pagination.Prev className="page-control page-prev" />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next className="page-control page-next" disabled />
                    <Pagination.Last className="page-control page-last" />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal5Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 운항 정보 */}
      <Modal size="xl" centered show={modal6show} onHide={() => setmodal6Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>운항 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                <div className="pagination-group">
                  <Pagination size="sm">
                    <Pagination.First className="page-control page-first" />
                    <Pagination.Prev className="page-control page-prev" />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next className="page-control page-next" disabled />
                    <Pagination.Last className="page-control page-last" />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal6Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 위협지수 */}
      <Modal size="lg" centered show={modal7show} onHide={() => setmodal7Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>위협지수</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="forms-group">
                <Table className="text-center align-middle">
                  <colgroup>
                    <col style={{width: '180px',}} />
                    <col />
                    <col style={{width: '150px',}} />
                    <col style={{width: '150px',}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>세부요일</th>
                      <th>점수</th>
                      <th>가중치</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>선박위협수준 
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </th>
                      <td>
                        [A등급] 위협 실행 능력과 의도가 있음
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>0/60</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <th rowSpan={8}>
                        선박 운항위협지수
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </th>
                      <td>
                        위험물 적재량 
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>8/8</td>
                      <td rowSpan={8}>40</td>
                    </tr>
                    <tr>
                      <td>
                        화물 적재량
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>0/2</td>
                    </tr>
                    <tr>
                      <td>
                        승선원수
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>1/2</td>
                    </tr>
                    <tr>
                      <td>
                        속력(점수)
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>4/4</td>
                    </tr>
                    <tr>
                      <td>
                        급변침(점수)
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>4/6</td>
                    </tr>
                    <tr>
                      <td>
                        MMSI 변조
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>0/6</td>
                    </tr>
                    <tr>
                      <td>
                        신호 소실 비율
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>0/4</td>
                    </tr>
                    <tr>
                      <td>
                        신호 소실 여부
                        <OverlayTrigger placement="right" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                          <Button variant="question"><i className="icon-question"></i></Button>
                        </OverlayTrigger>
                      </td>
                      <td>8/8</td>
                    </tr>
                    <tr>
                      <th>합계</th>
                      <td colSpan={3} className="table1-bg fs-6"><span className="text-info">26</span>/100</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="fw-bold fs-6">위협요소 : <span className="text-info">위험물 적재량</span></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal7Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* MMSI 위변조 */}
      <Modal size="lg" centered show={modal8show} onHide={() => setmodal8Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>MMSI 위변조</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                {/* <div className="pagination-group">
                  <Pagination size="sm">
                    <Pagination.First className="page-control page-first" />
                    <Pagination.Prev className="page-control page-prev" />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next className="page-control page-next" disabled />
                    <Pagination.Last className="page-control page-last" />
                  </Pagination>
                </div> */}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal8Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* CALLSIGN 위변조 */}
      <Modal size="lg" centered show={modal9show} onHide={() => setmodal9Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>CALLSIGN 위변조</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                {/* <div className="pagination-group">
                  <Pagination size="sm">
                    <Pagination.First className="page-control page-first" />
                    <Pagination.Prev className="page-control page-prev" />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next className="page-control page-next" disabled />
                    <Pagination.Last className="page-control page-last" />
                  </Pagination>
                </div> */}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal9Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 입출항/위험물 */}
      <Modal size="xl" centered show={modal10show} onHide={() => setmodal10Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>입출항/위험물</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="modalTab1">
            <Tab eventKey="modalTab1" title="입출항이력">
              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                    <div className="pagination-group">
                      <Pagination size="sm">
                        <Pagination.First className="page-control page-first" />
                        <Pagination.Prev className="page-control page-prev" />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next className="page-control page-next" disabled />
                        <Pagination.Last className="page-control page-last" />
                      </Pagination>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="modalTab2" title="위험물이력">
              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                    <div className="pagination-group">
                      <Pagination size="sm">
                        <Pagination.First className="page-control page-first" />
                        <Pagination.Prev className="page-control page-prev" />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next className="page-control page-next" disabled />
                        <Pagination.Last className="page-control page-last" />
                      </Pagination>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal10Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 항적조회 */}
      <Modal size="xl" centered show={modal11show} onHide={() => setmodal11Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>항적조회</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="px-0">
          <Row className="justify-content-center">
          <Col lg="8">
              <div className="range-group mb-20 row g-2">
                  <div className="range-col col">
                    <div className="range-item range-date mb-10">
                      <div className="left">
                        <div className="datepicker"><Form.Control type="datetime-local" /></div>
                      </div>
                      <div className="right">
                        <div className="datepicker"><Form.Control type="datetime-local" /></div>
                      </div>
                    </div>
                    <div className="range-bar">
                      <div className="start-ball"></div>
                      <input type="range" min="0" max="100" step="10" value="30" />
                      <div className="progress-bar-track" style={{ width: `30%`, }} />
                      <div className="end-ball"></div>
                    </div>
                  </div>
                  <div className="range-col col-auto">
                    <Form.Select>
                      <option>2시간</option>
                    </Form.Select>
                  </div>
                  <div className="range-col col-auto">
                    <Button variant="outline-primary" className="btn-text-icon">조회 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <div className="detail-map-group map3">
                  지도 들어가는 곳
                  <div className="detail-map-control map-control-left">                      
                    <OverlayTrigger key="left" placement="left" overlay={<Tooltip>툴팁</Tooltip>}>
                      <Button variant="icon-control" className="">
                        <i className="icon-gcsc icon-control icon-map-control1"></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div className="detail-map-control map-control-right">
                    <OverlayTrigger key="left" placement="left" overlay={<Tooltip>툴팁</Tooltip>}>
                      <Button variant="icon-control" className="">
                        <i className="icon-gcsc icon-control icon-map-control2"></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger key="left" placement="left" overlay={<Tooltip>툴팁</Tooltip>}>
                      <Button variant="icon-control" className="mt-10">
                        <i className="icon-gcsc icon-control icon-map-control3"></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger key="left" placement="left" overlay={<Tooltip>툴팁</Tooltip>}>
                      <Button variant="icon-control" className="mt-10">
                        <i className="icon-gcsc icon-control icon-map-control4"></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger key="left" placement="left" overlay={<Tooltip>툴팁</Tooltip>}>
                      <Button variant="icon-control" className="">
                        <i className="icon-gcsc icon-control icon-map-control5"></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger key="left" placement="left" overlay={<Tooltip>툴팁</Tooltip>}>
                      <Button variant="icon-control" className="">
                        <i className="icon-gcsc icon-control icon-map-control6"></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                </div>
                
                <div className="items-group mt-20">
                  <div className="body">
                    <div className="grid-group">
                      <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                      <div className="pagination-group">
                        <Pagination size="sm">
                          <Pagination.First className="page-control page-first" />
                          <Pagination.Prev className="page-control page-prev" />
                          <Pagination.Item active>{1}</Pagination.Item>
                          <Pagination.Item>{2}</Pagination.Item>
                          <Pagination.Item>{3}</Pagination.Item>
                          <Pagination.Next className="page-control page-next" disabled />
                          <Pagination.Last className="page-control page-last" />
                        </Pagination>
                      </div>
                    </div>
                  </div>
                </div>  
              </Col>
              <Col>
                <div className="items-group">
                  <div className="header">
                    <div className="left">
                      <div className="title size-16">KOREAKING.Recent speed(km/h)</div>
                    </div>
                    <div className="right">
                      <Button variant="icon"><i className="icon-gcsc icon-button icon-plus"></i></Button>
                    </div>
                  </div>
                  <div className="body">
                    <div className="chart-group chart1">차트 들어가는 곳</div>
                  </div>
                </div> 

                <div className="items-group mt-20">
                  <div className="header">
                    <div className="left">
                      <div className="title size-16">KOREAKING.Recent speed(km/h)</div>
                    </div>
                    <div className="right">
                      <Button variant="icon"><i className="icon-gcsc icon-button icon-plus"></i></Button>
                    </div>
                  </div>
                  <div className="body">
                    <div className="chart-group chart1">차트 들어가는 곳</div>
                  </div>
                </div>         
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal11Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 신호정보 */}
      <Modal size="xl" centered show={modal12show} onHide={() => setmodal12Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>신호정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">오션투어호(타켓ID 44000000_0000_0000_0000)</div>
              </div>
            </div>
            <div className="body">
              <div className="chart-group chart2">차트 들어가는 곳</div>
            </div>
          </div> 
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="range-group my-20 row">
                <div className="range-col col">
                  <div className="range-item range-date mb-10">
                    <div className="left">
                      <div className="datepicker"><Form.Control type="datetime-local" /></div>
                    </div>
                    <div className="right">
                      <div className="datepicker"><Form.Control type="datetime-local" /></div>
                    </div>
                  </div>
                  <div className="range-bar">
                    <div className="start-ball"></div>
                    <input type="range" min="0" max="100" step="10" value="30" />
                    <div className="progress-bar-track" style={{ width: `30%`, }} />
                    <div className="end-ball"></div>
                  </div>
                </div>
                <div className="range-col col-auto">
                  <Form.Select>
                    <option>2시간</option>
                  </Form.Select>
                </div>
                <div className="range-col col-auto">
                  <Button variant="outline-primary" className="btn-text-icon">조회 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal12Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 메모 등록 */}
      <Modal centered show={modal13show} onHide={() => setmodal13Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>메모 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>선박명(선박번호)</th>
                      <td>근영호(MMSI/IMO)</td>
                    </tr>
                    <tr>
                      <th>선박 메모</th>
                      <td>
                        <Form.Control as="textarea" rows={8} />
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
          <Button variant="secondary" onClick={() => setmodal13Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 특이사항 */}
      <Modal size="xl" centered show={modal14show} onHide={() => setmodal14Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>특이사항</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                <div className="pagination-group">
                  <Pagination size="sm">
                    <Pagination.First className="page-control page-first" />
                    <Pagination.Prev className="page-control page-prev" />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next className="page-control page-next" disabled />
                    <Pagination.Last className="page-control page-last" />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal14Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Sample07Modal;
