"use client";

import {Dispatch, memo, SetStateAction} from "react";
import {Category} from "@prisma/client";

interface SelectCategoryProps {
  categories: (Category | null)[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>
}

const SelectCategory = memo<SelectCategoryProps>(({
                                                    categories,
                                                    selected,
                                                    setSelected
                                                  }) => {
  return categories ? (
    <select
      className="absolute text-c-text-light bottom-5 left-5 bg-[url('/icons/arrow-down.svg')]
      appearance-none border border-c-text-light rounded-80 px-4 py-2 pr-10 bg-transparent"
      value={selected}
      onChange={(e) => setSelected(+e.target.value)}
    >
      {categories.map((c) => (
        <option key={c?.id} value={c?.id}>
          {c?.name}
        </option>
      ))}
    </select>
  ) : null;
});
SelectCategory.displayName = "SelectCategory";

export default SelectCategory;