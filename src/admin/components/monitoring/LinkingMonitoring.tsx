import { Badge, Pagination, Table } from 'react-bootstrap';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';

/**
 * 설명: 관리자 -> 모니터링 -> 연계관리
 **/
const LinkingMonitoring = () => {
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'모니터링'} twoDepth={'연계관리'} />
      <div className="contents-items">
        <div className="contents-title">연계관리</div>
        <div className="items-group mt-20">
          <div className="body">
            <div className="grid-group">
              <div className="realgrid-group">
                <Table className="text-center">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>원천기관</th>
                      <th>기관코드</th>
                      <th>정보시스템명</th>
                      <th>연계정보</th>
                      <th>저장장소</th>
                      <th>연계방식</th>
                      <th>수집주기</th>
                      <th>수집건수</th>
                      <th>연결상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>부산항</td>
                      <td>BS</td>
                      <td>VTS_AIS</td>
                      <td>VTS</td>
                      <td>signal.t_dynamic_all_reply</td>
                      <td>KAFKA</td>
                      <td>00:00:00</td>
                      <td>561건</td>
                      <td>
                        <Badge bg="primary" className="me-1" style={{ width: '30px' }}>
                          ON
                        </Badge>
                        2025-05-19 14:20:59
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>부산항</td>
                      <td>BS</td>
                      <td>VTS_AIS</td>
                      <td>VTS</td>
                      <td>signal.t_dynamic_all_reply</td>
                      <td>KAFKA</td>
                      <td>00:00:00</td>
                      <td>561건</td>
                      <td>
                        <Badge bg="secondary" className="me-1" style={{ width: '30px' }}>
                          OFF
                        </Badge>
                        2025-05-19 14:20:59
                      </td>
                    </tr>
                  </tbody>
                </Table>
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

export default LinkingMonitoring;
