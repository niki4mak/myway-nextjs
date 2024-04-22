"use client";

import {memo} from "react";

interface ButtonTransparentProps {
  text: string;
  clickHandler?: (args: any) => void;
}

const ButtonTransparent = memo<ButtonTransparentProps>(({
  text,
                                                          clickHandler
                                                        }) => {
  return (
    <button
      className={"flex items-center justify-center px-6 py-1 border-solid border border-c-primary rounded-2xl z-10 text-c-primary"}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
});
ButtonTransparent.displayName = "ButtonTransparent";

export default ButtonTransparent;