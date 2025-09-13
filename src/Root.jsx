import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      {/* main grows to push footer to the bottom when content is short */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer stays at bottom due to flex layout */}
      <Footer />
    </div>
  );
};

export default Root;
