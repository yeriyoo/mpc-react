/**
 * 설명: 관리자 -> 게시판관리 부모 레이아웃
 **/
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const AdminBoardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">게시판관리</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/board/notice">
            <ListGroup.Item action href="/admin/board/notice" active={pathname.includes('/board/notice')}>
              공지사항
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/board/boardList" active={pathname.includes('/board/boardList')}>
              게시판
            </ListGroup.Item>
            <ListGroup.Item action href="/admin/board/qa" active={pathname.includes('/board/qa')}>
              Q&A
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminBoardLayout;
