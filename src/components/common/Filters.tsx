import ItemCheckbox from "@/components/custom/ItemCheckBox";
import { useData } from "@/hooks/context";
import { Button } from "@ui/button";
import { Slider } from "@ui/slider";
import { FC, useState } from "react";
import { toast } from "sonner";

type Filters = {
  colors: string[];
  gender: string[];
  type: string[];
  range: [number, number];
}

const Filters: FC = () => {
  const { state, dispatch } = useData();
  const [filters, setFilters] = useState<Filters>({
    colors: [],
    gender: [],
    type: [],
    range: [200, 600],
  })

  const handleCheckboxChange = (category: keyof Filters, value: string, checked: boolean) => {
    setFilters((prevFilters) => {
      const updatedCategory = checked
        ? [...prevFilters[category], value]
        : prevFilters[category].filter((item) => item !== value);

      return {
        ...prevFilters,
        [category]: updatedCategory,
      };
    });
  };

  const handleRangeChange = (value: [number, number]) => {
    setFilters((pre) => ({
      ...pre,
      range: value,
    }))
  }

  const clearFilters = (): void => {
    setFilters({
      colors: [],
      gender: [],
      type: [],
      range: [200, 600],
    });
    dispatch({ type: "filter_products", payload: state.products });
  };

  const applyFilters = () => {
    const { colors, gender, type, range } = filters;

    const filteredProducts = state.products.filter((product) => {
      const isColorMatch = colors.length === 0 || colors.includes(product.color.toLowerCase());
      const isGenderMatch = gender.length === 0 || gender.includes(product.gender.toLowerCase());
      const isTypeMatch = type.length === 0 || type.includes(product.type.toLowerCase());
      const isPriceInRange = product.price >= range[0] && product.price <= range[1];

      return isColorMatch && isGenderMatch && isTypeMatch && isPriceInRange;
    });

    dispatch({ type: "filter_products", payload: filteredProducts });

    toast("Applyed Filters For: ", {
      description: <div className="space-x-1">
        {!!filters.colors.length && <p>Colors: {filters.colors.map((str) => <b className="capitalize" key={str}>{str}, </b>)}</p>}
        {!!filters.gender.length && <p>Gender: {filters.gender.map((str) => <b className="capitalize" key={str}>{str}, </b>)}</p>}
        {!!filters.type.length && <p>Type: {filters.type.map((str) => <b className="capitalize" key={str}>{str}, </b>)}</p>}
        <p>Price Range: {filters.range.join("-")} INR</p>
      </div>,
      className: "font-primary"
    })
  }

  return (
    <aside className="w-80">
      <div className="sticky top-16 space-y-2">
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Colors</h5>
          <div className="[&>*]:p-1 my-2">
            <ItemCheckbox
              label={"Pink"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "pink", checked)}
              checked={filters.colors.includes("pink")} />
            <ItemCheckbox
              label={"Blue"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "blue", checked)}
              checked={filters.colors.includes("blue")} />
            <ItemCheckbox
              label={"Green"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "green", checked)}
              checked={filters.colors.includes("green")} />
            <ItemCheckbox
              label={"Black"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "black", checked)}
              checked={filters.colors.includes("black")} />
            <ItemCheckbox
              label={"Purple"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "purple", checked)}
              checked={filters.colors.includes("purple")} />
            <ItemCheckbox
              label={"Red"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "red", checked)}
              checked={filters.colors.includes("red")} />
            <ItemCheckbox
              label={"Grey"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "grey", checked)}
              checked={filters.colors.includes("grey")} />
            <ItemCheckbox
              label={"White"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "white", checked)}
              checked={filters.colors.includes("white")} />
            <ItemCheckbox
              label={"Yellow"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("colors", "yellow", checked)}
              checked={filters.colors.includes("yellow")} />
          </div>
        </div>
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Gender</h5>
          <div className="[&>*]:p-1 my-2">
            <ItemCheckbox
              label={"Men"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("gender", "men", checked)}
              checked={filters.gender.includes("men")} />
            <ItemCheckbox
              label={"Women"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("gender", "women", checked)}
              checked={filters.gender.includes("women")} />
          </div>
        </div>
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Type</h5>
          <div className="[&>*]:p-1 my-2">
            <ItemCheckbox
              label={"Basic"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("type", "basic", checked)}
              checked={filters.type.includes("basic")} />
            <ItemCheckbox
              label={"Hoodie"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("type", "hoodie", checked)}
              checked={filters.type.includes("hoodie")} />
            <ItemCheckbox
              label={"Polo"}
              onCheckedChange={(checked: boolean) => handleCheckboxChange("type", "polo", checked)}
              checked={filters.type.includes("polo")} />
          </div>
        </div>
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Price</h5>
          <div className="[&>*]:p-1 mt-2 mb-4">
            <Slider
              key={filters.range.join("-")}
              defaultValue={[200, 600]}
              max={600}
              min={200}
              step={50}
              value={filters.range}
              onValueChange={handleRangeChange}
              formatLabel={(value) => `${value} Rs`} />
          </div>
        </div>
        <div className="flex gap-1">
          <Button className="w-full" onClick={applyFilters}>Apply Filters</Button>
          <Button className="w-full" variant={"outline"} onClick={clearFilters}>Clear Filters</Button>
        </div>
      </div>
    </aside>
  )
}

export default Filters;