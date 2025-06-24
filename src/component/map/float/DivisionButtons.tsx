/**
 * 설명: 예측 시스템 -> 종합분석 -> 분할 버튼
 **/
import { Button } from 'react-bootstrap';
import { useDivisionMapStore } from '@/store/commonStore.ts';
import { useNavigate } from 'react-router-dom';
const DivisionButtons = () => {
  const navigate = useNavigate();
  const setDivisionMap = useDivisionMapStore(state => state.setDivisionMap);
  const divisionMap = useDivisionMapStore(state => state.divisionMap);

  // 화면 전환 버튼
  const onChangeDivisionMap = (s: string) => {
    setDivisionMap(s);
  };

  return (
    <article className="division-btn-wrap">
      <Button variant="division" onClick={() => void navigate('/')}>
        이전화면
      </Button>
      <Button variant="division" onClick={() => onChangeDivisionMap('two')} active={divisionMap === 'two'}>
        2분할
      </Button>
      <Button variant="division" onClick={() => onChangeDivisionMap('four')} active={divisionMap === 'four'}>
        4분할
      </Button>
    </article>
  );
};
export default DivisionButtons;
