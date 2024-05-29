import {Dispatch, memo, SetStateAction} from "react";
import {IYCategory} from "../../data/model/yclients/model";

interface ITabSelectProps {
  categories?: IYCategory[];
  selectedIndex: number;
  setSelected: Dispatch<SetStateAction<number>>
}

const TabSelect = memo<ITabSelectProps>(({
                                           categories,
                                           selectedIndex,
                                           setSelected,
                                         }) => {
  if (!categories?.length) return null;

  return (
    <select
      className="text-c-primary w-full bg-[url('/icons/arrow-down.svg')]
      appearance-none border-none rounded px-4 py-2 pr-10 bg-transparent focus:ring-0"
      value={selectedIndex}
      onChange={(e) => setSelected(+e.target.value)}
    >
      {categories.map((c, index) => (
        <option className={"bg-c-bg-dark checked:bg-c-text-light checked:text-c-primary"} key={c?.id} value={index}>
          {categories[index].title}
        </option>
      ))}
    </select>
  );
})
TabSelect.displayName = "TabSelect"

export {TabSelect};