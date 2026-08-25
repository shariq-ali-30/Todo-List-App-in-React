import { useState } from "react";
import Header from "./components/Header.jsx";
import InputBox from "./components/InputBox.jsx";
import FilterSection from "./components/FilterSection.jsx";
import TodoListContainer from "./components/TodoListContainer.jsx";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);
  let [inputVal, setInputVal] = useState("");

  function addTodo(e) {
    e.preventDefault();

    if (!inputVal.trim()) {
      return;
    }

    let newTodo = {
      id: Date.now(),
      title: inputVal,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);

    setInputVal("");
  }

  return (
    <div className="main py-[clamp(0.5rem,2vw,1.5rem)] min-h-screen max-w-screen bg-[var(--body-bg)] flex justify-center items-center text-[var(--text-primary)]">
      <div className="container flex flex-col p-[clamp(0.75rem,2.5vw,1.5rem)] bg-[var(--card-bg)] w-full max-w-[clamp(400px,90vw,800px)] h-[clamp(450px,80vh,600px)] shadow-[var(--card-shadow)] [border:var(--card-border)] rounded-[clamp(6px,1.5vw,10px)]">
        <Header />
        <InputBox
          setTodos={setTodos}
          inputVal={inputVal}
          setInputVal={setInputVal}
          addTodo={addTodo}
        />
        <FilterSection todos={todos} />
        <TodoListContainer
          todos={todos}
          setTodos={setTodos}
          inputVal={inputVal}
        />
      </div>
    </div>
  );
}

export default App;
