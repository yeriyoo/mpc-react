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
import { useContext, useState } from 'react';



const Sample01 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => setIsVisible(true);

  return (
    <>
    <div className={ isVisible ? 'active' : '' }>
      <Button variant='accordion-arrow'  onClick={handleClick}><i className="icon-gcsc icon-accordion icon-accordion-arrow"></i></Button>
    </div>

    </>
  );
};

export default Sample01;
