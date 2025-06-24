/**
 * 설명: 관리자 -> 기준정보 -> 지도관리
 **/
import { Button, Pagination } from 'react-bootstrap';
import { useState } from 'react';
import { SAMPLE_COLUMNS12, SAMPLE_FIELDS12, sampleGrid12 } from '@/utils/gridOption.ts';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import AddMapModal from '@/admin/components/standard/modal/AddMapModal.tsx';
import BasicGrid from '@/component/grid/BasicGrid.tsx';

const MapManage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'기준정보'} twoDepth={'지도관리'} />
      <div className="contents-items">
        <div className="contents-title">지도관리</div>
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
                <BasicGrid isIndicator={true} data={sampleGrid12} fields={SAMPLE_FIELDS12} columns={SAMPLE_COLUMNS12} />
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
      {isShowModal && <AddMapModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default MapManage;
