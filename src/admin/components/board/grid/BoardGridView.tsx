/**
 * 설명: 관리자 -> 게시판관리 그리드 모음
 **/
import { useNavigate } from 'react-router-dom';
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
  typeObj: { type: string; url: string };
  data: DataValues[];
  fields: DataFieldInput[];
  columns: (ConfigObject | string)[];
}

const BoardGridView = ({ typeObj, data, fields, columns }: IProps) => {
  const navigate = useNavigate();
  const boardRef = useRef<HTMLDivElement>(null);
  const boardGridRef = useRef<GridView | null>(null);

  // 게시판 공통 그리드 set
  useEffect(() => {
    if (!boardRef) return;
    if (boardRef.current) {
      const dataProvider = new LocalDataProvider();
      const gridView = new GridView(boardRef.current);

      gridView.setDataSource(dataProvider);

      dataProvider.setFields(fields);
      gridView.setColumns(columns);

      dataProvider.setRows(data);

      boardGridRef.current = gridView;

      gridView.setDisplayOptions({
        emptyMessage: '데이터가 없습니다.',
        showEmptyMessage: true,
      });

      gridView.header.height = 40;

      gridView.setOptions({
        rowIndicator: { visible: true, minWidth: 100, headText: '번호' },
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

      gridView.onCellClicked = (grid, clickData) => {
        void navigate(`/admin/board/${typeObj.url}/${clickData.field}`, {
          state: { previousPage: `/admin/board/${typeObj.url}`, oneDepth: '게시판관리', twoDepth: typeObj.type },
        });
      };
    }

    return () => {
      if (boardRef && boardGridRef.current) {
        boardGridRef.current.destroy();
      }
    };
  }, [boardRef]);
  return <div id="boardGridContainer" ref={boardRef} style={{ height: '300px' }} />;
};

export default BoardGridView;
