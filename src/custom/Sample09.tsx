//Component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Sample09 = () => {

  return (
    <>    
    <div className="d-flex flex-column flex-wrap gap-2 p-3">
      <h1>Realgrid + tree menu Sample <small>https://docs.realgrid.com</small></h1>      
      
      <div className="mt-3">
        <h4>1. Realgrid - 기본, 체크박스 없는 것</h4>
        <div>샘플 넣어주세요.</div>
      </div>

      <div className="mt-3">
        <h4>2. Realgrid - 체크박스 있는 것</h4>
        <div>샘플 넣어주세요.</div>
      </div>

      <div className="mt-3">
        <h4>3. Realgrid - height 스타일 있는 것</h4>        
        <pre>
          <code> {
            `줄수와 상관없이 높이 스타일 태그 넣을 때 style={{height: 'calc(100vh - 500px)',}} `
          }
          </code>
        </pre>
        <div>샘플 넣어주세요.</div>
      </div>

      <div className="mt-3">
        <h4>4. Realgrid - 관리자의 모니터링, 수집관리 grid</h4>   
        <div>샘플 넣어주세요.</div>
      </div>

      <div className="mt-3">
        <h4>4. tree menu - 공유 담당자 찾기</h4>
        <div>샘플 넣어주세요.</div>
      </div>
    </div>
    </>
  );
};

export default Sample09;
