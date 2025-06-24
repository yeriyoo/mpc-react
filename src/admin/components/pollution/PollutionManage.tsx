/**
 * 설명: 관리자 -> 오염관리 -> 오염정보관리
 **/

import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { Pagination } from 'react-bootstrap';
import BasicGrid from '@/component/grid/BasicGrid.tsx';
import { SAMPLE_COLUMNS13, SAMPLE_FIELDS13, sampleGrid13 } from '@/utils/gridOption.ts';

const PollutionManage = () => {
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'오염관리'} twoDepth={'오염정보관리'} />
      <div className="contents-items">
        <div className="contents-title">오염정보관리</div>
        <div className="items-group mt-20">
          <div className="body">
            <div className="grid-group">
              <div className="grid-header">
                <div className="left">
                  <div className="text-total">
                    총 <span>23</span>건
                  </div>
                </div>
              </div>
              <div className="realgrid-group">
                <BasicGrid isIndicator={true} data={sampleGrid13} fields={SAMPLE_FIELDS13} columns={SAMPLE_COLUMNS13} />
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

export default PollutionManage;
