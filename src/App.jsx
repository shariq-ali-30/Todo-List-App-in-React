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

  let toast = document.querySelector(".toast");
  let toastIcon = document.getElementById("toast-icon");
  let toastMessage = document.querySelector(".toast-message");

  let allTodos = JSON.parse(localStorage.getItem("allTodos"));

  let [todos, setTodos] = useState(allTodos);
  let [inputVal, setInputVal] = useState("");
  let [editMode, setEditMode] = useState(null);
  let [searchQuery, setSearchQuery] = useState("");
  let [filter, setFilter] = useState("all");

  let filterdTodos = todos.filter((todo) => {
    let matchesSearch = todo.title
      .toLowerCase()
      .trim()
      .includes(searchQuery.toLowerCase().trim());
    let matchesFilter =
      filter == "all"
        ? true
        : filter == "pending"
          ? !todo.completed
          : todo.completed;

    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(e) {
    e.preventDefault();

    if (!inputVal.trim()) {
      return showToast("error", "Please enter your task!")
    }

    if (editMode) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id == editMode ? { ...todo, title: inputVal } : todo,
        ),
      );
      setInputVal("");
      setEditMode(null);
      showToast("success", "Task updated successfully!");
      return;
    }

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].title.toLocaleLowerCase().trim() === inputVal.toLocaleLowerCase().trim()) {
        return showToast("error", "Task already exist!")
      }      
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

  let toastTimeout;
  function showToast(state, message) {
    clearTimeout(toastTimeout);

    if (state == "success") {
      toastIcon.className = "ph-fill ph-check-circle";
    }

    if (state == "error") {
      toastIcon.className = "ph-fill ph-x-circle";
    }

    toastMessage.innerText = message;

    toast.classList.add("active");
    toastTimeout = setTimeout(() => {
      toast.classList.remove("active");
    }, 3000);
  }

  return (
    <div className="main py-[clamp(0.5rem,2vw,1.5rem)] min-h-screen max-w-screen bg-[var(--body-bg)] flex justify-center items-center text-[var(--text-primary)]">
      <div className="toast">
        <i className="ph-fill ph-x-circle" id="toast-icon"></i>
        <p className="toast-message">Message</p>
      </div>
      <div className="container flex flex-col p-[clamp(0.75rem,2.5vw,1.5rem)] bg-[var(--card-bg)] w-full max-w-[clamp(400px,90vw,800px)] h-[580px] shadow-[var(--card-shadow)] [border:var(--card-border)] rounded-[clamp(6px,1.5vw,10px)]">
        <Header />
        <InputBox
          inputVal={inputVal}
          setInputVal={setInputVal}
          addTodo={addTodo}
          editMode={editMode}
        />
        <FilterSection
          todos={todos}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setFilter={setFilter}
        />
        <TodoListContainer
          todos={todos}
          filterdTodos={filterdTodos}
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
