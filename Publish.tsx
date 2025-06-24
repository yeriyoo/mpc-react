import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FieldInfoUploadModal from '@/component/map/modal/FieldInfoUploadModal.tsx';

const Publish = () => {
  const [isShow01, setIsShow01] = useState(false);
  return (
    <>
      <div className="d-flex flex-column flex-wrap gap-2 p-3">
        <h1>퍼블 화면</h1>

        <div className="forms-group">
          <Table>
            <colgroup>
              <col style={{ width: '140px' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>공통</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={'/publish/main'}></Link>
                    <Link to={'#'} onClick={() => setIsShow01(true)}>
                      업로드
                    </Link>
                    <Link to={'/publish/'}></Link>
                    <Link to={'/publish/sample08'}></Link>
                    <Link to={'/publish/sample16'}></Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      {isShow01 && <FieldInfoUploadModal setIsShow={() => setIsShow01(false)} />}
    </>
  );
};

export default Publish;
