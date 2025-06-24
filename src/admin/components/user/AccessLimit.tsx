/**
 * 설명: 관리자 -> 사용자정보 -> 동접 제한
 **/

import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS6, SAMPLE_FIELDS6, sampleGrid6 } from '@/utils/gridOption.ts';
import AccessLimitModal from '@/admin/components/user/modal/AccessLimitModal.tsx';

const AccessLimit = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const accessLimitRef = useRef<HTMLDivElement>(null);
  const accessLimitGridRef = useRef<GridView | null>(null);

  // 동접 제한 그리드 set
  useEffect(() => {
    if (!accessLimitRef) return;
    if (accessLimitRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(accessLimitRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS6);
      gridView.setColumns(SAMPLE_COLUMNS6);

      dataProvider.setRows(sampleGrid6);

      accessLimitGridRef.current = gridView;

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
          columnResizable: false,
          fitStyle: GridFitStyle.EVEN_FILL,
          selectionStyle: SelectionStyle.SINGLE_ROW,
        },
      });

      gridView.onCellClicked = (grid, clickData) => {
        setIsShowModal(true);
      };
    }

    return () => {
      if (accessLimitRef && accessLimitGridRef.current) {
        accessLimitGridRef.current.destroy();
      }
    };
  }, [accessLimitRef]);
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'사용자정보'} twoDepth={'동접제한'} />
      <div className="contents-items">
        <div className="contents-title">동접제한</div>
        <div className="contents-info mb-3">
          플랫폼 정책관리에서 각항목별 최대동시 접속자수 제한하실 수 있습니다.
          <br />
          서비스 ID별로 최대동시 접속자수를 제한하실 수 있습니다.
        </div>
        <div className="search-group">
          <Row>
            <Col sm="2">
              <Form.Group className="form-item-group">
                <Form.Label>서비스구분</Form.Label>
                <Form.Select>
                  <option>전체</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="2">
              <Form.Group className="form-item-group">
                <Form.Label>적용여부</Form.Label>
                <Form.Select>
                  <option>전체</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-item-group">
                <Form.Label>키워드검색</Form.Label>
                <InputGroup className="align-items-center">
                  <Form.Select className="width-auto">
                    <option>서비스명</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm="auto" className="d-flex ms-auto">
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
              </div>
              <div className="realgrid-group">
                <div id="accessLimitGridContainer" ref={accessLimitRef} style={{ height: '300px' }} />
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
      {isShowModal && <AccessLimitModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default AccessLimit;
