import { useState } from "react";

const InputBox = ({inputVal, setInputVal, addTodo, editMode}) => {


  return (
    <form
      onSubmit={addTodo}
      className="input-box my-[clamp(0.8rem,2vw,1rem)] p-[clamp(0.5rem,2vw,1rem)] rounded-[clamp(4px,1vw,8px)] flex justify-between items-center gap-[clamp(0.375rem,1vw,0.5rem)] [border:var(--card-border)]"
    >
      <input
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        type="text"
        placeholder="What needs to be done?"
        className="bg-white flex-1 h-[clamp(38px,5vh,45px)] outline-none [border:var(--input-border)] rounded-[clamp(3px,0.8vw,5px)] text-[clamp(12px,1.5vw,14px)] px-[clamp(0.6rem,1.5vw,0.75rem)]"
      />
      <button className="bg-[var(--add-task-bg)] text-white px-[clamp(0.75rem,2vw,1.25rem)] h-[clamp(38px,5vh,45px)] rounded-[clamp(3px,0.8vw,5px)] text-[clamp(12px,1.5vw,14px)] cursor-pointer">
        {editMode ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default InputBox;
