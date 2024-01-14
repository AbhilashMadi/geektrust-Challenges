import { CheckboxProps } from "@radix-ui/react-checkbox";
import { useId } from "@radix-ui/react-id";
import { Checkbox } from "@ui/checkbox";
import { FC } from "react";

interface IItemCheckbox extends CheckboxProps {
  label: string;
}

const ItemCheckbox: FC<IItemCheckbox> = ({ label, ...rest }) => {
  const checkboxId = useId();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={checkboxId} {...rest} />
      <label
        htmlFor={checkboxId}
        className="text-sm font-medium leading-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default ItemCheckbox;
