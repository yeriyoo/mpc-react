/**
 * 설명: 라우팅
 **/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Publish from '../../Publish.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Publish />} />
        {/*<Route path={'/upload'} element={<FieldInfoUploadModal />} />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
