/**
 * 설명: 관리자 -> 사용자정보 -> Q&A -> Q&A 상세 -> Q&A 답변 등록
 **/
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { Location, useLocation, useNavigate, useParams } from 'react-router-dom';
import { LocationDetail } from '@/interface/admin/CommonTypeInterface.tsx';

const QaAnswer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { state, pathname } = location as Location<LocationDetail>;
  console.log(state, '답변등록', pathname);
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={state.oneDepth} twoDepth={state.twoDepth} threeDepth={'Q&A 답변 등록/수정'} />
      <div className="contents-items">
        <div className="contents-title">Q&A 답변 등록/수정</div>
        <div className="items-group mt-20">
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col style={{ width: '140px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>제목</th>
                    <td>
                      <Form.Control type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>등록자</th>
                    <td className="align-middle">김공지</td>
                  </tr>
                  <tr>
                    <th>내용</th>
                    <td>
                      <Form.Control as="textarea" rows={8} />
                    </td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td>
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
                <Button variant="primary ms-2 mw-80px">답변 등록</Button>
                <Button
                  variant="secondary ms-2 mw-80px"
                  onClick={() =>
                    void navigate(-1, {
                      state: {
                        oneDepth: '게시판관리',
                        twoDepth: 'Q&A',
                      },
                    })
                  }
                >
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

export default QaAnswer;
