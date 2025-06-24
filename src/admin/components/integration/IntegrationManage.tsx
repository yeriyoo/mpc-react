/**
 * 설명: 관리자 -> 통합관리
 **/
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight, mdiPauseCircleOutline } from '@mdi/js';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';
import { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import WebGLTileLayer from 'ol/layer/WebGLTile';
import { XYZ } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultsControls } from 'ol/control/defaults';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS10, SAMPLE_FIELDS10, sampleGrid10 } from '@/utils/gridOption.ts';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement } from 'chart.js';
import IntegrationDetailModal from '@/admin/components/integration/modal/IntegrationDetailModal.tsx';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement);

const IntegrationManage = () => {
  const integrationRef = useRef<HTMLDivElement>(null);
  const integrationGridRef = useRef<GridView | null>(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const option = {
    responsive: false,
    rotation: -90,
    circumference: 180,
    cutout: '70%',
    // aspectRatio: 2,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  // 지도 set
  useEffect(() => {
    // 동아시아 범위
    const boundingExtent = [
      11917802.471998148, // 최소 X
      3220398.241143153, // 최소 Y
      16277122.304140426, // 최대 X
      6266463.763509466, // 최대 Y
    ];

    const map = new Map({
      target: 'integrationMap',
      layers: [
        new WebGLTileLayer({
          source: new XYZ({
            url: '/MAPS/WORLD_webp/{z}/{x}/{y}.webp',
            minZoom: 4,
            maxZoom: 14,
            attributions: `ⓒ OpenStreetMap`,
          }),
          preload: Infinity,
        }),
      ],
      view: new View({
        center: fromLonLat([126.978, 37.5665]), // 서울
        zoom: 7,
        extent: boundingExtent,
        projection: 'EPSG:3857',
      }),
      controls: defaultsControls({
        attribution: false,
        rotate: false,
        zoom: false,
      }),
    });

    return () => {
      if (map) map.dispose();
    };
  }, []);

  // 통합관리 그리드 set
  useEffect(() => {
    if (!integrationRef) return;
    if (integrationRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(integrationRef.current);

      gridView.setDataSource(dataProvider);
      dataProvider.setFields(SAMPLE_FIELDS10);
      gridView.setColumns(SAMPLE_COLUMNS10);
      dataProvider.setRows(sampleGrid10);

      integrationGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;
      gridView.setOptions({
        rowIndicator: { visible: false },
        stateBar: { visible: false },
        checkBar: { visible: false },
        footer: { visible: false },
        edit: { editable: false },
        display: {
          rowHeight: 40,
          columnMovable: false,
          columnResizable: false,
          fitStyle: GridFitStyle.EVEN_FILL,
          selectionStyle: SelectionStyle.SINGLE_ROW,
        },
      });
    }
    return () => {
      if (integrationRef && integrationGridRef.current) {
        integrationGridRef.current.destroy();
      }
    };
  }, [integrationRef]);

  return (
    <div className="admin-content">
      <div className="lnb">
        <div className="lnb-menu-title">통합관리</div>
        <div className="lnb-menu">
          <ListGroup defaultActiveKey="/admin/integration">
            <ListGroup.Item action active href="/admin/integration">
              통합관리
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="contents">
        <CommonBreadcrumb oneDepth={'통합관리'} twoDepth={'통합관리'} />
        <div className="contents-items">
          <div className="contents-title">통합관리</div>
          <Row className="mt-20">
            <Col md="7">
              <div className="items-group">
                <div className="header">
                  <div className="left">
                    <div className="title size-16">2025년 해양오염현황 통계(월별. 일별)</div>
                  </div>
                </div>
                <div className="body">
                  <div style={{ height: '400px', position: 'relative' }}>
                    <div id="integrationMap" />
                  </div>
                  <div className="grid-group mt-20">
                    <div className="realgrid-group">
                      <div id="integrationGridContainer" ref={integrationRef} style={{ height: '200px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <Card className="pollution-status-group pollution-status-group1">
                <Card.Header>
                  <div className="title-info">
                    <div className="title-date">2005</div>
                    <div className="title-name">해양오염현황</div>
                    <div className="title-value">
                      <span>349</span>건
                    </div>
                  </div>
                  <div className="ms-auto">
                    <Button variant="outline-primary" size="sm" onClick={() => setIsShowModal(true)}>
                      상세보기
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body className="border-bottom">
                  <div className="body-info body-info1">
                    <div className="body-info-item">
                      <div className="info-name">경기</div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">경북</div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">강원</div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="body-info body-info2">
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          충남
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          경남
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          전남
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          전북
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          충북
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          대구
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          부산
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          울산
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          인천
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          광주
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          대전
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          서울
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          세종
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="body-info-item">
                      <div className="info-name">
                        <Badge bg="secondary" pill>
                          제주
                        </Badge>
                      </div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="pollution-status-group pollution-status-group2 mt-20" bg="warning">
                <Card.Header>
                  <div className="title-info">
                    <div className="title-name">전국</div>
                    <div className="title-value">
                      <Badge bg="warning" pill>
                        주의
                      </Badge>
                    </div>
                    <div className="title-date">2005-05-001 08:00</div>
                  </div>
                  <div className="ms-auto d-flex gap-1">
                    <Button variant="outline-primary" size="sm" className="btn-icon">
                      <Icon path={mdiChevronLeft} className="icon-admin icon-mdi" />
                    </Button>
                    <Button variant="outline-primary" size="sm" className="btn-icon">
                      <Icon path={mdiChevronRight} className="icon-admin icon-mdi" />
                    </Button>
                    <Button variant="outline-primary" size="sm" className="btn-icon">
                      <Icon path={mdiPauseCircleOutline} className="icon-admin icon-mdi" />
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="bg-white p-2">
                    <Row>
                      <Col>
                        <div className="chart-group">
                          <Doughnut data={data} options={option} />
                        </div>
                      </Col>
                      <Col>
                        <div className="pollution-statu-info">
                          <dl>
                            <dt>경보단계</dt>
                            <dd>
                              <Badge bg="warning" pill>
                                주의
                              </Badge>
                            </dd>
                            <dt>발령지역</dt>
                            <dd>
                              전국: 주의 <br />
                              전국: 주의
                            </dd>
                          </dl>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
              <div className="items-group mt-20">
                <div className="body">
                  <div className="pollution-status-group pollution-status-group3">
                    <div className="info-item bg1">
                      <div className="info-name">방제작업중</div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                    <div className="info-item bg2">
                      <div className="info-name">작업완료</div>
                      <div className="info-value">
                        <span>349</span>건
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {isShowModal && <IntegrationDetailModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </div>
  );
};

export default IntegrationManage;
