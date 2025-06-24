import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Publish = () => {
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
                    <Link to={'/custom/Button'}>버튼 모음</Link>
                    <Link to={'/custom/Weather'}>날씨 이미지 모음</Link>
                    <Link to={'/custom/Loading'}>로딩</Link>
                    <Link to={'/custom/sample08'}>모달샘플</Link>
                    <Link to={'/custom/sample16'}>Bootstrap icon + Material icon</Link>
                  </div>
                </td>
              </tr>
              {/* <tr>
                <th>샘플</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/sample09'}>Realgrid + tree menu</Link>
                    <Link to={'/custom/sample10'}>Fullcalendar</Link>
                    <Link to={'/custom/sample11'}>Chart</Link>
                    <Link to={'/custom/sample12'}>Gallery</Link>
                    <Link to={'/custom/sample13'}>Datepicker + timepicker</Link>
                    <Link to={'/custom/sample14'}>Multiselet</Link>
                    <Link to={'/custom/sample15'}>사진 등록 첨부파일??</Link>
                  </div>
                </td>
              </tr> */}
              <tr>
                <th rowSpan={12}>관리자</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/login1'}>로그인</Link>
                    <Link to={'/custom/mpc/login2'}>로그인_회원가입</Link>
                    <Link to={'/custom/mpc/login3'}>로그인_GPKI인증서로그인</Link>
                    <Link to={'/custom/mpc/login4'}>로그인_사용자인증서등록</Link>
                    <Link to={'/custom/mpc/error'}>에러페이지</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/dashboard1'}>모니터링1</Link>
                    <Link to={'/custom/mpc/dashboard2'}>모니터링2</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub1Menu1'}>환경설정-공통코드관리</Link>
                    <Link to={'/custom/mpc/Mpc1Sub1Menu2'}>환경설정-메뉴관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub2Menu1'}>사용자정보-사용자관리</Link>
                    <Link to={'/custom/mpc/Mpc1Sub2Menu2'}>사용자정보-권한관리</Link>
                    <Link to={'/custom/mpc/Mpc1Sub2Menu3'}>사용자정보-동접제한</Link>
                    {/* <Link to={'/custom/mpc/Mpc1Sub2Menu3S1'}>사용자정보-동접제한-동시접속 제한 설정</Link> */}
                    <Link to={'/custom/mpc/Mpc1Sub2Menu4'}>사용자정보-접속IP관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub3Menu1'}>게시판관리-공지사항</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu1S1'}>게시판관리-공지사항-상세</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu1S2'}>게시판관리-공지사항-등록/수정</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu2'}>게시판관리-게시판</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu2S1'}>게시판관리-게시판-상세</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu2S2'}>게시판관리-게시판-등록/수정</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu3'}>게시판관리-QNA</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu3S1'}>게시판관리-QNA-상세</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu3S2'}>게시판관리-QNA-등록/수정</Link>
                    <Link to={'/custom/mpc/Mpc1Sub3Menu3S3'}>게시판관리-QNA-답변 등록/수정</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub4Menu1'}>보고서관리</Link>
                    {/* <Link to={'/custom/mpc/Mpc1Sub4Menu2'} className="opacity-50">보고서관리-레포트 출력</Link> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub5Menu1'}>통합관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub6Menu1'}>기준정보-지도관리</Link>
                    <Link to={'/custom/mpc/Mpc1Sub6Menu2'}>기준정보-민감자원지도</Link>
                    <Link to={'/custom/mpc/Mpc1Sub6Menu3'}>기준정보-해경자산</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub7Menu1'}>환경정보-해양관측부이</Link>
                    <Link to={'/custom/mpc/Mpc1Sub7Menu2'}>환경정보-해양기상예보</Link>
                    <Link to={'/custom/mpc/Mpc1Sub7Menu3'}>환경정보-해양기상관측</Link>
                    <Link to={'/custom/mpc/Mpc1Sub7Menu4'}>환경정보-해양조석</Link>
                    <Link to={'/custom/mpc/Mpc1Sub7Menu5'}>환경정보-천문자료</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub8Menu1'}>오염관리-오염정보관리</Link>
                    <Link to={'/custom/mpc/Mpc1Sub8Menu2'}>오염관리-관리코드</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub9Menu1'}>연계관리-수집관리</Link>
                    <Link to={'/custom/mpc/Mpc1Sub9Menu2'}>연계관리-연계관리</Link>
                    <Link to={'/custom/mpc/Mpc1Sub9Menu3'}>연계관리-적재관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/mpc/Mpc1Sub10Menu1'} className="opacity-50">
                      통계
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <h4 className="mt-3">MDA 퍼블 참고</h4>
        <div className="forms-group mt-1">
          <Table>
            <colgroup>
              <col style={{ width: '140px' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th rowSpan={16}>관리자</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin'}>대시보드</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub1Menu1'}>모니터링-수집관리</Link>
                    <Link to={'/custom/admin/Ct1Sub1Menu2'}>모니터링-연계관리</Link>
                    <Link to={'/custom/admin/Ct1Sub1Menu3'}>모니터링-적재관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub2Menu1'}>선박 정보 관리-관심선박</Link>
                    <Link to={'/custom/admin/Ct1Sub2Menu2'}>선박 정보 관리-메모 조회</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub3Menu1'}>해경자산 관리 - 해경자산 관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub4Menu1'}>권한 설정 - 권한 설정</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub5Menu1'}>회원 관리 - 계정 관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub6Menu1'}>사용자 관리 - 사용자 목록 관리</Link>
                    <Link to={'/custom/admin/Ct1Sub6Menu2'}>사용자 관리 - 권한 관리</Link>
                    <Link to={'/custom/admin/Ct1Sub6Menu3'}>사용자 관리 - 권한 관리 - 사용자메뉴 권한 관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub7Menu1'}>그룹 관리 - 권한 그룹 관리</Link>
                    <Link to={'/custom/admin/Ct1Sub7Menu2'}>그룹 관리 - 권한 그룹 관리 - 그룹사용자관리</Link>
                    <Link to={'/custom/admin/Ct1Sub7Menu3'}>그룹 관리 - 권한 그룹 관리 - 그룹메뉴권한관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub8Menu1'}>메뉴 관리 - 메뉴 목록 관리</Link>
                    <Link to={'/custom/admin/Ct1Sub8Menu2'}>메뉴 관리 - 메뉴 권한 관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub9Menu1'}>로그인 관리 - 로그인 관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub10Menu1'}>공통코드 관리 - 공통코드 관리</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub11Menu1'}>로그 관리 - 감사 로그</Link>
                    <Link to={'/custom/admin/Ct1Sub11Menu2'}>로그 관리 - 개인정보 열람 로그</Link>
                    <Link to={'/custom/admin/Ct1Sub11Menu3'}>로그 관리 - 에러 로그</Link>
                    <Link to={'/custom/admin/Ct1Sub11Menu4'}>로그 관리 - 보고서 로그</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct1Sub12Menu1'}>통계 관리 - 로그인 통계</Link>
                    <Link to={'/custom/admin/Ct1Sub12Menu2'}>통계 관리 - 개인정보 열람 통계</Link>
                    <Link to={'/custom/admin/Ct1Sub12Menu3'}>통계 관리 - 감사 로그 통계</Link>
                    <Link to={'/custom/admin/Ct1Sub12Menu4'}>통계 관리 - 에러 로그 통계</Link>
                    <Link to={'/custom/admin/Ct1Sub12Menu5'}>통계 관리 - 보고서 로그 통계</Link>
                    <Link to={'/custom/admin/Ct1Sub12Menu6'}>통계 관리 - 배치 로그 통계</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct2Sub1Menu1'}>통계 - 밀집도</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/Ct2Sub2Menu1'}>분석 - 알림 게시판</Link>
                    <Link to={'/custom/admin/Ct2Sub2Menu2'}>분석 - 알림 게시판 - 상세</Link>
                    <Link to={'/custom/admin/Ct2Sub2Menu3'}>분석 - 알림 게시판 - 수정</Link>
                    <Link to={'/custom/admin/Ct2Sub2Menu4'}>분석 - 해상영역 분석 게시물</Link>
                    <Link to={'/custom/admin/Ct2Sub2Menu5'}>분석 - 해상영역 분석 게시물 - 상세</Link>
                    <Link to={'/custom/admin/Ct2Sub2Menu6'}>분석 - 해상영역 분석 게시물 - 수정</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/admin/modal'}>관리자 모달 모음</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th rowSpan={3}>MDA플랫폼</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/sample01'}>메인 화면</Link>
                    <Link to={'/custom/sample07'}>선박상세정보</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/sample01modal'}>메인 화면 모달 모음</Link>
                    <Link to={'/custom/sample07modal'}>선박상세정보 모달 모음</Link>
                    <Link to={'/custom/alert'}>Alert 모음</Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/custom/sample02'}>로그인</Link>
                    <Link to={'/custom/sample03'}>로그인_회원가입</Link>
                    <Link to={'/custom/sample04'}>로그인_GPKI인증서로그인</Link>
                    <Link to={'/custom/sample05'}>로그인_사용자인증서등록</Link>
                    <Link to={'/custom/sample06'}>에러페이지</Link>
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

export default Publish;
