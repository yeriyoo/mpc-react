/**
 * 설명: 관리자 -> 사용자정보 브래드 크럼
 **/
import { Breadcrumb } from 'react-bootstrap';

interface IProps {
  oneDepth: string;
  twoDepth: string;
  threeDepth?: string;
}

const CommonBreadcrumb = ({ oneDepth, twoDepth, threeDepth }: IProps) => {
  return (
    <div className="breadcrumb-group">
      <Breadcrumb>
        <Breadcrumb.Item href={'/admin'}>
          <i className="icon-admin icon-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>{oneDepth}</Breadcrumb.Item>
        <Breadcrumb.Item>{twoDepth}</Breadcrumb.Item>
        {threeDepth && <Breadcrumb.Item>{threeDepth}</Breadcrumb.Item>}
      </Breadcrumb>
    </div>
  );
};

export default CommonBreadcrumb;
