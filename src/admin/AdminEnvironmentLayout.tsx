/**
 * 설명: 관리자 -> 환경정보 부모 레이아웃
 **/
import { Outlet, useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const AdminEnvironmentLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">환경정보</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/environment/buoy">
            <ListGroup.Item action href="/admin/environment/buoy" active={pathname.includes('/environment/buoy')}>
              해양관측부이
            </ListGroup.Item>
            <ListGroup.Item action href="#2">
              해양기상예보
            </ListGroup.Item>
            <ListGroup.Item action href="#3">
              해양기상관측
            </ListGroup.Item>
            <ListGroup.Item action href="#4">
              해양조석
            </ListGroup.Item>
            <ListGroup.Item action href="#5">
              천문자료
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminEnvironmentLayout;
