import Icon from '@mdi/react';
import { mdiAccount, mdiMagnify, mdiMinus, mdiPlus } from '@mdi/js';
//import flagImg from "@/viewFinder/assets/img/flag.svg";

//Layout
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Form
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//Component
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
//Utilities

export const SamplePage1 = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>Form</Modal.Title>
            <CloseButton onClick={setIsShow} />
          </Modal.Header>
          <div className="modal-tab tab-container">
            <Tab.Container defaultActiveKey="tab1">
              <Nav variant="underline">
                <Nav.Item>
                  <Nav.Link eventKey="tab1">탭명1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2">탭명2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3">탭명3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="tab1">11</Tab.Pane>
                <Tab.Pane eventKey="tab2">22</Tab.Pane>
                <Tab.Pane eventKey="tab3">33</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>

          <Modal.Body>
            <div className="ct-group">
              <div className="ct-header">
                <div className="ct-title h5">제목</div>
              </div>
              <div className="ct-body">
                <Row className="align-items-stretch">
                  <Col lg="4" className="mb-3 mb-lg-0">
                    <Card className="card-list" style={{ height: '600px' }}>
                      <Card.Header>
                        <div className="card-title h6">제목</div>
                        <div className="spacer" />
                        <div className="card-control">
                          <Button variant="outline-dark" size="xs">
                            <Icon path={mdiMinus} title="제거" className="mpci mdi mdi-minus" />
                          </Button>
                          <Button variant="outline-dark" size="xs">
                            <Icon path={mdiPlus} title="추가" className="mpci mdi mdi-plus" />
                          </Button>
                        </div>
                      </Card.Header>
                      <ListGroup variant="flush" className="overflow-auto">
                        <ListGroup.Item action href="#1">
                          명칭
                        </ListGroup.Item>
                        <ListGroup.Item action href="#2">
                          명칭
                        </ListGroup.Item>
                        <ListGroup.Item action href="#3">
                          명칭
                        </ListGroup.Item>
                      </ListGroup>
                      <div className="ct-group grid-group">
                        <div className="ct-body">
                          <div className="realgrid-group">
                            그리드 들어가는 곳
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Header>
                        <div className="card-title h6">제목</div>
                        <div className="spacer" />
                        <div className="card-control">
                          <Button variant="outline-dark" size="xs">
                            <Icon path={mdiMinus} title="제거" className="mpci mdi mdi-minus" />
                          </Button>
                          <Button variant="outline-dark" size="xs">
                            <Icon path={mdiPlus} title="추가" className="mpci mdi mdi-plus" />
                          </Button>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <div className="h6">기본 폼</div>
                        <Form className="form-label-default">
                          <Row>
                            <Form.Group as={Col}>
                              <Form.Label>
                                폼라벨
                                <i className="mpci icon-required" title="필수"></i>
                              </Form.Label>
                              <div className="form-item">
                                <Form.Select className="form-auto">
                                  <option>옵션1</option>
                                  <option>옵션2</option>
                                  <option>옵션3</option>
                                </Form.Select>
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label>폼라벨</Form.Label>
                              <div className="form-item">
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                          </Row>
                        </Form>

                        <div className="item-divider my-3" />
                        <div className="h6 mb-2">label 왼쪽 폼</div>
                        <Form className="form-label-horizontal label-width-xs">
                          <Row className="row-cols-2">
                            <Form.Group as={Col}>
                              <Form.Label>
                                폼라벨
                                <i className="mpci icon-required" title="필수"></i>
                              </Form.Label>
                              <div className="form-item">
                                <Form.Select className="form-auto">
                                  <option>옵션1</option>
                                  <option>옵션2</option>
                                  <option>옵션3</option>
                                </Form.Select>
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label>폼라벨</Form.Label>
                              <div className="form-item">
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label>폼라벨</Form.Label>
                              <div className="form-item">
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label>폼라벨</Form.Label>
                              <div className="form-item">
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                          </Row>
                        </Form>

                        <div className="item-divider my-3" />
                        <div className="h6 mb-2">label 왼쪽 grid 폼</div>
                        <Form className="form-grid form-label-horizontal label-width-lg">
                          <Row className="row-cols-2">
                            <Form.Group as={Col}>
                              <Form.Label>
                                폼라벨
                                <i className="mpci icon-required" title="필수"></i>
                              </Form.Label>
                              <div className="form-item">
                                <Form.Select className="form-auto">
                                  <option>옵션1</option>
                                  <option>옵션2</option>
                                  <option>옵션3</option>
                                </Form.Select>
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label>폼라벨</Form.Label>
                              <div className="form-item">
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label>폼라벨</Form.Label>
                              <div className="form-item">
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Form.Label>폼라벨</Form.Label>
                              <div className="form-item">
                                <Form.Control type="text" placeholder="placeholder" />
                              </div>
                            </Form.Group>
                          </Row>
                        </Form>

                        <div className="item-divider my-3" />
                        <div className="h6 mb-2">검색 폼</div>
                        <div className="form-search">
                          <Form className="form-label-default">
                            <Row className="align-items-end">
                              <Col md="6">
                                <Form.Group className="w-100">
                                  <Form.Label>폼라벨</Form.Label>
                                  <div className="form-item">
                                    <Form.Select className="form-auto">
                                      <option>옵션1</option>
                                      <option>옵션2</option>
                                      <option>옵션3</option>
                                    </Form.Select>
                                    <Form.Control type="text" placeholder="placeholder" />
                                  </div>
                                </Form.Group>
                              </Col>
                              <Col xs="auto" style={{ width: '80px' }}>
                                <Form.Group>
                                  <Form.Label>폼라벨</Form.Label>
                                  <div className="form-item">
                                    <Form.Control type="number" min="0" />
                                  </div>
                                </Form.Group>
                              </Col>
                              <Col md="auto">
                                <Form.Group>
                                  <Form.Label>폼라벨</Form.Label>
                                  <div className="form-item">
                                    <Form.Control type="datetime-local" placeholder="datetime-local" />
                                    <span>~</span>
                                    <Form.Control type="datetime-local" placeholder="datetime-local" />
                                  </div>
                                </Form.Group>
                              </Col>
                              <Col md="auto">
                                <Form.Group>
                                  <div className="form-item">
                                    <Form.Check type="checkbox" label="속도0포함" />
                                  </div>
                                </Form.Group>
                              </Col>
                              <Col xs="auto" className="form-search-buttons">
                                <Button variant="secondary">초기화</Button>
                                <Button variant="dark">
                                  <Icon path={mdiMagnify} title="검색" className="mpci mdi mdi-magnify" />
                                  검색
                                </Button>
                              </Col>
                            </Row>
                          </Form>
                        </div>

                        <div className="item-divider my-3" />
                        <div className="h6 mb-2">폼 모음</div>
                        <Form>
                          <Form.Group>
                            <Form.Label>type="text"</Form.Label>
                            <Form.Control type="text" placeholder="placeholder" size="xs" />
                            <Form.Control type="text" placeholder="placeholder" size="sm" readOnly />
                            <Form.Control type="text" placeholder="placeholder" disabled />
                            <Form.Control type="text" placeholder="placeholder" size="lg" />
                            <Form.Text>help text</Form.Text>
                          </Form.Group>
                          <div className="item-divider my-3" />
                          <Form.Group>
                            <Form.Label>type="file"</Form.Label>
                            <Form.Control type="file" size="xs" />
                            <Form.Control type="file" size="sm" readOnly />
                            <Form.Control type="file" disabled />
                            <Form.Control type="file" size="lg" />
                            <Form.Text>help text</Form.Text>
                          </Form.Group>
                          <div className="item-divider my-3" />
                          <Form.Group>
                            <Form.Label>type="color"</Form.Label>
                            <Form.Control type="color" defaultValue="#00ffff" size="xs" />
                            <Form.Control type="color" defaultValue="#00ffff" size="sm" readOnly />
                            <Form.Control type="color" defaultValue="#00ffff" disabled />
                            <Form.Control type="color" defaultValue="#00ffff" size="lg" />
                            <Form.Text>help text</Form.Text>
                          </Form.Group>
                          <div className="item-divider my-3" />
                          <Form.Group>
                            <Form.Label>type="*"</Form.Label>
                            <Form.Control type="email" placeholder="email@email.com" />
                            <Form.Control type="password" placeholder="password" />
                            <Form.Control type="search" placeholder="search" />
                            <Form.Control type="url" placeholder="url" />
                            <Form.Control type="tel" placeholder="tel" />
                            <Form.Control type="number" min="0" />
                            <Form.Control type="date" placeholder="date" />
                            <Form.Control type="datetime-local" placeholder="datetime-local" />
                            <Form.Control type="month" placeholder="month" />
                            <Form.Control type="time" placeholder="time" />
                            <Form.Control type="week" placeholder="week" />
                            <Form.Text>help text</Form.Text>
                          </Form.Group>
                          <div className="item-divider my-3" />
                          <Form.Group>
                            <Form.Label>textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" size="xs" />
                            <Form.Control as="textarea" rows="3" size="sm" readOnly />
                            <Form.Control as="textarea" rows="3" disabled />
                            <Form.Control as="textarea" rows="3" size="lg" />
                            <Form.Text>help text</Form.Text>
                          </Form.Group>
                          <div className="item-divider my-3" />
                          <Form.Group>
                            <Form.Label>Select</Form.Label>
                            <Form.Select size="xs">
                              <option>옵션1</option>
                              <option>옵션2</option>
                              <option>옵션3</option>
                            </Form.Select>
                            <Form.Select size="sm" readOnly>
                              <option>옵션1</option>
                              <option>옵션2</option>
                              <option>옵션3</option>
                            </Form.Select>
                            <Form.Select disabled>
                              <option>옵션1</option>
                              <option>옵션2</option>
                              <option>옵션3</option>
                            </Form.Select>
                            <Form.Select size="lg">
                              <option>옵션1</option>
                              <option>옵션2</option>
                              <option>옵션3</option>
                            </Form.Select>
                          </Form.Group>
                          <div className="item-divider my-3" />
                          <Form.Group>
                            <Form.Label>Check</Form.Label>
                            <Form.Check label="checkbox" />
                            <Form.Check label="checkbox" readOnly />
                            <Form.Check label="checkbox" disabled />
                            <Form.Check type="radio" label="radio" />
                            <Form.Check type="radio" label="radio" readOnly />
                            <Form.Check type="radio" label="radio" disabled />
                            <Form.Check type="switch" label="switch" />
                            <Form.Check type="switch" label="switch" readOnly />
                            <Form.Check type="switch" label="switch" disabled />
                            <Form.Range min="0" max="100" />
                            <Form.Range min="0" max="100" disabled />
                            <Form.Range min="0" max="100" className="form-range-sm" />
                          </Form.Group>
                          <div className="item-divider my-3" />
                          <Form.Group>
                            <Form.Label>InputGroup</Form.Label>
                            <InputGroup size="xs">
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                            </InputGroup>
                            <InputGroup size="sm">
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                            </InputGroup>
                            <InputGroup>
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                            </InputGroup>
                            <InputGroup size="lg">
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                            </InputGroup>

                            <InputGroup size="xs">
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Button variant="dark">
                                <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                                button
                              </Button>
                            </InputGroup>
                            <InputGroup size="sm">
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Button variant="dark">
                                <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                                button
                              </Button>
                            </InputGroup>
                            <InputGroup>
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Button variant="dark">
                                <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                                button
                              </Button>
                            </InputGroup>
                            <InputGroup size="lg">
                              <InputGroup.Checkbox />
                              <InputGroup.Radio />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Form.Control />
                              <InputGroup.Text>text</InputGroup.Text>
                              <Button variant="dark">
                                <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                                button
                              </Button>
                            </InputGroup>
                          </Form.Group>
                        </Form>
                      </Card.Body>

                      <div className="item-divider my-3" />
                      <div className="h6 mb-2">Card 안 Nav</div>
                      <Tab.Container defaultActiveKey="subtab1">
                        <Nav variant="underline">
                          <Nav.Item>
                            <Nav.Link eventKey="subtab1">서브탭명1</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="subtab2">서브탭명2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="subtab3" disabled>
                              서브탭명3
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="subtab1">
                            <div>11</div>

                            <Tab.Container defaultActiveKey="pilltab1">
                              <Nav fill variant="pills">
                                <Nav.Item>
                                  <Nav.Link eventKey="pilltab1">서브탭명1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="pilltab2">서브탭명2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="pilltab3" disabled>
                                    서브탭명3
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                              <Tab.Content>
                                <Tab.Pane eventKey="pilltab1">
                                  <div>11</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pilltab2">
                                  <div>22</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pilltab3">
                                  <div>33</div>
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>

                            <div className="item-divider my-3" />
                            <div className="h6 mb-2">Card 안 Accordion</div>
                            <Accordion defaultActiveKey="0" flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>아코디언명</Accordion.Header>
                                <Accordion.Body>아코디언내용</Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>아코디언명</Accordion.Header>
                                <Accordion.Body>아코디언내용</Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                <Accordion.Header>아코디언명</Accordion.Header>
                                <Accordion.Body>아코디언내용</Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Tab.Pane>
                          <Tab.Pane eventKey="subtab2">22</Tab.Pane>
                          <Tab.Pane eventKey="subtab3">33</Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Card>

                    <div className="info-group mt-2">
                      <div className="info-text">갱신주기 1분</div>
                    </div>

                    <div className="item-divider my-3" />
                    <div className="h6 mb-2">Accordion</div>
                    <Accordion defaultActiveKey="0" className="mt-3">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>아코디언명</Accordion.Header>
                        <Accordion.Body>아코디언내용</Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>아코디언명</Accordion.Header>
                        <Accordion.Body>아코디언내용</Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>아코디언명</Accordion.Header>
                        <Accordion.Body>아코디언내용</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </div>
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
