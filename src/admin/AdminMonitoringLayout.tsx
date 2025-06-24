/**
 * 설명: 관리자 -> 모니터링 부모 레이아웃
 **/
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const AdminMonitoringLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">모니터링</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/monitoring/collection">
            <ListGroup.Item
              action
              href="/admin/monitoring/collection"
              active={pathname.includes('/monitoring/collection')}
            >
              수집관리
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/monitoring/linking" active={pathname.includes('/monitoring/linking')}>
              연계관리
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/monitoring/carrying" active={pathname.includes('/monitoring/carrying')}>
              적재관리
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminMonitoringLayout;
