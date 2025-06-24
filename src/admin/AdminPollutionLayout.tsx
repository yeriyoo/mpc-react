/**
 * 설명: 관리자 -> 오염관리 부모 레이아웃
 **/
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const AdminPollutionLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">오염관리</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/pollution/manage">
            <ListGroup.Item action href="/admin/pollution/manage" active={pathname.includes('/pollution/manage')}>
              오염정보관리
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/pollution/code" active={pathname.includes('/pollution/code')}>
              관리코드
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPollutionLayout;
