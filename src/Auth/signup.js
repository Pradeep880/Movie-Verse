import React from 'react'
import "../components/style.css";
import Header from "../components/Header";
import { LandingPage } from "../components/LandingPage";
import WatchOnTv from "../components/WatchOnTv";
import WatchEverywhere from "../components/WatchEveryWhere";
// import ProfileForKids from "./components/ProfileForKids";
import DownloadYourShows from "../components/DownloadYourShows";
import { Faqs } from "../components/Faqs";
import Footer from "../components/Footer";
function signup() {
  return (
    <div>
        <Header />
      <LandingPage />
      <WatchOnTv />
      <WatchEverywhere />
      <DownloadYourShows />
      <Faqs />
      <Footer />
    </div>
  )
}

export default signup