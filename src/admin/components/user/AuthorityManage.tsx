/**
 * 설명: 관리자 -> 사용자정보 -> 권한관리
 **/

import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS2, SAMPLE_FIELDS2, sampleGrid2 } from '@/utils/gridOption.ts';
import AuthorityEnrollModal from '@/admin/components/user/modal/AuthorityEnrollModal.tsx';
import AuthorityUserModal from '@/admin/components/user/modal/AuthorityUserModal.tsx';
import AuthorityMenuModal from '@/admin/components/user/modal/AuthorityMenuModal.tsx';

const AuthorityManage = () => {
  const [showMangeModal, setShowMangeModal] = useState('');
  const authorityManageRef = useRef<HTMLDivElement>(null);
  const authorityManageGridRef = useRef<GridView | null>(null);

  // 권한 관리 그리드 set
  useEffect(() => {
    if (!authorityManageRef) return;
    if (authorityManageRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(authorityManageRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS2);
      gridView.setColumns(SAMPLE_COLUMNS2);

      dataProvider.setRows(sampleGrid2);

      authorityManageGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;

      gridView.setOptions({
        rowIndicator: { visible: true, minWidth: 100, headText: '그룹번호' },
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
        // 그룹 사용자 관리 버튼 클릭
        if (clickData.fieldName === 'groupUser') {
          setShowMangeModal('user');
        }
        // 그룹 메뉴 권한 관리 버튼 클릭
        if (clickData.fieldName === 'groupMenu') {
          setShowMangeModal('menu');
        }
      };
    }

    return () => {
      if (authorityManageRef && authorityManageGridRef.current) {
        authorityManageGridRef.current.destroy();
      }
    };
  }, [authorityManageRef]);

  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'사용자정보'} twoDepth={'권한관리'} />
      <div className="contents-items">
        <div className="contents-title">권한관리</div>
        <div className="contents-info mb-3">
          사용자 승인관리를 하실 수 있습니다.
          <br />
          사용자로 요청이 등러온 상태를 확인하시어 승인을 하실 수 있으며, 정지시는 목록에서 삭제처리 됩니다.
        </div>
        <div className="search-group">
          <Row>
            <Col>
              <Form.Group className="form-item-group">
                <InputGroup className="align-items-center">
                  <Form.Select className="width-auto">
                    <option>그룹명</option>
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
                    <Button variant="outline-primary" onClick={() => setShowMangeModal('enroll')}>
                      등록
                    </Button>
                    <Button variant="outline-primary">다운로드</Button>
                  </div>
                </div>
              </div>
              <div className="realgrid-group">
                <div id="authorityGridContainer" ref={authorityManageRef} style={{ height: '300px' }} />
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
      {showMangeModal === 'enroll' && (
        <AuthorityEnrollModal isShow={showMangeModal === 'enroll'} setIsShow={() => setShowMangeModal('')} />
      )}
      {showMangeModal === 'user' && (
        <AuthorityUserModal isShow={showMangeModal === 'user'} setIsShow={() => setShowMangeModal('')} />
      )}
      {showMangeModal === 'menu' && (
        <AuthorityMenuModal isShow={showMangeModal === 'menu'} setIsShow={() => setShowMangeModal('')} />
      )}
    </div>
  );
};

export default AuthorityManage;
