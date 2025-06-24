import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const MarineObservationBuoy = () => {
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'환경정보'} twoDepth={'1'} />
      <div className="contents-items">
        <div className="contents-title">해양관측부이</div>
        <div className="search-group">
          <Row>
            <Col sm="2">
              <Form.Group className="form-item-group">
                <Form.Label>지점</Form.Label>
                <Form.Select>
                  <option>전체</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-item-group">
                <Form.Label>시간</Form.Label>
                <InputGroup className="align-items-center">
                  <Form.Control type="datetime-local" />
                  <Button variant="outline-secondary bg-white" className="ms-1">
                    -1시간
                  </Button>
                  <Button variant="outline-secondary bg-white" className="ms-1">
                    -30분
                  </Button>
                  <Button variant="outline-secondary bg-white" className="ms-1">
                    현재
                  </Button>
                  <Button variant="outline-secondary bg-white" className="ms-1">
                    30분
                  </Button>
                  <Button variant="outline-secondary bg-white" className="ms-1">
                    1시간
                  </Button>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
              <Button variant="outline-primary" className="ms-2 btn-text-icon">
                검색 <i className="icon-admin icon-button icon-search2 ms-1"></i>
              </Button>
              <Button variant="secondary" className="ms-2">
                초기화
              </Button>
            </Col>
          </Row>
        </div>
        <div className="items-group mt-20">
          <div className="map-group position-relative" style={{ height: 'calc(100vh - 342px)' }}>
            지도들어가는 곳
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarineObservationBuoy;
