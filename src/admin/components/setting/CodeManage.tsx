/**
 * 설명: 관리자 -> 환경설정 -> 공통코드관리
 **/
import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS, SAMPLE_FIELDS, sampleGrid } from '@/utils/gridOption.ts';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import CodeManageModal from '@/admin/components/setting/modal/CodeManageModal.tsx';

const CodeManage = () => {
  const [showDetailCodeModal, setShowDetailCodeModal] = useState({ isShow: false, type: '' });
  const commonCodeListRef = useRef<HTMLDivElement>(null);
  const commonCodeListGridRef = useRef<GridView | null>(null);
  // 공통코드관리 그리드 set
  useEffect(() => {
    if (!commonCodeListRef) return;
    if (commonCodeListRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(commonCodeListRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS);
      gridView.setColumns(SAMPLE_COLUMNS);

      dataProvider.setRows(sampleGrid);

      commonCodeListGridRef.current = gridView;

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

      gridView.onCellClicked = (grid, clickData) => {
        // const rowKey = clickData.dataRow as number;
        // 삭제 버튼 클릭
        if (clickData.fieldName === 'delete') {
          console.log('삭제 버튼');
        }
        // 수정 버튼 클릭
        if (clickData.fieldName === 'modify') {
          setShowDetailCodeModal({ isShow: true, type: '수정' });
        }
      };
    }

    return () => {
      if (commonCodeListRef && commonCodeListGridRef.current) {
        commonCodeListGridRef.current.destroy();
      }
    };
  }, [commonCodeListRef]);

  // 상세 코드 등록,수정 모달 on/off
  const handleShowModal = (type: string) => {
    void setShowDetailCodeModal({ isShow: true, type: type });
  };

  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'환경설정'} twoDepth={'공통코드관리'} />
      <div className="contents-items">
        <div className="contents-title">공통코드관리</div>
        <div className="contents-info mb-3">
          시스템에서 사용되는 공통코드관리를 하실 수 있습니다.
          <br />
          공통코드는 그룹코드와 그에 속한 상세코드로 구분됩니다.
        </div>
        <div className="search-group">
          <Row>
            <Col sm="2">
              <Form.Group className="form-item-group">
                <Form.Label>그룹코드명</Form.Label>
                <Form.Select>
                  <option>USERTYPECD</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="2">
              <Form.Group className="form-item-group">
                <Form.Label>사용구분</Form.Label>
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
                    <option>그룹코드명</option>
                  </Form.Select>
                  <Form.Control type="text" className="ms-2" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm="auto" className="d-flex ms-auto">
              <Button variant="outline-primary" className="ms-2 btn-text-icon">
                검색 <i className="icon-admin icon-button icon-search2 ms-1" />
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
                    <Button variant="outline-primary" onClick={() => handleShowModal('등록')}>
                      상세코드 등록
                    </Button>
                  </div>
                </div>
              </div>
              <div className="realgrid-group">
                <div id="commonCodeGridContainer" ref={commonCodeListRef} style={{ height: '300px' }} />
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
        {showDetailCodeModal.isShow && (
          <CodeManageModal
            modalType={showDetailCodeModal.type}
            isShow={showDetailCodeModal.isShow}
            setIsShow={() => setShowDetailCodeModal({ isShow: false, type: '' })}
          />
        )}
      </div>
    </div>
  );
};

export default CodeManage;
