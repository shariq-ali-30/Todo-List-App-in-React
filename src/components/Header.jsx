import React from "react";
import icon from "../images/icon.png";

const Header = React.memo(() => {
  return (
    <div className="header flex items-center justify-center flex-col">
      <div className="flex items-center gap-3">
        <img src={icon} alt="logo" className="w-[36px]" />
        <h1 className="flex text-4xl font-bold">Todo List</h1>
      </div>
      <p className="text-[var(--text-secondary)] text-[14px] mt-1">
        Stay focused. Get things done.
      </p>
    </div>
  );
});

export default Header;
