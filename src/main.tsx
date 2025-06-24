import "@/assets/scss/user-styles.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Publish from "../Publish.tsx";
import AdminMain from "../pages/AdminMain.tsx";
import AdminSettingLayout from "@/admin/AdminSettingLayout.tsx";
import CodeManage from "@/admin/components/setting/CodeManage.tsx";
import MenuManage from "@/admin/components/setting/MenuManage.tsx";
import AdminUserLayout from "@/admin/AdminUserLayout.tsx";
import UserManage from "@/admin/components/user/UserManage.tsx";
import AuthorityManage from "@/admin/components/user/AuthorityManage.tsx";
import AccessLimit from "@/admin/components/user/AccessLimit.tsx";
import AccessIpManage from "@/admin/components/user/AccessIpManage.tsx";
import AdminBoardLayout from "@/admin/AdminBoardLayout.tsx";
import Notice from "@/admin/components/board/Notice.tsx";
import BoardList from "@/admin/components/board/BoardList.tsx";
import QA from "@/admin/components/board/QA.tsx";
import BoardDetail from "@/admin/components/board/detail/BoardDetail.tsx";
import BoardAddView from "@/admin/components/board/detail/BoardAddView.tsx";
import QaAnswer from "@/admin/components/board/detail/QaAnswer.tsx";
import ReportManage from "@/admin/components/report/ReportManage.tsx";
import IntegrationManage from "@/admin/components/integration/IntegrationManage.tsx";
import AdminStandardLayout from "@/admin/AdminStandardLayout.tsx";
import MapManage from "@/admin/components/standard/MapManage.tsx";
import SensitiveResource from "@/admin/components/standard/SensitiveResource.tsx";
import KcgAsset from "@/admin/components/standard/KcgAsset.tsx";
import AdminEnvironmentLayout from "@/admin/AdminEnvironmentLayout.tsx";
import MarineObservationBuoy from "@/admin/components/environment/MarineObservationBuoy.tsx";
import AdminPollutionLayout from "@/admin/AdminPollutionLayout.tsx";
import PollutionManage from "@/admin/components/pollution/PollutionManage.tsx";
import PollutionCodeManage from "@/admin/components/pollution/PollutionCodeManage.tsx";
import AdminMonitoringLayout from "@/admin/AdminMonitoringLayout.tsx";
import CollectionMonitoring from "@/admin/components/monitoring/CollectionMonitoring.tsx";
import LinkingMonitoring from "@/admin/components/monitoring/LinkingMonitoring.tsx";
import CarryingMonitoring from "@/admin/components/monitoring/CarryingMonitoring.tsx";
import MainPage from "./publish/mainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Publish />} />
        <Route path={"/pubilsh/main"} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
