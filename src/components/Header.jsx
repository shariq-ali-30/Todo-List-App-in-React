import React from "react";
import icon from "../images/icon.png";

const Header = React.memo(() => {
  return (
    <div className="header flex items-center justify-center flex-col">
      <div className="flex items-center gap-[clamp(0.5rem,1.5vw,0.75rem)]">
        <img src={icon} alt="logo" className="w-[clamp(28px,4vw,36px)]" />
        <h1 className="flex text-[clamp(1.5rem,5vw,2.25rem)] font-bold leading-tight">
          Todo List
        </h1>
      </div>
      <p className="text-[var(--text-secondary)] text-[clamp(12px,1.5vw,14px)] mt-[clamp(0.125rem,0.5vw,0.25rem)]">
        Stay focused. Get things done.
      </p>
    </div>
  );
});

export default Header;
