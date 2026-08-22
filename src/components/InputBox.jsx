const InputBox = () => {
  return (
    <form className="input-box my-4 p-4 rounded-[8px] flex justify-between items-center gap-2 [border:var(--card-border)]">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="bg-white flex-1 h-[45px] outline-none [border:var(--input-border)] rounded-[5px] text-[14px] pl-3"
      />
      <button className="bg-[var(--add-task-bg)] text-white px-5 h-[45px] rounded-[5px] text-[14px]">
        Add Task
      </button>
    </form>
  );
};

export default InputBox;
