"use client"

import {memo} from "react";

interface ButtonSolidProps {
  text: string;
  clickHandler?: (args: any) => void;
  className?: string;
  disabled?: boolean;
}

const ButtonSolid = memo<ButtonSolidProps>(({
                                              text,
                                              clickHandler,
                                              className,
                                              disabled
                                            }) => {
  return (
    <button
      className={`flex items-center justify-center bg-c-primary px-6 py-1 rounded-2xl z-10 text-c-text-dark border-b-[3px] border-b-c-primary
      ${className ?? ""} ${disabled ? "opacity-50" : "hover:bg-c-primary-darken hover:text-c-text-dark "}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
});
ButtonSolid.displayName = "ButtonSolid";

export default ButtonSolid;