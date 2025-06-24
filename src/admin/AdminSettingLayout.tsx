/**
 * 설명: 관리자 -> 환경설정 부모 레이아웃
 **/
import { Outlet, useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const AdminSettingLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">환경설정</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/setting/code">
            <ListGroup.Item action href="/admin/setting/code" active={pathname.includes('/setting/code')}>
              공통코드관리
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/setting/menu" active={pathname.includes('/setting/menu')}>
              메뉴관리
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminSettingLayout;
