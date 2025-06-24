/**
 * 설명: 관리자 -> 모니터링 -> 적재관리
 **/
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { Button, Col, Container, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import BasicGrid from '@/component/grid/BasicGrid.tsx';
import { SAMPLE_COLUMNS17, SAMPLE_FIELDS17, sampleGrid17 } from '@/utils/gridOption.ts';

const CarryingMonitoring = () => {
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'모니터링'} twoDepth={'적재관리'} />
      <div className="contents-items">
        <div className="contents-title">적재관리</div>
        <Container fluid className="px-0 mt-20">
          <Row>
            <Col xs="auto">
              <div className="search-status-group">
                <div className="search-status-item bg1">
                  <div className="name">전체</div>
                  <div className="data">180</div>
                </div>
                <div className="search-status-item bg2">
                  <div className="name">성공</div>
                  <div className="data">123</div>
                </div>
                <div className="search-status-item bg3">
                  <div className="name">미적재</div>
                  <div className="data">57</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="search-group">
                <Row className="g-3">
                  <Col>
                    <Form.Group className="form-item-group">
                      <Form.Label>조회일</Form.Label>
                      <InputGroup className="align-items-center">
                        <div className="date-range-group">
                          <Form.Control type="date" />
                          <div className="during">~</div>
                          <Form.Control type="date" />
                        </div>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col xs="auto" className="ms-auto d-flex justify-content-end text-end">
                    <Button variant="outline-primary" className="btn-text-icon">
                      새로고침 <i className="icon-admin icon-button icon-refresh2 ms-2" />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="items-group mt-20">
          <div className="body">
            <div className="grid-group">
              <div className="realgrid-group">
                <BasicGrid
                  isIndicator={false}
                  data={sampleGrid17}
                  fields={SAMPLE_FIELDS17}
                  columns={SAMPLE_COLUMNS17}
                />
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
      </div>
    </div>
  );
};

export default CarryingMonitoring;
