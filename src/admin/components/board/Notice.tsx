/**
 * 설명: 관리자 -> 게시판관리 -> 공지사항
 **/
import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { SAMPLE_COLUMNS8, SAMPLE_FIELDS8, sampleGrid8 } from '@/utils/gridOption.ts';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import BoardGridView from '@/admin/components/board/grid/BoardGridView.tsx';
import { useNavigate } from 'react-router-dom';
import { handleMoveAddView } from '@/utils/commonUtils.ts';

const Notice = () => {
  const navigate = useNavigate();

  // const noticeRef = useRef<HTMLDivElement>(null);
  // const noticeGridRef = useRef<GridView | null>(null);
  // 공지사항 그리드 set
  // useEffect(() => {
  //   if (!noticeRef) return;
  //   if (noticeRef.current) {
  //     const dataProvider = new LocalDataProvider();
  //     const gridView = new GridView(noticeRef.current);
  //
  //     gridView.setDataSource(dataProvider);
  //
  //     dataProvider.setFields(SAMPLE_FIELDS8);
  //     gridView.setColumns(SAMPLE_COLUMNS8);
  //
  //     dataProvider.setRows(sampleGrid8);
  //
  //     noticeGridRef.current = gridView;
  //
  //     gridView.setDisplayOptions({
  //       emptyMessage: '데이터가 없습니다.',
  //       showEmptyMessage: true,
  //     });
  //     gridView.header.height = 40;
  //     gridView.setOptions({
  //       rowIndicator: { visible: true, minWidth: 100, headText: '번호' },
  //       stateBar: { visible: false },
  //       checkBar: { visible: false },
  //       footer: { visible: false },
  //       edit: { editable: false },
  //       display: {
  //         rowHeight: 40,
  //         columnMovable: false,
  //         columnResizable: false,
  //         fitStyle: GridFitStyle.EVEN_FILL,
  //         selectionStyle: SelectionStyle.SINGLE_ROW,
  //       },
  //     });
  //     gridView.onCellClicked = (grid, clickData) => {
  //       void navigate(`/admin/board/notice/${clickData.field}`, {
  //         state: { previousPage: '/admin/board/notice', oneDepth: '게시판관리', twoDepth: '공지사항' },
  //       });
  //     };
  //   }
  //   return () => {
  //     if (noticeRef && noticeGridRef.current) {
  //       noticeGridRef.current.destroy();
  //     }
  //   };
  // }, [noticeRef]);
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'게시판관리'} twoDepth={'공지사항'} />
      <div className="contents-items">
        <div className="contents-title">공지사항</div>
        <div className="contents-info mb-3">
          해양환경 위기대응 통합시스템 공지사항입니다.
          <br />
          사이트운영관련 주요정보를 공지하오니 많은 이용바랍니다.
        </div>
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
                    <Button
                      variant="outline-primary"
                      onClick={() => handleMoveAddView(navigate, 'notice', '공지사항', '공지사항 등록/수정')}
                    >
                      등록
                    </Button>
                  </div>
                </div>
              </div>
              <div className="realgrid-group">
                <BoardGridView
                  typeObj={{ type: '공지사항', url: 'notice' }}
                  data={sampleGrid8}
                  fields={SAMPLE_FIELDS8}
                  columns={SAMPLE_COLUMNS8}
                />
                {/*<div id="noticeGridContainer" ref={noticeRef} style={{ height: '300px' }} />*/}
                {/*<span className="badge text-bg-info rounded-pill text-white">공지</span>*/}
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

export default Notice;
