import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

//Layout
import Stack from 'react-bootstrap/Stack';
//Component
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
//Utilities
import Spinner from 'react-bootstrap/esm/Spinner';
export const SamplePage3 = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>Button</Modal.Title>
            <CloseButton onClick={setIsShow} />
          </Modal.Header>
          <Modal.Body>
            <Stack gap={3}>
              <Stack>
                <h5>Default</h5>
                <Stack gap={3}>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <Button variant="primary">button</Button>
                    <Button variant="secondary">button</Button>
                    <Button variant="success">button</Button>
                    <Button variant="warning">button</Button>
                    <Button variant="danger">button</Button>
                    <Button variant="info">button</Button>
                    <Button variant="light">button</Button>
                    <Button variant="dark">button</Button>
                    <Button variant="link">button</Button>
                  </Stack>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <Button variant="primary" disabled>
                      button
                    </Button>
                    <Button variant="secondary" disabled>
                      button
                    </Button>
                    <Button variant="success" disabled>
                      button
                    </Button>
                    <Button variant="warning" disabled>
                      button
                    </Button>
                    <Button variant="danger" disabled>
                      button
                    </Button>
                    <Button variant="info" disabled>
                      button
                    </Button>
                    <Button variant="light" disabled>
                      button
                    </Button>
                    <Button variant="dark" disabled>
                      button
                    </Button>
                    <Button variant="link" disabled>
                      button
                    </Button>
                  </Stack>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <Button variant="primary" active>
                      button
                    </Button>
                    <Button variant="secondary" active>
                      button
                    </Button>
                    <Button variant="success" active>
                      button
                    </Button>
                    <Button variant="warning" active>
                      button
                    </Button>
                    <Button variant="danger" active>
                      button
                    </Button>
                    <Button variant="info" active>
                      button
                    </Button>
                    <Button variant="light" active>
                      button
                    </Button>
                    <Button variant="dark" active>
                      button
                    </Button>
                    <Button variant="link" active>
                      button
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <h5>Outline</h5>
                <Stack gap={3}>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <Button variant="outline-primary">button</Button>
                    <Button variant="outline-secondary">button</Button>
                    <Button variant="outline-success">button</Button>
                    <Button variant="outline-warning">button</Button>
                    <Button variant="outline-danger">button</Button>
                    <Button variant="outline-info">button</Button>
                    <Button variant="outline-light">button</Button>
                    <Button variant="outline-dark">button</Button>
                  </Stack>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <Button variant="outline-primary" disabled>
                      button
                    </Button>
                    <Button variant="outline-secondary" disabled>
                      button
                    </Button>
                    <Button variant="outline-success" disabled>
                      button
                    </Button>
                    <Button variant="outline-warning" disabled>
                      button
                    </Button>
                    <Button variant="outline-danger" disabled>
                      button
                    </Button>
                    <Button variant="outline-info" disabled>
                      button
                    </Button>
                    <Button variant="outline-light" disabled>
                      button
                    </Button>
                    <Button variant="outline-dark" disabled>
                      button
                    </Button>
                  </Stack>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <Button variant="outline-primary" active>
                      button
                    </Button>
                    <Button variant="outline-secondary" active>
                      button
                    </Button>
                    <Button variant="outline-success" active>
                      button
                    </Button>
                    <Button variant="outline-warning" active>
                      button
                    </Button>
                    <Button variant="outline-danger" active>
                      button
                    </Button>
                    <Button variant="outline-info" active>
                      button
                    </Button>
                    <Button variant="outline-light" active>
                      button
                    </Button>
                    <Button variant="outline-dark" active>
                      button
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <h5>Size</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Button variant="outline-primary" size="xs">
                    button
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    button
                  </Button>
                  <Button variant="outline-primary">button</Button>
                  <Button variant="outline-primary" size="lg">
                    button
                  </Button>
                </Stack>
              </Stack>
              <Stack>
                <h5>Icon Button</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Button variant="outline-primary" size="xs">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    button
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    button
                  </Button>
                  <Button variant="outline-primary">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    button
                  </Button>
                  <Button variant="outline-primary" size="lg">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    button
                  </Button>
                </Stack>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Button variant="outline-primary" size="xs">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                  <Button variant="outline-primary">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                  <Button variant="outline-primary" size="lg">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                </Stack>

                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Button variant="link-dark" size="xs" className="btn-vertical">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    <span>button</span>
                  </Button>
                  <Button variant="link-dark" size="sm" className="btn-vertical">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    <span>button</span>
                  </Button>
                  <Button variant="link-dark" className="btn-vertical">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    <span>button</span>
                  </Button>
                  <Button variant="link-dark" size="lg" className="btn-vertical">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                    <span>button</span>
                  </Button>
                </Stack>

                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Button variant="link-dark" size="xxs">
                    <i className="mpci csi icon-tab11" title="열기"></i>
                  </Button>
                  <Button variant="link-dark" size="xs">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                  <Button variant="link-dark" size="sm">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                  <Button variant="link-dark">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                  <Button variant="link-dark" size="lg">
                    <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  </Button>
                </Stack>
              </Stack>
              <Stack>
                <h5>Block</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Button variant="outline-primary" className="btn-block">
                    button
                  </Button>
                </Stack>
              </Stack>
              <Stack>
                <h5>Loading</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Button variant="primary">
                    <Spinner animation="border" size="sm"></Spinner>
                    <span className="visually-hidden">Loading...</span>
                  </Button>
                  <Button variant="outline-primary">
                    <Spinner animation="border" size="sm"></Spinner>
                    <span>Loading...</span>
                  </Button>
                </Stack>
              </Stack>
              <Stack>
                <h5>Close Button</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <CloseButton />
                  <CloseButton disabled />
                </Stack>
              </Stack>
              <Stack>
                <h5>Button Group</h5>
                <Stack gap={3}>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <ButtonGroup>
                      <Button variant="secondary" active>
                        button
                      </Button>
                      <Button variant="secondary">button</Button>
                      <Button variant="secondary">button</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button variant="outline-secondary" active>
                        button
                      </Button>
                      <Button variant="outline-secondary">button</Button>
                      <Button variant="outline-secondary">button</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button variant="link" active>
                        button
                      </Button>
                      <Button variant="link">button</Button>
                      <Button variant="link">button</Button>
                    </ButtonGroup>
                  </Stack>
                  <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                    <ButtonGroup size="lg">
                      <Button variant="secondary" active>
                        button
                      </Button>
                      <Button variant="secondary">button</Button>
                      <Button variant="secondary">button</Button>
                    </ButtonGroup>

                    <ButtonGroup>
                      <Button variant="secondary" active>
                        button
                      </Button>
                      <Button variant="secondary">button</Button>
                      <Button variant="secondary">button</Button>
                    </ButtonGroup>

                    <ButtonGroup size="sm">
                      <Button variant="secondary" active>
                        button
                      </Button>
                      <Button variant="secondary">button</Button>
                      <Button variant="secondary">button</Button>
                    </ButtonGroup>

                    <ButtonGroup size="xs">
                      <Button variant="secondary" active>
                        button
                      </Button>
                      <Button variant="secondary">button</Button>
                      <Button variant="secondary">button</Button>
                    </ButtonGroup>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={setIsShow}>
              닫기
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};
