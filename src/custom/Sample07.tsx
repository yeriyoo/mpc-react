import typeImg from '@/custom/assets/img/type/aircraft.svg';
import flagImg from '@/custom/assets/img/flag/KOR-KOREA.svg';
import weatherImg0101 from '@/custom/assets/img/weather/weather0101.svg';
import carouselImg1 from '@/custom/assets/img/sample1.jpg';
import carouselImg2 from '@/custom/assets/img/sample2.jpg';
import carouselImg3 from '@/custom/assets/img/sample3.jpg';
import pointerImg from '@/custom/assets/img/theme_light/map_pointer.svg';
import pointerImgDark from '@/custom/assets/img/theme_dark/map_pointer.svg';

import classNames from 'classNames';

//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
//Component
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';
//Utilities
import Ratio from 'react-bootstrap/Ratio';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Sample07 = () => {

  const [index, setIndex] = useState(0);
  const corousalRef = useRef(null);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [modal1show, setmodal1Show] = useState(false); //갤러리
  
  //Togglebutton
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="gcsc-wrap gcsc-page">
        <Navbar className="navbar-page">
          <div className="navbar-title">
            <img className="image-type" src={typeImg} title="종류" alt="종류" />
            <img className="image-flag" src={flagImg} title="국기" alt="국기" />
            <div className="name">
              근영호
              <small>13450135</small>
            </div>
          </div>
          <div className="navbar-buttons">
            <div className="navbar-button1">
              <Button variant="navbar1" className="btn-text-icon" size="sm">
                항적조회 <i className="icon-gcsc icon-button icon-search"></i>
              </Button>
              <Button variant="navbar1" className="btn-text-icon" size="sm">
                항로예측 <i className="icon-gcsc icon-button icon-search"></i>
              </Button>
              <Button variant="navbar1" className="btn-text-icon" size="sm">
                신호정보 <i className="icon-gcsc icon-button icon-search"></i>
              </Button>
            </div>
            <div className="navbar-button2">
              <Button variant="navbar2" className="btn-text-icon" size="sm">
                메모등록 <i className="icon-gcsc icon-button icon-memo"></i>
              </Button>
              <Button variant="navbar2" className="btn-text-icon" size="sm">
                선박공유 <i className="icon-gcsc icon-button icon-ship"></i>
              </Button>
              <Button variant="navbar2" className="btn-text-icon" size="sm">
                다운로드 <i className="icon-gcsc icon-button icon-download"></i>
              </Button>
            </div>
          </div>
        </Navbar>
        <div className="page-content">

          <Container fluid className="h-100">
            <Row className="row-ship row-ship-all">
              <Col className="col-ship-left">
                <Row className="align-items-stretch row-ship row-ship-left">
                  <Col className="col-ship col-ship1 border-end">
                    <div className="items-group mt-20">
                      <div className="header border-bottom">
                        <div className="left">
                          <div className="title">선박 위치 및 항해 데이터</div>
                        </div>
                        <div className="right">
                          <Button variant="outline-primary" size="sm" className="btn-text-icon">
                            사진 등록/삭제 <i className="icon-gcsc icon-button icon-image ms-2"></i>
                          </Button>
                          <ToggleButton id="toggle-favorite" type="checkbox" variant="icon" className="btn-bi btn-favorite" checked={checked} value={1} onChange={(e) => setChecked(e.currentTarget.checked)}>
                            <i className="bi bi-star-fill"></i>
                          </ToggleButton>
                        </div>
                      </div>
                      <div className="body">
                        <div className="carousels-group">
                          <div className="carousels-group-inner">
                            <Carousel activeIndex={index} onSelect={handleSelect} ref={corousalRef} interval={null}>
                              <Carousel.Item className="cursor-pointer" onClick={() => setmodal1Show(true)}>
                                <Ratio aspectRatio="16x9">
                                  <img className="image-carousels" src={carouselImg1} alt="1" />
                                </Ratio>
                              </Carousel.Item>
                              <Carousel.Item className="cursor-pointer" onClick={() => setmodal1Show(true)}>
                                <Ratio aspectRatio="16x9">
                                  <img className="image-carousels" src={carouselImg2} alt="2" />
                                </Ratio>
                              </Carousel.Item>
                              <Carousel.Item className="cursor-pointer" onClick={() => setmodal1Show(true)}>
                                <Ratio aspectRatio="16x9">
                                  <img className="image-carousels" src={carouselImg3} alt="3" />
                                </Ratio>
                              </Carousel.Item>
                            </Carousel>
                          </div>

                          <div className="carousels-thumbnails">
                            <Button variant="thumbnails" className={classNames('', {active: index === 0,})} onClick={() => setIndex(0)}>
                              <Ratio aspectRatio="16x9">
                                <img className="image-carousels" src={carouselImg1} alt="1" />
                              </Ratio>
                            </Button>
                            <Button variant="thumbnails" className={classNames('', {active: index === 1,})} onClick={() => setIndex(1)}>
                              <Ratio aspectRatio="16x9">
                                <img className="image-carousels" src={carouselImg2} alt="2" />
                              </Ratio>
                            </Button>
                            <Button variant="thumbnails" className={classNames('', {active: index === 2,})} onClick={() => setIndex(2)}>
                              <Ratio aspectRatio="16x9">
                                <img className="image-carousels" src={carouselImg3} alt="3" />
                              </Ratio>
                            </Button>
                          </div>
                        </div>

                        {/* <div className="button-group btn-block mt-10">
                          <Button variant="outline-primary" className="btn-text-icon rounded-pill">
                            사진 등록/삭제 <i className="icon-gcsc icon-button icon-image ms-auto"></i>
                          </Button>
                          <Button variant="outline-primary" className="btn-text-icon rounded-pill">
                            사진 더보기 <i className="icon-gcsc icon-button icon-more ms-auto"></i>
                          </Button>
                          <Button variant="outline-primary" className="btn-text-icon rounded-pill">
                            관심선박 추가 <i className="icon-gcsc icon-button icon-star-outline ms-auto"></i>
                          </Button>
                        </div> */}
        
                        <div className="range-group fromto-group mt-20">
                          <div className="range-bar">
                            <div className="progress-bar-track" style={{ width: `30%`, }} />
                          </div>
                          <div className="range-item range-name">
                            <div className="left">
                              <div className="date">2024-11-23 11:23:00</div>
                              <div className="name">BUSAN</div>
                            </div>
                            <div className="right">
                              <div className="date">2024-11-23 11:23:00</div>
                              <div className="name">BS YV QUAN</div>
                            </div>
                          </div>
                        </div>

                        <div className="data-status-group">
                          <div className="data-status2">
                            <div className="item">
                              <div className="title">선박상태</div>
                              <div className="data">정박</div>
                            </div>
                            <div className="item">
                              <div className="title">속도</div>
                              <div className="data">4.2kn</div>
                            </div>
                            <div className="item">
                              <div className="title">항로</div>
                              <div className="data">13.3° </div>
                            </div>
                            <div className="item">
                              <div className="title">홀수</div>
                              <div className="data">1.1m</div>
                            </div>
                          </div>
                        </div>

                        <div className="forms-group">
                          <Table>
                            <colgroup>
                              <col style={{ width: '140px', }} />
                              <col />
                            </colgroup>
                            <tbody>
                              <tr>
                                <th>예상 도착시간</th>
                                <td>2024-11-23 08:33(UTC+9)</td>
                              </tr>
                              <tr>
                                <th>길이/넓이</th>
                                <td>179(width) / 28(height)</td>
                              </tr>
                              <tr>
                                <th>소유자</th>
                                <td>-</td>
                              </tr>
                              <tr>
                                <th>마지막 신호시간</th>
                                <td>1분전</td>
                              </tr>
                              <tr>
                                <th>허가번호</th>
                                <td>-</td>
                              </tr>
                              <tr>
                                <th>입역일자/입역위치</th>
                                <td>-</td>
                              </tr>
                              <tr>
                                <th>출역일자/출역위치</th>
                                <td>-</td>
                              </tr>
                              <tr>
                                <th>어획할당량</th>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-ship col-ship2 border-end">
                    <div className="items-group mt-20">
                      <div className="header">
                        <div className="left">
                          <div className="title">선박 세부사항</div>
                        </div>
                        <div className="right">
                          <Button variant="outline-primary" size="sm">수정</Button>
                          <Button variant="primary" size="sm">저장</Button>
                        </div>
                      </div>
                      <div className="body">
                        <div className="forms-group">
                          <Table>
                            <colgroup>
                              <col style={{ width: '140px', }} />
                              <col />
                            </colgroup>
                            <tbody>
                              <tr>
                                <th>DATA Source</th>
                                <td>
                                  <div className="badge-group">
                                    <OverlayTrigger placement="top" overlay={
                                      <Tooltip id="tooltip-right">
                                        AIS
                                      </Tooltip>
                                    }>
                                      <Badge bg="data-a" className="badge-data disabled">A</Badge>
                                    </OverlayTrigger>                                
                                    <OverlayTrigger placement="top" overlay={
                                      <Tooltip id="tooltip-right">
                                        V-PASS
                                      </Tooltip>
                                    }>
                                      <Badge bg="data-v" className="badge-data">V</Badge>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={
                                      <Tooltip id="tooltip-right">
                                        E-NAV
                                      </Tooltip>
                                    }>
                                      <Badge bg="data-e" className="badge-data">E</Badge>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={
                                      <Tooltip id="tooltip-right">
                                        VTSAIS
                                      </Tooltip>
                                    }>
                                      <Badge bg="data-t" className="badge-data">T</Badge>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={
                                      <Tooltip id="tooltip-right">
                                        MF/HF
                                      </Tooltip>
                                    }>
                                      <Badge bg="data-d" className="badge-data">D</Badge>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={
                                      <Tooltip id="tooltip-right">
                                        VTS 레이더
                                      </Tooltip>
                                    }>
                                      <Badge bg="data-r" className="badge-data">R</Badge>
                                    </OverlayTrigger>
                                    
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th>신호별 ID</th>
                                <td>352001218</td>
                              </tr>
                              <tr>
                                <th>선명</th>
                                <td>
                                  <Form.Control type="text" value="XIN LONG YUN 89" readOnly />
                                </td>
                              </tr>
                              <tr>
                                <th>국적</th>
                                <td>파나마</td>
                              </tr>
                              <tr>
                                <th>IMO</th>
                                <td>9667320</td>
                              </tr>
                              <tr>
                                <th>MMSI</th>
                                <td>352001218</td>
                              </tr>
                              <tr>
                                <th>호출 부호</th>
                                <td>3E3976</td>
                              </tr>
                              <tr>
                                <th>AIS class</th>
                                <td>-</td>
                              </tr>
                              <tr>
                                <th>vessel type</th>
                                <td>화물선</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>

                    <div className="items-group mt-20">
                      <div className="header border-bottom">
                        <div className="left">
                          <div className="title">SHIP SCORE BOARD</div>
                        </div>
                      </div>
                      <div className="body">
                        <div className="score-group">
                          {/* <div className="score-item score-item1">
                            <div className="score score1">5.5</div>
                            <div className="name">위협지수</div>
                          </div> */}
                          <div className="score-item score-item1">
                            <div className="score score1 score-na">NA</div>
                            <div className="name">위협지수</div>
                          </div>
                          <div className="score-item score-item2">
                            <div className="score score2">5</div>
                            <div className="name">MIMSI변조</div>
                          </div>
                          <div className="score-item score-item3">
                            <div className="score score3">10</div>
                            <div className="name">선명변조</div>
                          </div>
                          <div className="score-item score-item4">
                            <div className="score score4">6</div>
                            <div className="name">입출항/위험물</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="items-group mt-20">
                      <div className="header">
                        <div className="left">
                          <div className="title">운항정보</div>
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
                  </Col>
                </Row>
              </Col>
              <Col className="col-ship-right">
                <Row className="align-items-stretch row-ship row-ship-right">
                  <Col className="col-ship col-ship3 border-end">
                    <div className="items-group mt-20 mb-20">
                      <div className="header border-bottom">
                        <div className="left">
                          <div className="title">지도 위치 및 날씨</div>
                        </div>
                      </div>
                      <div className="body">
                        <div className="detail-map-group map1">
                          지도 들어가는 곳

                          {/* 지도 안에 들어가는 태그 */}
                          <img src={pointerImg} alt="" />
                          <img src={pointerImgDark} alt="" />
                        </div>
                        <div className="weather-group mt-10">
                          <div className="header">
                            <div className="title">전남서부남해앞바다</div>
                            <div className="date">11월 20일 (일)</div>
                          </div>
                          <div className="body">
                            <div className="weather-item">
                              <div className="weather-image">
                                <img className="image-weather" src={weatherImg0101} alt="맑음" />
                              </div>
                              <div className="weather-info">
                                <div className="name">날씨</div>
                                <div className="result">맑음</div>
                              </div>
                            </div>
                            <div className="weather-item">
                              <div className="weather-image weather-image2"></div>
                              <div className="weather-info">
                                <div className="name">풍향/풍속(m/s)</div>
                                <div className="result">남-남서/0.5</div>
                              </div>
                            </div>
                            <div className="weather-item">
                              <div className="weather-image weather-image3"></div>
                              <div className="weather-info">
                                <div className="name">파고(m)</div>
                                <div className="result">0.8~1.2</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-ship col-ship4">
                    <div className="items-group mt-20">
                      <div className="header">
                        <div className="left">
                          <div className="title">최근 포트 호출</div>
                        </div>
                        <div className="right">
                          <Button variant="link2" size="sm" className="btn-text-icon">더보기 <i className="icon-gcsc icon-button icon-sm icon-arrow-right ms-1"></i></Button>
                        </div>
                      </div>
                      <div className="body">
                        <div className="grid-group">
                          <div className="realgrid-group">
                            리얼그리드 들어가는 곳

                            {/* 그리드내 태그 */}
                            <Link to={'/'}>500명</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="border-top">
                    <div className="items-group mt-20">
                      <div className="header">
                        <div className="left">
                          <div className="title">특이사항</div>
                        </div>
                        <div className="right">
                          <Button variant="link2" size="sm" className="btn-text-icon">더보기 <i className="icon-gcsc icon-button icon-sm icon-arrow-right ms-1"></i></Button>
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
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="page-footer border-top">
          <div className="footer-text">데이터 수신시간 : 2024-11-23 11:23:00</div>
          <div className="footer-text ms-3">등록일 : 2024-11-23</div>
        </div>
      </div>

      {/* 갤러리 */}
      <Modal fullscreen className="modal-gallery" centered show={modal1show} onHide={() => setmodal1Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>선박 사진</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="carousels-group">
            <div className="carousels-group-inner">
              <Carousel activeIndex={index} onSelect={handleSelect} ref={corousalRef} indicators={false} interval={null}>
                <Carousel.Item>
                  <div className="item-inner">
                    <img className="image-carousels" src={carouselImg1} alt="1" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item-inner">
                    <img className="image-carousels" src={carouselImg2} alt="2" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item-inner">
                    <img className="image-carousels" src={carouselImg3} alt="3" />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="carousels-thumbnails">
              <Button variant="thumbnails" className={classNames('', {active: index === 0,})} onClick={() => setIndex(0)}>
                <Ratio aspectRatio="16x9">
                  <img className="image-carousels" src={carouselImg1} alt="1" />
                </Ratio>
              </Button>
              <Button variant="thumbnails" className={classNames('', {active: index === 1,})} onClick={() => setIndex(1)}>
                <Ratio aspectRatio="16x9">
                  <img className="image-carousels" src={carouselImg2} alt="2" />
                </Ratio>
              </Button>
              <Button variant="thumbnails" className={classNames('', {active: index === 2,})} onClick={() => setIndex(2)}>
                <Ratio aspectRatio="16x9">
                  <img className="image-carousels" src={carouselImg3} alt="3" />
                </Ratio>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default Sample07;
