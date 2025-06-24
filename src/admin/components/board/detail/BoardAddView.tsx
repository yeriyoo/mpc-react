/**
 * 설명: 관리자 -> 게시판관리 등록/수정 공통 컴포넌트
 **/
import { Button, Table, Form, InputGroup } from 'react-bootstrap';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { LocationDetail } from '@/interface/admin/CommonTypeInterface.tsx';
const BoardAddView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location as Location<LocationDetail>;

  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={state.oneDepth} twoDepth={state.twoDepth} threeDepth={state.threeDepth} />
      <div className="contents-items">
        <div className="contents-title">{state.threeDepth}</div>
        <div className="items-group mt-20">
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{ width: '140px' }} />
                  <col />
                  <col style={{ width: '140px' }} />
                  <col />
                  <col style={{ width: '140px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>제목</th>
                    <td colSpan={5}>
                      <Form.Control type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>공지기간</th>
                    <td>
                      <InputGroup className="align-items-center">
                        <div className="date-range-group">
                          <Form.Control type="date" />
                          <div className="during">~</div>
                          <Form.Control type="date" />
                        </div>
                      </InputGroup>
                    </td>
                    <th>등록자</th>
                    <td className="align-middle">김공지</td>
                    <th>노출구분</th>
                    <td className="align-middle">
                      <Form.Check type="radio" inline id="" label="일반노출" className="mb-0" />
                      <Form.Check type="radio" inline id="" label="상단노출" className="mb-0" />
                    </td>
                  </tr>
                  <tr>
                    <th>내용</th>
                    <td colSpan={5}>
                      <Form.Control as="textarea" rows={8} />
                    </td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td colSpan={5}>
                      {/* <Form.Control type="file" /> */}
                      <InputGroup className="form-control-file">
                        <Form.Control type="text" />
                        <div className="btn btn-outline-primary btn-text-icon btn-file ms-2">
                          <div className="text">
                            찾기 <i className="icon-admin icon-button icon-search2 ms-1"></i>
                          </div>
                          <Form.Control type="file" />
                        </div>
                      </InputGroup>
                      <div className="info2-group mt-2">
                        <ul className="list-style-square">
                          <li>첨부가능 파일 확장자: ppt, pptx, xls, xlsx, doc, docx, jpg, bmp, png, gif, pdf</li>
                          <li>최대 5MB까지 업로드 가능합니다.</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="footer">
            <div className="right">
              <div className="buttons">
                <Button variant="primary ms-2 mw-80px">등록</Button>
                <Button variant="secondary ms-2 mw-80px" onClick={() => void navigate(state.previousPage)}>
                  취소
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAddView;
