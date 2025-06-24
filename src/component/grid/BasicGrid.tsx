/**
 * 설명: 공통 그리드 컴포넌트
 **/
import { useEffect, useRef } from 'react';
import {
  ConfigObject,
  DataFieldInput,
  DataValues,
  GridFitStyle,
  GridView,
  LocalDataProvider,
  SelectionStyle,
} from 'realgrid';

interface IProps {
  isIndicator: boolean;
  data: DataValues[];
  fields: DataFieldInput[];
  columns: (ConfigObject | string)[];
}

const BasicGrid = ({ isIndicator, data, fields, columns }: IProps) => {
  const basicRef = useRef<HTMLDivElement>(null);
  const basicGridRef = useRef<GridView | null>(null);

  // 공통 그리드 set
  useEffect(() => {
    if (!basicRef) return;
    if (basicRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(basicRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(fields);
      gridView.setColumns(columns);

      dataProvider.setRows(data);

      basicGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;

      gridView.setOptions({
        rowIndicator: isIndicator ? { visible: true, minWidth: 100, headText: '번호' } : { visible: false },
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
      if (basicRef && basicGridRef.current) {
        basicGridRef.current.destroy();
      }
    };
  }, [basicRef]);
  return <div id="basicGridContainer" ref={basicRef} style={{ height: '300px' }} />;
};

export default BasicGrid;
