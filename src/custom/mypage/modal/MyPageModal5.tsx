/**
 * 설명: 마이페이지 관심선박/영역정보_관심영역_단축키설정팝업
 **/
import styles from '@/assets/scss/modal/common/commonModal.module.scss';

const MyPageFavoriteModal5 = ({ isShow }: { isShow: VoidFunction }) => {
  return (
    <div className={styles['common-modal-wrap']}>
      <div className={`${styles['common-modal-dialog']} ${styles['modal-md']}`}>
        <div className={styles['common-modal-style']}>
          <div className={styles['modal-common-header']}>
            <h3>단축키설정</h3>
            <button type="button" className={styles['common-modal-close']} onClick={isShow}>
              닫기
            </button>
          </div>
          <div className={`${styles['modal-content-style']}`}>
            <div className={`${styles['table-group']}`}>
              <table>
                <caption>단축키설정</caption>
                <colgroup>
                  <col style={{ width: '100px' }} />
                  <col />
                  <col style={{ width: '100px' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>단축키</th>
                    <th>관심영역명</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ctrl + 1</td>
                    <td>영역명</td>
                    <td>
                      <button className={`${styles['nbtn']} ${styles['nbtn-secondary']}`}>삭제</button>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default MyPageFavoriteModal5;
