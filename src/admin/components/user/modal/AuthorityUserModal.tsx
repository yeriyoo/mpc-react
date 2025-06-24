/**
 * 설명: 사용자정보 -> 권한관리 -> 그룹 사용자 관리 모달
 **/
import { Button, Col, Form, InputGroup, Modal, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS3, SAMPLE_FIELDS3, sampleGrid3 } from '@/utils/gridOption.ts';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

const AuthorityUserModal = ({ isShow, setIsShow }: CommonModalProps) => {
  const authorityUserRef = useRef<HTMLDivElement>(null);
  const authorityUserGridRef = useRef<GridView | null>(null);

  // 그룹 사용자 관리 그리드 set
  useEffect(() => {
    if (!authorityUserRef) return;
    if (authorityUserRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(authorityUserRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS3);
      gridView.setColumns(SAMPLE_COLUMNS3);

      dataProvider.setRows(sampleGrid3);

      authorityUserGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;

      gridView.setOptions({
        rowIndicator: { visible: false },
        stateBar: { visible: false },
        checkBar: { visible: true, width: 40 },
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
      if (authorityUserRef && authorityUserGridRef.current) {
        authorityUserGridRef.current.destroy();
      }
    };
  }, [authorityUserRef]);

  return (
    <Modal size="lg" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>그룹 사용자 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">[1] 기획운영과</div>
            </div>
          </div>
        </div>
        <Row>
          <Col>
            <div className="search-group">
              <Row>
                <Col>
                  <InputGroup>
                    <Form.Select className="width-auto">
                      <option>선택</option>
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
                      <div className="title size-16">계정 목록</div>
                    </div>
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary">그룹 부여</Button>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    <div id="authorityUserGridContainer" ref={authorityUserRef} style={{ height: '300px' }} />
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
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AuthorityUserModal;
