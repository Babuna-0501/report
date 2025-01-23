import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/layout/Home";
import Header from "./components/header/Header";
import Shareholders from "./components/shareHolder/Shareholders";
import BrandSection from "./components/brand/BrandSection";
import ChairwomanPage from "./components/Tuz/Tuz";
import Director from "./components/Director/ExecutiveMessage";
import { HighlightsPage } from "./components/Market/HighLightsPage";
import AboutUsPage from "./components/About/AboutUsPage";

function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <div className="flex flex-col max-w-[1920px]">
        <Header /> {/* Always shown */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/shareholder" element={<Shareholders />} /> {/* Shareholders page */}
          <Route path="/brand" element={<BrandSection/>}></Route>
          <Route path="/tuz" element={<ChairwomanPage/>}></Route>
          <Route path="/director" element={<Director/>}></Route>
          <Route path="/market" element={<HighlightsPage/>}></Route>
          <Route path="/about" element={<AboutUsPage/>}></Route>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
