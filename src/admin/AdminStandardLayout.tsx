/**
 * 설명: 관리자 -> 기준정보 부모 레이아웃
 **/
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const AdminStandardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">기준정보</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/standard/map">
            <ListGroup.Item action href="/admin/standard/map" active={pathname.includes('/standard/map')}>
              지도관리
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/standard/sensitive" active={pathname.includes('/standard/sensitive')}>
              민감자원지도
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/standard/asset" active={pathname.includes('/standard/asset')}>
              해경자산
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminStandardLayout;
