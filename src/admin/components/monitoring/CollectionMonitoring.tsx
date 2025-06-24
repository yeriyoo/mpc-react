/**
 * 설명: 관리자 -> 모니터링 -> 수집관리
 **/
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import BasicGrid from '@/component/grid/BasicGrid.tsx';
import { MONITORING_COLLECTION_COLUMNS, MONITORING_COLLECTION_FIELDS } from '@/utils/gridOption.ts';
import CollectionManageModal from '@/admin/components/monitoring/modal/CollectionManageModal.tsx';

const CollectionMonitoring = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const sample: { [n: string]: string } = {};
  for (let i = 0; i <= 24; i++) {
    sample[`${i}시`] = '1';
  }

  const MONITORING_COLLECTION_DATA = [
    {
      id: '1',
      depth1: '2',
      depth2: '3',
      depth3: '4',
      depth4: '4',
      clctName: '4',
      ...sample,
      trnsmtCycle: '5',
      receiveCycle: '1',
      coloredCells: '1',
      jobName: '1',
    },
  ];
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'모니터링'} twoDepth={'수집관리'} />
      <div className="contents-items">
        <div className="contents-title">
          수집관리
          <Button variant="outline-primary" className="ms-auto" onClick={() => setIsShowModal(true)}>
            수집작업 등록
          </Button>
          <Button variant="outline-primary" className="ms-2">
            수정
          </Button>
          <Button variant="secondary" className="ms-2">
            삭제
          </Button>
          <Button variant="outline-primary" className="ms-2">
            목록
          </Button>
        </div>
        <div className="items-group mt-20">
          <div className="body">
            <div className="grid-group">
              <div className="realgrid-group">
                <BasicGrid
                  isIndicator={false}
                  data={MONITORING_COLLECTION_DATA}
                  fields={MONITORING_COLLECTION_FIELDS}
                  columns={MONITORING_COLLECTION_COLUMNS}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowModal && <CollectionManageModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default CollectionMonitoring;
