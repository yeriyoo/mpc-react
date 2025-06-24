/**
 * 설명: 관리자 -> 게시판관리 -> Q&A
 **/
import { Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { SAMPLE_COLUMNS9, SAMPLE_FIELDS9, sampleGrid9 } from '@/utils/gridOption.ts';
import BoardGridView from '@/admin/components/board/grid/BoardGridView.tsx';
import { handleMoveAddView } from '@/utils/commonUtils.ts';
import { useNavigate } from 'react-router-dom';

const QA = () => {
  const navigate = useNavigate();
  // const qaRef = useRef<HTMLDivElement>(null);
  // const qaGridRef = useRef<GridView | null>(null);
  // Q&A 그리드 set
  // useEffect(() => {
  //   if (!qaRef) return;
  //   if (qaRef.current) {
  //     const dataProvider = new LocalDataProvider();
  //     const gridView = new GridView(qaRef.current);
  //     gridView.setDataSource(dataProvider);
  //     dataProvider.setFields(SAMPLE_FIELDS9);
  //     gridView.setColumns(SAMPLE_COLUMNS9);
  //     dataProvider.setRows(sampleGrid9);
  //     qaGridRef.current = gridView;
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
  //       void navigate(`/admin/board/qa/${clickData.field}`);
  //     };
  //   }
  //   return () => {
  //     if (qaRef && qaGridRef.current) {
  //       qaGridRef.current.destroy();
  //     }
  //   };
  // }, [qaRef]);
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'게시판관리'} twoDepth={'Q&A'} />
      <div className="contents-items">
        <div className="contents-title">Q&A</div>
        <div className="contents-info mb-3">
          해양환경 위기대응 통합시스템 문의 게시판입니다.
          <br />
          문의사항에 답변해 드리오니 많은 이용바랍니다.
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
                    <Button
                      variant="outline-primary"
                      onClick={() => handleMoveAddView(navigate, 'qa', 'Q&A', 'Q&A 등록/수정')}
                    >
                      등록
                    </Button>
                  </div>
                </div>
              </div>
              <div className="realgrid-group">
                <BoardGridView
                  typeObj={{ type: 'Q&A', url: 'qa' }}
                  data={sampleGrid9}
                  fields={SAMPLE_FIELDS9}
                  columns={SAMPLE_COLUMNS9}
                />
                {/*<div id="qaGridContainer" ref={qaRef} style={{ height: '300px' }} />*/}
                {/*<Icon path={mdiArrowRightBottom} className="icon-admin icon-mdi icon-grid icon-arrow-right-bottom" />*/}
                {/*<Icon path={mdiLock} className="icon-admin icon-mdi icon-grid icon-lock" />*/}
                {/*<span className="badge text-bg-warning rounded-pill text-white">RE</span>*/}
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

export default QA;
