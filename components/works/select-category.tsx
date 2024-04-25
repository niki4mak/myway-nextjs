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
      className="absolute text-c-primary bottom-2 left-5 bg-[url('/icons/arrow-down.svg')]
      appearance-none border-none rounded px-4 py-2 pr-10 bg-transparent focus:ring-0"
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