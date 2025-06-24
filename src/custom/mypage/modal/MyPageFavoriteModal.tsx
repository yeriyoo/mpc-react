/**
 * 설명: 마이페이지 즐겨찾기 모달
 **/
import styles from '@/assets/scss/modal/common/commonModal.module.scss';

const MyPageFavoriteModal = ({ isShow }: { isShow: VoidFunction }) => {
  return (
    <div className={styles['common-modal-wrap']}>
      <div className={`${styles['common-modal-dialog']} ${styles['modal-xl']}`}>
        <div className={styles['common-modal-style']}>
          <div className={styles['modal-common-header']}>
            <h3>즐겨찾기 메뉴</h3>
            <button type="button" className={styles['common-modal-close']} onClick={isShow}>
              닫기
            </button>
          </div>
          <div className={`${styles['modal-content-style']}`}>
            <div className={`${styles['container']}`}>
              <div className={`${styles['row']} ${styles['align-items-center']}`}>
                <div className={`${styles['col']}`}>
                  <div className={`${styles['items-group']}`}>
                    <div className={`${styles['header']}`}>
                      <div className={`${styles['header-title']}`}>메뉴찾기</div>
                    </div>
                    <div className={`${styles['body']}`}>
                      {/* 트리메뉴 들어가는 영역*/} <div className={`${styles['ShareDepartmentTree']}`} style={{height: '460px',}}></div>
                    </div>
                  </div>
                </div>
                <div className={`${styles['col-auto']}`}>
                  <button className={`${styles['nbtn']} ${styles['nbtn-secondary']}`}>선택</button>
                </div>
                <div className={`${styles['col']}`}>
                  <div className={`${styles['items-group']}`}>
                    <div className={`${styles['header']}`}>
                      <div className={`${styles['header-title']}`}>현재 맞춤 메뉴(7)</div>
                      <div className={`${styles['header-control']} ${styles['ms-auto']}`}>
                        <button className={`${styles['nbtn']} ${styles['nbtn-icon']} ${styles['nbtn-32']}`}><i className={`${styles['icon-gcsc']} ${styles['icon-28']} ${styles['icon-refresh']}`}></i></button>
                      </div>
                    </div>
                    <div className={`${styles['body']}`}>
                      <div className={`${styles['items-group']} ${styles['border']} ${styles['vertical']} ${styles['overflow-y-auto']}`} style={{height: '460px',}}>
                        <div className={`${styles['label-group']}`}>
                          <div className={`${styles['label-text']} ${styles['max-width']}`}>좌측 &gt; 라이브맵 &gt; 선박DB</div>
                          <button className={`${styles['nbtn']} ${styles['nbtn-icon']} ${styles['nbtn-20']}`}><i className={`${styles['icon-gcsc']} ${styles['icon-close-20']}`}></i></button>
                        </div>
                        <div className={`${styles['label-group']}`}>
                          <div className={`${styles['label-text']} ${styles['max-width']}`}>좌측 &gt; 해경자산 &gt; 자산현황</div>
                          <button className={`${styles['nbtn']} ${styles['nbtn-icon']} ${styles['nbtn-20']}`}><i className={`${styles['icon-gcsc']} ${styles['icon-close-20']}`}></i></button>
                        </div>
                        <div className={`${styles['label-group']}`}>
                          <div className={`${styles['label-text']} ${styles['max-width']}`}>좌측 &gt; 분석DB</div>
                          <button className={`${styles['nbtn']} ${styles['nbtn-icon']} ${styles['nbtn-20']}`}><i className={`${styles['icon-gcsc']} ${styles['icon-close-20']}`}></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles['common-btn-wrap']}>
              <button type="button" className={styles['enroll']}>
                확인
              </button>
              {/* <button type="button" className={styles['cancel']}>
                취소
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageFavoriteModal;
