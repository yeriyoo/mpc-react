/**
 * 설명: 마이페이지 관심선박/영역정보_관심영역_예외사항등록팝업
 **/
import styles from '@/assets/scss/modal/common/commonModal.module.scss';

const MyPageFavoriteModal6 = ({ isShow }: { isShow: VoidFunction }) => {
  return (
    <div className={styles['common-modal-wrap']}>
      <div className={`${styles['common-modal-dialog']} ${styles['modal-md']}`}>
        <div className={styles['common-modal-style']}>
          <div className={styles['modal-common-header']}>
            <h3>예외사항 등록</h3>
            <button type="button" className={styles['common-modal-close']} onClick={isShow}>
              닫기
            </button>
          </div>
          <div className={`${styles['modal-content-style']}`}>
            <form className={styles['form-wrap']}>
              <div className={`${styles['table-group']} ${styles['table-form']}`}>
                <table>
                  <caption>예외사항등록</caption>
                  <colgroup>
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>
                        <div className={styles['input-group']}>
                          <div className={`${styles['form-check']}`}>
                            <input className={`${styles['form-check-input']}`} type="radio" />
                            <label className={`${styles['form-check-label']}`}>북한선박</label>
                          </div>
                          <div className={`${styles['form-check']}`}>
                            <input className={`${styles['form-check-input']}`} type="radio" />
                            <label className={`${styles['form-check-label']}`}>제재선박</label>
                          </div>
                          <div className={`${styles['form-check']}`}>
                            <input className={`${styles['form-check-input']}`} type="radio" />
                            <label className={`${styles['form-check-label']}`}>제재선박</label>
                          </div>
                          <div className={`${styles['form-check']}`}>
                            <input className={`${styles['form-check-input']}`} type="radio" />
                            <label className={`${styles['form-check-label']}`}>제재선박</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles['input-group']}>
                          <div className={styles['col']}>
                            <input type="text" className={styles['form-control']} />
                          </div>
                          <button className={`${styles['nbtn']} ${styles['nbtn-search']}`}>
                            찾기 <i className={`${styles['icon-gcsc']} ${styles['icon-search']}`}></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <div className={styles['common-btn-wrap']}>
              <button type="button" className={styles['enroll']}>
                등록
              </button>
              <button type="button" className={styles['cancel']}>
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageFavoriteModal6;
