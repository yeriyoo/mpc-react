/**
 * 설명: 어드민 메인
 **/

import AdminHeader from '@/admin/components/common/AdminHeader.tsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminMain = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === '/admin') void navigate('/admin/setting/code');
    // if (pathname.startsWith('/admin')) import('@/assets/scss/admin-styles.scss');
  }, []);

  return (
    <section className="admin-container">
      <AdminHeader />
      <Outlet />
    </section>
  );
};

export default AdminMain;
