/**
 * 설명: 관리자 -> 오염관리 -> 관리코드
 **/

import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { Button, Pagination } from 'react-bootstrap';
import BasicGrid from '@/component/grid/BasicGrid.tsx';
import { SAMPLE_COLUMNS14, SAMPLE_FIELDS14, sampleGrid14 } from '@/utils/gridOption.ts';
import { useState } from 'react';
import AddPollutionModal from '@/admin/components/pollution/modal/AddPollutionModal.tsx';

const PollutionCodeManage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'오염관리'} twoDepth={'관리코드'} />
      <div className="contents-items">
        <div className="contents-title">관리코드</div>
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
                    <Button variant="outline-primary" onClick={() => setIsShowModal(true)}>
                      등록
                    </Button>
                  </div>
                </div>
              </div>
              <div className="realgrid-group">
                <BasicGrid isIndicator={true} data={sampleGrid14} fields={SAMPLE_FIELDS14} columns={SAMPLE_COLUMNS14} />
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
      {isShowModal && <AddPollutionModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default PollutionCodeManage;
