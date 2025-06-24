/**
 * 설명: 관리자 -> 사용자정보 -> 접속 IP 관리
 **/

import { Button, Col, Form, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS7, SAMPLE_FIELDS7, sampleGrid7 } from '@/utils/gridOption.ts';
import AccessLimitIpModal from '@/admin/components/user/modal/AccessLimitIpModal.tsx';

const AccessIpManage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const accessLimitIpRef = useRef<HTMLDivElement>(null);
  const accessLimitIpGridRef = useRef<GridView | null>(null);

  // 접속 IP 관리 그리드 set
  useEffect(() => {
    if (!accessLimitIpRef) return;
    if (accessLimitIpRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(accessLimitIpRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS7);
      gridView.setColumns(SAMPLE_COLUMNS7);

      dataProvider.setRows(sampleGrid7);

      accessLimitIpGridRef.current = gridView;

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
        if (clickData.fieldName === 'modify') setIsShowModal(true);
      };
    }

    return () => {
      if (accessLimitIpRef && accessLimitIpGridRef.current) {
        accessLimitIpGridRef.current.destroy();
      }
    };
  }, [accessLimitIpRef]);
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'사용자정보'} twoDepth={'접속IP관리'} />
      <div className="contents-items">
        <div className="contents-title">접속IP관리</div>
        <div className="contents-info mb-3">
          등록된 IP로만 접속할 수 있습니다.
          <br />
          계정과 IP는 1:1로 매핑되어 사용되어집니다.
        </div>
        <div className="search-group">
          <Row>
            <Col>
              <Form.Group className="form-item-group">
                <Form.Label>IP주소</Form.Label>
                <Form.Control type="text" placeholder="IP주소" />
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
                <div id="accessLimitIpGridContainer" ref={accessLimitIpRef} style={{ height: '300px' }} />
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
      {isShowModal && <AccessLimitIpModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default AccessIpManage;
