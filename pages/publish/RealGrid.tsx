import { useEffect, useRef } from 'react';
import { GridFitStyle, GridView, LocalDataProvider, SelectionStyle } from 'realgrid';
import { SAMPLE_COLUMNS3, SAMPLE_FIELDS3, sampleGrid3 } from '@/utils/gridOption.ts';

const RealGrid = () => {
  const commonModalRef = useRef<HTMLDivElement>(null);
  const commonModalGridRef = useRef<GridView | null>(null);
  useEffect(() => {
    if (!commonModalRef) return;
    if (commonModalRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(commonModalRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(SAMPLE_FIELDS3);
      gridView.setColumns(SAMPLE_COLUMNS3);

      dataProvider.setRows(sampleGrid3);

      commonModalGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 25;

      gridView.setOptions({
        rowIndicator: { visible: true, minWidth: 100, headText: '번호' },
        stateBar: { visible: false },
        checkBar: { visible: false },
        footer: { visible: false },
        edit: { editable: false },
        display: {
          rowHeight: 25,
          columnMovable: false,
          columnResizable: true,
          fitStyle: GridFitStyle.EVEN_FILL,
          selectionStyle: SelectionStyle.SINGLE_ROW,
        },
      });
    }

    return () => {
      if (commonModalRef && commonModalGridRef.current) {
        commonModalGridRef.current.destroy();
      }
    };
  }, [commonModalRef]);

  return <div id="commonGridContainer" ref={commonModalRef} style={{ height: '285px' }} />;
};

export default RealGrid;
