import React from "react";

const TodoListContainer = ({todos, setTodos, inputVal, setInputVal, setEditMode, markCompleted}) => {

  function deleteTodo(id) {
     setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="todo-list-container overflow-y-auto [border:var(--card-border)] flex-1 min-h-0 min-w-0 mt-[clamp(0.8rem,2vw,1rem)] rounded-[clamp(4px,1vw,8px)]">
      {todos.map((item) => (
        <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed} deleteTodo={deleteTodo} setEditMode={setEditMode} setInputVal={setInputVal} markCompleted={markCompleted}/>
      ))}

      {!todos.length > 0 && (
        <div className="flex flex-col items-center justify-center p-6 text-center h-full">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <i className="ph ph-clipboard-text text-[clamp(2rem,4vw,2.25rem)]"></i>
          </div>

          <h3 className="text-base font-semibold text-gray-800">
            No tasks found
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-xs">
            Add a new task above to get started and keep track of your work.
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoListContainer;

const TodoItem = ({id ,title, completed, deleteTodo, setEditMode, setInputVal, markCompleted}) => {
  return (
    <div className="todo-item flex justify-between items-center p-[clamp(0.8rem,2vw,1rem)] [border-bottom:var(--card-border)]">
      <div className="left flex gap-[clamp(0.5rem,1.5vw,0.75rem)] items-center">
        <input
          type="checkbox"
          className="h-[clamp(16px,2vw,20px)] w-[clamp(16px,2vw,20px)] cursor-pointer accent-[var(--primary-color)]"
          onChange={() => markCompleted(id)}
          checked={completed}
        />
        <p className={`text-[clamp(14px,1.8vw,17px)] ${completed ? "line-through text-gray-500" : ""}`}>{title}</p>
      </div>
      <div className="buttons flex gap-[clamp(0.5rem,1.5vw,0.75rem)]">
        <i onClick={() => {
          setEditMode(id)
          setInputVal(title)
        }} className="ph ph-pencil-simple text-[var(--edit-icon-color)] text-[clamp(15px,2vw,19px)] [border:var(--input-border)] h-[clamp(28px,3.5vh,35px)] w-[clamp(28px,3.5vh,35px)] flex items-center justify-center rounded-[clamp(4px,0.5vw,4px)] cursor-pointer"></i>
        <i onClick={() => deleteTodo(id)} className="ph ph-trash text-[var(--delete-icon-color)] text-[clamp(15px,2vw,19px)] [border:var(--input-border)] h-[clamp(28px,3.5vh,35px)] w-[clamp(28px,3.5vh,35px)] flex items-center justify-center rounded-[clamp(4px,0.5vw,4px)] cursor-pointer"></i>
      </div>
    </div>
  );
};
