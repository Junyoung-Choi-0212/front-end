// src/router.jsx

import { Navigate, Outlet, Route, Routes } from "react-router-dom";

// 각 컴포넌트 임포트

import Login from "@/pages/auth/Login";
import RegistType from "@/pages/auth/registType";

import AdminApp from "@/AdminApp";
import Signup from "@/pages/auth/Signup";
import CampaignPage from "@/pages/campaign/CampaignPage";
import CategoryPage from "@/pages/category/CategoryPage";
import MainPage from "@/pages/main/mainPage";
import MyPage from "@/pages/mypage/MyPage";
import SearchPage from "@/pages/search/SearchPage";
import Stats from "@/pages/stats/Stats";
import useUserProfile from "@/store/useUserProfile";
import DonationForm from "../../pages/donationForm/DonationForm";
//라우터 제약조건
const PrivateRoute = () => {
  const { profile } = useUserProfile();
  return profile.user_name ? <Outlet /> : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pages/stats" element={<Stats />} />
      <Route element={<PrivateRoute />}>
        <Route path="/pages/mypage" element={<MyPage />} />
      </Route>
      <Route path="/pages/category" element={<CategoryPage />} />
      <Route path="/registType" element={<RegistType />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/campaign" element={<CampaignPage />} />
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/donationForm" element={<DonationForm />} />

      <Route path="/campaign/:campaignId" element={<CampaignPage />} />
    </Routes>
  );
};

export default AppRouter;
