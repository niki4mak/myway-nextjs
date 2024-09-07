import {HTMLProps, memo} from "react";

const Input = memo<HTMLProps<HTMLInputElement>>((props) => {
  return (
    <input
      className={"!bg-transparent border border-c-text-light rounded-[10px] text-c-text-light h-[42px] px-4"}
      {...props}
    />
  );
})
Input.displayName = "Input"

export {Input};