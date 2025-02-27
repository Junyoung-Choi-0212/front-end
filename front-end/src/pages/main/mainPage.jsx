import MainBanner from "@/assets/img/main-banner1.png";
import Footer from "@/component/common/footer/Footer";
import Navbar from "@/component/common/navbar/Navbar";
import ApplyForSponsorship from "@/component/main/ApplyForSponsorship";
import DonorReview from "@/component/main/DonorReview";
import MainCampaignList from "@/component/main/MainCampaignList";
import MainCategory from "@/component/main/MainCategory";
import NewCampagin from "@/component/main/NewCampagin";
import PopularCampaign from "@/component/main/PopularCampaign";
import SocialLink from "@/component/main/SocialLink";
import TotalDonation from "@/component/main/TotalDonation";
import "@/style/scss/style.scss";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <div className="layout__main-container">
        <div className="layout__left-panel">
          {/* 메인 배너너 */}
          <div className="layout__main-banner">
            <a href="/">
              <img src={MainBanner} alt="" style={{ width: "100%" }} />
            </a>
          </div>
          {/* 나의 도움이 필요한 모금함(카테고리) */}
          <div className="layout__main-category">
            <MainCategory />
          </div>
          {/* 가장 많이 기부중인 모금함 */}
          <div className="layout__top-campaign">
            <PopularCampaign />
          </div>

          {/* 후원 리스트 */}
          <div className="layout__main-campaign-list">
            <MainCampaignList />
          </div>
        </div>
        <div className="layout__right-panel">
          <div className="layout__first-section">
            <div className="layout__total-donation">
              <Link to="/pages/stats">
                <TotalDonation />
              </Link>
            </div>
            <div className="layout__donation-review">
              <DonorReview />
            </div>
          </div>

          <div className="layout__new-campaign">
            <NewCampagin />
          </div>
          <div className="layout__social-link">
            <SocialLink />
          </div>

          <div className="layout__receive-donation">
            <ApplyForSponsorship />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
