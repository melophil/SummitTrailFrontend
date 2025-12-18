import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Hero from "./components/common/Hero";
import Footer from "./components/common/Footer";
import SplashScreen from "./components/common/SplashScreen";
import PopulartrekSection from "./components/sections/PopulartrekSection";
import "./App.css";
import Sidebar from "./components/ui/Modals/Sidebar";
import ContactSection from "./components/sections/ContactSection";
import TreksSection from "./components/sections/TreksSection";
import HikesSection from "./components/sections/HikesSection";
import ExpeditionsSection from "./components/sections/ExpeditionsSection";
import AboutUs from "./components/sections/AboutUs";
import SquadSection from "./components/sections/SquadSection";
import CareersSection from "./components/sections/CareersSection";
import FaqTipsSection from "./components/sections/FaqTipsSection";
import CampingSection from "./components/sections/CampingSection";
import ParaglidingSection from "./components/sections/ParaglidingSection";
import RockClimbingSection from "./components/sections/RockClimbingSection";
import ValleyPassSection from "./components/sections/ValleyPassSection";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="app-root">

        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Sidebar />
          <NavBar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Footer />
                  </>
                }
              />
              <Route path="/treks" element={<TreksSection />} />
              {/* <Route path="/treks/:id" element={<TrekDetails />} /> */}
              <Route path="/expeditions" element={<ExpeditionsSection />} />
              <Route path="/hikes" element={<HikesSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/squad" element={<SquadSection />} />
              <Route path="/careers" element={<CareersSection />} />
              <Route path="/faq" element={<FaqTipsSection />} />
              <Route path="/camping" element={<CampingSection />} />
              <Route path="/paragliding" element={<ParaglidingSection />} />
              <Route path="/rock" element={<RockClimbingSection />} />
              <Route path="/valley" element={<ValleyPassSection />} />



            </Routes>
          </main>
        </div>


      {/* ✅ Splash overlay sits on top, fades away smoothly */}
      <SplashScreen onFinish={() => setSplashDone(true)} hidden={splashDone} />
    </div>
  );
}
