/**
 * 설명: 관리자 -> 사용자정보 -> 동접 제한 -> 통합관리 상세 모달
 **/
import { Button, Col, Modal, Row } from 'react-bootstrap';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS11, SAMPLE_FIELDS11 } from '@/utils/gridOption.ts';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  BarController,
  LineController,
);

const IntegrationDetailModal = ({ isShow, setIsShow }: CommonModalProps) => {
  const integrationDetailRef = useRef<HTMLDivElement>(null);
  const integrationDetailGridRef = useRef<GridView | null>(null);

  const labels = ['1월', '2월', '3월', '4월', '5월', '6월', '7월'];
  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '바 + 라인 차트',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: '매출액(만원)',
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: '성장률(%)',
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: '월별 매출',
        data: [50, 60, 70, 65, 80, 90, 100],
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: '성장률',
        data: [5, 10, 15, 18, 22, 25],
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
        yAxisID: 'y1',
        tension: 0.3,
      },
    ],
  };
  const sample = Array.from({ length: 31 }, (_, idx) => ({
    '5월': `${idx + 1}일`,
    건수: 3,
  }));
  // 통합관리 그리드 set
  useEffect(() => {
    if (!integrationDetailRef) return;
    if (integrationDetailRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(integrationDetailRef.current);

      gridView.setDataSource(dataProvider);
      dataProvider.setFields(SAMPLE_FIELDS11);
      gridView.setColumns(SAMPLE_COLUMNS11);
      dataProvider.setRows(sample);

      integrationDetailGridRef.current = gridView;

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
      if (integrationDetailRef && integrationDetailGridRef.current) {
        integrationDetailGridRef.current.destroy();
      }
    };
  }, [integrationDetailRef]);

  return (
    <Modal size="xl" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>그룹 사용자 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <div className="items-group">
              <div className="header">
                <div className="left">
                  <div className="title size-16">2025년 해양오염현황 통계(월별. 일별)</div>
                </div>
              </div>
              <div className="body">
                <div className="chart-group">
                  <Chart type={'bar'} data={data} options={options} />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="items-group">
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="left">
                      <div className="title size-16">해양오염현황</div>
                    </div>
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary">CSV다운로드</Button>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    <div id="integrationDetailGridContainer" ref={integrationDetailRef} style={{ height: '400px' }} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default IntegrationDetailModal;
