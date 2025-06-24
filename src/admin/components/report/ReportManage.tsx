/**
 * 설명: 관리자 -> 보고서관리
 **/

import { Button, Col, Form, InputGroup, ListGroup, Pagination, Row } from 'react-bootstrap';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { useEffect, useRef, useState } from 'react';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS9, SAMPLE_FIELDS9, sampleGrid9 } from '@/utils/gridOption.ts';
import ReportAddModal from '@/admin/components/report/modal/ReportAddModal.tsx';
const ReportManage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const reportGridRef = useRef<GridView | null>(null);
  // 보고서관리 그리드 set
  useEffect(() => {
    if (!reportRef) return;
    if (reportRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(reportRef.current);

      gridView.setDataSource(dataProvider);
      dataProvider.setFields(SAMPLE_FIELDS9);
      gridView.setColumns(SAMPLE_COLUMNS9);
      dataProvider.setRows(sampleGrid9);

      reportGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;
      gridView.setOptions({
        rowIndicator: { visible: true, minWidth: 100, headText: '번호' },
        stateBar: { visible: false },
        checkBar: { visible: false },
        footer: { visible: false },
        edit: { editable: false },
        display: {
          rowHeight: 40,
          columnMovable: false,
          columnResizable: true,
          fitStyle: GridFitStyle.EVEN_FILL,
          selectionStyle: SelectionStyle.SINGLE_ROW,
        },
      });
    }
    return () => {
      if (reportRef && reportGridRef.current) {
        reportGridRef.current.destroy();
      }
    };
  }, [reportRef]);

  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">보고서관리</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/report">
            <ListGroup.Item action active href="/admin/report">
              보고서관리
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="contents">
        <CommonBreadcrumb oneDepth={'보고서관리'} twoDepth={'보고서관리'} />
        <div className="contents-items">
          <div className="contents-title">보고서관리</div>
          <div className="search-group">
            <Row>
              <Col>
                <Form.Group className="form-item-group">
                  <InputGroup>
                    <Form.Select className="width-auto">
                      <option>제목+내용</option>
                    </Form.Select>
                    <Form.Control type="text" className="ms-2" />
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
            <div className="body">
              <div className="grid-group">
                <div className="grid-header">
                  <div className="left">
                    <div className="text-total">
                      총 <span>23</span>건
                    </div>
                  </div>
                  <div className="right">
                    <div className="buttons">
                      <Button variant="outline-primary" onClick={() => setIsShowModal(true)}>
                        등록
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="realgrid-group">
                  <div id="reportGridContainer" ref={reportRef} style={{ height: '300px' }} />
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
      {isShowModal && <ReportAddModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default ReportManage;
