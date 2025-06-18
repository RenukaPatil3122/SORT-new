import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MarketIndustry from "./components/MarketIndustry";
import Competitors from "./components/Competitors";
import BrandHealth from "./components/BrandHealth";
import Consumers from "./components/Consumers";
import SWOTAnalysis from "./components/SWOTAnalysis";
import CategoryDynamics from "./components/CategoryDynamics";
import CompetitiveIntel from "./components/CompetitiveIntel";
import BrandPerformance from "./components/BrandPerformance";
import ConsumerInsights from "./components/ConsumerInsights";
import HighBrandSearchVolumeRankPage from "./pages/SWOTAnalysis/HighBrandSearchVolumeRankPage";
import PositiveOverallSentimentScorePage from "./pages/SWOTAnalysis/PositiveOverallSentimentScorePage";
import WideProductRangeVisibilityPage from "./pages/SWOTAnalysis/WideProductRangeVisibilityPage";
import StrongEcommercePresenceRatingsPage from "./pages/SWOTAnalysis/StrongEcommercePresenceRatingsPage";
import HighReviewVolumePage from "./pages/SWOTAnalysis/HighReviewVolumePage";
import KeyNegativeReviewThemesFrequencyPage from "./pages/SWOTAnalysis/KeyNegativeReviewThemesFrequencyPage";
import LowerEngagementRateVsSelectCompetitorsPage from "./pages/SWOTAnalysis/LowerEngagementRateVsSelectCompetitorsPage";
import IdentifiedWebsiteUsabilityIssuesPage from "./pages/SWOTAnalysis/IdentifiedWebsiteUsabilityIssuesPage";
import GapsInOnlineCustomerServiceResponsePage from "./pages/SWOTAnalysis/GapsInOnlineCustomerServiceResponsePage";
import NegativeNewsSentimentSpikesPage from "./pages/SWOTAnalysis/NegativeNewsSentimentSpikesPage";
import HighGrowthRateInAdjacentCategoriesPage from "./pages/SWOTAnalysis/HighGrowthRateInAdjacentCategoriesPage";
import RisingTrendAlignmentPage from "./pages/SWOTAnalysis/RisingTrendAlignmentPage";
import UnmetNeedsIdentifiedInReviewsPage from "./pages/SWOTAnalysis/UnmetNeedsIdentifiedInReviewsPage";
import CompetitorWeaknessesIdentifiedPage from "./pages/SWOTAnalysis/CompetitorWeaknessesIdentifiedPage";
import UntappedGeographicSearchInterestPage from "./pages/SWOTAnalysis/UntappedGeographicSearchInterestPage";

import AuthForm from "./components/AuthForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Dashboard from "./pages/Dashboard";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  if (isAuthPage) {
    return (
      <main className=" min-h-screen flex items-center justify-center bg-light-gray-100">
        <AuthForm />
      </main>
    );
  }

  return (
    <div>
      {/* This wrapper has left padding to offset the fixed sidebar */}
      <div className=" min-h-screen">
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/dash" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="market-industry" element={<MarketIndustry />} />
            <Route path="competitors" element={<Competitors />} />
            <Route path="brand-health" element={<BrandHealth />} />
            <Route path="consumers" element={<Consumers />} />
            <Route path="swot-analysis" element={<SWOTAnalysis />} />
            <Route path="category-dynamics" element={<CategoryDynamics />} />
            <Route path="competitive-intel" element={<CompetitiveIntel />} />
            <Route path="brand-performance" element={<BrandPerformance />} />
            <Route path="consumer-insights" element={<ConsumerInsights />} />
            <Route path="high-brand-search-volume-rank" element={<HighBrandSearchVolumeRankPage />} />
            <Route path="positive-overall-sentiment-score" element={<PositiveOverallSentimentScorePage />} />
            <Route path="wide-product-range-visibility" element={<WideProductRangeVisibilityPage />} />
            <Route path="strong-ecommerce-presence-ratings" element={<StrongEcommercePresenceRatingsPage />} />
            <Route path="high-review-volume" element={<HighReviewVolumePage />} />
            <Route path="key-negative-review-themes-frequency" element={<KeyNegativeReviewThemesFrequencyPage />} />
            <Route path="lower-engagement-rate-vs-select-competitors" element={<LowerEngagementRateVsSelectCompetitorsPage />} />
            <Route path="identified-website-usability-issues" element={<IdentifiedWebsiteUsabilityIssuesPage />} />
            <Route path="gaps-in-online-customer-service-response" element={<GapsInOnlineCustomerServiceResponsePage />} />
            <Route path="negative-news-sentiment-spikes" element={<NegativeNewsSentimentSpikesPage />} />
            <Route path="high-growth-rate-in-adjacent-categories" element={<HighGrowthRateInAdjacentCategoriesPage />} />
            <Route path="rising-trend-alignment" element={<RisingTrendAlignmentPage />} />
            <Route path="unmet-needs-identified-in-reviews" element={<UnmetNeedsIdentifiedInReviewsPage />} />
            <Route path="competitor-weaknesses-identified" element={<CompetitorWeaknessesIdentifiedPage />} />
            <Route path="untapped-geographic-search-interest" element={<UntappedGeographicSearchInterestPage />} />
          </Route>

          {/* <Route path="/auth" element={<AuthForm />} /> */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
