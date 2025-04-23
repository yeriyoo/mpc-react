/**
 * 설명: 헤더
 **/

/* 이미지 임포트 */
import symbolImg from '@/assets/image/header/symbol.svg';
import liveMapImg from '@/assets/image/header/live-map.svg';
import accidentImg from '@/assets/image/header/accident-info.svg';
import predictImg from '@/assets/image/header/predice-analysis.svg';
import realTimeAnalysisImg from '@/assets/image/header/real-time-analysis.svg';
import controlStrategyImg from '@/assets/image/header/control-strategy.svg';
import adminImg from '@/assets/image/header/admin.svg';
import searchImg from '@/assets/image/header/search.svg';
import profileImg from '@/assets/image/header/profile.svg';
import alarmImg from '@/assets/image/header/alarm.svg';
import favoriteImg from '@/assets/image/header/favorite.svg';
import aiImg from '@/assets/image/header/ai.svg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header-wrap">
      <nav>
        <div className="left-gnb-wrap">
          <ul>
            <li>
              <article>
                <img src={symbolImg} alt="해경 심볼" />
              </article>
            </li>
            <li>
              <article>
                <img src={liveMapImg} alt="라이브 맵" />
              </article>
              <label>실시간 MAP</label>
            </li>
            <li>
              <article>
                <img src={accidentImg} alt="사고 정보" />
              </article>
              <label>사고 정보</label>
            </li>
            <li>
              <article>
                <img src={predictImg} alt="예측 분석" />
              </article>
              <label>예측 분석</label>
            </li>
            <li>
              <article>
                <img src={realTimeAnalysisImg} alt="실시간 분석결과" />
              </article>
              <label>실시간 분석결과</label>
            </li>
            <li>
              <article>
                <img src={controlStrategyImg} alt="방제 전략" />
              </article>
              <label>방제 전략</label>
            </li>
            <li className="admin-btn-wrap">
              <Link to={'/admin'} target={'_blank'}>
                <article>
                  <img src={adminImg} alt="관리자" />
                </article>
                <label>관리자</label>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-gnb-wrap">
          <div className="search-wrap">
            <input type="search" placeholder="통합 검색" />
            <article>
              <img src={searchImg} alt="검색 아이콘" />
            </article>
          </div>
          <div className="user-wrap">
            <ul>
              <li>
                <article>
                  <img src={profileImg} alt="사용자" />
                </article>
                <article>
                  <img src={alarmImg} alt="알람" />
                </article>
                <article>
                  <img src={favoriteImg} alt="관심" />
                </article>
              </li>
            </ul>
          </div>
          <div className="ai-wrap">
            <article>
              <img src={aiImg} alt="ai" />
            </article>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
