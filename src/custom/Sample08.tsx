//Component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Sample08 = () => {
  const [smshow, setSmShow] = useState(false);
  const [mdshow, setMdShow] = useState(false);
  const [lgshow, setLgShow] = useState(false);
  const [xlshow, setXlShow] = useState(false);
  const [fullshow, setFullShow] = useState(false);
  const [sms1how, setSm1Show] = useState(false);

  return (
    <>    
    <div className="d-flex flex-wrap gap-2 p-3">
      <div className="w-100">Modal 링크</div>
      <Button variant="outline-primary" onClick={() => setSmShow(true)}>모달 sm</Button>
      <Button variant="outline-primary" onClick={() => setMdShow(true)}>모달 md</Button>
      <Button variant="outline-primary" onClick={() => setLgShow(true)}>모달 lg</Button>
      <Button variant="outline-primary" onClick={() => setXlShow(true)}>모달 xl</Button>
      <Button variant="outline-primary" onClick={() => setFullShow(true)}>모달 full</Button>

      <Button variant="outline-primary" onClick={() => setSm1Show(true)}>모달 backdrop 제거</Button>
    </div>

     
      <Modal size="sm" centered show={smshow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setSmShow(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={mdshow} onHide={() => setMdShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setMdShow(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" centered show={lgshow} onHide={() => setLgShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setLgShow(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      <Modal size="xl" centered show={xlshow} onHide={() => setXlShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setXlShow(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      <Modal fullscreen centered show={fullshow} onHide={() => setFullShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setFullShow(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      <Modal size="sm" centered backdrop="static" backdropClassName="backdrop-none" show={sms1how} onHide={() => setSm1Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setSm1Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default Sample08;
