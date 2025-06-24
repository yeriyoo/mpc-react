/**
 * 설명: 관리자 -> 사용자정보 -> 사용자관리
 **/

import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS1, SAMPLE_FIELDS1, sampleGrid1 } from '@/utils/gridOption.ts';
import UserManageModal from '@/admin/components/user/modal/UserManageModal.tsx';

const UserManage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const userInfoRef = useRef<HTMLDivElement>(null);
  const userInfoGridRef = useRef<GridView | null>(null);

  // 사용자 관리 그리드 set
  useEffect(() => {
    if (!userInfoRef) return;
    if (userInfoRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(userInfoRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS1);
      gridView.setColumns(SAMPLE_COLUMNS1);

      dataProvider.setRows(sampleGrid1);

      userInfoGridRef.current = gridView;

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
        setIsShowModal(true);
      };
    }

    return () => {
      if (userInfoRef && userInfoGridRef.current) {
        userInfoGridRef.current.destroy();
      }
    };
  }, [userInfoRef]);

  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'사용자정보'} twoDepth={'사용자관리'} />
      <div className="contents-items">
        <div className="contents-title">사용자관리</div>
        <div className="contents-info mb-3">
          사용자 사용등록을 마친 사용자만 사용하실 수 있습니다.
          <br />
          사용자 구분은 일반사용자, 지방청 사용자, 함정 사용자, 본청 관리자로 구분합니다.
        </div>
        <div className="search-group">
          <Row>
            <Col sm="2">
              <Form.Group className="form-item-group">
                <Form.Label>개발자구분</Form.Label>
                <Form.Select>
                  <option>전체</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="2">
              <Form.Group className="form-item-group">
                <Form.Label>계정상태</Form.Label>
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
                    <option>사용자ID</option>
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
                <div className="right">
                  <div className="buttons">
                    <Button variant="outline-primary">사용자 등록</Button>
                  </div>
                </div>
              </div>
              <div className="realgrid-group">
                <div id="userInfoGridContainer" ref={userInfoRef} style={{ height: '300px' }} />
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
      {isShowModal && <UserManageModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default UserManage;
