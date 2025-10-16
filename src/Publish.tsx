import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import '@/Styles/common_Main.scss';


const Publish = () => {
  return (
    <>
      <div className="d-flex flex-column flex-wrap gap-2 p-3">
        <h1>웹 호환성 진단용</h1>

        <div className="forms-group">
          <Table>
            <colgroup>
              <col style={{ width: '140px' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/LoginMain'}>로그인</Link>
                    <Link to={'/MainPage'}>메인페이지</Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Publish;
