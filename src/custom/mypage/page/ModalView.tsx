/**
 * 설명: 마이페이지
 **/
import { useState } from 'react';
import MyPageFavoriteModal from '@/custom/mypage/modal/MyPageFavoriteModal.tsx';
import MyPageFavoriteModal1 from '@/custom/mypage/modal/MyPageModal1.tsx';
import MyPageFavoriteModal2 from '@/custom/mypage/modal/MyPageModal2.tsx';
import MyPageFavoriteModal3 from '@/custom/mypage/modal/MyPageModal3.tsx';
import MyPageFavoriteModal4 from '@/custom/mypage/modal/MyPageModal4.tsx';
import MyPageFavoriteModal5 from '@/custom/mypage/modal/MyPageModal5.tsx';
import MyPageFavoriteModal6 from '@/custom/mypage/modal/MyPageModal6.tsx';
import MyPageFavoriteModal7 from '@/custom/mypage/modal/MyPageModal7.tsx';
import MyPageFavoriteModal8 from '@/custom/mypage/modal/MyPageModal8.tsx';
import MyPageFavoriteModal9 from '@/custom/mypage/modal/MyPageModal9.tsx';

const Mypage = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  return (
    <>
      <div>마이페이지</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button type="button" onClick={() => setOpen(true)}>
          모달 오픈
        </button>
        <button type="button" onClick={() => setOpen1(true)}>
          모달 오픈1
        </button>
        <button type="button" onClick={() => setOpen2(true)}>
          모달 오픈2
        </button>
        <button type="button" onClick={() => setOpen3(true)}>
          모달 오픈3
        </button>
        <button type="button" onClick={() => setOpen4(true)}>
          모달 오픈4
        </button>
        <button type="button" onClick={() => setOpen5(true)}>
          모달 오픈5
        </button>
        <button type="button" onClick={() => setOpen6(true)}>
          모달 오픈6
        </button>
        <button type="button" onClick={() => setOpen7(true)}>
          모달 오픈7
        </button>
        <button type="button" onClick={() => setOpen8(true)}>
          모달 오픈8
        </button>
        <button type="button" onClick={() => setOpen9(true)}>
          모달 오픈9
        </button>
      </div>
      {open && <MyPageFavoriteModal isShow={() => setOpen(false)} />}
      {open1 && <MyPageFavoriteModal1 isShow={() => setOpen1(false)} />}
      {open2 && <MyPageFavoriteModal2 isShow={() => setOpen2(false)} />}
      {open3 && <MyPageFavoriteModal3 isShow={() => setOpen3(false)} />}
      {open4 && <MyPageFavoriteModal4 isShow={() => setOpen4(false)} />}
      {open5 && <MyPageFavoriteModal5 isShow={() => setOpen5(false)} />}
      {open6 && <MyPageFavoriteModal6 isShow={() => setOpen6(false)} />}
      {open7 && <MyPageFavoriteModal7 isShow={() => setOpen7(false)} />}
      {open8 && <MyPageFavoriteModal8 isShow={() => setOpen8(false)} />}
      {open9 && <MyPageFavoriteModal9 isShow={() => setOpen9(false)} />}
    </>
  );
};

export default Mypage;
