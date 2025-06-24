/**
 * 설명: 라우팅
 **/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Publish from '../Publish.tsx';
import Mypage from '@/custom/mypage/page/Mypage.tsx';
import ModalView from '@/custom/mypage/page/ModalView.tsx';
import Sample01 from '@/custom/Sample01.tsx';
import Sample01Modal from '@/custom/Sample01Modal.tsx';
import Sample02 from '@/custom/Sample02.tsx';
import Sample03 from '@/custom/Sample03.tsx';
import Sample04 from '@/custom/Sample04.tsx';
import Sample05 from '@/custom/Sample05.tsx';
import Sample06 from '@/custom/Sample06.tsx';
import Sample07 from '@/custom/Sample07.tsx';
import Sample07Modal from '@/custom/Sample07Modal.tsx';
import Sample08 from '@/custom/Sample08.tsx';
import Sample09 from '@/custom/Sample09.tsx';
import Sample10 from '@/custom/Sample10.tsx';
import Sample11 from '@/custom/Sample11.tsx';
import Sample12 from '@/custom/Sample12.tsx';
import Sample13 from '@/custom/Sample13.tsx';
import Sample14 from '@/custom/Sample14.tsx';
import Sample15 from '@/custom/Sample15.tsx';
import Sample16 from '@/custom/Sample16.tsx';
import Alert from '@/custom/Alert.tsx';
import Button from '@/custom/Button.tsx';
import Weather from '@/custom/Weather.tsx';
import Loading from '@/custom/Loading.tsx';
import Admin from '@/custom/admin/Dashboard.tsx';
import Ct1Sub1Menu1 from '@/custom/admin/Ct1Sub1Menu1.tsx';
import Ct1Sub1Menu2 from '@/custom/admin/Ct1Sub1Menu2.tsx';
import Ct1Sub1Menu3 from '@/custom/admin/Ct1Sub1Menu3.tsx';
import Ct1Sub2Menu1 from '@/custom/admin/Ct1Sub2Menu1.tsx';
import Ct1Sub2Menu2 from '@/custom/admin/Ct1Sub2Menu2.tsx';
import Ct1Sub3Menu1 from '@/custom/admin/Ct1Sub3Menu1.tsx';
import Ct1Sub4Menu1 from '@/custom/admin/Ct1Sub4Menu1.tsx';
import Ct1Sub5Menu1 from '@/custom/admin/Ct1Sub5Menu1.tsx';
import Ct1Sub6Menu1 from '@/custom/admin/Ct1Sub6Menu1.tsx';
import Ct1Sub6Menu2 from '@/custom/admin/Ct1Sub6Menu2.tsx';
import Ct1Sub6Menu3 from '@/custom/admin/Ct1Sub6Menu3.tsx';
import Ct1Sub7Menu1 from '@/custom/admin/Ct1Sub7Menu1.tsx';
import Ct1Sub7Menu2 from '@/custom/admin/Ct1Sub7Menu2.tsx';
import Ct1Sub7Menu3 from '@/custom/admin/Ct1Sub7Menu3.tsx';
import Ct1Sub8Menu1 from '@/custom/admin/Ct1Sub8Menu1.tsx';
import Ct1Sub8Menu2 from '@/custom/admin/Ct1Sub8Menu2.tsx';
import Ct1Sub9Menu1 from '@/custom/admin/Ct1Sub9Menu1.tsx';
import Ct1Sub10Menu1 from '@/custom/admin/Ct1Sub10Menu1.tsx';
import Ct1Sub11Menu1 from '@/custom/admin/Ct1Sub11Menu1.tsx';
import Ct1Sub11Menu2 from '@/custom/admin/Ct1Sub11Menu2.tsx';
import Ct1Sub11Menu3 from '@/custom/admin/Ct1Sub11Menu3.tsx';
import Ct1Sub11Menu4 from '@/custom/admin/Ct1Sub11Menu4.tsx';
import Ct1Sub12Menu1 from '@/custom/admin/Ct1Sub12Menu1.tsx';
import Ct1Sub12Menu2 from '@/custom/admin/Ct1Sub12Menu2.tsx';
import Ct1Sub12Menu3 from '@/custom/admin/Ct1Sub12Menu3.tsx';
import Ct1Sub12Menu4 from '@/custom/admin/Ct1Sub12Menu4.tsx';
import Ct1Sub12Menu5 from '@/custom/admin/Ct1Sub12Menu5.tsx';
import Ct1Sub12Menu6 from '@/custom/admin/Ct1Sub12Menu6.tsx';
import Ct2Sub1Menu1 from '@/custom/admin/Ct2Sub1Menu1.tsx';
import Ct2Sub2Menu1 from '@/custom/admin/Ct2Sub2Menu1.tsx';
import Ct2Sub2Menu2 from '@/custom/admin/Ct2Sub2Menu2.tsx';
import Ct2Sub2Menu3 from '@/custom/admin/Ct2Sub2Menu3.tsx';
import Ct2Sub2Menu4 from '@/custom/admin/Ct2Sub2Menu4.tsx';
import Ct2Sub2Menu5 from '@/custom/admin/Ct2Sub2Menu5.tsx';
import Ct2Sub2Menu6 from '@/custom/admin/Ct2Sub2Menu6.tsx';
import AdminModal from '@/custom/admin/Modal.tsx';
import Test from '@/custom/Test.tsx';

import Login1 from '@/custom/mpc/Login1.tsx';
import Login2 from '@/custom/mpc/Login2.tsx';
import Login3 from '@/custom/mpc/Login3.tsx';
import Login4 from '@/custom/mpc/Login4.tsx';
import Error from '@/custom/mpc/Error.tsx';
import Dashboard1 from '@/custom/mpc/Dashboard1.tsx';
import Dashboard2 from '@/custom/mpc/Dashboard2.tsx';
import Mpc1Sub1Menu1 from '@/custom/mpc/Mpc1Sub1Menu1.tsx';
import Mpc1Sub1Menu2 from '@/custom/mpc/Mpc1Sub1Menu2.tsx';
import Mpc1Sub2Menu1 from '@/custom/mpc/Mpc1Sub2Menu1.tsx';
import Mpc1Sub2Menu2 from '@/custom/mpc/Mpc1Sub2Menu2.tsx';
import Mpc1Sub2Menu3 from '@/custom/mpc/Mpc1Sub2Menu3.tsx';
import Mpc1Sub3Menu3S3 from '@/custom/mpc/Mpc1Sub3Menu3S3.tsx';
import Mpc1Sub2Menu4 from '@/custom/mpc/Mpc1Sub2Menu4.tsx';
import Mpc1Sub3Menu1 from '@/custom/mpc/Mpc1Sub3Menu1.tsx';
import Mpc1Sub3Menu1S1 from '@/custom/mpc/Mpc1Sub3Menu1S1.tsx';
import Mpc1Sub3Menu1S2 from '@/custom/mpc/Mpc1Sub3Menu1S2.tsx';
import Mpc1Sub3Menu2 from '@/custom/mpc/Mpc1Sub3Menu2.tsx';
import Mpc1Sub3Menu2S1 from '@/custom/mpc/Mpc1Sub3Menu2S1.tsx';
import Mpc1Sub3Menu2S2 from '@/custom/mpc/Mpc1Sub3Menu2S2.tsx';
import Mpc1Sub3Menu3 from '@/custom/mpc/Mpc1Sub3Menu3.tsx';
import Mpc1Sub3Menu3S1 from '@/custom/mpc/Mpc1Sub3Menu3S1.tsx';
import Mpc1Sub3Menu3S2 from '@/custom/mpc/Mpc1Sub3Menu3S2.tsx';
import Mpc1Sub4Menu1 from '@/custom/mpc/Mpc1Sub4Menu1.tsx';
import Mpc1Sub4Menu2 from '@/custom/mpc/Mpc1Sub4Menu2.tsx';
import Mpc1Sub5Menu1 from '@/custom/mpc/Mpc1Sub5Menu1.tsx';
import Mpc1Sub6Menu1 from '@/custom/mpc/Mpc1Sub6Menu1.tsx';
import Mpc1Sub6Menu2 from '@/custom/mpc/Mpc1Sub6Menu2.tsx';
import Mpc1Sub6Menu3 from '@/custom/mpc/Mpc1Sub6Menu3.tsx';
import Mpc1Sub7Menu1 from '@/custom/mpc/Mpc1Sub7Menu1.tsx';
import Mpc1Sub7Menu2 from '@/custom/mpc/Mpc1Sub7Menu2.tsx';
import Mpc1Sub7Menu3 from '@/custom/mpc/Mpc1Sub7Menu3.tsx';
import Mpc1Sub7Menu4 from '@/custom/mpc/Mpc1Sub7Menu4.tsx';
import Mpc1Sub7Menu5 from '@/custom/mpc/Mpc1Sub7Menu5.tsx';
import Mpc1Sub8Menu1 from '@/custom/mpc/Mpc1Sub8Menu1.tsx';
import Mpc1Sub8Menu2 from '@/custom/mpc/Mpc1Sub8Menu2.tsx';
import Mpc1Sub9Menu1 from '@/custom/mpc/Mpc1Sub9Menu1.tsx';
import Mpc1Sub9Menu2 from '@/custom/mpc/Mpc1Sub9Menu2.tsx';
import Mpc1Sub9Menu3 from '@/custom/mpc/Mpc1Sub9Menu3.tsx';
import Mpc1Sub10Menu1 from '@/custom/mpc/Mpc1Sub10Menu1.tsx';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Publish />} />
        <Route path={'/pub/mypage'} element={<Mypage />} />
        <Route path={'/pub/modal'} element={<ModalView />} />
        <Route path={'/pub/sample01'} element={<Sample01 />} />
        <Route path={'/pub/sample01modal'} element={<Sample01Modal />} />
        <Route path={'/pub/sample02'} element={<Sample02 />} />
        <Route path={'/pub/sample03'} element={<Sample03 />} />
        <Route path={'/pub/sample04'} element={<Sample04 />} />
        <Route path={'/pub/sample05'} element={<Sample05 />} />
        <Route path={'/pub/sample06'} element={<Sample06 />} />
        <Route path={'/pub/sample07'} element={<Sample07 />} />
        <Route path={'/pub/sample07modal'} element={<Sample07Modal />} />
        <Route path={'/pub/sample08'} element={<Sample08 />} />
        <Route path={'/pub/sample09'} element={<Sample09 />} />
        <Route path={'/pub/sample10'} element={<Sample10 />} />
        <Route path={'/pub/sample11'} element={<Sample11 />} />
        <Route path={'/pub/sample12'} element={<Sample12 />} />
        <Route path={'/pub/sample13'} element={<Sample13 />} />
        <Route path={'/pub/sample14'} element={<Sample14 />} />
        <Route path={'/pub/sample15'} element={<Sample15 />} />
        <Route path={'/pub/sample16'} element={<Sample16 />} />
        <Route path={'/pub/alert'} element={<Alert />} />
        <Route path={'/pub/button'} element={<Button />} />
        <Route path={'/pub/weather'} element={<Weather />} />
        <Route path={'/pub/loading'} element={<Loading />} />
        <Route path={'/pub/admin'} element={<Admin />} />
        <Route path={'/pub/admin/Ct1Sub1Menu1'} element={<Ct1Sub1Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub1Menu2'} element={<Ct1Sub1Menu2 />} />
        <Route path={'/pub/admin/Ct1Sub1Menu3'} element={<Ct1Sub1Menu3 />} />
        <Route path={'/pub/admin/Ct1Sub2Menu1'} element={<Ct1Sub2Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub2Menu2'} element={<Ct1Sub2Menu2 />} />
        <Route path={'/pub/admin/Ct1Sub3Menu1'} element={<Ct1Sub3Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub4Menu1'} element={<Ct1Sub4Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub5Menu1'} element={<Ct1Sub5Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub6Menu1'} element={<Ct1Sub6Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub6Menu2'} element={<Ct1Sub6Menu2 />} />
        <Route path={'/pub/admin/Ct1Sub6Menu3'} element={<Ct1Sub6Menu3 />} />
        <Route path={'/pub/admin/Ct1Sub7Menu1'} element={<Ct1Sub7Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub7Menu2'} element={<Ct1Sub7Menu2 />} />
        <Route path={'/pub/admin/Ct1Sub7Menu3'} element={<Ct1Sub7Menu3 />} />
        <Route path={'/pub/admin/Ct1Sub8Menu1'} element={<Ct1Sub8Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub8Menu2'} element={<Ct1Sub8Menu2 />} />
        <Route path={'/pub/admin/Ct1Sub9Menu1'} element={<Ct1Sub9Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub10Menu1'} element={<Ct1Sub10Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub11Menu1'} element={<Ct1Sub11Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub11Menu2'} element={<Ct1Sub11Menu2 />} />
        <Route path={'/pub/admin/Ct1Sub11Menu3'} element={<Ct1Sub11Menu3 />} />
        <Route path={'/pub/admin/Ct1Sub11Menu4'} element={<Ct1Sub11Menu4 />} />
        <Route path={'/pub/admin/Ct1Sub12Menu1'} element={<Ct1Sub12Menu1 />} />
        <Route path={'/pub/admin/Ct1Sub12Menu2'} element={<Ct1Sub12Menu2 />} />
        <Route path={'/pub/admin/Ct1Sub12Menu3'} element={<Ct1Sub12Menu3 />} />
        <Route path={'/pub/admin/Ct1Sub12Menu4'} element={<Ct1Sub12Menu4 />} />
        <Route path={'/pub/admin/Ct1Sub12Menu5'} element={<Ct1Sub12Menu5 />} />
        <Route path={'/pub/admin/Ct1Sub12Menu6'} element={<Ct1Sub12Menu6 />} />
        <Route path={'/pub/admin/Ct2Sub1Menu1'} element={<Ct2Sub1Menu1 />} />
        <Route path={'/pub/admin/Ct2Sub2Menu1'} element={<Ct2Sub2Menu1 />} />
        <Route path={'/pub/admin/Ct2Sub2Menu2'} element={<Ct2Sub2Menu2 />} />
        <Route path={'/pub/admin/Ct2Sub2Menu3'} element={<Ct2Sub2Menu3 />} />
        <Route path={'/pub/admin/Ct2Sub2Menu4'} element={<Ct2Sub2Menu4 />} />
        <Route path={'/pub/admin/Ct2Sub2Menu5'} element={<Ct2Sub2Menu5 />} />
        <Route path={'/pub/admin/Ct2Sub2Menu6'} element={<Ct2Sub2Menu6 />} />
        <Route path={'/pub/admin/modal'} element={<AdminModal />} />
        <Route path={'/pub/test'} element={<Test />} />

        {/* mpc */}
        <Route path={'/pub/mpc/login1'} element={<Login1 />} />
        <Route path={'/pub/mpc/login2'} element={<Login2 />} />
        <Route path={'/pub/mpc/login3'} element={<Login3 />} />
        <Route path={'/pub/mpc/login4'} element={<Login4 />} />
        <Route path={'/pub/mpc/error'} element={<Error />} />
        <Route path={'/pub/mpc/dashboard1'} element={<Dashboard1 />} />
        <Route path={'/pub/mpc/dashboard2'} element={<Dashboard2 />} />
        <Route path={'/pub/mpc/Mpc1Sub1Menu1'} element={<Mpc1Sub1Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub1Menu2'} element={<Mpc1Sub1Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub2Menu1'} element={<Mpc1Sub2Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub2Menu2'} element={<Mpc1Sub2Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub2Menu3'} element={<Mpc1Sub2Menu3 />} />
        {/* <Route path={'/pub/mpc/Mpc1Sub2Menu3S1'} element={<Mpc1Sub2Menu3S1 />} /> */}
        <Route path={'/pub/mpc/Mpc1Sub2Menu4'} element={<Mpc1Sub2Menu4 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu1'} element={<Mpc1Sub3Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu1S1'} element={<Mpc1Sub3Menu1S1 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu1S2'} element={<Mpc1Sub3Menu1S2 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu2'} element={<Mpc1Sub3Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu2S1'} element={<Mpc1Sub3Menu2S1 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu2S2'} element={<Mpc1Sub3Menu2S2 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu3'} element={<Mpc1Sub3Menu3 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu3S1'} element={<Mpc1Sub3Menu3S1 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu3S2'} element={<Mpc1Sub3Menu3S2 />} />
        <Route path={'/pub/mpc/Mpc1Sub3Menu3S3'} element={<Mpc1Sub3Menu3S3 />} />
        <Route path={'/pub/mpc/Mpc1Sub4Menu1'} element={<Mpc1Sub4Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub4Menu2'} element={<Mpc1Sub4Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub5Menu1'} element={<Mpc1Sub5Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub6Menu1'} element={<Mpc1Sub6Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub6Menu2'} element={<Mpc1Sub6Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub6Menu3'} element={<Mpc1Sub6Menu3 />} />
        <Route path={'/pub/mpc/Mpc1Sub7Menu1'} element={<Mpc1Sub7Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub7Menu2'} element={<Mpc1Sub7Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub7Menu3'} element={<Mpc1Sub7Menu3 />} />
        <Route path={'/pub/mpc/Mpc1Sub7Menu4'} element={<Mpc1Sub7Menu4 />} />
        <Route path={'/pub/mpc/Mpc1Sub7Menu5'} element={<Mpc1Sub7Menu5 />} />
        <Route path={'/pub/mpc/Mpc1Sub8Menu1'} element={<Mpc1Sub8Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub8Menu2'} element={<Mpc1Sub8Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub9Menu1'} element={<Mpc1Sub9Menu1 />} />
        <Route path={'/pub/mpc/Mpc1Sub9Menu2'} element={<Mpc1Sub9Menu2 />} />
        <Route path={'/pub/mpc/Mpc1Sub9Menu3'} element={<Mpc1Sub9Menu3 />} />
        <Route path={'/pub/mpc/Mpc1Sub10Menu1'} element={<Mpc1Sub10Menu1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
