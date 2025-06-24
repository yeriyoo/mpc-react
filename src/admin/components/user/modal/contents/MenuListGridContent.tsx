/**
 * 설명: 사용자정보 -> 권한관리 -> 그룹 메뉴 권한 관리 -> 메뉴 목록 그리드
 **/
import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS4, SAMPLE_FIELDS4, sampleGrid4 } from '@/utils/gridOption.ts';

const MenuListGridContent = () => {
  const menuListContentRef = useRef<HTMLDivElement>(null);
  const menuListContentGridRef = useRef<GridView | null>(null);
  // 메뉴목록 그리드 set
  useEffect(() => {
    if (!menuListContentRef) return;
    if (menuListContentRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(menuListContentRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS4);
      gridView.setColumns(SAMPLE_COLUMNS4);

      dataProvider.setRows(sampleGrid4);

      menuListContentGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;

      gridView.setOptions({
        rowIndicator: { visible: true, headText: '메뉴번호', minWidth: 80 },
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
      if (menuListContentRef && menuListContentGridRef.current) {
        menuListContentGridRef.current.destroy();
      }
    };
  }, [menuListContentRef]);

  return (
    <Col>
      <div className="search-group">
        <Row>
          <Col>
            <InputGroup>
              <Form.Select className="width-auto">
                <option>메뉴명</option>
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
                <div className="title size-16">메뉴 목록</div>
              </div>
            </div>
            <div className="realgrid-group">
              <div id="menuListContentGridContainer" ref={menuListContentRef} style={{ height: '300px' }} />
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

export default MenuListGridContent;
