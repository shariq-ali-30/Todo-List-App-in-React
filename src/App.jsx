import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import InputBox from "./components/InputBox.jsx";
import FilterSection from "./components/FilterSection.jsx";
import TodoListContainer from "./components/TodoListContainer.jsx";
import "./App.css";

function App() {
  if (!localStorage.getItem("allTodos")) {
    localStorage.setItem("allTodos", JSON.stringify([]));
  }

  let allTodos = JSON.parse(localStorage.getItem("allTodos"));

  let [todos, setTodos] = useState(allTodos);
  let [inputVal, setInputVal] = useState("");
  let [editMode, setEditMode] = useState(null);

  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(todos))
  }, [todos])

  function addTodo(e) {
    e.preventDefault();

    if (!inputVal.trim()) {
      return;
    }

    if (editMode) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id == editMode ? { ...todo, title: inputVal } : todo,
        ),
      );
      setInputVal("");
      setEditMode(null);

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

  function markCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <div className="main py-[clamp(0.5rem,2vw,1.5rem)] min-h-screen max-w-screen bg-[var(--body-bg)] flex justify-center items-center text-[var(--text-primary)]">
      <div className="container flex flex-col p-[clamp(0.75rem,2.5vw,1.5rem)] bg-[var(--card-bg)] w-full max-w-[clamp(400px,90vw,800px)] h-[580px] shadow-[var(--card-shadow)] [border:var(--card-border)] rounded-[clamp(6px,1.5vw,10px)]">
        <Header />
        <InputBox
          inputVal={inputVal}
          setInputVal={setInputVal}
          addTodo={addTodo}
          editMode={editMode}
        />
        <FilterSection todos={todos} />
        <TodoListContainer
          todos={todos}
          setTodos={setTodos}
          inputVal={inputVal}
          setInputVal={setInputVal}
          setEditMode={setEditMode}
          markCompleted={markCompleted}
        />
      </div>
    </div>
  );
}

export default App;
