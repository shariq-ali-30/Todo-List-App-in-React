import React from "react";

const TodoListContainer = () => {
  return (
    <div className="todo-list-container overflow-y-auto [border:var(--card-border)] flex-1 min-h-0 min-w-0 mt-4 rounded-[8px]">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoListContainer;

const TodoItem = () => {
  return (
    <div className="todo-item flex justify-between items-center p-4 [border-bottom:var(--card-border)]">
      <div className="left flex gap-3 items-center">
        <input
          type="checkbox"
          className="h-[20px] w-[20px] cursor-pointer accent-[var(--primary-color)]"
        />
        <p className="text-[17px]">Complete React Todo App</p>
      </div>
      <div className="buttons flex gap-3">
        <i className="ph ph-pencil-simple text-[var(--edit-icon-color)] text-[19px] [border:var(--input-border)] h-[35px] w-[35px] flex items-center justify-center rounded-[4px] cursor-pointer"></i>
        <i className="ph ph-trash text-[var(--delete-icon-color)] text-[19px] [border:var(--input-border)] h-[35px] w-[35px] flex items-center justify-center rounded-[4px] cursor-pointer"></i>
      </div>
    </div>
  );
};
