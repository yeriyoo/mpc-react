import weatherImg0101 from '@/custom/assets/img/weather/weather0101.svg';
import weatherImg0102 from '@/custom/assets/img/weather/weather0102.svg';
import weatherImg0103 from '@/custom/assets/img/weather/weather0103.svg';
import weatherImg0104 from '@/custom/assets/img/weather/weather0104.svg';
import weatherImg0105 from '@/custom/assets/img/weather/weather0105.svg';

import weatherImg0201 from '@/custom/assets/img/weather/weather0201.svg';
import weatherImg0202 from '@/custom/assets/img/weather/weather0202.svg';
import weatherImg0203 from '@/custom/assets/img/weather/weather0203.svg';
import weatherImg0204 from '@/custom/assets/img/weather/weather0204.svg';
import weatherImg0205 from '@/custom/assets/img/weather/weather0205.svg';

import weatherImg0301 from '@/custom/assets/img/weather/weather0301.svg';
import weatherImg0302 from '@/custom/assets/img/weather/weather0302.svg';
import weatherImg0303 from '@/custom/assets/img/weather/weather0303.svg';
import weatherImg0304 from '@/custom/assets/img/weather/weather0304.svg';
import weatherImg0305 from '@/custom/assets/img/weather/weather0305.svg';

import weatherImg0401 from '@/custom/assets/img/weather/weather0401.svg';
import weatherImg0402 from '@/custom/assets/img/weather/weather0402.svg';
import weatherImg0403 from '@/custom/assets/img/weather/weather0403.svg';
import weatherImg0404 from '@/custom/assets/img/weather/weather0404.svg';
import weatherImg0405 from '@/custom/assets/img/weather/weather0405.svg';


//Component
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const Weather = () => {

  return (
    <>    

    <div className="d-flex flex-column flex-wrap gap-2 p-3">
      <h1>날씨 이미지</h1>      
      
      <div className="mt-3">
        <div className="forms-group">
          <Table className="text-center">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>상태</th>
                <th>기본</th>
                <th>비</th>
                <th>비/눈</th>
                <th>눈</th>
                <th>소나기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>맑음</th>
                <td><img className="image-weather" src={weatherImg0101} alt="맑음" /></td>
                <td><img className="image-weather" src={weatherImg0102} alt="맑음 비" /></td>
                <td><img className="image-weather" src={weatherImg0103} alt="맑음 비/눈" /></td>
                <td><img className="image-weather" src={weatherImg0104} alt="맑음 눈" /></td>
                <td><img className="image-weather" src={weatherImg0105} alt="맑음 소나기" /></td>
              </tr>
              <tr>
                <th>구름조금</th>
                <td><img className="image-weather" src={weatherImg0201} alt="구름조금" /></td>
                <td><img className="image-weather" src={weatherImg0202} alt="구름조금 비" /></td>
                <td><img className="image-weather" src={weatherImg0203} alt="구름조금 비/눈" /></td>
                <td><img className="image-weather" src={weatherImg0204} alt="구름조금 눈" /></td>
                <td><img className="image-weather" src={weatherImg0205} alt="구름조금 소나기" /></td>
              </tr>
              <tr>
                <th>구름많음</th>
                <td><img className="image-weather" src={weatherImg0301} alt="구름많음" /></td>
                <td><img className="image-weather" src={weatherImg0302} alt="구름많음 비" /></td>
                <td><img className="image-weather" src={weatherImg0303} alt="구름많음 비/눈" /></td>
                <td><img className="image-weather" src={weatherImg0304} alt="구름많음 눈" /></td>
                <td><img className="image-weather" src={weatherImg0305} alt="구름많음 소나기" /></td>
              </tr>
              <tr>
                <th>흐림</th>
                <td><img className="image-weather" src={weatherImg0401} alt="흐림" /></td>
                <td><img className="image-weather" src={weatherImg0402} alt="흐림 비" /></td>
                <td><img className="image-weather" src={weatherImg0403} alt="흐림 비/눈" /></td>
                <td><img className="image-weather" src={weatherImg0404} alt="흐림 눈" /></td>
                <td><img className="image-weather" src={weatherImg0405} alt="흐림 소나기" /></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Weather;
