import { Link } from 'react-router-dom';
import '@/custom/assets/scss/common.scss';
import '@/custom/assets/scss/admin.scss';

import Table from 'react-bootstrap/Table';

const customlish = () => {
  return (
    <>
      {/* <Link to={'/custom/mypage'}>마이페이지</Link> */}

      <div className="d-flex flex-column flex-wrap gap-2 p-3">
        <h1>퍼블 화면</h1>

        <div className="forms-group">
          <Table>
            <colgroup>
              <col style={{ width: '140px' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>공통</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/button'}>버튼 모음</Link>
                    <Link to={'/weather'}>날씨 이미지 모음</Link>
                    <Link to={'/loading'}>로딩</Link>
                    <Link to={'/sample08'}>모달샘플</Link>
                    <Link to={'/sample16'}>Bootstrap icon + Material icon</Link>
                  </div>
                </td>
              </tr>

              <tr>
                <th rowSpan={12}>관리자</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/login1'}>로그인</Link>
                    <Link to={'/login2'}>로그인_회원가입</Link>
                    <Link to={'/login3'}>로그인_GPKI인증서로그인</Link>
                    <Link to={'/login4'}>로그인_사용자인증서등록</Link>
                    <Link to={'/error'}>에러페이지</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/dashboard1'}>모니터링1</Link>
                    <Link to={'/dashboard2'}>모니터링2</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub1Menu1'}>환경설정-공통코드관리</Link>
                    <Link to={'/Mpc1Sub1Menu2'}>환경설정-메뉴관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub2Menu1'}>사용자정보-사용자관리</Link>
                    <Link to={'/Mpc1Sub2Menu2'}>사용자정보-권한관리</Link>
                    <Link to={'/Mpc1Sub2Menu3'}>사용자정보-동접제한</Link>
                    {/* <Link to={'/Mpc1Sub2Menu3S1'}>사용자정보-동접제한-동시접속 제한 설정</Link> */}
                    <Link to={'/Mpc1Sub2Menu4'}>사용자정보-접속IP관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub3Menu1'}>게시판관리-공지사항</Link>
                    <Link to={'/Mpc1Sub3Menu1S1'}>게시판관리-공지사항-상세</Link>
                    <Link to={'/Mpc1Sub3Menu1S2'}>게시판관리-공지사항-등록/수정</Link>
                    <Link to={'/Mpc1Sub3Menu2'}>게시판관리-게시판</Link>
                    <Link to={'/Mpc1Sub3Menu2S1'}>게시판관리-게시판-상세</Link>
                    <Link to={'/Mpc1Sub3Menu2S2'}>게시판관리-게시판-등록/수정</Link>
                    <Link to={'/Mpc1Sub3Menu3'}>게시판관리-QNA</Link>
                    <Link to={'/Mpc1Sub3Menu3S1'}>게시판관리-QNA-상세</Link>
                    <Link to={'/Mpc1Sub3Menu3S2'}>게시판관리-QNA-등록/수정</Link>
                    <Link to={'/Mpc1Sub3Menu3S3'}>게시판관리-QNA-답변 등록/수정</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub4Menu1'}>보고서관리</Link>
                    {/* <Link to={'/Mpc1Sub4Menu2'} className="opacity-50">보고서관리-레포트 출력</Link> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub5Menu1'}>통합관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub6Menu1'}>기준정보-지도관리</Link>
                    <Link to={'/Mpc1Sub6Menu2'}>기준정보-민감자원지도</Link>
                    <Link to={'/Mpc1Sub6Menu3'}>기준정보-해경자산</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub7Menu1'}>환경정보-해양관측부이</Link>
                    <Link to={'/Mpc1Sub7Menu2'}>환경정보-해양기상예보</Link>
                    <Link to={'/Mpc1Sub7Menu3'}>환경정보-해양기상관측</Link>
                    <Link to={'/Mpc1Sub7Menu4'}>환경정보-해양조석</Link>
                    <Link to={'/Mpc1Sub7Menu5'}>환경정보-천문자료</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub8Menu1'}>오염관리-오염정보관리</Link>
                    <Link to={'/Mpc1Sub8Menu2'}>오염관리-관리코드</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub9Menu1'}>연계관리-수집관리</Link>
                    <Link to={'/Mpc1Sub9Menu2'}>연계관리-연계관리</Link>
                    <Link to={'/Mpc1Sub9Menu3'}>연계관리-적재관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/Mpc1Sub10Menu1'} className="opacity-50">
                      통계
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default customlish;
