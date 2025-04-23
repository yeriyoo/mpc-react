/**
 * 설명: 어드민
 **/

import adminLogoImg from '@/assets/image/logo-admin.png';
import adminProfileImg from '@/assets/image/admin-profile.svg';
import adminLogoutImg from '@/assets/image/admin-logout.svg';

const Admin = () => {
  return (
    <header className="admin-header-wrap">
      <nav>
        <div className="admin-logo-wrap">
          <article>
            <img src={adminLogoImg} alt="로고" />
          </article>
          <strong>관리자</strong>
        </div>
        <div className="nav-list-wrap">
          <ul>
            <li>
              <label>모니터링</label>
            </li>
            <li>
              <label>환경설정</label>
            </li>
            <li>
              <label>사용자정보</label>
            </li>
            <li>
              <label>게시판관리</label>
            </li>
            <li>
              <label>보고서</label>
            </li>
            <li>
              <label>통합관리</label>
            </li>
            <li>
              <label>기준정보</label>
            </li>
            <li>
              <label>물리환경정보관리</label>
            </li>
            <li>
              <label>오염관리</label>
            </li>
            <li>
              <label>연계관리</label>
            </li>
          </ul>
        </div>
        <div className="user-util-wrap">
          <ul>
            <li className="icon-admin-profile">
              <img src={adminProfileImg} alt="사용자" />
              <label>홍길동</label>
            </li>
            <li className="icon-admin-logout">
              <img src={adminLogoutImg} alt="로그아웃" />
              <label>로그아웃</label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Admin;
