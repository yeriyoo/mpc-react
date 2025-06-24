/**
 * 설명: 라우팅
 **/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '@/component/account/SignUp.tsx';
import SignInGPKI from '@/component/account/SignInGPKI.tsx';
import BaseMap from '@/pages/BaseMap.tsx';
import AdminMain from '@/pages/AdminMain.tsx';
import AdminSettingLayout from '@/admin/AdminSettingLayout.tsx';
import CodeManage from '@/admin/components/setting/CodeManage.tsx';
import MenuManage from '@/admin/components/setting/MenuManage.tsx';
import AdminUserLayout from '@/admin/AdminUserLayout.tsx';
import UserManage from '@/admin/components/user/UserManage.tsx';
import AuthorityManage from '@/admin/components/user/AuthorityManage.tsx';
import AccessLimit from '@/admin/components/user/AccessLimit.tsx';
import AccessIpManage from '@/admin/components/user/AccessIpManage.tsx';
import AdminBoardLayout from '@/admin/AdminBoardLayout.tsx';
import Notice from '@/admin/components/board/Notice.tsx';
import BoardList from '@/admin/components/board/BoardList.tsx';
import QA from '@/admin/components/board/QA.tsx';
import BoardDetail from '@/admin/components/board/detail/BoardDetail.tsx';
import BoardAddView from '@/admin/components/board/detail/BoardAddView.tsx';
import QaAnswer from '@/admin/components/board/detail/QaAnswer.tsx';
import ReportManage from '@/admin/components/report/ReportManage.tsx';
import IntegrationManage from '@/admin/components/integration/IntegrationManage.tsx';
import AdminStandardLayout from '@/admin/AdminStandardLayout.tsx';
import MapManage from '@/admin/components/standard/MapManage.tsx';
import SensitiveResource from '@/admin/components/standard/SensitiveResource.tsx';
import KcgAsset from '@/admin/components/standard/KcgAsset.tsx';
import AdminEnvironmentLayout from '@/admin/AdminEnvironmentLayout.tsx';
import MarineObservationBuoy from '@/admin/components/environment/MarineObservationBuoy.tsx';
import AdminPollutionLayout from '@/admin/AdminPollutionLayout.tsx';
import PollutionManage from '@/admin/components/pollution/PollutionManage.tsx';
import PollutionCodeManage from '@/admin/components/pollution/PollutionCodeManage.tsx';
import AdminMonitoringLayout from '@/admin/AdminMonitoringLayout.tsx';
import CollectionMonitoring from '@/admin/components/monitoring/CollectionMonitoring.tsx';
import LinkingMonitoring from '@/admin/components/monitoring/LinkingMonitoring.tsx';
import CarryingMonitoring from '@/admin/components/monitoring/CarryingMonitoring.tsx';
import PredictAnalysis from '@/component/PredictAnalysis.tsx';
import Publish from '../../Publish.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Publish />} />
        <Route path={'/signUp'} element={<SignUp />} />
        <Route path={'/gpki'} element={<SignInGPKI />} />
        <Route path={'/map'} element={<BaseMap />} />
        <Route path={'/analysis'} element={<PredictAnalysis />} />
        {/* 어드민 */}
        <Route path={'/admin'} element={<AdminMain />}>
          {/* 환경설정 */}
          <Route path={'setting'} element={<AdminSettingLayout />}>
            <Route path={'code'} element={<CodeManage />} />
            <Route path={'menu'} element={<MenuManage />} />
          </Route>
          {/* 사용자 정보 */}
          <Route path={'user'} element={<AdminUserLayout />}>
            <Route path={'manage'} element={<UserManage />} />
            <Route path={'authority'} element={<AuthorityManage />} />
            <Route path={'limit'} element={<AccessLimit />} />
            <Route path={'ip'} element={<AccessIpManage />} />
          </Route>
          {/* 게시판 관리 */}
          <Route path={'board'} element={<AdminBoardLayout />}>
            {/*<Route path={'notice/:id'} element={<NoticeDetail />} />*/}
            {/*<Route path={'boardList/:id'} element={<BoardListDetail />} />*/}
            {/*<Route path={'qa/:id'} element={<QaDetail />} />*/}
            <Route path={'notice'} element={<Notice />} />
            <Route path={'boardList'} element={<BoardList />} />
            <Route path={'qa'} element={<QA />} />
            {/* 공지사항,게시판,Q&A 상세 */}
            <Route path={'notice/:id'} element={<BoardDetail />} />
            <Route path={'boardList/:id'} element={<BoardDetail />} />
            <Route path={'qa/:id'} element={<BoardDetail />} />
            {/* 공지사항,게시판,Q&A 등록/수정 */}
            <Route path={'notice/add'} element={<BoardAddView />} />
            <Route path={'boardList/add'} element={<BoardAddView />} />
            <Route path={'qa/add'} element={<BoardAddView />} />
            {/* Q&A 답변등록 */}
            <Route path={'qa/:id/answer'} element={<QaAnswer />} />
          </Route>
          {/* 보고서 관리 */}
          <Route path={'report'} element={<ReportManage />} />
          {/* 통합 관리 */}
          <Route path={'integration'} element={<IntegrationManage />} />
          {/* 기준정보 */}
          <Route path={'standard'} element={<AdminStandardLayout />}>
            <Route path={'map'} element={<MapManage />} />
            <Route path={'sensitive'} element={<SensitiveResource />} />
            <Route path={'asset'} element={<KcgAsset />} />
          </Route>
          {/* 환경정보 */}
          <Route path={'environment'} element={<AdminEnvironmentLayout />}>
            <Route path={'buoy'} element={<MarineObservationBuoy />} />
          </Route>
          {/* 오염 관리 */}
          <Route path={'pollution'} element={<AdminPollutionLayout />}>
            <Route path={'manage'} element={<PollutionManage />} />
            <Route path={'code'} element={<PollutionCodeManage />} />
          </Route>
          {/* 모니터링 */}
          <Route path={'monitoring'} element={<AdminMonitoringLayout />}>
            <Route path={'collection'} element={<CollectionMonitoring />} />
            <Route path={'linking'} element={<LinkingMonitoring />} />
            <Route path={'carrying'} element={<CarryingMonitoring />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
