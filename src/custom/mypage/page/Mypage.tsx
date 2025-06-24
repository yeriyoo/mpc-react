/**
 * 설명: 마이페이지
 **/
import { Link } from 'react-router-dom';
import { useState } from 'react';
/* import '@/assets/scss/common_new.scss'; */

const Mypage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="open-menu" style={{ left: '42px' }}>
        <div className="kcg-left" style={{ width: 'calc(100% - 42px)' }}>
          <div className="contents">
            <div className="ship_title_box">
              <div>관심선박/영역정보</div>
              <Link to="/main"></Link>
            </div>

            <div className="container-fluid mypage-main">
              <div className="row g-30">
                <div className="col">
                  <div className="status-group mt-30">
                    <div className="status-item status-color status-color1">
                      <div className="title">
                        <i className='icon-gcsc icon-status img-status1'></i>  
                        관심선박
                      </div>
                      <div className="count">1,123</div>
                    </div>
                    <div className="status-item status-color status-color2">
                      <div className="title">
                        <i className='icon-gcsc icon-status img-status2'></i>  
                        관심영역
                      </div>
                      <div className="count">1,123</div>
                    </div>
                    <div className="status-item status-color status-color3">
                      <div className="title">
                        <i className='icon-gcsc icon-status img-status3'></i>  
                        공유
                      </div>
                      <div className="count">1,123</div>
                    </div>
                    <div className="status-item status-color status-color4">
                      <div className="title">
                        <i className='icon-gcsc icon-status img-status4'></i>  
                        알림
                      </div>
                      <div className="count">1,123</div>
                    </div>
                  </div>
                  <div className="items-group">
                    <div className="header underline">
                      <div className="header-title page-title">관심선박</div>
                      <div className="header-control ms-auto">
                        <button className="nbtn nbtn-secondary min-width">업데이트</button>
                        <div className="text-group text-666666"><strong>최종 업데이트 : </strong>2024-08-01 12:00:00</div>
                        <button className="nbtn nbtn-secondary min-width">설정</button>
                      </div>
                    </div>
                    <div className="body">                      
                      <div className="list-group">
                        <div className="list-group-item">
                          <div className="ship-item">
                            <div className="ship-info">                              
                              <div className="text-group text-17 text-040404 text-700">TIANLONG19876564</div>
                              <div className="text-group text-16 text-666666">412330220 <span className='text-divider'></span> Cargo</div>
                            </div>
                            <div className="ship-status">
                              <div className="badge rounded-pill text-bg-info">운항중</div>
                            </div>
                            <div className="ship-operation">
                              <div className="operation-item operation-item1">
                                <div className="text-group">
                                  <span className="text-16 text-040404 text-700">LANSHAN</span>
                                  <span className="text-16 text-666666">CNLSN</span>
                                </div>
                                <i className='icon-gcsc icon-arrow-right-12'></i>                           
                                <div className="text-group">
                                  <span className="text-16 text-666666">CNBAY</span>
                                  <span className="text-16 text-040404 text-700">BAYUQUAN</span>
                                </div>
                              </div>
                              <div className="range-bar">
                                <div className="start-ball"></div>
                                <input type="range" min="0" max="100" step="10" value="30" />
                                <div className="progress-bar-track" style={{ width: `30%`, }} />
                                <div className="end-ball"></div>
                              </div>
                              <div className="operation-item operation-item2">
                                <div className="text-group">
                                  <span className="label label-info">ATD</span>
                                  <span className="text-666666">2024-07-01 12:00</span>
                                </div>
                                <div className="text-group">
                                  <span className="text-666666">2024-07-01 12:00</span>
                                  <span className="label label-info">ETA</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="ship-item">
                            <div className="ship-info">                              
                              <div className="text-group text-17 text-040404 text-700">TIANLONG19876564</div>
                              <div className="text-group text-16 text-666666">412330220 <span className='text-divider'></span> Cargo</div>
                            </div>
                            <div className="ship-status">
                              <div className="badge rounded-pill text-bg-secondary">정지중</div>
                            </div>
                            <div className="ship-operation">
                              <div className="operation-item operation-item1">
                                <div className="text-group">
                                  <span className="text-16 text-040404 text-700">LANSHAN</span>
                                  <span className="text-16 text-666666">CNLSN</span>
                                </div>
                                <i className='icon-gcsc icon-arrow-right-12'></i>                           
                                <div className="text-group">
                                  <span className="text-16 text-666666">CNBAY</span>
                                  <span className="text-16 text-040404 text-700">BAYUQUAN</span>
                                </div>
                              </div>
                              <div className="range-bar">
                                <div className="start-ball"></div>
                                <input type="range" min="0" max="100" step="10" value="30" />
                                <div className="progress-bar-track" style={{ width: `30%`, }} />
                                <div className="end-ball"></div>
                              </div>
                              <div className="operation-item operation-item2">
                                <div className="text-group">
                                  <span className="label label-info">ATD</span>
                                  <span className="text-666666">2024-07-01 12:00</span>
                                </div>
                                <div className="text-group">
                                  <span className="text-666666">2024-07-01 12:00</span>
                                  <span className="label label-info">ETA</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pagination-wrap">
                        <div className="btn-area">
                          <button type="button">
                            <span className="p-prev">p-prev</span>
                          </button>
                          <button type="button">
                            <span className="prev">prev</span>
                          </button>
                          <small className="current">1</small>
                          <small>2</small>
                          <button type="button">
                            <span className="next">next</span>
                          </button>
                          <button type="button">
                            <span className="n-next">n-next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col">                  
                  <div className="items-group">
                    <div className="header underline">
                      <div className="header-title page-title">관심영역</div>
                      <div className="header-control ms-auto">
                        <button className="nbtn nbtn-secondary min-width">업데이트</button>
                        <div className="text-group text-666666"><strong>최종 업데이트 : </strong>2024-08-01 12:00:00</div>
                        <button className="nbtn nbtn-secondary min-width">설정</button>
                      </div>
                    </div>
                    <div className="body">
                      
                      <div className="ntable-group border-top-none">
                        <table>
                          <caption>관심영역</caption>
                          <colgroup>
                            <col />
                            <col style={{ width: '180px' }} />
                            <col style={{ width: '180px' }} />
                            <col style={{ width: '180px' }} />
                            <col style={{ width: '180px' }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>관심영역</th>
                              <th>선박</th>
                              <th>TYPE</th>
                              <th>위치</th>
                              <th>바로가기</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th rowSpan={3}>태안 내해구역</th>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <th rowSpan={3}>보령 내해구역</th>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                            </tr>
                            <tr>
                              <th>광해 내해구역</th>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                              <td>내용</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>                
                  <div className="items-group">
                    <div className="header underline">
                      <div className="header-title page-title">예외사항</div>
                      <div className="ms-1">
                        <button className="nbtn nbtn-text"><i className='icon-gcsc icon-xls icon-left'></i> 예외사항 등록 양식.xlsx</button>
                      </div>
                      <div className="header-control ms-auto">
                        <button className="nbtn nbtn-secondary min-width">업데이트</button>
                        <div className="text-group text-666666"><strong>최종 업데이트 : </strong>2024-08-01 12:00:00</div>
                        <button className="nbtn nbtn-secondary min-width">등록</button>
                      </div>
                    </div>
                    <div className="body">
                      
                      <div className="list-group">
                        <div className="list-group-item">
                          <div className="ship-item">
                            <div className="ship-info">                              
                              <div className="text-group text-17 text-040404 text-700">TIANLONG19876564</div>
                              <div className="text-group text-16 text-666666">412330220 <span className='text-divider'></span> Cargo</div>
                            </div>
                            <div className="ship-status">
                              <div className="badge text-bg-info">중국선박</div>
                            </div>
                            <div className="ship-operation">
                              <div className="operation-item operation-item1">
                                <div className="text-group">
                                  <span className="text-16 text-040404 text-700">LANSHAN</span>
                                  <span className="text-16 text-666666">CNLSN</span>
                                </div>
                                <i className='icon-gcsc icon-arrow-right-12'></i>                           
                                <div className="text-group">
                                  <span className="text-16 text-666666">CNBAY</span>
                                  <span className="text-16 text-040404 text-700">BAYUQUAN</span>
                                </div>
                              </div>
                              <div className="operation-item operation-item2">
                                <div className="text-group">
                                  <span className="label label-info">ATD</span>
                                  <span className="text-666666">2024-07-01 12:00</span>
                                </div>
                                <div className="text-group">
                                  <span className="text-666666">2024-07-01 12:00</span>
                                  <span className="label label-info">ETA</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="ship-item">
                            <div className="ship-info">                              
                              <div className="text-group text-17 text-040404 text-700">TIANLONG19876564</div>
                              <div className="text-group text-16 text-666666">412330220 <span className='text-divider'></span> Cargo</div>
                            </div>
                            <div className="ship-status">
                              <div className="badge text-bg-info">중국선박</div>
                            </div>
                            <div className="ship-operation">
                              <div className="operation-item operation-item1">
                                <div className="text-group">
                                  <span className="text-16 text-040404 text-700">LANSHAN</span>
                                  <span className="text-16 text-666666">CNLSN</span>
                                </div>
                                <i className='icon-gcsc icon-arrow-right-12'></i>                           
                                <div className="text-group">
                                  <span className="text-16 text-666666">CNBAY</span>
                                  <span className="text-16 text-040404 text-700">BAYUQUAN</span>
                                </div>
                              </div>
                              <div className="operation-item operation-item2">
                                <div className="text-group">
                                  <span className="label label-info">ATD</span>
                                  <span className="text-666666">2024-07-01 12:00</span>
                                </div>
                                <div className="text-group">
                                  <span className="text-666666">2024-07-01 12:00</span>
                                  <span className="label label-info">ETA</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pagination-wrap">
                        <div className="btn-area">
                          <button type="button">
                            <span className="p-prev">p-prev</span>
                          </button>
                          <button type="button">
                            <span className="prev">prev</span>
                          </button>
                          <small className="current">1</small>
                          <small>2</small>
                          <button type="button">
                            <span className="next">next</span>
                          </button>
                          <button type="button">
                            <span className="n-next">n-next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>



      
    </>
  );
};

export default Mypage;
