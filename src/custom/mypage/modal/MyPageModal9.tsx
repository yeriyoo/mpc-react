/**
 * 설명: 마이페이지 분석/공유/알람정보팝업_분석리스트팝업
 **/
import styles from '@/assets/scss/modal/common/commonModal.module.scss';

const MyPageFavoriteModal9 = ({ isShow }: { isShow: VoidFunction }) => {
  return (
    <div className={styles['common-modal-wrap']}>
      <div className={`${styles['common-modal-dialog']} ${styles['modal-xl']}`}>
        <div className={styles['common-modal-style']}>
          <div className={styles['modal-common-header']}>
            <h3>분석/공유/알람 정보</h3>
            <button type="button" className={styles['common-modal-close']} onClick={isShow}>
              닫기
            </button>
          </div>
          <div className={styles['modal-tab-btn']}>
            <button type="button">알람리스트</button>
            <button type="button">공유리스트</button>
            <button type="button" className={styles['active']}>
              분석리스트
            </button>
          </div>
          <div className={styles['search-group']}>
            <div className={styles['input-group']}>
              <div className={styles['col-2']}>
                <select className={styles['form-select']}>
                  <option>선박명</option>
                </select>
              </div>
              <div className={styles['col']}>
                <input type="text" className={styles['form-control']} />
              </div>
              <button className={`${styles['nbtn']} ${styles['nbtn-search']}`}>
                검색 <i className={`${styles['icon-gcsc']} ${styles['icon-search']}`}></i>
              </button>
            </div>
          </div>
          <div className={`${styles['modal-content-style']}`}>
            <div className={`${styles['table-group']}`}>
              <table>
                <caption>분석리스트</caption>
                <colgroup>
                  <col style={{ width: '50px' }} />
                  <col style={{ width: '50px' }} />
                  <col style={{ width: '150px' }} />
                  <col />
                  <col style={{ width: '150px' }} />
                  <col style={{ width: '150px' }} />
                  <col style={{ width: '100px' }} />
                  <col style={{ width: '80px' }} />
                  <col style={{ width: '100px' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <div className={`${styles['form-check']}`}>
                        <input className={`${styles['form-check-input']}`} type="checkbox" />
                        <label className={`${styles['form-check-label']}`}></label>
                      </div>
                    </th>
                    <th>번호</th>
                    <th>분석명</th>
                    <th>분석요약정보</th>
                    <th>등록자</th>
                    <th>등록일</th>
                    <th>정보공유</th>
                    <th>다운횟수</th>
                    <th>저장</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={`${styles['form-check']}`}>
                        <input className={`${styles['form-check-input']}`} type="checkbox" />
                        <label className={`${styles['form-check-label']}`}></label>
                      </div>
                    </td>
                    <td>1</td>
                    <td>스탠다드 랑데뷰</td>
                    <td>일정기간동안 동일하게 운행</td>
                    <td>차세대경비기획단</td>
                    <td>2024-07-01 21:00</td>
                    <td>내용</td>
                    <td>10,000</td>
                    <td>내용</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles['pagination-wrap']}>
              <div className={styles['btn-area']}>
                <button type="button">
                  <span className={styles['p-prev']}>p-prev</span>
                </button>
                <button type="button">
                  <span className={styles['prev']}>prev</span>
                </button>
                <small className={styles['current']}>1</small>
                <small>2</small>
                <button type="button">
                  <span className={styles['next']}>next</span>
                </button>
                <button type="button">
                  <span className={styles['n-next']}>n-next</span>
                </button>
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

export default MyPageFavoriteModal9;
