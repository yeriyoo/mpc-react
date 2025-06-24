/**
 * 설명: 사용자정보 -> 권한관리 -> 그룹 메뉴 권한 관리 -> 메뉴 권한 목록 그리드
 **/
import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS5, SAMPLE_FIELDS5, sampleGrid5 } from '@/utils/gridOption.ts';

const MenuAuthorityGridContent = () => {
  const menuAuthorityContentRef = useRef<HTMLDivElement>(null);
  const menuAuthorityContentGridRef = useRef<GridView | null>(null);
  // 메뉴권한목록 그리드 set
  useEffect(() => {
    if (!menuAuthorityContentRef) return;
    if (menuAuthorityContentRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(menuAuthorityContentRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS5);
      gridView.setColumns(SAMPLE_COLUMNS5);

      dataProvider.setRows(sampleGrid5);

      menuAuthorityContentGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;

      gridView.setOptions({
        rowIndicator: { visible: true, headText: '권한번호', minWidth: 80 },
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
    }

    return () => {
      if (menuAuthorityContentRef && menuAuthorityContentGridRef.current) {
        menuAuthorityContentGridRef.current.destroy();
      }
    };
  }, [menuAuthorityContentRef]);
  return (
    <Col>
      <div className="search-group">
        <Row>
          <Col>
            <InputGroup>
              <Form.Select className="width-auto">
                <option>권한명</option>
              </Form.Select>
              <Form.Control type="text" className="ms-2" />
              <Button variant="outline-primary" className="ms-2 btn-text-icon">
                검색 <i className="icon-admin icon-button icon-search2 ms-1"></i>
              </Button>
              <Button variant="secondary" className="ms-2">
                초기화
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </div>
      <div className="items-group mt-20">
        <div className="body">
          <div className="grid-group">
            <div className="grid-header">
              <div className="left">
                <div className="title size-16">메뉴 권한 목록</div>
              </div>
            </div>
            <div className="realgrid-group">
              <div id="menuAuthorityContentGridContainer" ref={menuAuthorityContentRef} style={{ height: '300px' }} />
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
    </Col>
  );
};

export default MenuAuthorityGridContent;
