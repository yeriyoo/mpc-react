import Icon from '@mdi/react';
import { mdiWindowClose } from '@mdi/js';
import sampleImg1 from '@/assets/image/sample1.jpg';
import sampleImg2 from '@/assets/image/sample2.jpg';
import sampleImg3 from '@/assets/image/sample3.jpg';

//Component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-bootstrap';
//Utilities
import Ratio from 'react-bootstrap/Ratio';

import classNames from 'classNames';
import { useRef, useState } from 'react';

export const PubPage1 = () => {
  const [index, setIndex] = useState(0);
  const corousalRef = useRef(null);
  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <div className="modal modal-position position-relative width-full">
      <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>
              유무인기 - XL 709
              <Button variant="dark" size="xs" className="ms-2">
                원본이미지
              </Button>
            </Modal.Title>
            <div className="ms-auto">
              <Button variant="link-dark" size="sm">
                <Icon path={mdiWindowClose} title="창닫기" className="mpci mdi mdi-window-close" />
              </Button>
            </div>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="carousels-group">
              <div className="carousels-group-inner">
                <Carousel activeIndex={index} onSelect={handleSelect} ref={corousalRef} interval={null}>
                  <Carousel.Item>
                    <img className="image-carousels" src={sampleImg1} alt="1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="image-carousels" src={sampleImg2} alt="2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="image-carousels" src={sampleImg3} alt="3" />
                  </Carousel.Item>
                </Carousel>
              </div>

              <div className="carousels-thumbnails">
                <Button
                  variant="thumbnails"
                  className={classNames('', { active: index === 0 })}
                  onClick={() => setIndex(0)}
                >
                  <Ratio aspectRatio="16x9">
                    <img className="image-carousels" src={sampleImg1} alt="1" />
                  </Ratio>
                </Button>
                <Button
                  variant="thumbnails"
                  className={classNames('', { active: index === 1 })}
                  onClick={() => setIndex(1)}
                >
                  <Ratio aspectRatio="16x9">
                    <img className="image-carousels" src={sampleImg2} alt="2" />
                  </Ratio>
                </Button>
                <Button
                  variant="thumbnails"
                  className={classNames('', { active: index === 2 })}
                  onClick={() => setIndex(2)}
                >
                  <Ratio aspectRatio="16x9">
                    <img className="image-carousels" src={sampleImg3} alt="3" />
                  </Ratio>
                </Button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </div>
    </div>
  );
};
