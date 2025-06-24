import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Publish = () => {
  return (
    <>
      <div className="d-flex flex-column flex-wrap gap-2 p-3">
        <h1>퍼블 화면</h1>

        <div className="forms-group">
          <Table>
            <colgroup>
              <col style={{ width: "140px" }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>공통</th>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={"/pubilsh/main"}>메인</Link>
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
