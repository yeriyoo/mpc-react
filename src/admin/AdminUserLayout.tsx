/**
 * 설명: 관리자 -> 사용자정보 부모 레이아웃
 **/
import { Outlet, useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const AdminUserLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">사용자정보</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/user/manage">
            <ListGroup.Item action href="/admin/user/manage" active={pathname.includes('/user/manage')}>
              사용자관리
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/user/authority" active={pathname.includes('/user/authority')}>
              권한관리
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/user/limit" active={pathname.includes('/user/limit')}>
              동접제한
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/user/ip" active={pathname.includes('/user/ip')}>
              접속IP관리
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminUserLayout;
