"use client";

import { memo } from "react";
import Image from "next/image";

interface ICheckboxProps {
  value: boolean;
  handleClick: null | ((args: any) => void);
}

const Checkbox = memo<ICheckboxProps>(({
  value,
  handleClick,
}) => {
 return (
  <button className={"w-[52px] h-[52px]"} onClick={handleClick ?? (() => null)}>
    {
      value
        ? <Image src={"/icons/checkmark.svg"} alt={"CheckMark"} width={52} height={52} />
        : <div className={"w-full h-full grid place-content-center rounded-full text-3xl border border-c-text-light"}>+</div>
    }
  </button>
 );
})
Checkbox.displayName = "Checkbox"

export { Checkbox };