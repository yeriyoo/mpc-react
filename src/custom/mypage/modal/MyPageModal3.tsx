/**
 * 설명: 마이페이지 관심선박/영역정보_관심선박팝업_관심선박해제팝업
 **/
import styles from '@/assets/scss/modal/common/commonModal.module.scss';

const MyPageFavoriteModal3 = ({ isShow }: { isShow: VoidFunction }) => {
  return (
    <div className={styles['common-modal-wrap']}>
      <div className={`${styles['common-modal-dialog']} ${styles['modal-md']}`}>
        <div className={styles['common-modal-style']}>
          <div className={styles['modal-common-header']}>
            <h3>관심선박 해제</h3>
            <button type="button" className={styles['common-modal-close']} onClick={isShow}>
              닫기
            </button>
          </div>
          <div className={`${styles['modal-content-style']}`}>
            <form className={styles['form-wrap']}>
              <div className={`${styles['table-group']} ${styles['table-form']}`}>
                <table>
                  <caption>관심선박해제</caption>
                  <colgroup>
                    <col style={{ width: '150px' }} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>관심선박 해제사유</th>
                      <td>
                        <select className={styles['form-select']}>
                          <option>선택</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <div className={styles['common-btn-wrap']}>
              <button type="button" className={styles['enroll']}>
                확인
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

export default MyPageFavoriteModal3;
