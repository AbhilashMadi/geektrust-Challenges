import { Checkbox } from "@ui/checkbox";
import { FC, useId } from "react";

interface IItemCheckbox {
  label: string;
}

const ItemCheckbox: FC<IItemCheckbox> = (props) => {
  const { label } = props;
  const checkboxId = useId();

  return <div className="flex items-center space-x-2">
    <Checkbox id={checkboxId} />
    <label
      htmlFor={checkboxId}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
  </div>
};

export default ItemCheckbox;