import typeImg from '@/custom/assets/img/type/aircraft.svg';
import flagImg from '@/custom/assets/img/flag/KOR-KOREA.svg';
import carouselImg1 from '@/custom/assets/img/sample1.jpg';
import carouselImg2 from '@/custom/assets/img/sample2.jpg';
import carouselImg3 from '@/custom/assets/img/sample3.jpg';
import gridImg from '@/custom/assets/img/sample1.jpg';
import detailImg from '@/custom/assets/img/type/passenger_db.svg';
import shipImg from '@/custom/assets/img/ship/pass.svg';
import pointerImg1 from '@/custom/assets/img/ship/pointer1.png';
import pointerImg2 from '@/custom/assets/img/ship/pointer2.png';
import pointerImg3 from '@/custom/assets/img/ship/pointer3.png';
/* import pointergifImg1 from '@/custom/assets/img/ship/pointer1.gif';
import pointergifImg2 from '@/custom/assets/img/ship/pointer2.gif';
import pointergifImg3 from '@/custom/assets/img/ship/pointer3.gif'; */
import weatherImg0101 from '@/custom/assets/img/weather/weather0101.svg';

import { Link } from 'react-router-dom';
//Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel';
import CloseButton from 'react-bootstrap/CloseButton';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton, { AccordionItem } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Pagination from 'react-bootstrap/Pagination';
import Popover from 'react-bootstrap/Popover';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tooltip from 'react-bootstrap/Tooltip';
//Utilities
import Collapse from 'react-bootstrap/Collapse';
import Ratio from 'react-bootstrap/Ratio';

import Icon from '@mdi/react';
import { useContext, useState } from 'react';

//Accordion
function CustomToggle({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey, 
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Button variant='accordion-arrow' className={isCurrentEventKey ? 'active' : '' } onClick={decoratedOnClick}><i className="icon-gcsc icon-accordion icon-accordion-arrow"></i></Button>
  );
}

const Sample01 = () => {

  //Collapse
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(true);
  const [open10, setOpen10] = useState(false);

  //Offcanvas
  const [off1show, setOff1Show] = useState(false);
  const [off2show, setOff2Show] = useState(false);
  const [off3show, setOff3Show] = useState(false);
  const [off4show, setOff4Show] = useState(false);
  const [off5show, setOff5Show] = useState(false);
  const [off6show, setOff6Show] = useState(false);
  const [off7show, setOff7Show] = useState(false);
  const [off8show, setOff8Show] = useState(false);

  //Togglebutton
  const [checked, setChecked] = useState(false);

  //ToggleButtonGroup
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);

  //선박DB
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => setIsVisible(true);

  //popover
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  const popover = (
    <div className="map-guide map-guide2 popover-weather">
      <div className="header">
        <div className="left">
          <div className="title">남해244</div>
        </div>
        <div className="right">
          <Button variant="primary" className="btn-xs me-1">기상예보</Button>
          <CloseButton className="btn-white btn-sm" onClick={handleToggle} />
        </div>
      </div>
      <div className="body">
        <div className="lists-group">
          <div className="list-style-dot">
            <div className="list-item">
              <div className="title">일시</div>
              <div className="data">08일 11:00</div>
            </div>
            <div className="list-item">
              <div className="title">풍속</div>
              <div className="data">15.3m/s</div>
            </div>
            <div className="list-item">
              <div className="title">풍향</div>
              <div className="data">북북동</div>
            </div>
            <div className="list-item">
              <div className="title">유의파고</div>
              <div className="data">2.4m</div>
            </div>
            <div className="list-item">
              <div className="title">수온</div>
              <div className="data">8.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="gcsc-wrap">
      <div className="lnb">
        <div className="lnb-top">
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              홈
            </Tooltip>
          }>
            <Button variant="lnb" className=""><i className="icon-gcsc icon-lnb icon-lnb0"></i></Button>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              라이브맵
            </Tooltip>
          }>
          <Button variant="lnb" className=""  onClick={() => setOff1Show(true)}><i className="icon-gcsc icon-lnb icon-lnb1"></i></Button>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              선박DB
            </Tooltip>
          }>
          <Button variant="lnb" className="active"  onClick={() => setOff2Show(true)}><i className="icon-gcsc icon-lnb icon-lnb2"></i></Button>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              해경자산
            </Tooltip>
          }>
          <Button variant="lnb" className=""  onClick={() => setOff3Show(true)}><i className="icon-gcsc icon-lnb icon-lnb3"></i></Button>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              분석DB
            </Tooltip>
          }>
          <Button variant="lnb" className=""  onClick={() => setOff4Show(true)}><i className="icon-gcsc icon-lnb icon-lnb4"></i></Button>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              분석맵
            </Tooltip>
          }>
          <Button variant="lnb" className=""  onClick={() => setOff5Show(true)}><i className="icon-gcsc icon-lnb icon-lnb5"></i></Button>
          </OverlayTrigger>
        </div>
        <div className="lnb-bottom">
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              관리자
            </Tooltip>
          }>
          <Button variant="lnb" className=""><i className="icon-gcsc icon-lnb icon-lnb6"></i></Button>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-right">
              나의페이지
            </Tooltip>
          }>
          <Button variant="lnb" className=""  onClick={() => setOff6Show(true)}><i className="icon-gcsc icon-lnb icon-lnb7"></i></Button>
          </OverlayTrigger>
        </div>
      </div>
      <div className="contents">
        <div className="map-group">지도 들어가는 곳</div>
        <div className="map-search">
          <InputGroup>
            <Form.Control type="search" placeholder="선박 위치 검색" />
            {/* <Button variant="icon" className="me-2"><i className="icon-gcsc icon-button size-30 icon-close2"></i></Button> */}
            <Button variant="icon" className="me-2"><i className="icon-gcsc icon-button size-30 icon-search"></i></Button>
          </InputGroup>
          <div className="search-items">
            <div className="item">
              <div className="text">
                abc111111
                <span>12345678</span>
              </div>
              <div className="icon">
                <i className="icon-gcsc icon-location-w"></i>
              </div>
            </div>
            <div className="item">
              <div className="text">
                abc111111
                <span>12345678</span>
              </div>
              <div className="icon">
                <i className="icon-gcsc icon-location-w"></i>
              </div>
            </div>
            <div className="item">
              <div className="text">
                abc111111
                <span>12345678</span>
              </div>
              <div className="icon">
                <i className="icon-gcsc icon-location-w"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="map-reset">
          <Button variant="outline-primary" className="btn-text-icon rounded-pill btn-block">지도 초기화 <i className="icon-gcsc icon-button icon-refresh ms-2"></i></Button>
        </div>

        <div className="map-user">
          <Dropdown align="end">
            <Dropdown.Toggle variant="icon-user" className="">
              <span className="user-name">M</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item  onClick={() => setOff7Show(true)}>나의 대시보드</Dropdown.Item>
              <Dropdown.Item>분석/공유/알람</Dropdown.Item>
              <Dropdown.Item>메뉴 설정</Dropdown.Item>
              <Dropdown.Item>테마 설정</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>내 정보 수정</Dropdown.Item>
              <Dropdown.Item>로그아웃</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <OverlayTrigger key="left" placement="bottom" overlay={<Tooltip>알람</Tooltip>}>
            <Button variant="icon-user" className="btn-user-alarm" onClick={() => setOff8Show(true)}>
              <span className="badge-new"></span>
              <i className="icon-gcsc icon-control icon-control1"></i>
            </Button>
          </OverlayTrigger>

          <OverlayTrigger key="left" placement="bottom" overlay={<Tooltip>관심선박</Tooltip>}>
            <Button variant="icon-user" className=""  onClick={() => setOpen1(!open1)}>
              <i className="icon-gcsc icon-control icon-control2"></i>
            </Button> 
          </OverlayTrigger>              
          <Collapse in={open1}>
            <div className="collapse-group collapse-control collapse-control1">
              <div className="slide-group slide-animation">
                <div className="slide-item">
                  <div className="number">1</div>
                  <div className="flag">                      
                    <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                  </div>
                  <div className="national">
                    <div className="national-name depature">Safeen Baroness</div>
                    <div className="national-name arrival">Ulsan</div>
                  </div>
                </div>
                <div className="slide-item">
                  <div className="number">2</div>
                  <div className="flag">
                    <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                  </div>
                  <div className="national">
                    <div className="national-name depature">-</div>
                    <div className="national-name arrival">-</div>
                  </div>
                </div>
                <div className="slide-item">
                  <div className="number">3</div>
                  <div className="flag">
                    <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                  </div>
                  <div className="national">
                    <div className="national-name depature">-</div>
                    <div className="national-name arrival">-</div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>            

          <OverlayTrigger key="left" placement="bottom" overlay={<Tooltip>더보기</Tooltip>}>
            <Button variant="icon-user" className="btn-bi active"  onClick={() => setOpen2(!open2)}>  
              {/* <i className="icon-gcsc icon-control icon-control3"></i> */}
              <i className="bi bi-three-dots"></i>
            </Button> 
          </OverlayTrigger>
        </div>
        
        <div className="map-control">         
          
          <Collapse in={open2}>
            <div className="collapse-group collapse-control collapse-control2">

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>선박통합</Tooltip>}>
                <Button variant="icon-control" className="">
                  <i className="icon-gcsc icon-control icon-control7"></i>
                </Button>
              </OverlayTrigger>

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>선명표시</Tooltip>}>
                <Button variant="icon-control" className="">
                  <i className="icon-gcsc icon-control icon-control8"></i>
                </Button>
              </OverlayTrigger>

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>자산</Tooltip>}>
                <Button variant="icon-control" className=""  onClick={() => setOpen7(!open7)}>
                  <i className="icon-gcsc icon-control icon-control25"></i>
                </Button> 
              </OverlayTrigger>          
              <Collapse in={open7}>
                <div className="collapse-group collapse-control collapse-control7">
                  <div className="map-status1">
                    <div className="status1-item">
                      <div className="title">
                        함정
                      </div> 
                      <div className="info">
                        <div className="total">
                          전체
                        </div>  
                        <div className="data">345</div>  
                        <div className="unit">척</div>  
                      </div>  
                      <div className="info">
                        <div className="icon">
                          <i className="icon-gcsc icon-status-map1 icon-status-map1-1"></i>
                        </div>  
                        <div className="data">255</div>  
                        <div className="unit">척</div>  
                      </div>  
                    </div>
                    <div className="status1-item">
                      <div className="title">
                        회전익
                      </div>  
                      <div className="info">
                        <div className="total">
                          전체
                        </div>  
                        <div className="data">345</div>  
                        <div className="unit">척</div>  
                      </div> 
                      <div className="info">
                        <div className="icon">
                          <i className="icon-gcsc icon-status-map1 icon-status-map1-2"></i>
                        </div>  
                        <div className="data">22</div>  
                        <div className="unit">대</div>  
                      </div>  
                    </div>
                    <div className="status1-item">
                      <div className="title">
                        고정익
                      </div>  
                      <div className="info">
                        <div className="total">
                          전체
                        </div>  
                        <div className="data">345</div>  
                        <div className="unit">척</div>  
                      </div> 
                      <div className="info">
                        <div className="icon">
                          <i className="icon-gcsc icon-status-map1 icon-status-map1-3"></i>
                        </div>  
                        <div className="data">15</div>  
                        <div className="unit">대</div>  
                      </div>  
                    </div>
                  </div>
                </div>
              </Collapse> 

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>구역설정</Tooltip>}>
                <Button variant="icon-control" className="mt-2">
                  <i className="icon-gcsc icon-control icon-control9"></i>
                </Button>
              </OverlayTrigger>   

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>거리</Tooltip>}>
                <Button variant="icon-control" className="">
                  <i className="icon-gcsc icon-control icon-control10"></i>
                </Button>
              </OverlayTrigger>

              {/* <OverlayTrigger key="left" placement="left" overlay={<Tooltip>면적</Tooltip>}>
                <Button variant="icon-control" className="">
                  <i className="icon-gcsc icon-control icon-control11"></i>
                </Button>
              </OverlayTrigger> */}

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>거리환</Tooltip>}>
                <Button variant="icon-control" className="">
                  <i className="icon-gcsc icon-control icon-control12"></i>
                </Button>
              </OverlayTrigger>

              {/* <OverlayTrigger key="left" placement="left" overlay={<Tooltip>인쇄</Tooltip>}>
                <Button variant="icon-control" className="mt-2">
                  <i className="icon-gcsc icon-control icon-control13"></i>
                </Button>
              </OverlayTrigger> */}

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>캡쳐</Tooltip>}>
                <Button variant="icon-control" className="mt-2">
                  <i className="icon-gcsc icon-control icon-control14"></i>
                </Button>
              </OverlayTrigger>

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>다운로드</Tooltip>}>
                <Button variant="icon-control" className="">
                  <i className="icon-gcsc icon-control icon-control6"></i>
                </Button>
              </OverlayTrigger>

              <OverlayTrigger key="left" placement="left" overlay={<Tooltip>초기화</Tooltip>}>
                <Button variant="icon-control" className="">
                  <i className="icon-gcsc icon-control icon-control15"></i>
                </Button>
              </OverlayTrigger>
              
              <div className="position-relative">
                <OverlayTrigger key="left" placement="left" overlay={<Tooltip>기상</Tooltip>}>
                  <Button variant="icon-control" className="mt-2" onClick={() => setOpen10(!open10)}>
                    <i className="icon-gcsc icon-control icon-control5"></i>
                  </Button>
                </OverlayTrigger>

                <Collapse in={open10}>
                  <div className="collapse-group collapse-control collapse-control5 collapse-control-arrow">  
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control29"></i> 수온
                    </Button>
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control26"></i> 해상예보
                    </Button>
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control27"></i> 풍향/풍속
                    </Button>
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control28"></i> 태풍
                    </Button>
                  </div>
                </Collapse>
              </div>

              <div className="position-relative">
                <OverlayTrigger key="left" placement="left" overlay={<Tooltip>AI</Tooltip>}>
                  <Button variant="icon-control" className="active" onClick={() => setOpen3(!open3)}>
                    <i className="icon-gcsc icon-control icon-control16"></i>
                  </Button> 
                </OverlayTrigger>
                
                <Collapse in={open3}>
                  <div className="collapse-group collapse-control collapse-control3 collapse-control-arrow">  
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control17"></i> 소실항적
                    </Button>
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control18"></i> 항로예측
                    </Button>
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control19"></i> 선종분류
                    </Button>
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control20"></i> 조업분석
                    </Button>
                    <Button variant="icon-text-control" className="">
                      <i className="icon-gcsc icon-control icon-control21"></i> 해역별 위협지수
                    </Button>
                  </div>
                </Collapse>
              </div>

            </div>
          </Collapse>

          <OverlayTrigger key="left" placement="left" overlay={<Tooltip>확대</Tooltip>}>
            <Button variant="icon-control" className="mt-auto">
              <i className="icon-gcsc icon-control icon-control22"></i>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger key="left" placement="left" overlay={<Tooltip>축소</Tooltip>}>
            <Button variant="icon-control" className="">
              <i className="icon-gcsc icon-control icon-control23"></i>
            </Button>
          </OverlayTrigger>

          <div className="position-relative">
            <OverlayTrigger key="left" placement="left" overlay={<Tooltip>범례</Tooltip>}>
              <Button variant="icon-control" className="active mt-2"  onClick={() => setOpen4(!open4)}>
                <i className="icon-gcsc icon-control icon-control24"></i>
              </Button> 
            </OverlayTrigger>              
            <Collapse in={open4}>
              <div className="collapse-group collapse-control collapse-control4">
                <div className="legend-group1">
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend1"></i></div>
                    <div className="text">비행기</div>
                    <div className="data">7519</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend27"></i></div>
                    <div className="text">비행기2</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend2"></i></div>
                    <div className="text">부이</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend3"></i></div>
                    <div className="text">화물선</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend4"></i></div>
                    <div className="text">화물선S</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend5"></i></div>
                    <div className="text">기타</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend6"></i></div>
                    <div className="text">기타S</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend7"></i></div>
                    <div className="text">example</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend8"></i></div>
                    <div className="text">어선</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend9"></i></div>
                    <div className="text">어선s</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend10"></i></div>
                    <div className="text">군함ㆍ관공선ㆍ조사선</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend11"></i></div>
                    <div className="text">군함ㆍ관공선ㆍ조사선s</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend12"></i></div>
                    <div className="text">위험물</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend13"></i></div>
                    <div className="text">위험물s</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend14"></i></div>
                    <div className="text">함정, 항공기</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend15"></i></div>
                    <div className="text">함정, 항공기s</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend16"></i></div>
                    <div className="text">Lost</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend17"></i></div>
                    <div className="text">negative</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend18"></i></div>
                    <div className="text">negative-s</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend19"></i></div>
                    <div className="text">pass</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend20"></i></div>
                    <div className="text">pass-s</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend21"></i></div>
                    <div className="text">sos</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend22"></i></div>
                    <div className="text">특수목적선</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend23"></i></div>
                    <div className="text">특수목적선s</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend24"></i></div>
                    <div className="text">헬리콥터</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend25"></i></div>
                    <div className="text">선박</div>
                    <div className="data">100</div>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="icon-gcsc icon-legend icon-legend26"></i></div>
                    <div className="text">함정</div>
                    <div className="data">100</div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        <div className="map-footer-guide">
          <div className="guide-text text1">
            <i className="icon-gcsc icon-button size-30 icon-earth"></i>
            <div className="text"><span className="name">경도</span> 126° 34′ 13.509″ E</div>
          </div>
          <div className="guide-text text2">
            <i className="icon-gcsc icon-button size-30 icon-earth"></i>
            <div className="text"><span className="name">위도</span> 34° 20′ 20.365″ N</div>
          </div>
          <div className="guide-text text3">
            <Badge bg="kst">KST</Badge>
            <div className="text">2024-11-04(월) 09:16:34</div>
          </div>
          <Button variant="icon" className="ms-2"><i className="icon-gcsc icon-button size-30 icon-setting"></i></Button>
        </div>

        <div className="map-player">
          <div className="player-control">
            <div className="player-option">
              <ToggleButtonGroup type="checkbox" size="sm" value={value} onChange={handleChange}>
                <ToggleButton id="tbg-btn1" value={1}>
                  선명
                </ToggleButton>
                <ToggleButton id="tbg-btn2" value={2}>
                  MMSI
                </ToggleButton>
                <ToggleButton id="tbg-btn3" value={3}>
                  시간
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            {/* <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player1"></i></Button> */}
            {/* <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player2"></i></Button> */}
            <Dropdown drop="up-centered">
              <Dropdown.Toggle variant="player"><i className="icon-gcsc icon-player icon-player2"></i></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item active>x1</Dropdown.Item>
                <Dropdown.Item>x10</Dropdown.Item>
                <Dropdown.Item>x100</Dropdown.Item>
                <Dropdown.Item>x1000</Dropdown.Item>
                <Dropdown.Item>x10000</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player3"></i></Button>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player4"></i></Button>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player5"></i></Button>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player6"></i></Button>
            <div className="range-group">
              <div className="range-bar">
                <div className="start-ball"></div>
                <input type="range" min="0" max="100" step="10" value="20" />
                <div className="progress-bar-track" style={{ width: `20%`, }} />
                <div className="end-ball"></div>
              </div>
              <div className="range-time">
                2023-08-20 10:15:30
              </div>
            </div>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player7"></i></Button>
          </div>
        </div>

        <div className="map-player2">
          <div className="player-control">
            <Dropdown drop="up-centered">
              <Dropdown.Toggle variant="player"><i className="icon-gcsc icon-player icon-player2"></i></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item active>x1</Dropdown.Item>
                <Dropdown.Item>x10</Dropdown.Item>
                <Dropdown.Item>x100</Dropdown.Item>
                <Dropdown.Item>x1000</Dropdown.Item>
                <Dropdown.Item>x10000</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player3"></i></Button>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player4"></i></Button>
            <div className="range-group">              
              <div className="range-hover-time" style={{ left: `calc(50% - 3px)`, }}>
                <div className="range-arrow" />
                <div className="range-time">2023-08-23 13:15:30</div>
              </div>
              <div className="range-time">
                2023-08-20 10:15:30
              </div>
              <div className="range-bar">
                <input type="range" min="0" max="100" step="10" value="20" />
                <div className="progress-bar-track" style={{ width: `20%`, }} />
              </div>
              <div className="range-day">
                <div className="range-day-point" style={{ left: `calc(20% - 3px)`, }} />
                <div className="range-day-item loaded" />
                <div className="range-day-item loaded" />
                <div className="range-day-item loaded" />
                <div className="range-day-item loaded" />
                <div className="range-day-item error" />
                <div className="range-day-item requested" />
                <div className="range-day-item requested" />
                <div className="range-day-item" />
                <div className="range-day-item" />
                <div className="range-day-item" />
                <div className="range-day-item" />
              </div>
            </div>
            <Button variant="player" className=""><i className="icon-gcsc icon-player icon-player7"></i></Button>
          </div>
        </div>           

        <div className="map-guide map-guide1 arrow-bottom" style={{left: '50px', top: '20px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="icon">
            {/* <i className="icon-gcsc icon-map-guide1 map-guide1-1"></i> */} {/* 비정상접촉 */}
            {/* <i className="icon-gcsc icon-map-guide1 map-guide1-2"></i> */} {/* 관공선 */}
            {/* <i className="icon-gcsc icon-map-guide1 map-guide1-3"></i> */} {/* 중국 허가선박 */}
            <i className="icon-gcsc icon-map-guide1 map-guide1-4"></i> {/* 비허가선박 */}
            {/* <i className="icon-gcsc icon-map-guide1 map-guide1-5"></i> */} {/* MMSI 변조 */}
            {/* <i className="icon-gcsc icon-map-guide1 map-guide1-6"></i> */} {/* 신호소실 */}
          </div>
          <div className="text">
            비허가선박
          </div>
        </div>

        <div className="map-guide map-guide1 arrow-top" style={{left: '155px', top: '125px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="icon">
            <i className="icon-gcsc icon-map-guide1 map-guide1-1"></i> {/* 비정상접촉 */}
          </div>
          <div className="text">
            비정상접촉
          </div>
        </div>

        <div className="map-guide map-guide1 arrow-right" style={{left: '200px', top: '20px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="icon">
            <i className="icon-gcsc icon-map-guide1 map-guide1-2"></i> {/* 관공선 */}
          </div>
          <div className="text">
            관공선
          </div>
        </div>

        <div className="map-guide map-guide1 arrow-bottom" style={{left: '348px', top: '20px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="icon">
            <i className="icon-gcsc icon-map-guide1 map-guide1-3"></i> {/* 중국 허가선박 */}
          </div>
          <div className="text">
            중국 허가선박
          </div>
        </div>

        <div className="map-guide map-guide1 arrow-left" style={{left: '443px', top: '70px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="icon">
            <i className="icon-gcsc icon-map-guide1 map-guide1-5"></i> {/* MMSI 변조 */}
          </div>
          <div className="text">
            MMSI 변조
          </div>
        </div>

        <div className="map-guide map-guide1 arrow-top" style={{left: '362px', top: '125px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="icon">
            <i className="icon-gcsc icon-map-guide1 map-guide1-6"></i> {/* 신호소실 */}
          </div>
          <div className="text">
            신호소실
          </div>
        </div>
        
        <div className="map-pointer" style={{left: '94px', top: '80px',}}>
            <div className="pointer-bg pointer-black"></div> {/* 회색 동그라미 */}
            {/* <div className="pointer-bg pointer-red"></div> */} {/* 빨강 동그라미 */}
            {/* <div className="pointer-bg pointer-green-dotline"></div> */} {/* 녹색 점선 동그라미 */}
            {/* <div className="pointer-bg pointer-red-dotline"></div> */} {/* 빨강 점선 동그라미 */}
        </div>

        <div className="map-pointer" style={{left: '200px', top: '80px',}}>
            <div className="pointer-bg pointer-red"></div> {/* 빨강 동그라미 */}
        </div>

        <div className="map-pointer" style={{left: '310px', top: '28px',}}>
            <div className="pointer-bg pointer-green-dotline"></div> {/* 녹색 점선 동그라미 */}
        </div>

        <div className="map-pointer" style={{left: '400px', top: '80px',}}>
            <div className="pointer-bg pointer-red-dotline"></div> {/* 빨강 점선 동그라미 */}
        </div>

        <div className="map-guide map-guide2" style={{left: '250px', top: '200px',}}>
          <div className="header bg-danger">
            <div className="left">
              <div className="title">SOS 사고위험</div>
            </div>
            <div className="right">
              <CloseButton className="btn-white btn-sm" />
            </div>
          </div>
          <div className="body">
            <div className="lists-group">
              <div className="list-style-dot">
                <div className="list-item">
                  <div className="title">일시</div>
                  <div className="data">2024-11-11 23:11:11</div>
                </div>
                <div className="list-item">
                  <div className="title">선명</div>
                  <div className="data">MAASTRICH</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-guide map-signal-list" style={{left: 'calc(50% - 240px)', bottom: '50px', width: '480px',}}>
          <div className="collapse-body-group collapse-card">
            <div className="header">
              <div className="left">
                <div className="title">조난신호 리스트</div>
              </div>  
              <div className="right">
                <Button variant="icon" className="me-2"  onClick={() => setOpen9(!open9)}><i className="icon-gcsc icon-button size-30 icon-expand"></i></Button>
                <Button variant="icon" className="me-2"  onClick={() => setOpen9(!open9)}><i className="icon-gcsc icon-button size-30 icon-collapse"></i></Button>
                <CloseButton />
              </div>
            </div>
            <Collapse in={open9}>
              <div className="body">
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
              </div>
            </Collapse>
          </div>
        </div>

        <div className="map-guide map-guide2" style={{left: '250px', top: '300px',}}>
          <div className="header">
            <div className="left">
              <div className="title">남해244</div>
            </div>
            <div className="right">
              <Button variant="primary" className="btn-xs me-1">기상예보</Button>
              <CloseButton className="btn-white btn-sm" />
            </div>
          </div>
          <div className="body">
            <div className="lists-group">
              <div className="list-style-dot">
                <div className="list-item">
                  <div className="title">일시</div>
                  <div className="data">08일 11:00</div>
                </div>
                <div className="list-item">
                  <div className="title">풍속</div>
                  <div className="data">15.3m/s</div>
                </div>
                <div className="list-item">
                  <div className="title">풍향</div>
                  <div className="data">북북동</div>
                </div>
                <div className="list-item">
                  <div className="title">유의파고</div>
                  <div className="data">2.4m</div>
                </div>
                <div className="list-item">
                  <div className="title">수온</div>
                  <div className="data">8.4</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-guide map-guide2" style={{left: '250px', top: '540px',}}>
          <div className="header bg-success">
            <div className="left">
              <div className="title">비행가능 해역</div>
            </div>
            <div className="right">
              <Button variant="primary" className="btn-xs me-1">기상예보</Button>
              <CloseButton className="btn-white btn-sm" />
            </div>
          </div>
          <div className="body">
            <div className="lists-group">
              <div className="list-style-dot">
                <div className="list-item">
                  <div className="title">시간</div>
                  <div className="data">15:00 KST</div>
                </div>
                <div className="list-item">
                  <div className="title">시정</div>
                  <div className="data">37.7mile</div>
                </div>
                <div className="list-item">
                  <div className="title">운고</div>
                  <div className="data">962ft</div>
                </div>
                <div className="list-item">
                  <div className="title">풍향</div>
                  <div className="data">165° </div>
                </div>
                <div className="list-item">
                  <div className="title">풍속</div>
                  <div className="data">5KT</div>
                </div>
              </div>
            </div>
            <hr className='my-1' />
            <div className="lists-group">
              <div className="list-style-dot">
                <div className="list-item">
                  <div className="title">출발지</div>
                  <div className="data">출발지</div>
                </div>
                <div className="list-item">
                  <div className="title">경유지</div>
                  <div className="data">경유지</div>
                </div>
                <div className="list-item">
                  <div className="title">도착지</div>
                  <div className="data">도착지</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-guide map-guide2" style={{left: '450px', top: '540px',}}>
          <div className="header bg-danger">
            <div className="left">
              <div className="title">비행제한 해역</div>
            </div>
            <div className="right">
              <Button variant="primary" className="btn-xs me-1">기상예보</Button>
              <CloseButton className="btn-white btn-sm" />
            </div>
          </div>
          <div className="body">
            <div className="lists-group">
              <div className="list-style-dot">
                <div className="list-item">
                  <div className="title">시간</div>
                  <div className="data">15:00 KST</div>
                </div>
                <div className="list-item">
                  <div className="title">시정</div>
                  <div className="data">37.7mile</div>
                </div>
                <div className="list-item">
                  <div className="title">운고</div>
                  <div className="data">962ft</div>
                </div>
                <div className="list-item">
                  <div className="title">풍향</div>
                  <div className="data">165° </div>
                </div>
                <div className="list-item">
                  <div className="title">풍속</div>
                  <div className="data">5KT</div>
                </div>
              </div>
            </div>
            <hr className='my-1' />
            <div className="lists-group">
              <div className="list-style-dot">
                <div className="list-item">
                  <div className="title">출발지</div>
                  <div className="data">출발지</div>
                </div>
                <div className="list-item">
                  <div className="title">경유지</div>
                  <div className="data">경유지</div>
                </div>
                <div className="list-item">
                  <div className="title">도착지</div>
                  <div className="data">도착지</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-guide map-guide3 arrow-top" style={{right: '100px', top: '100px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="info info1">
            <img className="image-type" src={typeImg} title="종류" alt="종류" />
            <img className="image-flag" src={flagImg} title="국기" alt="국기" />
            <div className="name">
              근영호
              <small>13450135</small>
            </div>
          </div>
          <div className="info info2">
            <div className="text">속도 <span>13.6kn</span></div>
            <div className="text">항로 <span>265.6°</span></div>
          </div>
        </div>

        <div className="map-guide map-guide4 arrow-right" style={{left: '10px', top: '210px',}}> {/* class명 arrow-top, arrow-right, arrow-bottom, arrow-left */}
          <div className="text1">거리 100KM</div>
          <div className="text2">15분 소요 예상</div>
        </div>

        <div className="map-pointer" style={{left: '110px', top: '200px',}}> {/* css 애니메이션 */}
          <div className="pointer-animation">
            <div className="pointer-icon circle-bg pointer-airplain"></div> {/* 비행기아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color1">
            <div className="pointer-icon circle-bg pointer-helicopter"></div> {/* 헬리콥터아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color2">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color3">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color4">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color5">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
        </div>

        <div className="map-pointer" style={{left: '180px', top: '200px',}}> {/* css 애니메이션 */}
          <div className="pointer-animation bg-color6">
            <div className="pointer-icon circle-bg pointer-airplain"></div> {/* 비행기아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color7">
            <div className="pointer-icon circle-bg pointer-helicopter"></div> {/* 헬리콥터아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color8">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color9">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color10">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
          <div className="pointer-animation bg-color11">
            <div className="pointer-icon circle-bg pointer-ship"></div> {/* 배아이콘 */}
            <div className="pointer-circle"></div>
          </div>
        </div>

        <div className="map-pointer" style={{left: '300px', top: '450px',}}> {/* 이미지 애니메이션 */}
          <img className="image-pointer" src={pointerImg1} alt="비행기" />
          <img className="image-pointer" src={pointerImg2} alt="헬리콥터" />
          <img className="image-pointer" src={pointerImg3} alt="배" />
        </div>

        {/* <div className="map-pointer" style={{left: '30px', top: '520px',}}> gif 이미지 애니메이션
          <img className="image-pointer" src={pointergifImg1} alt="비행기" />
          <img className="image-pointer" src={pointergifImg2} alt="헬리콥터" />
          <img className="image-pointer" src={pointergifImg3} alt="배" />
        </div> */}

        <div className="map-guide map-guide5" style={{right: '100px', top: '200px',}}>
          <div className="text1">선택선박 : 20척</div>
          <ListGroup className="list-group-flush">
            <ListGroup.Item action href="#">위도/경도 복사</ListGroup.Item>
            <ListGroup.Item action href="#">관심선박 일괄 등록</ListGroup.Item>
            <ListGroup.Item action href="#">좌표 복사</ListGroup.Item>
            <ListGroup.Item action href="#">관심선박 등록</ListGroup.Item>
            <ListGroup.Item action href="#">가상타겟</ListGroup.Item>
            <ListGroup.Item action href="#">임검침로</ListGroup.Item>
          </ListGroup>
        </div>

        <div className="map-guide map-guide6" style={{right: '240px', top: '200px',}}>
          <div className="text1">MAASTRICH</div>
          <div className="text2">11112222223</div>
        </div>

        <div className="map-video">
          <div className="map-video-inner">
            <CloseButton />
            <div className="video-group">동영상 들어가는 곳</div>
          </div>
        </div>

        <div className="map-guide map-weather" style={{right: '330px', top: '100px',}}>
          <OverlayTrigger trigger="click" placement="left" overlay={popover} show={show} onToggle={handleToggle}>
            <Button variant="weather" className="">
              <img className="image-weather" src={weatherImg0101} alt="맑음" />
            </Button>
          </OverlayTrigger>
        </div>

      </div>

      <div className="map-band">
        <Collapse in={open5}>
          <div className="collapse-body-group collapse-band">
            <div className="header">
              <div className="left">
                <div className="title">X Band 2024-10-19 (00:00:06)</div>
              </div>  
              <div className="right">
                <Button variant="icon" className="me-2"  onClick={() => setOpen5(!open5)}><i className="icon-gcsc icon-button size-30 icon-collapse"></i></Button>
                <CloseButton />
              </div>
            </div>
            <div className="body">
              <div className="grid-group">
                <div className="realgrid-group">리얼그리드 들어가는 곳</div>
              </div>
            </div>
          </div>
        </Collapse>
        <Button variant="band" className=""  onClick={() => setOpen5(!open5)}>X Band 2024-10-19 (00:00:06)</Button> 
      </div>        

      <div className="map-card">            
        <div className="collapse-body-group collapse-card">
          <div className="header">
            <div className="left">
              <div className="title">선박정보</div>
            </div>  
            <div className="right">
              <Button variant="icon" className="me-2"><i className="icon-gcsc icon-button size-30 icon-ship-check"></i></Button>
              <Button variant="icon" className="me-2"  onClick={() => setOpen6(!open6)}><i className="icon-gcsc icon-button size-30 icon-expand"></i></Button>
              <Button variant="icon" className="me-2"  onClick={() => setOpen6(!open6)}><i className="icon-gcsc icon-button size-30 icon-collapse"></i></Button>
              <Button variant="icon" className="btn-move me-2"><i className="bi bi-arrows-move"></i></Button>
              <CloseButton />
            </div>
          </div>
          <Collapse in={open6}>
            <div className="body">
              <div className="card-ship-group overflow-x-auto">
                <div className="card-ship-item">
                  <div className="header pb-0">
                    <div className="left">                      
                      <div className="badge-group">
                        <Badge bg="data-a" className="badge-data disabled">A</Badge>
                        <Badge bg="data-v" className="badge-data disabled">V</Badge>
                        <Badge bg="data-e" className="badge-data">E</Badge>
                        <Badge bg="data-t" className="badge-data disabled">T</Badge>
                        <Badge bg="data-d" className="badge-data disabled">D</Badge>
                        <Badge bg="data-r" className="badge-data">R</Badge>
                      </div>
                    </div>
                    <div className="right">                      
                      <ToggleButton id="toggle-favorite" type="checkbox" variant="icon" className="btn-bi btn-favorite me-1" checked={checked} value={1} onChange={(e) => setChecked(e.currentTarget.checked)}>
                        <i className="bi bi-star-fill"></i>
                      </ToggleButton>
                      <CloseButton />
                    </div>
                  </div>         
                  <div className="header pt-0 border-bottom">
                    <div className="left"> 
                      <img className="image-type" src={typeImg} title="종류" alt="종류" />
                      <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                      <div className="name">
                        근영호
                        <small>13450135</small>
                      </div>
                    </div>
                  </div>            
                  <div className="carousels-group">
                    <div className="carousels-group-inner">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <Ratio aspectRatio="16x9">
                            <img className="image-carousels" src={carouselImg1} alt="1" />
                          </Ratio>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Ratio aspectRatio="16x9">
                            <img className="image-carousels" src={carouselImg2} alt="2" />
                          </Ratio>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                  <div className="body"> 
                    <div className="range-group fromto-group">
                      <div className="range-bar">
                        <div className="progress-bar-track" style={{ width: `20%`, }} />
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
                  </div>

                  <div className="footer button-group btn-block border-top">
                    <Button variant="outline-primary" size="sm" className="btn-text-icon rounded-pill">
                      항적조회 <i className="icon-gcsc icon-button icon-search2 ms-auto"></i>
                    </Button>
                    <Button variant="outline-primary" size="sm" className="btn-text-icon rounded-pill">
                      항로예측 <i className="icon-gcsc icon-button icon-search2 ms-auto"></i>
                    </Button>
                    <Button variant="primary" size="sm" className="btn-text-icon">
                      상세정보 <i className="icon-gcsc icon-button icon-list ms-2"></i>
                    </Button>
                  </div>
                  <div className="footer border-top">
                    <div className="footer-text">데이터 수신시간 : 2024-11-23 11:23:00</div>
                  </div>
                </div>

                <div className="card-ship-item">
                  <div className="header pb-0">
                    <div className="left">                      
                      <div className="badge-group">
                        <Badge bg="data-a" className="badge-data disabled">A</Badge>
                        <Badge bg="data-v" className="badge-data disabled">V</Badge>
                        <Badge bg="data-e" className="badge-data">E</Badge>
                        <Badge bg="data-t" className="badge-data disabled">T</Badge>
                        <Badge bg="data-d" className="badge-data disabled">D</Badge>
                        <Badge bg="data-r" className="badge-data">R</Badge>
                      </div>
                    </div>
                    <div className="right">                      
                      <ToggleButton id="toggle-favorite" type="checkbox" variant="icon" className="btn-bi btn-favorite me-1" checked={checked} value={1} onChange={(e) => setChecked(e.currentTarget.checked)}>
                        <i className="bi bi-star-fill"></i>
                      </ToggleButton>
                      <CloseButton />
                    </div>
                  </div>         
                  <div className="header pt-0 border-bottom">
                    <div className="left"> 
                      <img className="image-type" src={typeImg} title="종류" alt="종류" />
                      <img className="image-flag" src={flagImg} title="국기" alt="국기" />
                      <div className="name">
                        XINGGUANG68
                        <small>13450135</small>
                      </div>
                    </div>
                  </div>            
                  <div className="carousels-group">
                    <div className="carousels-group-inner">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <Ratio aspectRatio="16x9">
                            <img className="image-carousels" src={carouselImg1} alt="1" />
                          </Ratio>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Ratio aspectRatio="16x9">
                            <img className="image-carousels" src={carouselImg2} alt="2" />
                          </Ratio>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                  <div className="body"> 
                    <div className="range-group fromto-group">
                      <div className="range-bar">
                        <div className="progress-bar-track" style={{ width: `100%`, }} />
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
                          <div className="data">393.3° </div>
                        </div>
                        <div className="item">
                          <div className="title">홀수</div>
                          <div className="data">10.1m</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer button-group btn-block border-top">
                    <Button variant="outline-primary" size="sm" className="btn-text-icon rounded-pill">
                      항적조회 <i className="icon-gcsc icon-button icon-search2 ms-auto"></i>
                    </Button>
                    <Button variant="outline-primary" size="sm" className="btn-text-icon rounded-pill">
                      항로예측 <i className="icon-gcsc icon-button icon-search2 ms-auto"></i>
                    </Button>
                    <Button variant="primary" size="sm" className="btn-text-icon">
                      상세정보 <i className="icon-gcsc icon-button icon-list ms-2"></i>
                    </Button>
                  </div>
                  <div className="footer border-top">
                    <div className="footer-text">데이터 수신시간 : 2024-11-23 11:23:00</div>
                  </div>
                </div>

              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>


    {/* Offcanvas 라이브맵 */}
    <Offcanvas show={off1show} onHide={() => setOff1Show(false)} scroll={true} backdrop={false} placement="start" className="offcanvas-lnb offcanvas-lnb1">
      {/* <Offcanvas.Header closeButton>
        <Offcanvas.Title>라이브맵</Offcanvas.Title>
      </Offcanvas.Header> */}
      <Offcanvas.Body>
        <div className="lnb-group">
          <Tabs justify defaultActiveKey="tab1">
            <Tab eventKey="tab1" title="필터">
              <div className="overflow-y-auto" style={{height: 'calc(100% - 59px)',}}>
                <Accordion defaultActiveKey="0">
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        선종/기종 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="0" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">어선</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">여객선</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">화물선</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">유조선</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">관공선</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">함정</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">항공기</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">어망/부이</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">기타</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        국적 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="1" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">한국</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">중국</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">일본</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">북한</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">기타</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        신호 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="2" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">AIS</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">VPASS</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">ENAV</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">VTS_AIS</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">D_MF_HF</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">VTS_RADAR</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        AI모드 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="3" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">MMSI 변조</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">중국 허가선박</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">관공선</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">비정상 접촉</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">비허가 선박</div>
                          <div className="right"><Form.Check type="switch" id="custom-switch" label="" /></div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        조난신호 
                      </Card.Title>
                      <div className="right">
                        <Form.Check type="switch" id="custom-switch" label="" />
                      </div>
                    </Card.Header>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        다크시그널 
                      </Card.Title>
                      <div className="right">
                        <Form.Check type="switch" id="custom-switch" label="" />
                      </div>
                    </Card.Header>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        위험물 
                      </Card.Title>
                      <div className="right">
                        <Form.Check type="switch" id="custom-switch" label="" />
                      </div>
                    </Card.Header>
                  </Card>                  
                </Accordion>
              </div>
              <div className="button-group btn-block">
                <Button variant="outline-primary" className="btn-block">저장</Button>
              </div>
            </Tab>
            <Tab eventKey="tab2" title="레이어">
              <div className="overflow-y-auto" style={{height: 'calc(100% - 59px)',}}>
                <Accordion defaultActiveKey="0">
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        배경지도 
                      </Card.Title>
                      <div className="right">
                        <Form.Check type="switch" id="custom-switch" label="" />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="form-range-item">
                        <div className="label">투명도조절</div>
                        <div className="range-bar">
                          <div className="start-ball"></div>
                          <input type="range" min="0" max="100" step="10" value="30" />
                          <div className="progress-bar-track" style={{ width: `30%`, }} />
                          <div className="end-ball"></div>
                        </div>
                      </div>
                      <div className="form-check-item">
                        <div className="label">전자해도</div>
                        <div className="right"><Form.Check type="radio" id="" label="" /></div>
                      </div>
                      <div className="form-check-item">
                        <div className="label">일반지도</div>
                        <div className="right"><Form.Check type="radio" id="" label="" /></div>
                      </div>
                      <div className="form-check-item">
                        <div className="label">영상지도</div>
                        <div className="right"><Form.Check type="radio" id="" label="" /></div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        위성영상관리 
                      </Card.Title>
                      <div className="right">
                        <CustomToggle eventKey="0" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="form-check-item form-satellite">
                          <ToggleButton id="toggle-check1" type="checkbox" variant="outline-primary" className="btn-image-toggle rounded-circle" checked={checked} value={1} onChange={(e) => setChecked(e.currentTarget.checked)}>
                            <i className="icon-gcsc icon-toggle icon-maptest"></i>
                          </ToggleButton>
                          <dl className="form-text-item">
                            <dt>불빛영상테스트</dt>
                            <dd>2024-09-24 08:00:00</dd>
                            <dt>위성명</dt>
                            <dd>test</dd>
                            <dt>영상종류</dt>
                            <dd>VIIRS</dd>
                          </dl>
                        </div>
                        <div className="form-check-item form-satellite">
                          <ToggleButton id="toggle-check2" type="checkbox" variant="outline-primary" className="btn-image-toggle rounded-circle" checked={checked} value={1} onChange={(e) => setChecked(e.currentTarget.checked)}>
                            <i className="icon-gcsc icon-toggle icon-maptest"></i>
                          </ToggleButton>                        
                          <dl className="form-text-item">
                            <dt>광학위성</dt>
                            <dd>2024-09-24 08:00:00</dd>
                            <dt>위성명</dt>
                            <dd>test</dd>
                            <dt>영상종류</dt>
                            <dd>VIIRS</dd>
                          </dl>
                        </div>
                        <div className="form-check-item form-satellite">
                          <ToggleButton id="toggle-check3" type="checkbox" variant="outline-primary" className="btn-image-toggle rounded-circle" checked={checked} value={1} onChange={(e) => setChecked(e.currentTarget.checked)}>
                            <i className="icon-gcsc icon-toggle icon-maptest"></i>
                          </ToggleButton> 
                          <dl className="form-text-item">
                            <dt>GK2B_GOCI2_L2_20231221_041530_LA_S004_MF.nc</dt>
                            <dd>2024-09-24 08:00:00</dd>
                            <dt>위성명</dt>
                            <dd>test</dd>
                            <dt>영상종류</dt>
                            <dd>VIIRS</dd>
                          </dl>
                        </div>                          
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        RF위성 
                      </Card.Title>
                      <div className="right">
                        <CustomToggle eventKey="1" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">
                            <div className="label-badge">
                              <Badge bg="info" pill>X</Badge>
                              <div className="date">2024-10-19 00:00:06</div>
                            </div>
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            <div className="label-badge">
                              <Badge bg="info" pill>S</Badge>
                              <div className="date">2024-10-19 00:00:06</div>
                            </div>
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        조업자제해역 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="2" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>                        
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="대화퇴 조업자제해역" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="서해 조업자제해역" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="어업금지구역(조업금지구역)" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        해경 관할
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="3" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>                        
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="해경관할구역" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        중국
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="4" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>                        
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="중국방공식별구역" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        북한
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="5" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>                        
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="남북한 강영역제외" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        기타
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="6" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>                        
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="VTS 55" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        해저케이블
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="7" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body>                        
                        <div className="form-check-item">
                          <Form.Check type="checkbox" id="" label="해저케이블" />
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="button-group btn-block">
                <Button variant="outline-primary" className="btn-block">등록</Button>
                <Button variant="outline-primary" className="btn-block">수정</Button>
                <Button variant="outline-primary" className="btn-block">삭제</Button>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Offcanvas.Body>
      <Button variant="offcanvas-close" onClick={() => setOff1Show(false)}><i className="icon-gcsc icon-offcanvas icon-offcanvas-close"></i></Button>
    </Offcanvas>

    {/* Offcanvas 선박DB */}
    <Offcanvas show={off2show} onHide={() => setOff2Show(false)} scroll={true} backdrop={false} placement="start" className="offcanvas-lnb offcanvas-lnb2 offcanvas-full">
      <div className={ isVisible ? 'offcanvas-search search-result-show' : 'offcanvas-search' }>
        <div className="offcanvas-inner">
          <Offcanvas.Header closeButton data-bs-theme="dark">
            <Offcanvas.Title>
              <div className="logo-sm"></div>
              <div className="divider-vertical height-16" />
              <div className="mt-1">선박DB</div>
            </Offcanvas.Title>
            <Button variant="link" className="btn-text-icon ms-auto"><i className="icon-gcsc icon-button icon-xls me-2"></i> 중국어선 분석 다잡아 시스템.xlsx</Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="body-inner">
              <div className="total-search">
                <div className="total-search-group">
                  <div className="total-text">
                    <i className="icon-gcsc icon-lnb icon-lnb2"></i> 선박을 검색하세요.
                  </div>
                  <InputGroup className="total-search">
                    <Form.Control type="search" size="lg" placeholder="선박명/MMSI/IMO를 입력해주세요." />
                    <Button variant="icon" size="lg" className="" onClick={handleClick}><i className="icon-gcsc icon-button size-30 icon-search-lg"></i></Button>
                    <Button variant="icon" size="lg" className="me-2" onClick={() => setOpen8(!open8)}><i className="bi-filter-square-fill"></i></Button>
                  </InputGroup>
                  <Collapse in={open8}>
                    <div className="filters-group">
                      <div className="filters-inner">
                        <Row className="g-3 justify-content-center">       
                          <Col xs="auto">
                            <Form.Group className="form-item-group">
                              <Form.Label>조회일</Form.Label>
                              <InputGroup className="align-items-center">
                                <div className="date-range-group">
                                  <Form.Control type="date" /> 
                                  <div className="during">~</div>
                                  <Form.Control type="date" />
                                </div>
                                <Form.Check type="checkbox" label="전체기간" className="ms-2 mb-0" />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Col xs="auto">
                            <Form.Group className="form-item-group">
                              <Form.Label>선종</Form.Label>
                              <Form.Select>
                                <option>선택</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col xs="auto">
                            <Form.Group className="form-item-group">
                              <Form.Label>국적</Form.Label>
                              <Form.Select>
                                <option>선택</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col xs="auto">
                            <Form.Group className="form-item-group">
                              <Form.Label>검색조건</Form.Label>
                              <Form.Select>
                                <option>멀티셀렉트(선박정보,관심선박,관심영역,분석,위성 포함)</option>
                              </Form.Select>                
                            </Form.Group>
                          </Col>
                        </Row>
                      </div>
                    </div>  
                  </Collapse>           
                </div>
              </div>
            </div>
          </Offcanvas.Body>      
        </div>

        <div className="total-result">              
          <div className="tabs-group">
            <div className="tabs-right-button">
              <Button variant="outline-primary">다운로드</Button>
            </div>
            <Tabs defaultActiveKey="offTab1">
              <Tab eventKey="offTab1" title="선박정보(123건)">
                <div className="items-group mt-20">
                  <div className="body">
                    <div className="grid-group">
                      <div className="realgrid-group">
                        리얼그리드 들어가는 곳

                        {/* 그리드내 태그 */}
                        <div className="grid-picture">
                          <img className="image-grid" src={gridImg} alt="사진이미지" />
                        </div>
                        <img className="image-detail" src={detailImg} alt="선종" /> 여객선
                        <img className="image-ship" src={shipImg} alt="지도 아이콘" />
                        <img className="image-ship rotate-45" src={shipImg} alt="지도 아이콘" /> {/* 45도 기울기 이미지 */}
                        <button type="button" className="btn btn-outline-primary btn-sm btn-icon rounded-1"><i className="bi bi-geo-alt"></i></button>

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
              <Tab eventKey="offTab2" title="관심선박(100건)">
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
              <Tab eventKey="offTab3" title="관심영역(100건)">
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
              <Tab eventKey="offTab4" title="분석(100건)">
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
              <Tab eventKey="offTab5" title="위성(100건)">
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
          </div>
        </div>
      </div>
    </Offcanvas>

    {/* Offcanvas 해경자산 */}
    <Offcanvas show={off3show} onHide={() => setOff3Show(false)} scroll={true} backdrop={false} placement="start" className="offcanvas-lnb offcanvas-lnb3">
      {/* <Offcanvas.Header closeButton>
        <Offcanvas.Title>해경자산</Offcanvas.Title>
      </Offcanvas.Header> */}
      <Offcanvas.Body>
        <div className="lnb-group">
          <Tabs justify defaultActiveKey="tab1">
            <Tab eventKey="tab1" title="자산현황">
              <div className="overflow-y-auto" style={{height: 'calc(100% - 59px)',}}>
                <Accordion defaultActiveKey="0">
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        전체 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="0" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">
                            함정
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            회전익
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            고정익
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>                      
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        영상 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="1" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">
                            ENG
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            CCTV
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            무인헬기
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            유선 드론
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>                      
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        AI 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="2" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">
                            영상재생
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div> 
                        <div className="form-check-item">
                          <div className="label">
                            선박영상감지
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>  
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>                  
                </Accordion>
              </div>
              <div className="button-group btn-block">
                <Button variant="outline-primary" className="btn-block">저장</Button>
              </div>
            </Tab>
            <Tab eventKey="tab2" title="레이어">
              <div className="overflow-y-auto" style={{height: 'calc(100% - 59px)',}}>
                <Accordion defaultActiveKey="0">
                  <Card className="card-lnb">
                    <Card.Header>
                      <Card.Title>
                        전체 
                      </Card.Title>
                      <Form.Check type="switch" id="custom-switch" className="form-switch-all" label="" />
                      <div className="right">
                        <CustomToggle eventKey="0" />
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="form-check-item">
                          <div className="label">
                            상황발생
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            가상티켓
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>
                        <div className="form-check-item">
                          <div className="label">
                            임검침로
                          </div>
                          <div className="right">
                            <Form.Check type="switch" id="" label="" />
                          </div>
                        </div>                      
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>                
                </Accordion>
              </div>
              <div className="button-group btn-block">
                <Button variant="outline-primary" className="btn-block">저장</Button>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Offcanvas.Body>
      <Button variant="offcanvas-close" onClick={() => setOff3Show(false)}><i className="icon-gcsc icon-offcanvas icon-offcanvas-close"></i></Button>
    </Offcanvas>

    {/* Offcanvas 분석자산 */}
    <Offcanvas show={off4show} onHide={() => setOff4Show(false)} scroll={true} backdrop={false} placement="start" className="offcanvas-lnb offcanvas-lnb4">
      {/* <Offcanvas.Header closeButton>
        <Offcanvas.Title>분석자산</Offcanvas.Title>
      </Offcanvas.Header> */}
      <Offcanvas.Body>
        <div className="lnb-group">
          <div className="overflow-y-auto" style={{height: 'calc(100% - 59px)',}}>
            <div className="items-group pa-20">
              <div className="header">
                <div className="left">
                  <div className="title">분석 검색</div>
                </div>
                <div className="right">
                  <Button variant="outline-primary">분석리스트</Button>
                </div>
              </div>
              <div className="body">
                <div className="forms-group">
                  <Table>
                    <colgroup>
                      <col style={{width: '70px',}} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>분석대상</th>
                        <td>
                          <Form.Check inline type="radio" id="" label="항적분석" />
                          <Form.Check inline type="radio" id="" label="리플레이" />
                          <Form.Check inline type="radio" id="" label="타임라인" />
                          <Form.Check inline type="radio" id="" label="사용자분석" />
                        </td>
                      </tr>
                      <tr>
                        <th>분석기간</th>
                        <td>
                          <div className="date-range-group">
                            <Form.Control type="datetime-local" style={{width: '165px'}} /> 
                            <div className="during">~</div>
                            <Form.Control type="datetime-local" style={{width: '165px'}} />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>검색조건</th>
                        <td>                          
                          <Form.Check inline type="radio" id="" label="관심영역" />
                          <Form.Check inline type="radio" id="" label="관심선박" />
                          <Form.Check inline type="radio" id="" label="선박검색" />
                          <Form.Select className="mt-1">
                            <option>관심영역 선택</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <th>검색조건</th>
                        <td>                          
                          <Form.Check inline type="radio" id="" label="관심영역" />
                          <Form.Check inline type="radio" id="" label="관심선박" />
                          <Form.Check inline type="radio" id="" label="선박검색" />                          
                          <InputGroup className="mt-1">
                            <Form.Control type="text" />
                            <Button variant="outline-primary" className="ms-2 btn-text-icon">검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i></Button>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <th>검색조건</th>
                        <td>                          
                          <Form.Check inline type="radio" id="" label="시나리오 선택" />
                          <Form.Check inline type="radio" id="" label="사용자 파일 업로드" />
                          <Form.Select className="mt-1 mb-10">
                            <option>관심영역 선택</option>
                          </Form.Select>                                              
                          <Form.Check inline type="checkbox" className="mb-0" id="" label="풍력단지 영역 제외" />      
                          <Form.Check inline type="checkbox" className="mb-0" id="" label="물표 매핑 영역 제외" />      
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="items-group mt-20">
                  <div className="header">
                    <div className="left">
                      <div className="title size-16">선박 리스트</div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="grid-group">
                      <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                    </div>
                  </div>
                </div>
                <div className="button-group btn-block pa-0 mt-20">
                  <Button variant="primary" className="btn-block">분석</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="button-group btn-block">
            <Button variant="outline-primary" className="btn-block">등록</Button>
            <Button variant="outline-primary" className="btn-block">다운로드</Button>
            <Button variant="outline-primary" className="btn-block">임시저장</Button>
          </div>
        </div>
      </Offcanvas.Body>
      <Button variant="offcanvas-close" onClick={() => setOff4Show(false)}><i className="icon-gcsc icon-offcanvas icon-offcanvas-close"></i></Button>
    </Offcanvas>

    {/* Offcanvas 분석맵 */}
    <Offcanvas show={off5show} onHide={() => setOff5Show(false)} scroll={true} backdrop={false} placement="start" className="offcanvas-lnb offcanvas-lnb5">
      {/* <Offcanvas.Header closeButton>
        <Offcanvas.Title>분석맵</Offcanvas.Title>
      </Offcanvas.Header> */}
      <Offcanvas.Body>
        <div className="lnb-group">
          <Tabs justify defaultActiveKey="tab1">
            <Tab eventKey="tab1" title="위성">
              <div className="overflow-y-auto" style={{height: '100%',}}>
                <div className="items-group pa-20">
                  <div className="header border-bottom">
                    <div className="left">
                      <div className="title">위성리스트</div>
                    </div>
                    <div className="right">
                      <Button variant="outline-primary">이전으로 가기</Button>
                    </div>
                  </div>
                  <div className="body">
                    <Card className="card-lnb overflow-hidden">
                      <Card.Body className="overflow-y-auto" style={{height: 'calc(100vh - 125px)',}}>
                        <div className="form-check-item sub-group">
                          <Form.Check type="checkbox" id="" label="S Band 2024-10-10 (10:00:00)" /> 
                          <div className="form-check-sub-item">
                            <Form.Check type="checkbox" id="" label="[불빛위성] 2024.10.10..npp.DNB.750" />
                            <Form.Check type="checkbox" id="" label="[SAR] ICEYE_X11_GRD_SM 2024.10.10..npp.DNB.750" />
                            <Form.Check type="checkbox" id="" label="[BlackSky] BSG-104-20241010-0850000 2024.10.10..npp.DNB.750" />
                          </div> 
                        </div> 
                        <div className="form-check-item sub-group">
                          <Form.Check type="checkbox" id="" label="S Band 2024-10-10 (10:00:00)" /> 
                        </div> 
                        <div className="form-check-item sub-group">
                          <Form.Check type="checkbox" id="" label="S Band 2024-10-10 (10:00:00)" /> 
                        </div> 
                        <div className="form-check-item sub-group">
                          <Form.Check type="checkbox" id="" label="S Band 2024-10-10 (10:00:00)" /> 
                        </div> 
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab2" title="위성">
              <div className="overflow-y-auto" style={{height: '100%',}}>
                <div className="items-group pa-20">
                  <div className="header border-bottom">
                    <div className="left">
                      <div className="title">위성</div>
                    </div>
                    <div className="right">
                      <Button variant="outline-primary">위성리스트</Button>
                      <Button variant="outline-primary">등록</Button>
                    </div>
                  </div>
                  <div className="body">
                    <div className="calendar-group">
                      달력들어가는 곳
                    </div>
                    <div className="calendar-legend-group mt-10">
                      <div className="legend-item">
                        <div className="legend-color legend-color1"></div>
                        <div className="legend-name">불빛위성</div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color legend-color2"></div>
                        <div className="legend-name">SAR</div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color legend-color3"></div>
                        <div className="legend-name">BlackSky</div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color legend-color4"></div>
                        <div className="legend-name">Rf위성</div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color legend-color7"></div>
                        <div className="legend-name">예약</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="items-group pa-20 mt-20">
                  <div className="header">
                    <div className="left">
                      <div className="title">위성 촬영 내역</div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="grid-group">
                      <div className="realgrid-group">리얼그리드 들어가는 곳</div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab3" title="기상">
              <div className="overflow-y-auto" style={{height: '100%',}}>
                <div className="items-group pa-20">
                  <div className="header border-bottom">
                    <div className="left">
                      <div className="title">기상</div>
                    </div>
                    <div className="right">
                      <Button variant="link2" size="sm" className="btn-text-icon">전체열기 <i className="icon-gcsc icon-button icon-sm icon-arrow-down ms-1"></i></Button>
                    </div>
                  </div>
                  <div className="body">
                    <Accordion defaultActiveKey="0">
                      <Card className="card-lnb">
                        <Card.Header>
                          <Card.Title>
                            정보 
                          </Card.Title>
                          <div className="right">
                            <CustomToggle eventKey="0" />
                          </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="form-check-item">
                              <Form.Check type="checkbox" id="" label="관측정보" /> 
                            </div>                  
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card-lnb">
                        <Card.Header>
                          <Card.Title>
                            해상구역도 
                          </Card.Title>
                          <div className="right">
                            <CustomToggle eventKey="1" />
                          </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>                            
                            <div className="form-check-item">
                              <Form.Check type="checkbox" id="" label="예특보구역" /> 
                            </div> 
                            <div className="form-check-item">
                              <Form.Check type="checkbox" id="" label="해구도" /> 
                            </div> 
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>     
                      <Card className="card-lnb">
                        <Card.Header>
                          <Card.Title>
                            해구별예측 
                          </Card.Title>
                          <div className="right">
                            <CustomToggle eventKey="2" />
                          </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>                            
                            <div className="form-check-item">
                              <Form.Check type="radio" id="" label="유의파고" />
                            </div> 
                            <div className="form-check-item">
                              <Form.Check type="radio" id="" label="풍향/풍속" /> 
                            </div> 
                            <div className="form-check-item">
                              <Form.Check type="radio" id="" label="파향" /> 
                            </div>
                            <div className="form-check-item">
                              <Form.Check type="radio" id="" label="파주기" />
                            </div>
                            <div className="form-check-item">
                              <Form.Check type="radio" id="" label="수온" /> 
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>                
                    </Accordion>
                    <div className="button-group btn-block pa-0 mt-20">
                      <Button variant="primary" className="btn-block">태풍정보</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab4" title="통계">
              <div className="overflow-y-auto" style={{height: '100%',}}>
                <div className="items-group pa-20">
                  <div className="header">
                    <div className="left">
                      <div className="title">통계</div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="forms-group">
                      <Table>
                        <colgroup>
                          <col style={{width: '70px',}} />
                          <col />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th>통계기간</th>
                            <td>
                              <div className="date-range-group">
                                <Form.Control type="date" /> 
                                <div className="during">~</div>
                                <Form.Control type="date" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>조건선택</th>
                            <td>
                              <Form.Check inline type="radio" id="" label="누적항적" />
                              <Form.Check inline type="radio" id="" label="해역분포도" />
                              <Form.Check inline type="radio" id="" label="통향량 히트맵" />
                              <Form.Check inline type="radio" id="" label="사건사고" />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="button-group btn-block pa-0 mt-20">
                      <Button variant="primary" className="btn-block">통계</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Offcanvas.Body>
      <Button variant="offcanvas-close" onClick={() => setOff5Show(false)}><i className="icon-gcsc icon-offcanvas icon-offcanvas-close"></i></Button>
    </Offcanvas>

    {/* Offcanvas 마이페이지 */}
    <Offcanvas show={off6show} onHide={() => setOff6Show(false)} scroll={true} backdrop={false} placement="start" className="offcanvas-lnb offcanvas-lnb6">
      <Offcanvas.Header>
        <div className="mypage-header">
          <div className="user">조영민님</div>
          <Button variant="logout"><i className="icon-gcsc icon-logout"></i></Button>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="lnb-group">
          <div className="overflow-y-auto" style={{height: 'calc(100% - 59px)',}}>
            <Accordion defaultActiveKey="0">                          
              <Card className="card-lnb">
                <Card.Header>
                  <Card.Title>
                    메뉴 설정
                  </Card.Title>
                  <div className="right">
                    <Button variant="accordion-arrow"><i className="icon-gcsc icon-accordion icon-accordion-arrow arrow-right"></i></Button>
                  </div>
                </Card.Header>
              </Card>
              <Card className="card-lnb">
                <Card.Header>
                  <Card.Title>
                    나의 대시보드
                  </Card.Title>
                  <div className="right">
                    <Button variant="accordion-arrow" onClick={() => setOff7Show(true)}><i className="icon-gcsc icon-accordion icon-accordion-arrow arrow-right"></i></Button>
                  </div>
                </Card.Header>
              </Card>
              <Card className="card-lnb">
                <Card.Header>
                  <Card.Title>
                    분석/공유/알람
                  </Card.Title>
                  <div className="right">
                    <Button variant="accordion-arrow"><i className="icon-gcsc icon-accordion icon-accordion-arrow arrow-right"></i></Button>
                  </div>
                </Card.Header>
              </Card>
              <Card className="card-lnb">
                <Card.Header>
                  <Card.Title>
                    테마 설정 
                  </Card.Title>
                  <div className="right">
                    <CustomToggle eventKey="0" />
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="form-check-item">
                      <div className="label">
                        표준
                      </div>
                      <div className="right">
                        <Form.Check type="radio" id="" label="" />
                      </div>
                    </div>
                    <div className="form-check-item">
                      <div className="label">
                        심플
                      </div>
                      <div className="right">
                        <Form.Check type="radio" id="" label="" />
                      </div>
                    </div>
                    <div className="form-check-item">
                      <div className="label">
                        다크
                      </div>
                      <div className="right">
                        <Form.Check type="radio" id="" label="" />
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>  
            </Accordion>
          </div>
          <div className="button-group btn-block">
            <Button variant="outline-primary" className="btn-block">저장</Button>
          </div>
        </div>
      </Offcanvas.Body>
      <Button variant="offcanvas-close" onClick={() => setOff6Show(false)}><i className="icon-gcsc icon-offcanvas icon-offcanvas-close"></i></Button>
    </Offcanvas>

    {/* Offcanvas 마이페이지_관심선박 */}
    <Offcanvas show={off7show} onHide={() => setOff7Show(false)} scroll={true} backdrop={false} placement="start" className="offcanvas-lnb offcanvas-lnb7 offcanvas-full">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>관심선박/영역정보</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="body-inner">
          <Row className="mypage-wrap">
            <Col className="mypage-left">
              <div className="status-group mt-20">
                <div className="status-item status-item1 status-color status-color1">
                  <div className="item">
                    <div className="title">
                      <i className='icon-gcsc icon-mypage-status img-status1'></i>  
                      나의 관심선박
                    </div>
                    <div className="count">1,123</div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <i className='icon-gcsc icon-mypage-status img-status1'></i>  
                      국가안보
                    </div>
                    <div className="count">1,123</div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <i className='icon-gcsc icon-mypage-status img-status1'></i>  
                      규제
                    </div>
                    <div className="count">1,123</div>
                  </div>
                </div>
                <div className="status-item status-color status-color2">
                  <div className="title">
                    <i className='icon-gcsc icon-mypage-status img-status2'></i>  
                    관심영역
                  </div>
                  <div className="count">1,123</div>
                </div>
                <div className="status-item status-color status-color3">
                  <div className="title">
                    <i className='icon-gcsc icon-mypage-status img-status3'></i>  
                    공유
                  </div>
                  <div className="count">1,123</div>
                </div>
                <div className="status-item status-color status-color4">
                  <div className="title">
                    <i className='icon-gcsc icon-mypage-status img-status4'></i>  
                    알림
                  </div>
                  <div className="count">1,123</div>
                </div>
              </div>

              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title">나의 관심선박</div>
                  </div>
                  <div className="right">
                    <Button variant="outline-primary">업데이트</Button>
                    <div className="text-group"><strong>최종 업데이트 : </strong>2024-08-01 12:00:00</div>
                    <Button variant="outline-primary">설정</Button>
                  </div>
                </div>
                <div className="body">
                  <div className="lists-group">
                    <ListGroup variant="flush" className="overflow-y-auto" style={{height: 'calc(100vh - 375px)',}}>                  
                      <ListGroup.Item className="px-0">
                        <div className="ship-item">
                          <div className="ship-info">                              
                            <div className="text-group info1">TIANLONG19876564</div>
                            <div className="text-group info2">412330220 <span className="divider-vertical height-16 mx-2"></span> Cargo</div>
                          </div>
                          <div className="ship-status">
                            <div className="badge-lg rounded-pill bg-ing">운항중</div>
                          </div>
                          <div className="ship-operation">
                            <div className="operation-item operation-item1">
                              <div className="text-group">
                                <span className="info3">LANSHAN</span>
                                <span className="info2">CNLSN</span>
                              </div>
                              <i className="icon-gcsc icon-arrow-right-12"></i>                           
                              <div className="text-group">
                                <span className="info2">CNBAY</span>
                                <span className="info3">BAYUQUAN</span>
                              </div>
                            </div>
                            <div className="range-bar">
                              <div className="start-ball"></div>
                              <input type="range" min="0" max="100" step="10" value="30" />
                              <div className="progress-bar-track" style={{ width: `30%`, }} />
                              <div className="end-ball"></div>
                            </div>
                            <div className="operation-item operation-item2">
                              <div className="text-group">
                                <span className="label label-info">ATD</span>
                                <span className="info4">2024-07-01 12:00</span>
                              </div>
                              <div className="text-group">
                                <span className="info4">2024-07-01 12:00</span>
                                <span className="label label-info">ETA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="px-0">
                        <div className="ship-item">
                          <div className="ship-info">                              
                            <div className="text-group info1">TIANLONG19876564</div>
                            <div className="text-group info2">412330220 <span className="divider-vertical height-16 mx-2"></span> Cargo</div>
                          </div>
                          <div className="ship-status">
                            <div className="badge-lg rounded-pill bg-stop">정지중</div>
                          </div>
                          <div className="ship-operation">
                            <div className="operation-item operation-item1">
                              <div className="text-group">
                                <span className="info3">LANSHAN</span>
                                <span className="info2">CNLSN</span>
                              </div>
                              <i className="icon-gcsc icon-arrow-right-12"></i>                           
                              <div className="text-group">
                                <span className="info2">CNBAY</span>
                                <span className="info3">BAYUQUAN</span>
                              </div>
                            </div>
                            <div className="range-bar">
                              <div className="start-ball"></div>
                              <input type="range" min="0" max="100" step="10" value="30" />
                              <div className="progress-bar-track" style={{ width: `30%`, }} />
                              <div className="end-ball"></div>
                            </div>
                            <div className="operation-item operation-item2">
                              <div className="text-group">
                                <span className="label label-info">ATD</span>
                                <span className="info4">2024-07-01 12:00</span>
                              </div>
                              <div className="text-group">
                                <span className="info4">2024-07-01 12:00</span>
                                <span className="label label-info">ETA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
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
            <Col className="mypage-right">
              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title">관심영역</div>
                  </div>
                  <div className="right">
                    <Button variant="outline-primary">업데이트</Button>
                    <div className="text-group"><strong>최종 업데이트 : </strong>2024-08-01 12:00:00</div>
                    <Button variant="outline-primary">단축키 설정</Button>
                  </div>
                </div>
                <div className="body">
                  <div className="forms-group overflow-y-auto" style={{height: '293px',}}>
                    <Table className="text-center align-middle">
                      <colgroup>
                        <col style={{width: '160px',}} />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>관심영역(척)</th>
                          <th>전체 선박 수(척)</th>
                          <th>즐겨찾기(척)</th>
                          <th>북한선박(척)</th>
                          <th>제재선박(척)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>관심영역1</th>
                          <td>50</td>
                          <td>50</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>관심영역2</th>
                          <td>50</td>
                          <td>50</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>관심영역3</th>
                          <td>50</td>
                          <td>50</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>관심영역4</th>
                          <td>50</td>
                          <td>50</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>관심영역5</th>
                          <td>50</td>
                          <td>50</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>관심영역6</th>
                          <td>50</td>
                          <td>50</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>관심영역7</th>
                          <td>50</td>
                          <td>50</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>

              <div className="items-group mt-20">
                <div className="header">
                  <div className="left">
                    <div className="title">국가안보/규제</div>
                    <Button variant="link" className="btn-text-icon"><i className="icon-gcsc icon-button icon-xls me-2"></i> 국가안보/규제 등록양식.xlsx</Button>
                  </div>
                  <div className="right">
                    <Button variant="outline-primary">업데이트</Button>
                    <div className="text-group"><strong>최종 업데이트 : </strong>2024-08-01 12:00:00</div>
                    <Button variant="outline-primary">등록</Button>
                  </div>
                </div>
                <div className="body">
                  <div className="lists-group">
                    <ListGroup variant="flush" className="overflow-y-auto" style={{height: 'calc(100vh - 550px)',}}>
                      <ListGroup.Item className="px-0">
                        <div className="ship-item">
                          <div className="ship-info">                              
                            <div className="text-group info1">TIANLONG19876564</div>
                            <div className="text-group info2">412330220 <span className="divider-vertical height-16 mx-2"></span> Cargo</div>
                          </div>
                          <div className="ship-status">
                            <div className="badge-lg bg-ing">중국선박</div>
                          </div>
                          <div className="ship-operation">
                            <div className="operation-item operation-item1">
                              <div className="text-group">
                                <span className="info3">LANSHAN</span>
                                <span className="info2">CNLSN</span>
                              </div>
                              <i className="icon-gcsc icon-arrow-right-12"></i>                           
                              <div className="text-group">
                                <span className="info2">CNBAY</span>
                                <span className="info3">BAYUQUAN</span>
                              </div>
                            </div>
                            <div className="operation-item operation-item2">
                              <div className="text-group">
                                <span className="label label-info">ATD</span>
                                <span className="info4">2024-07-01 12:00</span>
                              </div>
                              <div className="text-group">
                                <span className="info4">2024-07-01 12:00</span>
                                <span className="label label-info">ETA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="px-0">
                        <div className="ship-item">
                          <div className="ship-info">                              
                            <div className="text-group info1">TIANLONG19876564</div>
                            <div className="text-group info2">412330220 <span className="divider-vertical height-16 mx-2"></span> Cargo</div>
                          </div>
                          <div className="ship-status">
                            <div className="badge-lg bg-ing">중국선박</div>
                          </div>
                          <div className="ship-operation">
                            <div className="operation-item operation-item1">
                              <div className="text-group">
                                <span className="info3">LANSHAN</span>
                                <span className="info2">CNLSN</span>
                              </div>
                              <i className="icon-gcsc icon-arrow-right-12"></i>                           
                              <div className="text-group">
                                <span className="info2">CNBAY</span>
                                <span className="info3">BAYUQUAN</span>
                              </div>
                            </div>
                            <div className="operation-item operation-item2">
                              <div className="text-group">
                                <span className="label label-info">ATD</span>
                                <span className="info4">2024-07-01 12:00</span>
                              </div>
                              <div className="text-group">
                                <span className="info4">2024-07-01 12:00</span>
                                <span className="label label-info">ETA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="px-0">
                        <div className="ship-item">
                          <div className="ship-info">                              
                            <div className="text-group info1">TIANLONG19876564</div>
                            <div className="text-group info2">412330220 <span className="divider-vertical height-16 mx-2"></span> Cargo</div>
                          </div>
                          <div className="ship-status">
                            <div className="badge-lg bg-ing">중국선박</div>
                          </div>
                          <div className="ship-operation">
                            <div className="operation-item operation-item1">
                              <div className="text-group">
                                <span className="info3">LANSHAN</span>
                                <span className="info2">CNLSN</span>
                              </div>
                              <i className="icon-gcsc icon-arrow-right-12"></i>                           
                              <div className="text-group">
                                <span className="info2">CNBAY</span>
                                <span className="info3">BAYUQUAN</span>
                              </div>
                            </div>
                            <div className="operation-item operation-item2">
                              <div className="text-group">
                                <span className="label label-info">ATD</span>
                                <span className="info4">2024-07-01 12:00</span>
                              </div>
                              <div className="text-group">
                                <span className="info4">2024-07-01 12:00</span>
                                <span className="label label-info">ETA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
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
        </div>
      </Offcanvas.Body>
    </Offcanvas>

    {/* Offcanvas 알람 */}
    <Offcanvas show={off8show} onHide={() => setOff8Show(false)} scroll={true} backdrop={false} placement="end" className="offcanvas-alarm">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>알람</Offcanvas.Title>
        <Button variant="alarm" className="ms-auto">전체읽음</Button>
        <Button variant="icon" className="ms-2"><i className="icon-gcsc icon-button size-30 icon-setting-outline"></i></Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="overflow-y-auto" style={{height: 'calc(100vh - 550px)',}}>
        <div className="alarms-group">
          <ListGroup>
            <ListGroup.Item>
              <div className="alarm-item">
                <div className="alarm-status status-warning">
                  <i className="icon-gcsc icon-alarm icon-warning"></i>
                </div>
                <div className="alarm-info">                              
                  <div className="text1">SKY VICTORIA(11111111)</div>
                  <div className="text2">진입시간 : 2024-07-01 12:00:00</div>
                  <div className="text3">진입해역 : string444</div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="alarm-item">
                <div className="alarm-status status-warning">
                  <i className="icon-gcsc icon-alarm icon-warning"></i>
                </div>
                <div className="alarm-info">                              
                  <div className="text1">SKY VICTORIA(11111111)</div>
                  <div className="text2">진입시간 : 2024-07-01 12:00:00</div>
                  <div className="text3">진입해역 : string444</div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="alarm-item">
                <div className="alarm-status status-warning">
                  <i className="icon-gcsc icon-alarm icon-warning"></i>
                </div>
                <div className="alarm-info">                              
                  <div className="text1">SKY VICTORIA(11111111)</div>
                  <div className="text2">진입시간 : 2024-07-01 12:00:00</div>
                  <div className="text3">진입해역 : string444</div>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Offcanvas.Body>
    </Offcanvas>

    </>
  );
};

export default Sample01;
