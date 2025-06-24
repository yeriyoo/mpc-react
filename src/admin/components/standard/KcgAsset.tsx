/**
 * 설명: 관리자 -> 기준정보 -> 해경자산
 **/
import { Pagination } from 'react-bootstrap';
import { SAMPLE_COLUMNS13, SAMPLE_FIELDS13, sampleGrid13 } from '@/utils/gridOption.ts';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import BasicGrid from '@/component/grid/BasicGrid.tsx';

const KcgAsset = () => {
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'기준정보'} twoDepth={'해경자산'} />
      <div className="contents-items">
        <div className="contents-title">해경자산</div>
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
export default KcgAsset;
