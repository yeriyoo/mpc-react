/**
 * 설명: 관리자 -> 사용자정보 -> Q&A -> Q&A 상세
 **/
import { Button, Table } from 'react-bootstrap';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { mdiLock } from '@mdi/js';
import Icon from '@mdi/react';
const BoardListDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'게시판관리'} twoDepth={'Q&A'} threeDepth={id} />
      <div className="contents-items">
        <div className="contents-title">Q&A 상세</div>
        <div className="items-group mt-20">
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <Icon path={mdiLock} className="icon-admin icon-mdi icon-grid icon-lock" /> 제목
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex aligh-items-center gap-3">
                        <div>
                          <span className="fw-bold me-2">등록자</span> 김공지
                        </div>
                        <div className="divider-vertical" />
                        <div>
                          <span className="fw-bold me-2">등록일</span> 2024-01-01 16:52:10
                        </div>
                        <div className="divider-vertical" />
                        <div>
                          <span className="fw-bold me-2">조회수</span> 5002
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex aligh-items-center">
                        <i className="icon-admin icon-form icon-clip me-2"></i> aaa.jpg
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-detail">
                      <pre>{`내용 들어가는 곳내용 들어가는 곳내용`}</pre>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="d-flex aligh-items-center">
                        <i className="icon-admin icon-form icon-arrow-up me-2"></i> <span className="me-3">이전글</span>{' '}
                        제목
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="d-flex aligh-items-center">
                        <i className="icon-admin icon-form icon-arrow-down me-2"></i>{' '}
                        <span className="me-3">다음글</span> 제목
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
                <Button variant="primary mw-80px">답변등록</Button>
                <Button variant="primary ms-2 mw-80px">수정</Button>
                <Button variant="secondary ms-2 mw-80px">삭제</Button>
                <Button variant="outline-primary ms-2 mw-80px" onClick={() => void navigate('/admin/board/qa')}>
                  목록
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardListDetail;
