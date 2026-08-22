import { useState } from "react";
import Header from "./components/Header.jsx";
import InputBox from "./components/InputBox.jsx";
import FilterSection from "./components/FilterSection.jsx";
import "./App.css";

function App() {
  return (
    <div className="main h-screen w-screen bg-[var(--body-bg)] flex justify-center items-center text-[var(--text-primary)]">
      <div className="container px-5 py-7 bg-[var(--card-bg)] w-[800px] h-[400px] shadow-[var(--card-shadow)] [border:var(--card-border)] rounded-[10px]">
        <Header />
        <InputBox />
        <FilterSection />
      </div>
    </div>
  );
}

export default App;
