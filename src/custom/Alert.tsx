//Component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//Utilities
import { useState } from 'react';

const Alert = () => {

  //Modal
  const [modal1show, setmodal1Show] = useState(false); //아이디/비밀번호 불일치
  const [modal2show, setmodal2Show] = useState(false); //계정 생성 요청
  const [modal3show, setmodal3Show] = useState(false); //비밀번호 오류(관리자 문의)
  const [modal4show, setmodal4Show] = useState(false); //비밀번호 오류
  const [modal5show, setmodal5Show] = useState(false); //패스워드 일치 요청
  const [modal6show, setmodal6Show] = useState(false); //계정아이디 사용 중
  const [modal7show, setmodal7Show] = useState(false); //계정아이디 사용 가능
  const [modal8show, setmodal8Show] = useState(false); //계정아이디 중복확인 요청
  const [modal9show, setmodal9Show] = useState(false); //필수입력 작성 요청
  const [modal10show, setmodal10Show] = useState(false); //패스워드 조건 확인 요청
  const [modal11show, setmodal11Show] = useState(false); //회원가입 성공
  const [modal12show, setmodal12Show] = useState(false); //시스템 회원가입 요청
  const [modal13show, setmodal13Show] = useState(false); //시스템 아이디/비밀번호 불일치
  const [modal14show, setmodal14Show] = useState(false); //사용자 인증서 등록
  const [modal15show, setmodal15Show] = useState(false); //인증서 프로그램 미설치
  const [modal16show, setmodal16Show] = useState(false); //관심선박 등록
  const [modal17show, setmodal17Show] = useState(false); //관심선박 이동
  const [modal18show, setmodal18Show] = useState(false); //개인별 설정 기능 저장
  const [modal19show, setmodal19Show] = useState(false); //사진 삭제 확인
  const [modal20show, setmodal20Show] = useState(false); //사진 등록
  const [modal21show, setmodal21Show] = useState(false); //저장
  const [modal22show, setmodal22Show] = useState(false); //다운로드 확인
  const [modal23show, setmodal23Show] = useState(false); //다운로드 성공
  const [modal24show, setmodal24Show] = useState(false); //삭제
  const [modal25show, setmodal25Show] = useState(false); //중국어선 분석 다잡아 시스템 다운로드
  const [modal26show, setmodal26Show] = useState(false); //임시저장
  const [modal27show, setmodal27Show] = useState(false); //업데이트

  return (
    <>
    <div className="d-flex flex-wrap gap-2 p-3">
      <div className="w-100">Modal 링크</div>
      <Button variant="outline-primary" onClick={() => setmodal1Show(true)}>아이디/비밀번호 불일치</Button>
      <Button variant="outline-primary" onClick={() => setmodal2Show(true)}>계정 생성 요청</Button>
      <Button variant="outline-primary" onClick={() => setmodal3Show(true)}>비밀번호 오류(관리자 문의)</Button>
      <Button variant="outline-primary" onClick={() => setmodal4Show(true)}>비밀번호 오류</Button>
      <Button variant="outline-primary" onClick={() => setmodal5Show(true)}>패스워드 일치 요청</Button>
      <Button variant="outline-primary" onClick={() => setmodal6Show(true)}>계정아이디 사용 중</Button>
      <Button variant="outline-primary" onClick={() => setmodal7Show(true)}>계정아이디 사용 가능</Button>
      <Button variant="outline-primary" onClick={() => setmodal8Show(true)}>계정아이디 중복확인 요청</Button>
      <Button variant="outline-primary" onClick={() => setmodal9Show(true)}>필수입력 작성 요청</Button>
      <Button variant="outline-primary" onClick={() => setmodal10Show(true)}>패스워드 조건 확인 요청</Button>
      <Button variant="outline-primary" onClick={() => setmodal11Show(true)}>회원가입 성공</Button>
      <Button variant="outline-primary" onClick={() => setmodal12Show(true)}>시스템 회원가입 요청</Button>
      <Button variant="outline-primary" onClick={() => setmodal13Show(true)}>시스템 아이디/비밀번호 불일치</Button>
      <Button variant="outline-primary" onClick={() => setmodal14Show(true)}>사용자 인증서 등록</Button>
      <Button variant="outline-primary" onClick={() => setmodal15Show(true)}>인증서 프로그램 미설치</Button>
      <Button variant="outline-primary" onClick={() => setmodal16Show(true)}>관심선박 등록</Button>
      <Button variant="outline-primary" onClick={() => setmodal17Show(true)}>관심선박 이동</Button>
      <Button variant="outline-primary" onClick={() => setmodal18Show(true)}>개인별 설정 기능 저장</Button>
      <Button variant="outline-primary" onClick={() => setmodal19Show(true)}>사진 삭제 확인</Button>
      <Button variant="outline-primary" onClick={() => setmodal20Show(true)}>사진 등록</Button>
      <Button variant="outline-primary" onClick={() => setmodal21Show(true)}>저장</Button>
      <Button variant="outline-primary" onClick={() => setmodal22Show(true)}>다운로드 확인</Button>
      <Button variant="outline-primary" onClick={() => setmodal23Show(true)}>다운로드 성공</Button>
      <Button variant="outline-primary" onClick={() => setmodal24Show(true)}>삭제</Button>
      <Button variant="outline-primary" onClick={() => setmodal25Show(true)}>중국어선 분석 다잡아 시스템 다운로드</Button>
      <Button variant="outline-primary" onClick={() => setmodal26Show(true)}>임시저장</Button>
      <Button variant="outline-primary" onClick={() => setmodal27Show(true)}>업데이트</Button>
    </div>

      {/* 아이디/비밀번호 불일치 */}
      <Modal size="sm" centered show={modal1show} onHide={() => setmodal1Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              아이디 또는 비밀번호가 일치하지 않습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal1Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 계정 생성 요청 */}
      <Modal size="sm" centered show={modal2show} onHide={() => setmodal2Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              계정이 없습니다. 회원가입을 진행해 주세요.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal2Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 비밀번호 오류(관리자 문의) */}
      <Modal size="sm" centered show={modal3show} onHide={() => setmodal3Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              비밀번호를 5회 잘못 입력하셨습니다.<br /> 관리자에게 문의해 주시기 바랍니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal3Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 비밀번호 오류 */}
      <Modal size="sm" centered show={modal4show} onHide={() => setmodal4Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              비밀번호를 잘못 입력하셨습니다.<br /> 확인 후 다시 입력해 주세요.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal4Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 패스워드 일치 요청 */}
      <Modal size="sm" centered show={modal5show} onHide={() => setmodal5Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              입력한 비밀번호가 서로 일치하지 않습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal5Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 계정아이디 사용 중 */}
      <Modal size="sm" centered show={modal6show} onHide={() => setmodal6Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 아이디는 이미 사용 중입니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal6Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 계정아이디 사용 가능 */}
      <Modal size="sm" centered show={modal7show} onHide={() => setmodal7Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              사용할 수 있는 아이디입니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal7Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 계정아이디 중복확인 요청 */}
      <Modal size="sm" centered show={modal8show} onHide={() => setmodal8Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              아이디 중복 여부 확인 요청드립니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal8Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 필수입력 작성 요청 */}
      <Modal size="sm" centered show={modal9show} onHide={() => setmodal9Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              필수 정보를 모두 입력해주세요.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal9Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 패스워드 조건 확인 요청 */}
      <Modal size="sm" centered show={modal10show} onHide={() => setmodal10Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              입력한 패스워드가 <br />올바른지 확인 부탁드립니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal10Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 회원가입 성공 */}
      <Modal size="sm" centered show={modal11show} onHide={() => setmodal11Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              회원가입이 완료되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal11Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 시스템 회원가입 요청 */}
      <Modal size="sm" centered show={modal12show} onHide={() => setmodal12Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              회원가입 후 인증서 등록해 주세요.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal12Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>
      
      {/* 시스템 아이디/비밀번호 불일치 */}
      <Modal size="sm" centered show={modal13show} onHide={() => setmodal13Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              아이디 또는 비밀번호가 일치하지 않습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal13Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 사용자 인증서 등록 */}
      <Modal size="sm" centered show={modal14show} onHide={() => setmodal14Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              인증서 등록이 완료되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal14Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 인증서 프로그램 미설치 */}
      <Modal size="sm" centered show={modal15show} onHide={() => setmodal15Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              인증서 프로그램이 설치되지 않았습니다. <br />설치 후 다시 시도해 주세요.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal15Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박 등록 */}
      <Modal size="sm" centered show={modal16show} onHide={() => setmodal16Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              관심선박으로 등록하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal16Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 관심선박 이동 */}
      <Modal size="sm" centered show={modal17show} onHide={() => setmodal17Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              관심선박으로 이동하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal17Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 개인별 설정 기능 저장 */}
      <Modal size="sm" centered show={modal18show} onHide={() => setmodal18Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              설정 기능을 저장하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal18Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 사진 삭제 확인 */}
      <Modal size="sm" centered show={modal19show} onHide={() => setmodal19Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              이 사진을 정말 삭제하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal19Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 사진 등록 */}
      <Modal size="sm" centered show={modal20show} onHide={() => setmodal20Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              사진 등록이 완료되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal20Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 저장 */}
      <Modal size="sm" centered show={modal21show} onHide={() => setmodal21Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              성공적으로 저장되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal21Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 다운로드 확인 */}
      <Modal size="sm" centered show={modal22show} onHide={() => setmodal22Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 다운로드하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal22Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>

      {/* 다운로드 성공 */}
      <Modal size="sm" centered show={modal23show} onHide={() => setmodal23Show(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              성공적으로 다운로드 되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal23Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>

      {/* 삭제 */}
      <Modal size="sm" centered show={modal24show} onHide={() => setmodal24Show(false)}>
        <Modal.Header closeButton>      
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 삭제하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal24Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>     

      {/* 중국어선 분석 다잡아 시스템 다운로드 */}
      <Modal size="sm" centered show={modal25show} onHide={() => setmodal25Show(false)}>
        <Modal.Header closeButton>      
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              중국어선 분석 다잡아 시스템<br /> 다운로드가 완료되었습니다.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setmodal25Show(false)}>확인</Button>
        </Modal.Footer>
      </Modal>   

      {/* 임시저장 */}
      <Modal size="sm" centered show={modal26show} onHide={() => setmodal26Show(false)}>
        <Modal.Header closeButton>      
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 임시저장하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal26Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>   
      
      {/* 업데이트 */}
      <Modal size="sm" centered show={modal27show} onHide={() => setmodal27Show(false)}>
        <Modal.Header closeButton>      
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert-text-group">
            <div className="text1">
              해당 내용을 업데이트하시겠습니까?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">확인</Button>
          <Button variant="secondary" onClick={() => setmodal27Show(false)}>취소</Button>
        </Modal.Footer>
      </Modal>  
    </>
  );
};

export default Alert;
