/**
 * 설명: 마이페이지 관심선박/영역정보_관심선박팝업_관심선박수정팝업
 **/
import styles from '@/assets/scss/modal/common/commonModal.module.scss';

const MyPageFavoriteModal2 = ({ isShow }: { isShow: VoidFunction }) => {
  return (
    <div className={styles['common-modal-wrap']}>
      <div className={`${styles['common-modal-dialog']} ${styles['modal-md']}`}>
        <div className={styles['common-modal-style']}>
          <div className={styles['modal-common-header']}>
            <h3>관심선박 수정</h3>
            <button type="button" className={styles['common-modal-close']} onClick={isShow}>
              닫기
            </button>
          </div>
          <div className={`${styles['modal-content-style']}`}>
            <form className={styles['form-wrap']}>
              <div className={`${styles['table-group']} ${styles['table-form']}`}>
                <table>
                  <caption>관심선박수정</caption>
                  <colgroup>
                    <col />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>선명(타겟ID)</th>
                      <td>근영호(123456)</td>
                    </tr>
                    <tr>
                      <th>관심선박 지정사유</th>
                      <td>
                        <select className={styles['form-select']}>
                          <option>선택</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>상세사유</th>
                      <td>
                        <textarea className={styles['form-control']} rows={10}></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>설정 옵션</th>
                      <td>
                        <div className={`${styles['d-flex']} ${styles['flex-column']}`}>
                          <div className={`${styles['input-group']} ${styles['mb-5']}`}>
                            <div className={`${styles['form-check']}`}>
                              <input className={`${styles['form-check-input']}`} type="checkbox" />
                              <label className={`${styles['form-check-label']}`}>알림여부</label>
                            </div>
                            <div className={`${styles['form-check']}`}>
                              <input className={`${styles['form-check-input']}`} type="checkbox" />
                              <label className={`${styles['form-check-label']}`}>공유여부</label>
                            </div>
                          </div>
                          <div className={styles['input-group']}>
                            <div className={styles['col']}>
                              <input type="text" className={styles['form-control']} />
                            </div>
                            <button className={`${styles['nbtn']} ${styles['nbtn-search']}`}>
                              찾기 <i className={`${styles['icon-gcsc']} ${styles['icon-search']}`}></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <div className={styles['common-btn-wrap']}>
              <button type="button" className={styles['enroll']}>
                수정
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

export default MyPageFavoriteModal2;
