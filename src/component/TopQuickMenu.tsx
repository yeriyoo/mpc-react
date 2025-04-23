/**
 * 설명: 상단 퀵메뉴
 **/

const TopQuickMenu = () => {
  return (
    <section className="top-quick-menu-wrap">
      <div className="top-wrap">
        <ul>
          <li>
            <button type="button">
              <article>
                <i className="icon-layer" />
              </article>
              <label>레이어</label>
            </button>
          </li>
          <li>
            <button type="button">
              <article>
                <i className="icon-area-setting" />
              </article>
              <label>구역 설정</label>
            </button>
          </li>
          <li>
            <button type="button">
              <article>
                <i className="icon-distance" />
              </article>
              <label>거리</label>
            </button>
          </li>
          <li>
            <button type="button">
              <article>
                <i className="icon-distance-circle" />
              </article>
              <label>거리환</label>
            </button>
          </li>
        </ul>
      </div>
      <div className="bottom-wrap">
        <ul>
          <li>
            <button type="button">
              <article>
                <i className="icon-download" />
              </article>
              <label>다운로드</label>
            </button>
          </li>
          <li>
            <button type="button">
              <article>
                <i className="icon-capture" />
              </article>
              <label>캡쳐</label>
            </button>
          </li>
          <li>
            <button type="button">
              <article>
                <i className="icon-reset" />
              </article>
              <label>초기화</label>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopQuickMenu;
