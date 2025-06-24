/**
 * 설명: 관리자 -> 환경설정 -> 공통메뉴관리
 **/
import { Button, Col, Form, InputGroup, Row, Table } from 'react-bootstrap';
import CommonBreadcrumb from '@/admin/components/common/CommonBreadcrumb.tsx';

const MenuManage = () => {
  return (
    <div className="contents">
      <CommonBreadcrumb oneDepth={'환경설정'} twoDepth={'메뉴관리'} />
      <div className="contents-items">
        <div className="contents-title">메뉴관리</div>
        <div className="contents-info mb-3">
          해양환경 위기대응 통합시스템 관리자 및 사용자별로 메뉴 권한을 관리할 수 있습니다.
          <br />
          관리자 및 사용자를 우선 선택하여 이용하세요.
        </div>
        <Row>
          <Col md="6" lg="4">
            <div className="items-group">
              <div className="header" style={{ height: '38px' }}>
                <div className="left">
                  <div className="title size-16">메뉴</div>
                  <Form.Select>
                    <option>관리자</option>
                    <option>사용자</option>
                  </Form.Select>
                </div>
                <div className="right">
                  <Button variant="outline-primary">추가</Button>
                  <Button variant="secondary">삭제</Button>
                </div>
              </div>
              <div className="body">
                <div className="tree-group border">트리 들어가는 곳</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="items-group">
              <div className="header">
                <div className="left">
                  <div className="title size-16">메뉴 상세 및 수정</div>
                </div>
                <div className="right">
                  <Button variant="primary">등록</Button>
                </div>
              </div>
              <div className="body">
                <div className="forms-group">
                  <Table>
                    <colgroup>
                      <col style={{ width: '140px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>메뉴구분</th>
                        <td className="align-middle">관리자</td>
                      </tr>
                      <tr>
                        <th>상위메뉴</th>
                        <td className="align-middle">ROOT</td>
                      </tr>
                      <tr>
                        <th>메뉴구분</th>
                        <td className="align-middle">카테고리</td>
                      </tr>
                      <tr>
                        <th>메뉴명</th>
                        <td>
                          <Form.Control type="text" />
                        </td>
                      </tr>
                      <tr>
                        <th>메뉴순서</th>
                        <td>
                          <Form.Control type="text" />
                        </td>
                      </tr>
                      <tr>
                        <th>메뉴주소</th>
                        <td>
                          <Form.Control type="text" />
                        </td>
                      </tr>
                      <tr>
                        <th>좌측메뉴타이틀</th>
                        <td>
                          <InputGroup className="align-items-center">
                            <Form.Control type="text" />
                            <Button variant="outline-primary" className="ms-2">
                              찾아보기
                            </Button>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <th>메뉴설명</th>
                        <td>
                          <Form.Control as="textarea" rows={5} />
                        </td>
                      </tr>
                      <tr>
                        <th>사용구분</th>
                        <td className="align-middle">
                          <Form.Check type="radio" inline id="" label="사용함" className="mb-0" />
                          <Form.Check type="radio" inline id="" label="사용안함" className="mb-0" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MenuManage;
