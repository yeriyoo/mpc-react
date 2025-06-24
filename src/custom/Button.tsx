//Component
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { useState } from 'react';

const ButtonColl = () => {
  //Togglebutton
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="d-flex flex-column flex-wrap gap-2 p-3">
        <h1>버튼 모음</h1>

        <div className="mt-3">
          <h4>Primary</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="primary" className="btn-xs">
              기상예보
            </Button>
            <Button variant="primary" className="btn-text-icon">
              상세정보 <i className="icon-gcsc icon-button icon-list ms-1"></i>
            </Button>
            <Button variant="primary">분석</Button>
            <Button variant="primary">태풍정보</Button>
            <Button variant="primary">통계</Button>
            <Button variant="primary">저장</Button>
            <Button variant="primary">등록</Button>
            <Button variant="primary">수정</Button>
            <Button variant="primary">공유</Button>
            <Button variant="primary">확인</Button>
            <Button variant="primary">태풍정보 상세</Button>

            <Button variant="primary" size="lg">
              로그인
            </Button>
            <Button variant="primary" size="lg">
              인증서 로그인{' '}
            </Button>
            <Button variant="primary" size="lg">
              사용자 인증서 등록
            </Button>

            <Button variant="primary">삭제</Button>
            <Button variant="primary">신규저장</Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Secondary</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="secondary">취소</Button>
            <Button variant="secondary">초기화</Button>
            <Button variant="secondary">공유받지않음</Button>
            <Button variant="secondary" className="w-140px">
              돌아가기
            </Button>

            <Button variant="secondary">탈퇴</Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Outline Primary</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="outline-primary" className="btn-text-icon rounded-pill">
              항적조회 <i className="icon-gcsc icon-button icon-search2 ms-auto"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon rounded-pill">
              진입항적조회 <i className="icon-gcsc icon-button icon-search2 ms-auto"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon rounded-pill">
              항로예측 <i className="icon-gcsc icon-button icon-search2 ms-auto"></i>
            </Button>

            <Button variant="outline-primary" className="btn-text-icon rounded-pill">
              초기화 <i className="icon-admin icon-button icon-refresh2 ms-2"></i>
            </Button>

            {/* <Button variant="outline-primary" className="btn-text-icon rounded-pill">
            사진 등록/삭제 <i className="icon-gcsc icon-button icon-image ms-2"></i>
          </Button>
          <Button variant="outline-primary" className="btn-text-icon rounded-pill">
            사진 더보기 <i className="icon-gcsc icon-button icon-more ms-2"></i>
          </Button>
          <Button variant="outline-primary" className="btn-text-icon rounded-pill">
            관심선박 추가 <i className="icon-gcsc icon-button icon-star-outline ms-2"></i>
          </Button> */}

            <Button variant="outline-primary" className="btn-text-icon">
              검색 <i className="icon-gcsc icon-button icon-search2 ms-1"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              조회 <i className="icon-gcsc icon-button icon-search2 ms-1"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              파일찾기 <i className="icon-gcsc icon-button icon-search2 ms-1"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              예약 <i className="icon-gcsc icon-button icon-time ms-2"></i>
            </Button>
            <Button variant="outline-primary" size="sm" className="btn-text-icon">
              사진 등록/삭제 <i className="icon-gcsc icon-button icon-image ms-2"></i>
            </Button>

            <Button variant="outline-primary">저장</Button>
            <Button variant="outline-primary">등록</Button>
            <Button variant="outline-primary">수정</Button>
            <Button variant="outline-primary">해제</Button>
            <Button variant="outline-primary">삭제</Button>
            <Button variant="outline-primary">공유</Button>
            <Button variant="outline-primary">다운로드</Button>
            <Button variant="outline-primary">분석리스트</Button>
            <Button variant="outline-primary">임시저장</Button>
            <Button variant="outline-primary">이전으로 가기</Button>
            <Button variant="outline-primary">위성리스트</Button>
            <Button variant="outline-primary">위성등록</Button>
            <Button variant="outline-primary">업데이트</Button>
            <Button variant="outline-primary">설정</Button>
            <Button variant="outline-primary">단축키 설정</Button>
            <Button variant="outline-primary">선택</Button>
            <Button variant="outline-primary">기상예보 상세조회</Button>

            <Button variant="outline-primary">회원가입</Button>
            <Button variant="outline-primary">GPKI 인증서 로그인</Button>
            <Button variant="outline-primary">중복확인</Button>
            <Button variant="outline-primary">사용자 인증서 등록</Button>
            <Button variant="outline-primary">인증서 프로그램 설치</Button>

            <Button variant="outline-primary" className="btn-text-icon">
              새로고침 <i className="icon-admin icon-button icon-refresh2 ms-2"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              수집 작업 등록 <i className="icon-admin icon-button icon-download ms-2"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              조회 <i className="icon-admin icon-button icon-search2 ms-1"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              중복체크 <i className="icon-admin icon-button icon-check ms-2"></i>
            </Button>
            <Button variant="outline-primary" className="btn-text-icon">
              탈퇴 <i className="icon-admin icon-button icon-close ms-2"></i>
            </Button>

            <Button variant="outline-primary">수집작업 등록</Button>
            <Button variant="outline-primary">목록</Button>
            <Button variant="outline-primary">복원</Button>
            <Button variant="outline-primary">확인</Button>
            <Button variant="outline-primary">추가</Button>
            <Button variant="outline-primary">엑셀</Button>
            <Button variant="outline-primary">그룹 부여</Button>
            <Button variant="outline-primary">그룹 해제</Button>
            <Button variant="outline-primary" size="sm">
              그룹에 배정
            </Button>

            <Button variant="outline-primary" className="mw-auto text-nowrap">
              신호(TCP)
            </Button>
            <Button variant="outline-primary" className="mw-auto">
              ESB
            </Button>
            <Button variant="outline-primary" className="mw-auto">
              API
            </Button>
            <Button variant="outline-primary" className="mw-auto">
              DB
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Icon</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3 bg-dark-subtle">
            <CloseButton />
            <CloseButton className="btn-white btn-sm" />
            <Button variant="icon" className="size-20">
              <i className="icon-gcsc icon-button icon-close"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-gcsc icon-button size-30 icon-close2"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-gcsc icon-button size-30 icon-search"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-gcsc icon-button size-30 icon-setting"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-gcsc icon-button size-30 icon-collapse"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-gcsc icon-button size-30 icon-setting-outline"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-gcsc icon-button size-30 icon-refresh2"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-gcsc icon-button icon-plus"></i>
            </Button>

            <Button variant="icon">
              <i className="icon-admin icon-button size-30 icon-refresh"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-admin icon-button size-30 icon-search"></i>
            </Button>
            <Button variant="icon" className="vts-control vts-control-prev">
              <i className="icon-admin icon-button icon-prev"></i>
            </Button>
            <Button variant="icon" className="vts-control vts-control-next">
              <i className="icon-admin icon-button icon-next"></i>
            </Button>
            <Button variant="icon">
              <i className="icon-admin icon-information"></i>
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>ETC</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="accordion-arrow">
              <i className="icon-gcsc icon-accordion icon-accordion-arrow"></i>
            </Button>
            <Button variant="accordion-arrow" active>
              <i className="icon-gcsc icon-accordion icon-accordion-arrow"></i>
            </Button>
            <Button variant="accordion-arrow">
              <i className="icon-gcsc icon-accordion icon-accordion-arrow arrow-right"></i>
            </Button>
            <Button variant="logout">
              <i className="icon-gcsc icon-logout"></i>
            </Button>
            <Button variant="offcanvas-close">
              <i className="icon-gcsc icon-offcanvas icon-offcanvas-close"></i>
            </Button>
            <Button variant="alarm">전체읽음</Button>
            <Button variant="question">
              <i className="icon-question"></i>
            </Button>

            <Button variant="month">1</Button>
            <Button variant="month">2</Button>
            <Button variant="month" active>
              3
            </Button>
            <Button variant="month">4</Button>
            <Button variant="month">5</Button>
            <Button variant="month">6</Button>
            <Button variant="month">7</Button>
            <Button variant="month">8</Button>
            <Button variant="month">9</Button>
            <Button variant="month">10</Button>
            <Button variant="month">11</Button>
            <Button variant="month">12</Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Link1</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="link" className="btn-text-icon">
              <i className="icon-gcsc icon-button icon-xls me-2"></i> 중국어선 분석 다잡아 시스템.xlsx
            </Button>
            <Button variant="link" className="btn-text-icon">
              <i className="icon-gcsc icon-button icon-xls me-2"></i> 국가안보/규제 등록양식.xlsx
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Link2</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="link2" size="sm" className="btn-text-icon">
              전체열기 <i className="icon-gcsc icon-button icon-sm icon-arrow-down ms-1"></i>
            </Button>
            <Button variant="link2" size="sm" className="btn-text-icon">
              더보기 <i className="icon-gcsc icon-button icon-sm icon-arrow-right ms-1"></i>
            </Button>

            <Button variant="link2" size="sm">
              일반 GIS 사용자 매뉴얼
            </Button>
            <Button variant="link2" size="sm">
              함정 GIS 사용자 매뉴얼
            </Button>

            <Button variant="link2" size="sm" className="btn-text-icon">
              자세히보기 <i className="icon-admin icon-button icon-sm icon-arrow-right ms-1"></i>
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Toggle</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <ToggleButton
              id="toggle-check1"
              type="checkbox"
              variant="outline-primary"
              className="btn-image-toggle rounded-circle"
              checked={checked}
              value={1}
              onChange={e => setChecked(e.currentTarget.checked)}
            >
              <i className="icon-gcsc icon-toggle icon-maptest"></i>
            </ToggleButton>

            {/* <Button variant="secondary" className="btn-icon btn-favorite" active>
            <i className="icon-gcsc icon-button size-30 icon-star"></i>
          </Button>
          <Button variant="secondary" className="btn-icon btn-favorite">
            <i className="icon-gcsc icon-button size-30 icon-star"></i>
          </Button> */}

            <ToggleButton
              id="toggle-favorite"
              type="checkbox"
              variant="secondary"
              className="btn-icon btn-favorite"
              checked={checked}
              value={1}
              onChange={e => setChecked(e.currentTarget.checked)}
            >
              <i className="icon-gcsc icon-button size-30 icon-star"></i>
            </ToggleButton>
          </div>
        </div>

        <div className="mt-3">
          <h4>Size</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="primary" className="btn-xs">
              X-Small
            </Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Width</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="primary" className="mw-auto">
              min-width auto
            </Button>
            <Button variant="primary" className="mw-80px">
              min-width 80px
            </Button>
            <Button variant="primary" className="w-140px">
              width 140px
            </Button>
            <Button variant="primary" className="btn-block">
              Block
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>Round</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <Button variant="primary" className="rounded-1">
              rounded
            </Button>
            <Button variant="primary" className="rounded-pill">
              rounded-pill
            </Button>
            <Button variant="primary" className="rounded-circle">
              C
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h4>기타 버튼 관련 소스</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3">
            <div className="button-group btn-block mt-10">
              <Button variant="outline-primary" className="btn-text-icon justify-content-center" size="lg">
                사각형 그리기 <i className="icon-gcsc icon-button icon-square-dot-sm ms-2"></i>
              </Button>
              <Button variant="outline-primary" className="btn-text-icon justify-content-center" size="lg">
                다각형 그리기 <i className="icon-gcsc icon-button icon-pentagon-dot-sm ms-2"></i>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h4>안쓰지만 참고 버튼</h4>
          <div className="d-flex align-items-center flex-wrap gap-3 p-3 bg-dark-subtle">
            <Button variant="icon" className="btn-bi btn-white">
              <i className="bi bi-arrows-angle-expand"></i>
            </Button>
            <Button variant="icon" size="lg" className="btn-bi btn-white">
              <i className="bi bi-search"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonColl;
