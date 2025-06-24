/**
 * 설명: 관리자 -> 모니터링 -> 수집관리 -> 수집작업관리 모달
 **/
import { Button, Col, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';
import { useState } from 'react';
import BasicGrid from '@/component/grid/BasicGrid.tsx';
import {
  SAMPLE_COLUMNS15,
  SAMPLE_COLUMNS16,
  SAMPLE_FIELDS15,
  SAMPLE_FIELDS16,
  sampleGrid15,
  sampleGrid16,
} from '@/utils/gridOption.ts';
import CollectionAddModal from '@/admin/components/monitoring/modal/CollectionAddModal.tsx';

const CollectionManageModal = ({ isShow, setIsShow }: CommonModalProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <Modal size="xl" centered show={isShow} onHide={setIsShow} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>수집 작업 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="items-group">
          <div className="header">
            <div className="left">
              <div className="title size-16">프로세스명</div>
            </div>
          </div>
          <div className="body">
            <div className="forms-group">
              <Table>
                <colgroup>
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <td>
                      <InputGroup className="align-items-center">
                        <Form.Control type="text" />
                        <Button
                          variant="outline-primary"
                          className="ms-2 btn-text-icon"
                          onClick={() => setIsShowModal(true)}
                        >
                          수집 작업 등록
                        </Button>
                      </InputGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <Row>
          <Col>
            <div className="items-group mt-20">
              <div className="header">
                <div className="left">
                  <div className="title size-16">수집 서버 선택</div>
                </div>
              </div>
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="right">
                      <div className="buttons">
                        <Button variant="outline-primary" className="mw-auto text-nowrap">
                          TXT
                        </Button>
                        <Button variant="outline-primary" className="mw-auto">
                          FILE
                        </Button>
                        <Button variant="outline-primary" className="mw-auto">
                          FTP
                        </Button>
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">
                            조회 <i className="icon-admin icon-button icon-search2 ms-1" />
                          </Button>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    <BasicGrid
                      isIndicator={false}
                      data={sampleGrid15}
                      fields={SAMPLE_FIELDS15}
                      columns={SAMPLE_COLUMNS15}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="items-group mt-20">
              <div className="header">
                <div className="left">
                  <div className="title size-16">수집 스케쥴</div>
                </div>
              </div>
              <div className="body">
                <div className="grid-group">
                  <div className="grid-header">
                    <div className="right">
                      <div className="buttons">
                        <InputGroup className="align-items-center">
                          <Form.Control type="text" />
                          <Button variant="outline-primary" className="ms-2 btn-text-icon">
                            조회 <i className="icon-admin icon-button icon-search2 ms-1" />
                          </Button>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                  <div className="realgrid-group">
                    <BasicGrid
                      isIndicator={true}
                      data={sampleGrid16}
                      fields={SAMPLE_FIELDS16}
                      columns={SAMPLE_COLUMNS16}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      {isShowModal && <CollectionAddModal isShow={isShowModal} setIsShow={() => setIsShowModal(false)} />}
    </Modal>
  );
};
export default CollectionManageModal;
