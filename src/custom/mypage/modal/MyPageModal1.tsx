/**
 * 설명: 마이페이지 관심선박/영역정보_관심선박팝업
 **/
import styles from '@/assets/scss/modal/common/commonModal.module.scss';

const MyPageFavoriteModal1 = ({ isShow }: { isShow: VoidFunction }) => {
  return (
    <div className={styles['common-modal-wrap']}>
      <div className={`${styles['common-modal-dialog']} ${styles['modal-xl']}`}>
        <div className={styles['common-modal-style']}>
          <div className={styles['modal-common-header']}>
            <h3>관심선박</h3>
            <button type="button" className={styles['common-modal-close']} onClick={isShow}>
              닫기
            </button>
          </div>

          <div className={`${styles['modal-content-style']}`}>
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
            <div className={`${styles['control-group']} ${styles['mb-10']}`}>
              <div className={styles['left']}></div>
              <div className={styles['center']}></div>
              <div className={styles['right']}>
                <button className={`${styles['nbtn']} ${styles['nbtn-secondary']}`}>공유</button>
                <button className={`${styles['nbtn']} ${styles['nbtn-secondary']}`}>다운로드</button>
              </div>
            </div>
            <div className={`${styles['table-group']} ${styles['item-border-top']}`}>
              <table>
                <caption>분석리스트</caption>
                <colgroup>
                  <col style={{ width: '50px' }} />
                  <col style={{ width: '50px' }} />
                  <col />
                  <col style={{ width: '150px' }} />
                  <col style={{ width: '150px' }} />
                  <col style={{ width: '100px' }} />
                  <col style={{ width: '120px' }} />
                  <col style={{ width: '100px' }} />
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
                    <th>선박명</th>
                    <th>MMSI</th>
                    <th>IMO</th>
                    <th>선종</th>
                    <th>국가</th>
                    <th>위치</th>
                    <th>정보공유</th>
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
                    <td>TIANLONG1987654</td>
                    <td>412330220</td>
                    <td>412330220</td>
                    <td>화물선</td>
                    <td>중국</td>
                    <td>내용</td>
                    <td>내용</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={`${styles['control-group']} ${styles['mt-20']}`}>
              <div className={styles['left']}></div>
              <div className={styles['center']}>
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
              </div>
              <div className={styles['right']}>
                <button className={`${styles['nbtn']} ${styles['nbtn-secondary']}`}>수정</button>
                <button className={`${styles['nbtn']} ${styles['nbtn-secondary']}`}>해제</button>
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

export default MyPageFavoriteModal1;
