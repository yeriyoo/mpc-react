import windImg from '@/custom/assets/img/theme_light/wind_direction.svg';
import waveImg from '@/custom/assets/img/theme_light/wave_direction.svg';
import weatherImg0101 from '@/custom/assets/img/weather/weather0101.svg';

import windImgDark from '@/custom/assets/img/theme_dark/wind_direction.svg';
import waveImgDark from '@/custom/assets/img/theme_dark/wave_direction.svg';

import fishingImg1 from '@/custom/assets/img/fishing1.svg';
import fishingImg2 from '@/custom/assets/img/fishing2.svg';
import fishingImg3 from '@/custom/assets/img/fishing3.svg';
import fishingImg4 from '@/custom/assets/img/fishing4.svg';
import fishingImg5 from '@/custom/assets/img/fishing5.svg';
import fishingImg6 from '@/custom/assets/img/fishing6.svg';
import fishingImg7 from '@/custom/assets/img/fishing7.svg';
import fishingImg8 from '@/custom/assets/img/fishing8.svg';

import infoImg from '@/custom/assets/img/theme_light/exclamation.svg';
import infoImgDark from '@/custom/assets/img/theme_dark/exclamation.svg';
import changeImg from '@/custom/assets/img/theme_light/route_change.svg';
import changeImgDark from '@/custom/assets/img/theme_dark/route_change.svg';

import thumbImg1 from '@/custom/assets/img/theme1.png';
import thumbImg2 from '@/custom/assets/img/theme2.png';
import thumbImg3 from '@/custom/assets/img/theme3.png';

//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//Utilities
import Ratio from 'react-bootstrap/Ratio';
import { useState } from 'react';

const Sample01Modal = () => {

  //Modal
  const [modal1show, setmodal1Show] = useState(false); //알람 설정
  const [modal2show, setmodal2Show] = useState(false); //관심선박 추가
  const [modal3show, setmodal3Show] = useState(false); //알림메세지
  const [modal4show, setmodal4Show] = useState(false); //관심영역 등록1
  const [modal5show, setmodal5Show] = useState(false); //관심영역 등록2
  const [modal5mshow, setmodal5mShow] = useState(false); //관심영역 수정
  const [modal6show, setmodal6Show] = useState(false); //레이어 등록
  const [modal6mshow, setmodal6mShow] = useState(false); //레이어 수정
  const [modal7show, setmodal7Show] = useState(false); //삭제
  const [modal8show, setmodal8Show] = useState(false); //알림1
  const [modal9show, setmodal9Show] = useState(false); //알림2
  const [modal10show, setmodal10Show] = useState(false); //위성영상 등록
  const [modal11show, setmodal11Show] = useState(false); //분석리스트
  const [modal12show, setmodal12Show] = useState(false); //정보공유
  const [modal13show, setmodal13Show] = useState(false); //공유 담당자 찾기
  const [modal13nshow, setmodal13nShow] = useState(false); //공유 담당자 찾기(변경됨)
  const [modal14show, setmodal14Show] = useState(false); //분석 등록
  const [modal15show, setmodal15Show] = useState(false); //알림3
  const [modal16show, setmodal16Show] = useState(false); //알림4
  const [modal17show, setmodal17Show] = useState(false); //위성예약
  const [modal18show, setmodal18Show] = useState(false); //관측정보(제거)
  const [modal19show, setmodal19Show] = useState(false); //기상예보 상세조회
  const [modal20show, setmodal20Show] = useState(false); //태풍정보 알림
  const [modal21show, setmodal21Show] = useState(false); //태풍정보
  const [modal22show, setmodal22Show] = useState(false); //즐겨찾기 메뉴
  const [modal23show, setmodal23Show] = useState(false); //관심선박
  const [modal34show, setmodal34Show] = useState(false); //관심선박 등록
  const [modal24show, setmodal24Show] = useState(false); //관심선박 수정
  const [modal25show, setmodal25Show] = useState(false); //관심선박 삭제
  const [modal26show, setmodal26Show] = useState(false); //관심영역
  const [modal26nshow, setmodal26nShow] = useState(false); //관심선박/영역정보_관심영역
  const [modal27show, setmodal27Show] = useState(false); //단축키설정
  const [modal28show, setmodal28Show] = useState(false); //예외사항 등록 => 국가안보/규제 등록
  const [modal29show, setmodal29Show] = useState(false); //분석/공유/알람
  const [modal30show, setmodal30Show] = useState(false); //조업 분석
  const [modal31show, setmodal31Show] = useState(false); //안전 지수
  const [modal32show, setmodal32Show] = useState(false); //해역별 경비 지수
  const [modal33show, setmodal33Show] = useState(false); //동영상(제거)
  const [modal35show, setmodal35Show] = useState(false); //구역설정 상세정보
  const [modal36show, setmodal36Show] = useState(false); //테마 설정
  const [modal37show, setmodal37Show] = useState(false); //내 정보 수정

  return (
    <>
    <div className="d-flex flex-wrap gap-2 p-3">
      <div className="w-100">Modal 링크</div>
        <Button variant="outline-primary" onClick={() => setmodal1Show(true)}>알람 설정</Button>
        <Button variant="outline-primary" onClick={() => setmodal2Show(true)}>관심선박 추가</Button>
        <Button variant="outline-primary" onClick={() => setmodal3Show(true)}>알림메세지</Button>
        <Button variant="outline-primary" onClick={() => setmodal4Show(true)}>관심영역 등록1</Button>
        <Button variant="outline-primary" onClick={() => setmodal5Show(true)}>관심영역 등록2</Button>
        <Button variant="outline-primary" onClick={() => setmodal5mShow(true)}>관심영역 수정</Button>
        <Button variant="outline-primary" onClick={() => setmodal6Show(true)}>레이어 등록</Button>
        <Button variant="outline-primary" onClick={() => setmodal6mShow(true)}>레이어 수정</Button>
        <Button variant="outline-primary" onClick={() => setmodal7Show(true)}>삭제</Button>
        <Button variant="outline-primary" onClick={() => setmodal8Show(true)}>알림1</Button>
        <Button variant="outline-primary" onClick={() => setmodal9Show(true)}>알림2</Button>
        <Button variant="outline-primary" onClick={() => setmodal10Show(true)}>위성영상 등록</Button>
        <Button variant="outline-primary" onClick={() => setmodal11Show(true)}>분석리스트</Button>
        <Button variant="outline-primary" onClick={() => setmodal12Show(true)}>정보공유</Button>
        <Button variant="outline-primary" onClick={() => setmodal13Show(true)}>공유 담당자 찾기</Button>
        <Button variant="outline-primary" onClick={() => setmodal13nShow(true)}>공유 담당자 찾기(변경됨)</Button>
        <Button variant="outline-primary" onClick={() => setmodal14Show(true)}>분석 등록</Button>
        <Button variant="outline-primary" onClick={() => setmodal15Show(true)}>알림3</Button>
        <Button variant="outline-primary" onClick={() => setmodal16Show(true)}>알림4</Button>
        <Button variant="outline-primary" onClick={() => setmodal17Show(true)}>위성예약</Button>
        <Button variant="outline-primary" onClick={() => setmodal18Show(true)}>관측정보(제거)</Button>
        <Button variant="outline-primary" onClick={() => setmodal19Show(true)}>기상예보 상세조회</Button>
        <Button variant="outline-primary" onClick={() => setmodal20Show(true)}>태풍정보 알림</Button>
        <Button variant="outline-primary" onClick={() => setmodal21Show(true)}>태풍정보</Button>
        <Button variant="outline-primary" onClick={() => setmodal22Show(true)}>즐겨찾기 메뉴</Button>
        <Button variant="outline-primary" onClick={() => setmodal23Show(true)}>관심선박</Button>
        <Button variant="outline-primary" onClick={() => setmodal34Show(true)}>관심선박 등록</Button>
        <Button variant="outline-primary" onClick={() => setmodal24Show(true)}>관심선박 수정</Button>
        <Button variant="outline-primary" onClick={() => setmodal25Show(true)}>관심선박 삭제</Button>
        <Button variant="outline-primary" onClick={() => setmodal26Show(true)}>관심영역</Button>
        <Button variant="outline-primary" onClick={() => setmodal26nShow(true)}>관심선박/영역정보_관심영역</Button>
        <Button variant="outline-primary" onClick={() => setmodal27Show(true)}>단축키설정</Button>
        <Button variant="outline-primary" onClick={() => setmodal28Show(true)}>예외사항 등록 =&gt; 국가안보/규제 등록</Button>
        <Button variant="outline-primary" onClick={() => setmodal29Show(true)}>분석/공유/알람</Button>
        <Button variant="outline-primary" onClick={() => setmodal30Show(true)}>조업 분석</Button>
        <Button variant="outline-primary" onClick={() => setmodal31Show(true)}>안전 지수</Button>
        <Button variant="outline-primary" onClick={() => setmodal32Show(true)}>해역별 경비 지수</Button>
        <Button variant="outline-primary" onClick={() => setmodal33Show(true)}>자산현황 - 동영상(제거)</Button>
        <Button variant="outline-primary" onClick={() => setmodal35Show(true)}>구역설정 상세정보</Button>
        <Button variant="outline-primary" onClick={() => setmodal36Show(true)}>테마 설정</Button>
        <Button variant="outline-primary" onClick={() => setmodal37Show(true)}>내 정보 수정</Button>
    </div>

    {/* 알람 설정 */}
    <Modal centered show={modal1show} onHide={() => setmodal1Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>알람 설정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="lists-group">
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Form.Group className="d-flex align-items-center">
                  <Form.Label className="me-auto mb-0">관심구역 접근 알림</Form.Label>
                  <Form.Check type="switch" label="" id="" className="mb-0" />
                </Form.Group>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Group className="d-flex align-items-center">
                  <Form.Label className="me-auto mb-0">중국 비허가 선박 진입 알림</Form.Label>
                  <Form.Check type="switch" label="" id="" className="mb-0" />
                </Form.Group>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Group className="d-flex align-items-center">
                  <Form.Label className="me-auto mb-0">선박 접촉 알림</Form.Label>
                  <Form.Check type="switch" label="" id="" className="mb-0" />
                </Form.Group>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Group className="d-flex align-items-center">
                  <Form.Label className="me-auto mb-0">관공선 접근 알림</Form.Label>
                  <Form.Check type="switch" label="" id="" className="mb-0" />
                </Form.Group>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Group className="d-flex align-items-center">
                  <Form.Label className="me-auto mb-0">북한선박 통제구역 알림</Form.Label>
                  <Form.Check type="switch" label="" id="" className="mb-0" />
                </Form.Group>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal1Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박 추가 */}
      <Modal size="sm" centered show={modal2show} onHide={() => setmodal2Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              관심선박으로 등록하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal2Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 알림메세지 */}
      <Modal size="sm" centered show={modal3show} onHide={() => setmodal3Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              ON/OFF 기능을 저장하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal3Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심영역 등록1 */}
      <Modal size="sm" centered show={modal4show} onHide={() => setmodal4Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>관심영역 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="button-group btn-block mt-10">
            <Button variant="outline-primary" className="btn-icon-text-center" size="lg">
              <i className="icon-gcsc icon-button size-40 icon-square-dot"></i> <span>사각형 그리기</span>
            </Button>
            <Button variant="outline-primary" className="btn-icon-text-center" size="lg">
              <i className="icon-gcsc icon-button size-40 icon-pentagon-dot"></i> <span>다각형 그리기</span>
            </Button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setmodal4Show(false)}>취소</Button>
        </Modal.Footer> */}
      </Modal>

      {/* 관심영역 등록2 */}
      <Modal size="lg" centered show={modal5show} onHide={() => setmodal5Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심영역 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="button-group btn-block mt-10">
            <Button variant="outline-primary" className="btn-text-icon justify-content-center" size="lg">
              사각형 그리기 <i className="icon-gcsc icon-button icon-square-dot-sm ms-2"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon justify-content-center" size="lg">
              다각형 그리기 <i className="icon-gcsc icon-button icon-pentagon-dot-sm ms-2"></i>
            </Button>
          </div>
          <div className="items-group mt-20">
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col style={{width: '240px',}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>해상영역명</th>
                      <td colSpan={3}>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>설정 옵션</th>
                      <td colSpan={3}>
                        <InputGroup className="align-items-center">
                          <Form.Check inline type="checkbox" label="사용여부" className="mb-0" />
                          <Form.Check inline type="checkbox" label="알람여부" className="mb-0" />
                          <Form.Check inline type="checkbox" label="공유여부" className="mb-0" />
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>좌표</th>
                      <td colSpan={3}>
                        <div className="lists-group">
                          <ul className="list-style-none">
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                          </ul>
                        </div>
                      </td>
                    </tr>                    
                    <tr>
                      <th>영역 옵션</th>
                      <td colSpan={3}>
                        <Form.Group>
                          <Form.Check inline type="checkbox" label="해상영역 표시" className="mb-0" />
                          <Form.Check inline type="checkbox" label="해상영역명 표시" className="mb-0" />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <th>해상영역명 크기</th>
                      <td><Form.Control type="text" /></td>
                      <th>해상영역명 색상</th>
                      <td>
                        <Form.Control type="color" defaultValue="#000000" />
                      </td>
                    </tr>
                    <tr>
                      <th>윤곽선 굵기</th>
                      <td><Form.Control type="text" /></td>
                      <th>윤곽선 종류</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>윤곽선 색상</th>
                      <td>
                        <Form.Control type="color" defaultValue="#ff0000" />
                      </td>
                      <th>채우기 색상</th>
                      <td>
                        <Form.Control type="color" defaultValue="#36dc3d" />
                      </td>
                    </tr>
                    <tr>
                      <th>단축키 설정</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>줌 레벨 설정</th>
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
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal5Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심영역 수정 */}
      <Modal size="lg" centered show={modal5mshow} onHide={() => setmodal5mShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심영역 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="button-group btn-block mt-10">
            <Button variant="outline-primary" className="btn-text-icon justify-content-center" size="lg">
              사각형 그리기 <i className="icon-gcsc icon-button icon-square-dot-sm ms-2"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon justify-content-center" size="lg">
              다각형 그리기 <i className="icon-gcsc icon-button icon-pentagon-dot-sm ms-2"></i>
            </Button>
          </div>
          <div className="items-group mt-20">
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col style={{width: '140px',}} />
                    <col />
                    <col style={{width: '140px',}} />
                    <col style={{width: '240px',}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>해상영역명</th>
                      <td colSpan={3}>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>설정 옵션</th>
                      <td colSpan={3}>
                        <InputGroup className="align-items-center">
                          <Form.Check inline type="checkbox" label="사용여부" className="mb-0" />
                          <Form.Check inline type="checkbox" label="알람여부" className="mb-0" />
                          <Form.Check inline type="checkbox" label="공유여부" className="mb-0" />
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>좌표</th>
                      <td colSpan={3}>
                        <div className="lists-group">
                          <ul className="list-style-none">
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                            <li>[136.4648132548, 38.6546464654654151564]</li>
                          </ul>
                        </div>
                      </td>
                    </tr>                    
                    <tr>
                      <th>영역 옵션</th>
                      <td colSpan={3}>
                        <Form.Group>
                          <Form.Check inline type="checkbox" label="해상영역 표시" className="mb-0" />
                          <Form.Check inline type="checkbox" label="해상영역명 표시" className="mb-0" />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <th>해상영역명 크기</th>
                      <td><Form.Control type="text" /></td>
                      <th>해상영역명 색상</th>
                      <td>
                        <Form.Control type="color" defaultValue="#000000" />
                      </td>
                    </tr>
                    <tr>
                      <th>윤곽선 굵기</th>
                      <td><Form.Control type="text" /></td>
                      <th>윤곽선 종류</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>윤곽선 색상</th>
                      <td>
                        <Form.Control type="color" defaultValue="#ff0000" />
                      </td>
                      <th>채우기 색상</th>
                      <td>
                        <Form.Control type="color" defaultValue="#36dc3d" />
                      </td>
                    </tr>
                    <tr>
                      <th>단축키 설정</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>줌 레벨 설정</th>
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
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal5mShow(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 레이어 등록 */}
      <Modal centered show={modal6show} onHide={() => setmodal6Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>레이어 등록</Modal.Title>
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
                      <th>레이어명</th>
                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>첨부파일</th>
                      <td>
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
                        <div className="text-danger mt-1">.geojson 파일을 첨부해주세요.</div>
                      </td>
                    </tr>
                    <tr>
                      <th>공유 설정</th>
                      <td>
                        <InputGroup className="align-items-center">
                          <Form.Check inline type="checkbox" label="공유여부" className="mb-0" />
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>분류</th>
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
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal6Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 레이어 수정 */}
      <Modal centered show={modal6mshow} onHide={() => setmodal6mShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>레이어 수정</Modal.Title>
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
                      <th>레이어명</th>
                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>공유 설정</th>
                      <td>
                        <InputGroup className="align-items-center">
                          <Form.Check inline type="checkbox" label="공유여부" className="mb-0" />
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>분류</th>
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
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal6mShow(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 삭제 */}
      <Modal size="sm" centered show={modal7show} onHide={() => setmodal7Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              삭제하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal7Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 알림1 */}
      <Modal size="sm" centered show={modal8show} onHide={() => setmodal8Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              <span  className="text-info">중국어선 분석 다잡아 시스템.xlsx</span> <br />
              다운로드가 완료되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal8Show(false)}>확인</Button>   
        </Modal.Footer>
      </Modal>

      {/* 알림2 */}
      <Modal size="sm" centered show={modal9show} onHide={() => setmodal9Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 다운로드 하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal9Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 위성영상 등록 */}
      <Modal size="lg" centered show={modal10show} onHide={() => setmodal10Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>위성영상 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
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
                      <th>영상종류</th>
                      <td colSpan={3}>
                        <Form.Group>
                          <Form.Check inline type="radio" label="불빛위성" className="mb-0" />
                          <Form.Check inline type="radio" label="SAR" className="mb-0" />
                          <Form.Check inline type="radio" label="BlackSky" className="mb-0" />
                          <Form.Check inline type="radio" label="RF위성" className="mb-0" />
                          <Form.Check inline type="radio" label="예약" className="mb-0" />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <th>사업자명<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>위성명<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>영상촬영일<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>위성영상파일<i className="icon-require"></i></th>
                      <td colSpan={3}>
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
                    <tr>
                      <th>위성궤도</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>영상출처</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>촬영목적</th>
                      <td><Form.Control type="text" /></td>
                      <th>촬영모드</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>취득방법</th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>영상전송주기</th>
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
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal10Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 분석리스트 */}
      <Modal size="xl" centered show={modal11show} onHide={() => setmodal11Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>분석리스트</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row>
              <Col>
                <InputGroup>
                  <Form.Select className="width-auto">
                    <option>선택</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </InputGroup>
              </Col>
            </Row>
          </div>

          <div className="items-group mt-20">
            <div className="body">
              <div className="grid-group">
                <div className="grid-header">
                  <div className="right">
                    <div className="buttons">
                      <Button variant="outline-primary">공유</Button>
                      <Button variant="outline-primary">다운로드</Button>
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
          <Button variant="primary" onClick={() => setmodal11Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 정보공유 */}
      <Modal centered show={modal12show} onHide={() => setmodal12Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>정보공유</Modal.Title>
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
                      <th>공유 설정</th>
                      <td>
                        <InputGroup className="align-items-center">
                          {/* <Form.Check inline type="checkbox" label="공유여부" className="mb-0" /> */}
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>공유 의견</th>
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
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal12Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 공유 담당자 찾기 */}
      <Modal size="xl" centered show={modal13show} onHide={() => setmodal13Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>공유 담당자 찾기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row>
              <Col>
                <InputGroup>
                  <Form.Select className="width-auto">
                    <option>선택</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </InputGroup>
              </Col>
            </Row>
          </div>

          <Row className="mt-20">
            <Col>
              <div className="tree-group">
                트리 들어가는 곳
              </div>
            </Col>
            <Col lg="auto" className="d-flex align-items-center">
              <Button variant="outline-primary" className="mt-30">선택</Button>
            </Col>
            <Col>
              <div className="items-group">
                <div className="header">
                  <div className="left">
                    <Form.Check inline type="checkbox" label="해양경찰청 전체" className="fw-bold" />
                  </div>
                </div>
                <div className="body">
                  <div className="card-group">
                    <Card className="card-list card-list3">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <div className="item-header">
                            <div className="title">해상교통관제과</div>
                            <div className="divider-vertical height-14 mx-2"></div>
                            <div className="total">
                              총 인원: <span>100명</span>
                            </div>
                          </div>
                          <div className="check-group">
                            <Form.Check inline type="checkbox" label="전체" className="fw-bold" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="item-header">
                            <div className="title">해상교통관제과</div>
                            <div className="divider-vertical height-14 mx-2"></div>
                            <div className="total">
                              총 인원: <span>100명</span>
                            </div>
                          </div>
                          <div className="check-group">
                            <Form.Check inline type="checkbox" label="전체" className="fw-bold" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                            <Form.Check inline type="checkbox" label="홍길동" />
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="total">
                  선택한 인원: <span>100명</span>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="card-group">
                <Card className="card-list card-list2 h-half">
                  <ListGroup>
                    <ListGroup.Item>
                      <div className="left">
                        해양경찰청 &gt; 대변인 &gt; <strong>김수현</strong>
                      </div>
                      <div className="right">
                        <Button variant="icon" className="size-20"><i className="icon-gcsc icon-button icon-close"></i></Button>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="left">
                        해양경찰청 &gt; 대변인 &gt; <strong>김수현</strong>
                      </div>
                      <div className="right">
                        <Button variant="icon" className="size-20"><i className="icon-gcsc icon-button icon-close"></i></Button>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal13Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 공유 담당자 찾기(변경됨) */}
      <Modal size="lg" centered show={modal13nshow} onHide={() => setmodal13nShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>공유 담당자 찾기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row>
              <Col>
                <InputGroup>
                  <Form.Select className="width-auto">
                    <option>선택</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </InputGroup>
              </Col>
            </Row>
          </div>

          <div className="tree-group mt-20">
            트리 들어가는 곳
          </div>          

          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="total">
                  총 인원: <span>100명</span>
                </div>
              </div>
            </div>
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
          <Button variant="primary" onClick={() => setmodal13nShow(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 분석 등록 */}
      <Modal size="lg" centered show={modal14show} onHide={() => setmodal14Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>분석 등록</Modal.Title>
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
                      <th>분석명</th>
                      <td colSpan={3}><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>분석요약정보</th>
                      <td colSpan={3}><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>분석자</th>
                      <td><Form.Control type="text" /></td>
                      <th>등록일</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>비고</th>
                      <td colSpan={3}><Form.Control type="text" /></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal14Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 알림3 */}
      <Modal size="sm" centered show={modal15show} onHide={() => setmodal15Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              임시저장 완료되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal15Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 알림4 */}
      <Modal size="sm" centered show={modal16show} onHide={() => setmodal16Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 공유 받으시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal16Show(false)}>공유받지않음</Button>
        </Modal.Footer>
      </Modal>

      {/* 위성예약 */}
      <Modal size="xl" centered show={modal17show} onHide={() => setmodal17Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>위성예약</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row className="g-3">
              <Col lg="auto">
                <Form.Group className="form-item-group">
                  <Form.Label>위성선택</Form.Label>
                  <Form.Select>
                    <option>선택</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg="auto">
                <Form.Group className="form-item-group">
                  <Form.Label>날짜선택</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col lg="auto">
                <Form.Group className="form-item-group">
                  <Form.Label>영역</Form.Label>
                  <Form.Select>
                    <option>선택</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="form-item-group">
                  <Form.Label>사용목적</Form.Label>
                  <InputGroup>
                    <Form.Select className="width-auto">
                      <option>선택</option>
                    </Form.Select>
                    <Form.Control type="text" className="ms-2" />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg="auto" className="ms-auto d-flex justify-content-end text-end">
                <Button variant="outline-primary" className="btn-text-icon">예약 <i className="icon-gcsc icon-button icon-time ms-2"></i></Button>
              </Col>
            </Row>
          </div>

          <div className="items-group mt-20">
            <div className="header">
              <div className="left">
                <div className="title">이번주 촬영스케줄</div>
              </div>
            </div>
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
          <Button variant="primary" onClick={() => setmodal17Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 관측정보(제거) */}
      <Modal size="sm" centered show={modal18show} onHide={() => setmodal18Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>관측정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="info1-group">
            <div className="info1-text">남해244</div>
            <Button variant="outline-primary" className="ms-auto">기상예보 상세조회</Button>
          </div>
          <div className="lists-group mt-20">
            <div className="list-style-dot row">
              <div className="list-item col-6">
                <div className="title">일시</div>
                <div className="data">08일 11:00</div>
              </div>
              <div className="list-item col-6">
                <div className="title">풍속</div>
                <div className="data">15.3m/s</div>
              </div>
              <div className="list-item col-6">
                <div className="title">풍향</div>
                <div className="data">북북동</div>
              </div>
              <div className="list-item col-6">
                <div className="title">유의파고</div>
                <div className="data">2.4m</div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal18Show(false)}>확인</Button>
        </Modal.Footer> */}
      </Modal>

      {/* 기상예보 상세조회 */}
      <Modal size="xl" centered show={modal19show} onHide={() => setmodal19Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>기상예보 상세조회</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="modalTab1">
            <Tab eventKey="modalTab1" title="관측정보">
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title">관측 정보</div>
                    <div className="text-ex">ex) 2024-05-07 13:00 ~ 2024-05-08 11:00</div>
                  </div>
                </div>
                <div className="body">
                  <div className="grid-group">
                    <div className="realgrid-group">
                      리얼그리드 들어가는 곳

                      {/* 그리드내 태그 */}
                      <img className="image-grid-wind" src={windImg} alt="풍향" style={{transform: 'rotate(45deg)',}} />
                      <img className="image-grid-wave" src={waveImg} alt="파향" style={{transform: 'rotate(20deg)',}} />
                      
                      <img className="image-grid-wind" src={windImgDark} alt="풍향" style={{transform: 'rotate(45deg)',}} />
                      <img className="image-grid-wave" src={waveImgDark} alt="파향" style={{transform: 'rotate(20deg)',}} />

                      <img className="image-weather" src={weatherImg0101} alt="맑음" />

                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="modalTab2" title="동네예보">
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title">동네예보</div>
                    <div className="text-ex">ex) 2024-05-07 13:00 ~ 2024-05-08 11:00</div>
                  </div>
                </div>
                <div className="body">
                  <div className="grid-group">
                    <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="modalTab3" title="해구별 예측정보">
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title">해구별 예측정보</div>
                    <div className="text-ex">ex) 2024-05-07 13:00 ~ 2024-05-08 11:00</div>
                  </div>
                </div>
                <div className="body">
                  <div className="grid-group">
                    <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal19Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 태풍정보 알림 */}
      <Modal size="sm" centered show={modal20show} onHide={() => setmodal20Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              발효 태풍 없습니다
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal20Show(false)}>더보기</Button>
        </Modal.Footer>
      </Modal>

      {/* 태풍정보 */}
      <Modal size="xl" centered show={modal21show} onHide={() => setmodal21Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>태풍정보</Modal.Title>
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
          <Button variant="primary" onClick={() => setmodal21Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 즐겨찾기 메뉴 */}
      <Modal size="lg" centered show={modal22show} onHide={() => setmodal22Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>즐겨찾기 메뉴</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div className="items-group">
                <div className="header" style={{height: '38px',}}>
                  <div className="left">
                    <div className="title size-16">메뉴찾기</div>
                  </div>
                </div>
                <div className="body">
                  <div className="card-group">
                    <Card className="card-list card-list1">
                      <ListGroup variant="flush">
                        <ListGroup.Item action>라이브맵</ListGroup.Item>
                        <ListGroup.Item action active>선박DB</ListGroup.Item>
                        <ListGroup.Item action>해경자산</ListGroup.Item>
                        <ListGroup.Item action>분석DB</ListGroup.Item>
                        <ListGroup.Item action>분석맵</ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="auto" className="d-flex align-items-center justify-content-center">
              <Button variant="outline-primary" className="mt-lg-5 mb-lg-2 my-sm-3">선택</Button>
            </Col>
            <Col>
              <div className="items-group">
                <div className="header">
                  <div className="left">
                    <div className="title size-16">현재 맞춤 메뉴(4)</div>
                  </div>
                  <div className="right">
                    <Button variant="icon"><i className="icon-gcsc icon-button size-30 icon-refresh2"></i></Button>
                  </div>
                </div>
                <div className="body">
                  <div className="card-group">
                    <Card className="card-list card-list2">
                      <ListGroup>
                        <ListGroup.Item>
                          <div className="left">
                            라이브맵
                          </div>
                          <div className="right">
                            <Button variant="icon" className="size-20"><i className="icon-gcsc icon-button icon-close"></i></Button>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="left">
                            라이브맵
                          </div>
                          <div className="right">
                            <Button variant="icon" className="size-20"><i className="icon-gcsc icon-button icon-close"></i></Button>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="left">
                            라이브맵
                          </div>
                          <div className="right">
                            <Button variant="icon" className="size-20"><i className="icon-gcsc icon-button icon-close"></i></Button>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal22Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>      

      {/* 관심선박 */}
      <Modal size="xl" centered show={modal23show} onHide={() => setmodal23Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심선박</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row>
              <Col>
                <InputGroup>
                  <Form.Select className="width-auto">
                    <option>선박명</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </InputGroup>
              </Col>
            </Row>
          </div>

          <div className="items-group mt-20">
            <div className="body">
              <div className="grid-group">
                <div className="grid-header">
                  <div className="left">
                    <div className="buttons">
                      <Button variant="outline-primary">수정</Button>
                      <Button variant="outline-primary">삭제</Button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="buttons">
                      <Button variant="outline-primary">공유</Button>
                      <Button variant="outline-primary">다운로드</Button>
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
          <Button variant="primary" onClick={() => setmodal23Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박 등록 */}
      <Modal centered show={modal34show} onHide={() => setmodal34Show(false)} scrollable>
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
          <Button variant="secondary" onClick={() => setmodal34Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박 수정 */}
      <Modal centered show={modal24show} onHide={() => setmodal24Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심선박 수정</Modal.Title>
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
          <Button variant="secondary" onClick={() => setmodal24Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박 삭제 */}
      <Modal centered show={modal25show} onHide={() => setmodal25Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심선박 삭제</Modal.Title>
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
                      <th>관심선박 삭제사유</th>
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
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal25Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심영역 */}
      <Modal size="xl" centered show={modal26show} onHide={() => setmodal26Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심영역</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row>
              <Col>
                <InputGroup>
                  <Form.Select className="width-auto">
                    <option>선박명</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </InputGroup>
              </Col>
            </Row>
          </div>

          <div className="items-group mt-20">
            <div className="body">
              <div className="grid-group">
                <div className="grid-header">
                  <div className="left">
                    <div className="buttons">
                      <Button variant="outline-primary">수정</Button>
                      <Button variant="outline-primary">삭제</Button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="buttons">
                    <Button variant="outline-primary">단축키설정</Button>
                      <Button variant="outline-primary">공유</Button>
                      <Button variant="outline-primary">다운로드</Button>
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
          <Button variant="primary" onClick={() => setmodal26Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박/영역정보_관심영역 */}
      <Modal size="xl" centered show={modal26nshow} onHide={() => setmodal26nShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>관심영역명(관심영역1)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row>
              <Col>
                <InputGroup>
                  <Form.Select className="width-auto">
                    <option>선박명</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                  <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                </InputGroup>
              </Col>
            </Row>
          </div>

          <div className="items-group mt-20">
            <div className="body">
              <div className="grid-group">
                <div className="grid-header">
                  <div className="left">
                    <div className="buttons">
                      <Button variant="outline-primary">수정</Button>
                      <Button variant="outline-primary">삭제</Button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="buttons">
                      <Button variant="outline-primary">공유</Button>
                      <Button variant="outline-primary">다운로드</Button>
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
          <Button variant="primary" onClick={() => setmodal23nShow(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 단축키설정 */}
      <Modal centered show={modal27show} onHide={() => setmodal27Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>단축키설정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">
                  리얼그리드 들어가는 곳

                  {/* 그리드내 태그 */}
                  <button type="button" className="btn btn-outline-primary btn-sm mw-80px">삭제</button>

                </div>
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
          <Button variant="primary" onClick={() => setmodal27Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 예외사항 등록 => 국가안보/규제 등록 */}
      <Modal centered show={modal28show} onHide={() => setmodal28Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>국가안보/규제 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="forms-group">
                <Table>
                  <colgroup>
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>
                        <Form.Check inline type="radio" label="북한선박" />
                        <Form.Check inline type="radio" label="제재선박" />
                        <Form.Check inline type="radio" label="관공선" />
                      </td>
                    </tr>
                    <tr>
                      <td>
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
          <Button variant="secondary" onClick={() => setmodal28Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 분석/공유/알람 */}
      <Modal size="xl" centered show={modal29show} onHide={() => setmodal29Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>분석/공유/알람</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="modalTab1">
            <Tab eventKey="modalTab1" title="분석리스트">
              <div className="search-group mt-20">
                <Row>
                  <Col>
                    <InputGroup>
                      <Form.Select className="width-auto">
                        <option>선박명</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
                      <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                    </InputGroup>
                  </Col>
                </Row>
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
            </Tab>
            <Tab eventKey="modalTab2" title="공유리스트">
              <div className="search-group mt-20">
                <Row>
                  <Col>
                    <InputGroup>
                      <Form.Select className="width-auto">
                        <option>선박명</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
                      <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                    </InputGroup>
                  </Col>
                </Row>
              </div>

              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="realgrid-group">
                      리얼그리드 들어가는 곳

                      {/* 그리드내 태그 */}
                      <button type="button" className="btn btn-outline-primary btn-sm">나의 관심선박 등록</button>

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
            </Tab>
            <Tab eventKey="modalTab3" title="알람리스트">
              <div className="search-group mt-20">
                <Row>
                  <Col>
                    <InputGroup>
                      <Form.Select className="width-auto">
                        <option>선박명</option>
                      </Form.Select>
                      <Form.Control type="text" className="ms-2" />
                      <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                    </InputGroup>
                  </Col>
                </Row>
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
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal29Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 조업 분석 */}
      <Modal size="xl" centered show={modal30show} onHide={() => setmodal30Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>조업 분석</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-group">
            <Row className="g-5">
              <Col lg="auto" className="border-end">
                <Form.Group className="form-item-group">
                  <Form.Label>선택된 선박 :</Form.Label>
                  <div className="fs-5 text-info">50척</div>
                </Form.Group>
              </Col>
              <Col lg="auto">
                <Form.Group className="form-item-group">
                  <Form.Label>조업 식별</Form.Label>
                  {/* <Form.Select>
                    <option>멀티셀렉트?</option>
                  </Form.Select> */}
                  <div className="check-group">
                    <Form.Check inline type="checkbox" label="외끌이" />
                    <Form.Check inline type="checkbox" label="쌍끌이" />
                    <Form.Check inline type="checkbox" label="트롤" />
                    <Form.Check inline type="checkbox" label="범장망" />
                    <Form.Check inline type="checkbox" label="형망" />
                    <Form.Check inline type="checkbox" label="채낚기" />
                    <Form.Check inline type="checkbox" label="통망" />
                  </div>
                </Form.Group>
              </Col>
              <Col lg="auto" className="ms-auto d-flex justify-content-end text-end">
                <Button variant="outline-primary" className="btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
              </Col>
            </Row>
          </div>

          <div className="items-group mt-20">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">
                  리얼그리드 들어가는 곳

                  {/* 그리드내 태그 */}
                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg1} alt="조업 이미지" />
                    </div> 쌍끌이
                  </div>

                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg2} alt="조업 이미지" />
                    </div> 외끌이
                  </div>

                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg3} alt="조업 이미지" />
                    </div> 범장망
                  </div>

                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg4} alt="조업 이미지" />
                    </div> 트롤
                  </div>

                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg5} alt="조업 이미지" />
                    </div> 형망
                  </div>

                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg6} alt="조업 이미지" />
                    </div> 통발
                  </div>

                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg7} alt="조업 이미지" />
                    </div> 채낚기
                  </div>

                  <div className="d-inline-flex align-items-center">
                    <div className="image-fishing me-1">
                      <img className="image-grid-fishing" src={fishingImg8} alt="조업 이미지" />
                    </div> 기타
                  </div>

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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal30Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 안전 지수 */}
      <Modal centered show={modal31show} onHide={() => setmodal31Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>안전 지수</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="modalTab1">
            <Tab eventKey="modalTab1" title="신호 소실 기반 분석">
              <div className="items-group mt-20">
                <div className="body">
                  <div className="grid-group">
                    <div className="realgrid-group">
                      리얼그리드 들어가는 곳

                      {/* 그리드내 태그 */}
                      <div className="chart-grid-donut-group" style={{width: '50px', height: '50px',}}>
                        <div className="chart-donut-item">
                          <div className="data">
                            <div className="number">80</div>
                            <div className="unit">%</div>
                          </div>
                        </div>
                        <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                      </div>
                      
                    </div>
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
            </Tab>
            <Tab eventKey="modalTab2" title="통항량 기반 분석">
              <div className="items-group mt-20">
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
            </Tab>
          </Tabs>          
          <div className="legend-group mt-20">
            <div className="legend-item item1">0~20% 안전</div>
            <div className="legend-item item2">21~40% 관심</div>
            <div className="legend-item item3">41~60% 주의</div>
            <div className="legend-item item4">61~80% 경계</div>
            <div className="legend-item item5">81~100% 심각</div>
          </div>
          <div className="info2-text mt-10">※ 해구도(대해구도_소해구도_소소해구도)</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal31Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>
      
      {/* 해역별 경비 지수 */}
      <Modal size="xl" centered show={modal32show} onHide={() => setmodal32Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>해역별 경비 지수</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">
                  리얼그리드 들어가는 곳

                  {/* 그리드내 태그 */}
                  <div className="chart-grid-donut-group" style={{width: '50px', height: '50px',}}>
                    <div className="chart-donut-item">
                      <div className="data">
                        <div className="number">80</div>
                        <div className="unit">%</div>
                      </div>
                    </div>
                    <div className="chart-group h-100">{/* 차트 들어가는 곳 */}</div>
                  </div>                  
                  
                  <img className="image-information" src={infoImg} alt="범죄이력" /> 밀수적발 1회                  
                  <img className="image-information" src={infoImgDark} alt="범죄이력" /> 밀수적발 1회
                  <img className="image-route-change" src={changeImg} alt="변침" /> 변침                  
                  <img className="image-route-change" src={changeImgDark} alt="변침" /> 변침

                </div>
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
          <Row>
            <Col lg="5" className="ms-auto">
              <div className="legend-group mt-20">
                <div className="legend-item item1">0~20% 안전</div>
                <div className="legend-item item2">21~40% 관심</div>
                <div className="legend-item item3">41~60% 주의</div>
                <div className="legend-item item4">61~80% 경계</div>
                <div className="legend-item item5">81~100% 심각</div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal32Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 자산현황 - 동영상(제거) */}
      <Modal size="lg" centered /* backdrop="static" backdropClassName="backdrop-none" */ show={modal33show} onHide={() => setmodal33Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>동영상 제목</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pa-0">
          <div className="video-group">동영상 들어가는 곳</div>
        </Modal.Body>
      </Modal>

      {/* 구역설정 상세정보 */}
      <Modal centered show={modal35show} onHide={() => setmodal35Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>구역설정 상세정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="info-data-group">              
            <div className="icon"><i className="icon-gcsc icon-info icon-ship1"></i></div>
            <div className="name">선택된 선박</div>
            <div className="data">1441</div>
            <div className="unit">척</div>
          </div>
          
          <div className="zone-group mt-10">
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend1"></i></div>
              <div className="text">비행기</div>
              <div className="data">7519</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend27"></i></div>
              <div className="text">비행기2</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend2"></i></div>
              <div className="text">부이</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend3"></i></div>
              <div className="text">화물선</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend4"></i></div>
              <div className="text">화물선S</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend5"></i></div>
              <div className="text">기타</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend6"></i></div>
              <div className="text">기타S</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend7"></i></div>
              <div className="text">example</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend8"></i></div>
              <div className="text">어선</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend9"></i></div>
              <div className="text">어선s</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend10"></i></div>
              <div className="text">군함ㆍ관공선ㆍ조사선</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend11"></i></div>
              <div className="text">군함ㆍ관공선ㆍ조사선s</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend12"></i></div>
              <div className="text">위험물</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend13"></i></div>
              <div className="text">위험물s</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend14"></i></div>
              <div className="text">함정, 항공기</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend15"></i></div>
              <div className="text">함정, 항공기s</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend16"></i></div>
              <div className="text">Lost</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend17"></i></div>
              <div className="text">negative</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend18"></i></div>
              <div className="text">negative-s</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend19"></i></div>
              <div className="text">pass</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend20"></i></div>
              <div className="text">pass-s</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend21"></i></div>
              <div className="text">sos</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend22"></i></div>
              <div className="text">특수목적선</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend23"></i></div>
              <div className="text">특수목적선s</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend24"></i></div>
              <div className="text">헬리콥터</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend25"></i></div>
              <div className="text">선박</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
            <div className="item">
              <div className="icon"><i className="icon-gcsc icon-legend icon-legend26"></i></div>
              <div className="text">함정</div>
              <div className="data">100</div>
              <div className="unit">척</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* 테마 설정 */}
      <Modal size="lg" centered show={modal36show} onHide={() => setmodal36Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>테마 설정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="theme-group">
            <Row>
              <Col>
                <div className="form-check-item">
                  <Form.Check type="radio" id="" label="심플" />
                  <div className="item-thumbnail">
                    <Ratio aspectRatio="16x9">
                      <img className="image-thumbnail" src={thumbImg3} alt="심플" />
                    </Ratio>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="form-check-item">
                  <Form.Check type="radio" id="" label="표준" checked />
                  <div className="item-thumbnail">
                    <Ratio aspectRatio="16x9">
                      <img className="image-thumbnail" src={thumbImg1} alt="표준" />
                    </Ratio>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="form-check-item">
                  <Form.Check type="radio" id="" label="다크" />
                  <div className="item-thumbnail">
                    <Ratio aspectRatio="16x9">
                      <img className="image-thumbnail" src={thumbImg2} alt="다크" />
                    </Ratio>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal36Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 내 정보 수정 */}
      <Modal size="lg" centered show={modal37show} onHide={() => setmodal37Show(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>내 정보 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="items-group">
            <div className="header">
              <div className="right">
                <div>필수입력<i className="icon-require"></i></div>
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
                      <th>계정아이디<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <div className="d-flex align-items-center">
                          <Form.Control type="text" style={{width: 'calc(50% - 80px)',}} disabled value="userid" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>패스워드<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <div className="d-flex align-items-center">
                          <Form.Control type="text" style={{width: 'calc(50% - 80px)',}} />
                          <div className="info-text ms-2">
                            <div className="text">영문/숫자 조합 20자 이내, 특수문자 조합</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>패스워드 확인<i className="icon-require"></i></th>
                      <td colSpan={3}>
                        <Form.Control type="text" style={{width: 'calc(50% - 80px)',}} />
                      </td>
                    </tr>
                    <tr>
                      <th>이름<i className="icon-require"></i></th>
                      <td><Form.Control type="text" value="홍길동" /></td>
                      <th>이메일<i className="icon-require"></i></th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>전화번호</th>
                      <td><Form.Control type="text" /></td>
                      <th>모바일 전화번호</th>
                      <td><Form.Control type="text" /></td>
                    </tr>
                    <tr>
                      <th>기관 전화번호</th>
                      <td><Form.Control type="text" /></td>
                      <th>소속 기관<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <th>직급<i className="icon-require"></i></th>
                      <td>
                        <Form.Select>
                          <option>선택</option>
                        </Form.Select>
                      </td>
                      <th>계정 타입<i className="icon-require"></i></th>
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
          <Button variant="primary">저장</Button>
          <Button variant="secondary" onClick={() => setmodal37Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default Sample01Modal;
