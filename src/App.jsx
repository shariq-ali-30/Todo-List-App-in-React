import { useState } from "react";
import Header from "./components/Header.jsx";
import InputBox from "./components/InputBox.jsx";
import FilterSection from "./components/FilterSection.jsx";
import TodoListContainer from "./components/TodoListContainer.jsx"
import "./App.css";

function App() {
  return (
    <div className="main py-4 min-h-screen max-w-screen bg-[var(--body-bg)] flex justify-center items-center text-[var(--text-primary)]">
      <div className="container flex flex-col p-5 bg-[var(--card-bg)] w-full max-w-[800px] h-[600px] shadow-[var(--card-shadow)] [border:var(--card-border)] rounded-[10px]">
        <Header />
        <InputBox />
        <FilterSection />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default App;
