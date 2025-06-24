/**
 * 설명: 검색 필터 조건 모달
 **/
import Icon from '@mdi/react';
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import { Col, Row, Button, Form, Modal } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const SearchFilterModal = ({ setIsShow }: CommonModalProps) => {
  return (
    <div className="modal modal-position" style={{ top: '55px', left: '470px' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>검색필터조건</Modal.Title>
            <div className="ms-auto">
              <Button variant="link-dark" size="sm">
                <Icon path={mdiWindowMinimize} title="최소화" className="mpci mdi mdi-window-minimize" />
              </Button>
              <Button variant="link-dark" size="sm">
                <Icon path={mdiWindowMaximize} title="최대화" className="mpci mdi mdi-window-maximize" />
              </Button>
              <Button variant="link-dark" size="sm" onClick={setIsShow}>
                <Icon path={mdiWindowClose} title="창닫기" className="mpci mdi mdi-window-close" />
              </Button>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Form className="form-grid form-label-horizontal label-width-sm">
              <Row className="row-cols-1">
                <Form.Group as={Col}>
                  <Form.Label>기간</Form.Label>
                  <div className="form-item">
                    <Form.Control type="date" />
                    <span>~</span>
                    <Form.Control type="date" />
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>진행상태</Form.Label>
                  <div className="form-item">
                    <Form.Select>
                      <option>선택</option>
                      <option>진행중</option>
                      <option>종료</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>오염물질</Form.Label>
                  <div className="form-item">
                    <Form.Select>
                      <option>선택</option>
                      <option>원유</option>
                      <option>휘발유</option>
                      <option>제트유</option>
                      <option>기타</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>사고명</Form.Label>
                  <div className="form-item">
                    <Form.Control type="text" placeholder="사고명을 입력해주세요." />
                  </div>
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark">검색</Button>
            <Button variant="secondary" onClick={setIsShow}>
              닫기
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterModal;
