//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';
//Utilities
import { useState } from 'react';

const AdminModal = () => {
  //Modal
  const [modal1show, setmodal1Show] = useState(false); //수집 작업 등록
  const [modal2show, setmodal2Show] = useState(false); //수집 작업 등록2
  const [modal3show, setmodal3Show] = useState(false); //수집 작업 등록3
  const [modal4show, setmodal4Show] = useState(false); //수집 작업 삭제
  const [modal5show, setmodal5Show] = useState(false); //메모 수정
  const [modal6show, setmodal6Show] = useState(false); //알림-삭제
  const [modal7show, setmodal7Show] = useState(false); //권한 그룹 추가
  const [modal8show, setmodal8Show] = useState(false); //그룹 사용자 관리
  const [modal9show, setmodal9Show] = useState(false); //그룹 권한 관리
  const [modal10show, setmodal10Show] = useState(false); //계정 추가
  const [modal11show, setmodal11Show] = useState(false); //계정 수정
  const [modal12show, setmodal12Show] = useState(false); //사용자 정보 입력
  const [modal13show, setmodal13Show] = useState(false); //개인 정보 열람 사유
  const [modal14show, setmodal14Show] = useState(false); //사용자 정보 입력_수정/탈퇴
  const [modal15show, setmodal15Show] = useState(false); //사용자 그룹 관리
  /* const [modal16show, setmodal16Show] = useState(false); */ //권한 그룹 추가 modal7show과 동일
  const [modal17show, setmodal17Show] = useState(false); //메뉴 관리 추가
  const [modal18show, setmodal18Show] = useState(false); //메뉴 권한 항목 상세
  const [modal19show, setmodal19Show] = useState(false); //메뉴 권한 항목 관리 추가
  const [modal20show, setmodal20Show] = useState(false); //공통코드유형 조회
  const [modal21show, setmodal21Show] = useState(false); //공통코드유형 추가
  const [modal22show, setmodal22Show] = useState(false); //공통코드 조회
  const [modal23show, setmodal23Show] = useState(false); //공통코드 추가
  const [modal24show, setmodal24Show] = useState(false); //알림-삭제
  const [modal25show, setmodal25Show] = useState(false); //알림-수정

  return (
    <>    
    <div className="d-flex flex-wrap gap-2 p-3">
      <div className="w-100">Modal 링크</div>
      <Button variant="outline-primary" onClick={() => setmodal1Show(true)}>수집 작업 등록</Button>
      <Button variant="outline-primary" onClick={() => setmodal2Show(true)}>수집 작업 등록2</Button>
      <Button variant="outline-primary" onClick={() => setmodal3Show(true)}>수집 작업 등록3</Button>
      <Button variant="outline-primary" onClick={() => setmodal4Show(true)}>수집 작업 삭제</Button>
      <Button variant="outline-primary" onClick={() => setmodal5Show(true)}>메모 수정</Button>
      <Button variant="outline-primary" onClick={() => setmodal6Show(true)}>알림-삭제</Button>
      <Button variant="outline-primary" onClick={() => setmodal7Show(true)}>권한 그룹 추가</Button>
      <Button variant="outline-primary" onClick={() => setmodal8Show(true)}>그룹 사용자 관리</Button>
      <Button variant="outline-primary" onClick={() => setmodal9Show(true)}>그룹 권한 관리</Button>
      <Button variant="outline-primary" onClick={() => setmodal10Show(true)}>계정 추가</Button>
      <Button variant="outline-primary" onClick={() => setmodal11Show(true)}>계정 수정</Button>
      <Button variant="outline-primary" onClick={() => setmodal12Show(true)}>사용자 정보 입력</Button>
      <Button variant="outline-primary" onClick={() => setmodal13Show(true)}>개인 정보 열람 사유</Button>
      <Button variant="outline-primary" onClick={() => setmodal14Show(true)}>사용자 정보 입력_수정/탈퇴</Button>
      <Button variant="outline-primary" onClick={() => setmodal15Show(true)}>사용자 그룹 관리</Button>
      {/* <Button variant="outline-primary" onClick={() => setmodal16Show(true)}>권한 그룹 추가</Button> */}
      <Button variant="outline-primary" onClick={() => setmodal17Show(true)}>메뉴 관리 추가</Button>
      <Button variant="outline-primary" onClick={() => setmodal18Show(true)}>메뉴 권한 항목 상세</Button>
      <Button variant="outline-primary" onClick={() => setmodal19Show(true)}>메뉴 권한 항목 관리 추가</Button>
      <Button variant="outline-primary" onClick={() => setmodal20Show(true)}>공통코드유형 조회</Button>
      <Button variant="outline-primary" onClick={() => setmodal21Show(true)}>공통코드유형 추가</Button>
      <Button variant="outline-primary" onClick={() => setmodal22Show(true)}>공통코드 조회</Button>
      <Button variant="outline-primary" onClick={() => setmodal23Show(true)}>공통코드 추가</Button>
      <Button variant="outline-primary" onClick={() => setmodal24Show(true)}>알림-삭제</Button>
      <Button variant="outline-primary" onClick={() => setmodal25Show(true)}>알림-수정</Button>
    </div>

     {/* 수집 작업 등록 */}
     <Modal size="xl" centered show={modal1show} onHide={() => setmodal1Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>수집 작업 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">프로세스명</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">수집 작업 등록 <i className="icon-admin icon-button icon-download ms-2"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <Row>
            <Col>
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title size-16">수집 서버 선택</div>
                  </div>
                </div>
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="right">
                        <div className="buttons">
                          <Button variant="outline-primary" className="mw-auto text-nowrap">신호(TCP)</Button>
                          <Button variant="outline-primary" className="mw-auto">ESB</Button>
                          <Button variant="outline-primary" className="mw-auto">API</Button>
                          <Button variant="outline-primary" className="mw-auto">DB</Button>
                          <InputGroup className="align-items-center">
                            <Form.Control type="text" />
                            <Button variant="outline-primary" className="ms-2 btn-text-icon">조회 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                          </InputGroup>
                        </div>
                      </div>
                    </div>
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
            </Col>
            <Col>
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title size-16">수집 스케쥴</div>
                  </div>
                </div>
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="right">
                        <div className="buttons">
                          <InputGroup className="align-items-center">
                            <Form.Control type="text" />
                            <Button variant="outline-primary" className="ms-2 btn-text-icon">조회 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                          </InputGroup>
                        </div>
                      </div>
                    </div>
                    <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                    <div className="pagination-group">
                      {/* <Pagination size="sm">
                        <Pagination.First className="page-control page-first" />
                        <Pagination.Prev className="page-control page-prev" />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next className="page-control page-next" disabled />
                        <Pagination.Last className="page-control page-last" />
                      </Pagination> */}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 수집 작업 등록2 */}
      <Modal size="lg" centered show={modal2show} onHide={() => setmodal2Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>수집 작업 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">수집 작업명</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="title size-16">수집 스케쥴</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>수집 기간</th>
                      <td>
                        <div className="date-range-group">
                          <Form.Control type="date" /> 
                          <div className="during">~</div>
                          <Form.Control type="date" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>수집 시간</th>
                      <td>
                        <div className="datetime-group">
                          <div className="datetime-item">
                            <div className="picker">
                              <Button variant="month">1</Button>
                              <Button variant="month">2</Button>
                              <Button variant="month" active>3</Button>
                              <Button variant="month">4</Button>
                              <Button variant="month">5</Button>
                              <Button variant="month">6</Button>
                              <Button variant="month">7</Button>
                              <Button variant="month">8</Button>
                              <Button variant="month">9</Button>
                              <Button variant="month">10</Button>
                              <Button variant="month">11</Button>
                              <Button variant="month">12</Button>
                            </div>
                            <div className="unit">월</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="0" />
                                <div className="progress-bar-track" style={{ width: `0`, }}>
                                  <div className="data">1</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">일</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="28" />
                                <div className="progress-bar-track" style={{ width: `28%`, }}>
                                  <div className="data">3</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">시</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="50" />
                                <div className="progress-bar-track" style={{ width: `50%`, }}>
                                  <div className="data">30</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">분</div>
                          </div>
                          <div className="datetime-item">
                            <div className="picker">
                              <div className="progress-group">
                                <input type="range" min="0" max="100" step="10" value="100" />
                                <div className="progress-bar-track" style={{ width: `100%`, }}>
                                  <div className="data">60</div>
                                </div>
                              </div>
                            </div>
                            <div className="unit">초</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>수집 수행</th>
                      <td>
                        <Form.Check type="switch" id="custom-switch" label="" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="title size-16">수집 형태</div>
                <Form.Select>
                  <option>DATABASE(티베로)</option>
                </Form.Select>
              </div>
              <div className="right">
                <OverlayTrigger placement="top" overlay={<Tooltip id="">툴팁내용</Tooltip>}>
                  <Button variant="icon"><i className="icon-admin icon-information"></i></Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>수집 룰</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>수집 룰</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">삭제</Button>
          <Button variant="primary" className="ms-auto">저장</Button>
          <Button variant="secondary" onClick={() => setmodal2Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 수집 작업 등록3 */}
      <Modal size="sm" centered show={modal3show} onHide={() => setmodal3Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              작성중인 수집 작업을 등록할까요?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">등록</Button>
          <Button variant="secondary" onClick={() => setmodal3Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 수집 작업 삭제 */}
      <Modal size="sm" centered show={modal4show} onHide={() => setmodal4Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              현재 수집 작업을 삭제할까요?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal4Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 메모 수정 */}
      <Modal centered show={modal5show} onHide={() => setmodal5Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>메모 수정</Modal.Title>
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
          <Button variant="primary">수정</Button>
          <Button variant="secondary" onClick={() => setmodal5Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 알림-삭제 */}
      <Modal size="sm" centered show={modal6show} onHide={() => setmodal6Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              선택한 내용을 삭제하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal6Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 권한 그룹 추가 */}
      <Modal size="lg" centered show={modal7show} onHide={() => setmodal7Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>권한 그룹 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">권한 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col style={{width: '240px',}} />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>그룹명<i className="icon-require"></i></th>
                      <td colSpan={3}><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>정렬순서</th>
                      <td><Form.Control type="text" /></td>
                      <th>사용여부<i className="icon-require"></i></th>
                      <td>                        
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>그룹설명</th>
                      <td colSpan={3}><Form.Control as="textarea" rows={5} /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">신규저장</Button>
          <Button variant="secondary" onClick={() => setmodal7Show(false)}>초기화</Button>
        </Modal.Footer>
      </Modal>

      {/* 그룹 사용자 관리 */}
     <Modal size="xl" centered show={modal8show} onHide={() => setmodal8Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>그룹 사용자 관리</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">[1] 기획운영과</div>
              </div>
            </div>
          </div>

          <Row>
            <Col>
              <div className="search-group">
                <Row>
                  <Col>
                    <InputGroup>
                      <Form.Select className="width-auto">
                        <option>선택</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
                      <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                      <Button variant="secondary" className="ms-2">초기화</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </div>

              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="left">
                        <div className="title size-16">계정 목록</div>
                      </div>
                      <div className="right">
                        <div className="buttons">
                          <Button variant="outline-primary">그룹 부여</Button>
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
            </Col>
            <Col>
              <div className="search-group">
                <Row>
                  <Col>
                    <InputGroup>
                      <Form.Select className="width-auto">
                        <option>선택</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
                      <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                      <Button variant="secondary" className="ms-2">초기화</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </div>

              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="left">
                        <div className="title size-16">그룹 계정 목록</div>
                      </div>
                      <div className="right">
                        <div className="buttons">
                          <Button variant="outline-primary">그룹 해제</Button>
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
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 그룹 권한 관리 */}
     <Modal size="xl" centered show={modal9show} onHide={() => setmodal9Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>그룹 권한 관리</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">[1] 기획운영과</div>
              </div>
            </div>
          </div>

          <Row>
            <Col>
              <div className="search-group">
                <Row>
                  <Col>
                    <InputGroup>
                      <Form.Select className="width-auto">
                        <option>선택</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
                      <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                      <Button variant="secondary" className="ms-2">초기화</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </div>

              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="left">
                        <div className="title size-16">메뉴 목록</div>
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
            </Col>
            <Col>
              <div className="search-group">
                <Row>
                  <Col>
                    <InputGroup>
                      <Form.Select className="width-auto">
                        <option>선택</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
                      <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-admin icon-button icon-search2 ms-1"></i></Button>
                      {/* <Button variant="secondary" className="ms-2">초기화</Button> */}
                    </InputGroup>
                  </Col>
                </Row>
              </div>

              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="grid-header">
                      <div className="left">
                        <div className="title size-16">메뉴 권한 목록</div>
                      </div>
                    </div>
                    <div className="realgrid-group">
                      리얼그리드 들어가는 곳

                      {/* 그리드내 태그 */}
                      <button type="button" className="btn btn-outline-primary btn-sm mw-80px">허용</button>

                    </div>
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
          </Row>
        </Modal.Body>
      </Modal>

      {/* 계정 추가 */}
      <Modal size="lg" centered show={modal10show} onHide={() => setmodal10Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>계정 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>아이디</th>
                      <td colSpan={3}>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">중복체크 <i className="icon-admin icon-button icon-check ms-2"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>패스워드</th>
                      <td><Form.Control type="text" /></td>
                      <th>마지막 로그인 일자</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>최초 등록 계정 <br />사용자명</th>
                      <td><Form.Control type="text" /></td>
                      <th>최종 등록 계정 <br />사용자명</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>패스워드 변경 일자</th>
                      <td colSpan={3}>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>계정 상태</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>계정 타입</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">추가</Button>
          <Button variant="secondary" onClick={() => setmodal10Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 계정 수정 */}
      <Modal size="lg" centered show={modal11show} onHide={() => setmodal11Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>계정 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="items-group">
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>아이디</th>
                      <td colSpan={3}>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">중복체크 <i className="icon-admin icon-button icon-check ms-2"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>패스워드</th>
                      <td><Form.Control type="text" /></td>
                      <th>마지막 로그인 일자</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>최초 등록 계정 <br />사용자명</th>
                      <td><Form.Control type="text" /></td>
                      <th>최종 등록 계정 <br />사용자명</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>패스워드 변경 일자</th>
                      <td colSpan={3}>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>계정 상태</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>계정 타입</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">수정</Button>
          <Button variant="secondary" onClick={() => setmodal11Show(false)}>탈퇴</Button>
        </Modal.Footer>
      </Modal>

      {/* 사용자 정보 입력 */}
      <Modal size="lg" centered show={modal12show} onHide={() => setmodal12Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>사용자 정보 입력</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">사용자 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>이메일<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">중복체크 <i className="icon-admin icon-button icon-check ms-2"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>성명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>직책<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>소속기관<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>내선 전화번호</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>휴대전화번호</th>
                      <td><Form.Control type="text" /></td>
                      <th>사용자 상태<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>GPKI인증<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>소속기관번호</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="info2-group mt-20">
                <ul className="list-style-square">
                  <li>사용자 정보입력 프로그램입니다.</li>
                  <li>시스템 관리자는 시스템 내 최고관리자를 의미합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">신규저장</Button>
          <Button variant="secondary" onClick={() => setmodal12Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 개인 정보 열람 사유 */}
      <Modal centered show={modal13show} onHide={() => setmodal13Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>개인 정보 열람 사유</Modal.Title>
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
                      <th>사유 선택</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>사유 입력</th>
                      <td><Form.Control as="textarea" rows={5} /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal13Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 사용자 정보 입력_수정/탈퇴 */}
      <Modal size="lg" centered show={modal14show} onHide={() => setmodal14Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>사용자 정보 입력</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">사용자 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>이메일<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">중복체크 <i className="icon-admin icon-button icon-check ms-2"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>성명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>직책<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>소속기관<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>내선 전화번호</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>휴대전화번호</th>
                      <td><Form.Control type="text" /></td>
                      <th>사용자 상태<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>GPKI인증<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>소속기관번호</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="title size-16">사용자 탈퇴</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>탈퇴사유<i className="icon-require"></i></th>
                      <td>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">탈퇴 <i className="icon-admin icon-button icon-close ms-2"></i></Button>
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
          <Button variant="primary">수정</Button>
          <Button variant="secondary" onClick={() => setmodal14Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 사용자 그룹 관리 */}
     <Modal size="lg" centered show={modal15show} onHide={() => setmodal15Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>사용자 그룹 관리</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">그룹리스트</div>
              </div>
            </div>
            <div className="body">
              <div className="filter-group">
                ID : qwer1234 
                <span className="divider-vertical height-16 mx-3"></span> 
                사용자명 : 홍길동 
                <span className="divider-vertical height-16 mx-3"></span> 
                권한그룹명 : 기획운영과
              </div>
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
          
          <div className="info2-group mt-20">
            <ul className="list-style-square">
              <li className="top-12">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <span className="text-info">김수현</span> 사용자에게
                    <span className="text-info">없음</span> 그룹 권한을 부여합니다.
                  </div>
                  <Button variant="outline-primary" size="sm" className="ms-auto">그룹에 배정</Button>
                </div>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal15Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 권한 그룹 추가 */}
      {/* <Modal size="lg" centered show={modal16show} onHide={() => setmodal16Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>권한 그룹 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">권한 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col style={{width: '2    40px',}} />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>그룹명<i className="icon-require"></i></th>
                      <td colSpan={3}><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>정렬순서</th>
                      <td><Form.Control type="text" /></td>
                      <th>사용여부<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>그룹설명</th>
                      <td colSpan={3}>
                        <Form.Control as="textarea" rows={5} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">신규저장</Button>
          <Button variant="secondary" onClick={() => setmodal16Show(false)}>초기화</Button>
        </Modal.Footer>
      </Modal> */}

      {/* 메뉴 관리 추가 */}
      <Modal size="lg" centered show={modal17show} onHide={() => setmodal17Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>메뉴 관리 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">메뉴 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>메뉴명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>순서</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>상위메뉴</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>사용여부<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>URL<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <div className="d-flex align-items-center">
                            <Form.Control type="text" style={{width: 'calc(50% - 80px)',}} />
                            <div className="ms-2">
                              *URL은 상대경로로 작성해야합니다.
                            </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>이벤트로그</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>감사로그</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="info2-group mt-20">
                <ul className="list-style-square">
                  <li>메뉴 코드, 메뉴명, URL은 필수 입력사항입니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">신규저장</Button>
          <Button variant="secondary" onClick={() => setmodal17Show(false)}>초기화</Button>
        </Modal.Footer>
      </Modal>

      {/* 메뉴 권한 항목 상세 */}
      <Modal size="lg" centered show={modal18show} onHide={() => setmodal18Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>메뉴 권한 항목 상세</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">메뉴 권한 항목 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>메뉴번호</th>
                      <td>2</td>
                      <th>메뉴명</th>
                      <td>사용자관리</td>
                    </tr>
                    <tr>
                      <th>권한번호</th>
                      <td>16</td>
                      <th>권한명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" disabled /></td>
                    </tr>
                    <tr>
                      <th>순서</th>
                      <td><Form.Control type="text" disabled /></td>
                      <th>사용여부<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>이벤트로그<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>감사로그<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>권한항목설명</th>
                      <td colSpan={3}>
                        <Form.Control as="textarea" rows={5} disabled />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="title size-16">기타 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col style={{width: '240px',}} />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>등록자</th>
                      <td>admin</td>
                      <th>등록일</th>
                      <td>2024-01-01 12:00</td>
                    </tr>
                    <tr>
                      <th>수정자</th>
                      <td>admin</td>
                      <th>수정일</th>
                      <td>2024-01-01 12:00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">수정</Button>
          <Button variant="secondary" onClick={() => setmodal18Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 메뉴 권한 항목 관리 추가 */}
      <Modal size="lg" centered show={modal19show} onHide={() => setmodal19Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>메뉴 권한 항목 관리 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">메뉴 권한 항목 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>메뉴번호</th>
                      <td>2</td>
                      <th>메뉴명</th>
                      <td>사용자관리</td>
                    </tr>
                    <tr>
                      <th>권한항목명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>순서</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>사용여부<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>이벤트로그<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>감사로그<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>권한항목설명</th>
                      <td colSpan={3}>
                        <Form.Control as="textarea" rows={5} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="info2-group mt-20">
                <ul className="list-style-square">
                  <li>권한명은 필수 입력사항입니다.</li>
                  <li>사용여부는 사용이 기본 선택입니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">신규저장</Button>
          <Button variant="secondary" onClick={() => setmodal19Show(false)}>초기화</Button>
        </Modal.Footer>
      </Modal>

      {/* 공통코드유형 조회 */}
      <Modal size="lg" centered show={modal20show} onHide={() => setmodal20Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>공통코드유형 조회</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">코드 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>코드유형번호<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>코드유형명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>서비스코드<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>최종등록자<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="info2-group mt-20">
                <ul className="list-style-square">
                  <li>수정, 저장하시면 해당 코드를 사용하는 페이지에 모두 반영됩니다.</li>
                  <li>코드정보 수정시에 코드는 입력할 수 없습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">수정</Button>
          <Button variant="secondary" onClick={() => setmodal20Show(false)}>삭제</Button>
        </Modal.Footer>
      </Modal>

      {/* 공통코드유형 추가 */}
      <Modal size="lg" centered show={modal21show} onHide={() => setmodal21Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>공통코드유형 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">코드 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>코드유형번호<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>코드유형명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>서비스코드<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>최초등록자<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="info2-group mt-20">
                <ul className="list-style-square">
                  <li>코드, 코드명은 필수 입력사항입니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">신규저장</Button>
          <Button variant="secondary" onClick={() => setmodal21Show(false)}>초기화</Button>
        </Modal.Footer>
      </Modal>

      {/* 공통코드 조회 */}
      <Modal size="lg" centered show={modal22show} onHide={() => setmodal22Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>공통코드 조회</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">코드 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>코드유형번호<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>코드유형번호<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>코드명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>정렬순서</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>위도</th>
                      <td><Form.Control type="text" /></td>
                      <th>경도</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>기타사항</th>
                      <td><Form.Control type="text" /></td>
                      <th>최초등록자<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="info2-group mt-20">
                <ul className="list-style-square">
                  <li>수정, 저장하시면 해당 코드를 사용하는 페이지에 모두 반영됩니다.</li>
                  <li>코드정보 수정시에 코드는 입력할 수 없습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">수정</Button>
          <Button variant="secondary" onClick={() => setmodal22Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 공통코드 추가 */}
      <Modal size="lg" centered show={modal23show} onHide={() => setmodal23Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>공통코드 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="left">
                <div className="title size-16">코드 정보</div>
              </div>
            </div>
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>코드유형번호<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>코드유형번호<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>코드명<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                      <th>정렬순서</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>위도</th>
                      <td><Form.Control type="text" /></td>
                      <th>경도</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>기타사항</th>
                      <td><Form.Control type="text" /></td>
                      <th>최초등록자<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="info2-group mt-20">
                <ul className="list-style-square">
                  <li>코드, 코드유형, 코드명은 필수 입력사항입니다.</li>
                  <li>정렬순서, 위도, 경도, 기타사항은 필수 선택사항입니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">신규저장</Button>
          <Button variant="secondary" onClick={() => setmodal23Show(false)}>초기화</Button>
        </Modal.Footer>
      </Modal>

      {/* 알림-삭제 */}
      <Modal size="sm" centered show={modal24show} onHide={() => setmodal24Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 삭제하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal24Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 알림-수정 */}
      <Modal size="sm" centered show={modal25show} onHide={() => setmodal25Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 저장하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal25Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default AdminModal;
