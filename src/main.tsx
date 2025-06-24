// import '@/assets/scss/user-styles.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Publish from '@/Publish.tsx';
import Login1 from '@/custom/mpc/Login1.tsx';
import Login2 from '@/custom/mpc/Login2.tsx';
import Login3 from '@/custom/mpc/Login3.tsx';
import Login4 from '@/custom/mpc/Login4.tsx';
import Dashboard1 from '@/custom/mpc/Dashboard1.tsx';
import Dashboard2 from '@/custom/mpc/Dashboard2.tsx';
import Mpc1Sub1Menu1 from '@/custom/mpc/Mpc1Sub1Menu1.tsx';
import Mpc1Sub1Menu2 from '@/custom/mpc/Mpc1Sub1Menu2.tsx';
import Mpc1Sub2Menu1 from '@/custom/mpc/Mpc1Sub2Menu1.tsx';
import Mpc1Sub2Menu2 from '@/custom/mpc/Mpc1Sub2Menu2.tsx';
import Mpc1Sub2Menu3 from '@/custom/mpc/Mpc1Sub2Menu3.tsx';
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
import Mpc1Sub3Menu3S3 from '@/custom/mpc/Mpc1Sub3Menu3S3.tsx';
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
import Error from '@/custom/mpc/Error.tsx';
import ButtonColl from '@/custom/Button.tsx';
import Weather from '@/custom/Weather.tsx';
import Loading from '@/custom/Loading.tsx';
import Sample08 from '@/custom/Sample08.tsx';
import Sample16 from '@/custom/Sample16.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Publish />} />
        <Route path={'/button'} element={<ButtonColl />} />
        <Route path={'/weather'} element={<Weather />} />
        <Route path={'/loading'} element={<Loading />} />
        <Route path={'/sample08'} element={<Sample08 />} />
        <Route path={'/sample16'} element={<Sample16 />} />

        {/* mpc */}
        <Route path={'/login1'} element={<Login1 />} />
        <Route path={'/login2'} element={<Login2 />} />
        <Route path={'/login3'} element={<Login3 />} />
        <Route path={'/login4'} element={<Login4 />} />
        <Route path={'/error'} element={<Error />} />
        <Route path={'/dashboard1'} element={<Dashboard1 />} />
        <Route path={'/dashboard2'} element={<Dashboard2 />} />
        <Route path={'/Mpc1Sub1Menu1'} element={<Mpc1Sub1Menu1 />} />
        <Route path={'/Mpc1Sub1Menu2'} element={<Mpc1Sub1Menu2 />} />
        <Route path={'/Mpc1Sub2Menu1'} element={<Mpc1Sub2Menu1 />} />
        <Route path={'/Mpc1Sub2Menu2'} element={<Mpc1Sub2Menu2 />} />
        <Route path={'/Mpc1Sub2Menu3'} element={<Mpc1Sub2Menu3 />} />
        {/* <Route path={'/Mpc1Sub2Menu3S1'} element={<Mpc1Sub2Menu3S1 />} /> */}
        <Route path={'/Mpc1Sub2Menu4'} element={<Mpc1Sub2Menu4 />} />
        <Route path={'/Mpc1Sub3Menu1'} element={<Mpc1Sub3Menu1 />} />
        <Route path={'/Mpc1Sub3Menu1S1'} element={<Mpc1Sub3Menu1S1 />} />
        <Route path={'/Mpc1Sub3Menu1S2'} element={<Mpc1Sub3Menu1S2 />} />
        <Route path={'/Mpc1Sub3Menu2'} element={<Mpc1Sub3Menu2 />} />
        <Route path={'/Mpc1Sub3Menu2S1'} element={<Mpc1Sub3Menu2S1 />} />
        <Route path={'/Mpc1Sub3Menu2S2'} element={<Mpc1Sub3Menu2S2 />} />
        <Route path={'/Mpc1Sub3Menu3'} element={<Mpc1Sub3Menu3 />} />
        <Route path={'/Mpc1Sub3Menu3S1'} element={<Mpc1Sub3Menu3S1 />} />
        <Route path={'/Mpc1Sub3Menu3S2'} element={<Mpc1Sub3Menu3S2 />} />
        <Route path={'/Mpc1Sub3Menu3S3'} element={<Mpc1Sub3Menu3S3 />} />
        <Route path={'/Mpc1Sub4Menu1'} element={<Mpc1Sub4Menu1 />} />
        <Route path={'/Mpc1Sub4Menu2'} element={<Mpc1Sub4Menu2 />} />
        <Route path={'/Mpc1Sub5Menu1'} element={<Mpc1Sub5Menu1 />} />
        <Route path={'/Mpc1Sub6Menu1'} element={<Mpc1Sub6Menu1 />} />
        <Route path={'/Mpc1Sub6Menu2'} element={<Mpc1Sub6Menu2 />} />
        <Route path={'/Mpc1Sub6Menu3'} element={<Mpc1Sub6Menu3 />} />
        <Route path={'/Mpc1Sub7Menu1'} element={<Mpc1Sub7Menu1 />} />
        <Route path={'/Mpc1Sub7Menu2'} element={<Mpc1Sub7Menu2 />} />
        <Route path={'/Mpc1Sub7Menu3'} element={<Mpc1Sub7Menu3 />} />
        <Route path={'/Mpc1Sub7Menu4'} element={<Mpc1Sub7Menu4 />} />
        <Route path={'/Mpc1Sub7Menu5'} element={<Mpc1Sub7Menu5 />} />
        <Route path={'/Mpc1Sub8Menu1'} element={<Mpc1Sub8Menu1 />} />
        <Route path={'/Mpc1Sub8Menu2'} element={<Mpc1Sub8Menu2 />} />
        <Route path={'/Mpc1Sub9Menu1'} element={<Mpc1Sub9Menu1 />} />
        <Route path={'/Mpc1Sub9Menu2'} element={<Mpc1Sub9Menu2 />} />
        <Route path={'/Mpc1Sub9Menu3'} element={<Mpc1Sub9Menu3 />} />
        <Route path={'/Mpc1Sub10Menu1'} element={<Mpc1Sub10Menu1 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
