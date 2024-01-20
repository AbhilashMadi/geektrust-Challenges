import ItemCheckbox from "@/components/custom/ItemCheckBox";
import { type FiltersState } from "@/context/AppContext";
import { useData } from "@/hooks/context";
import { Button } from "@ui/button";
import { Slider } from "@ui/slider";
import { FC } from "react";
import { toast } from "sonner";

interface IFilters {
  handleDrawer?: () => void;
}

const Filters: FC<IFilters> = (props) => {
  const {
    handleDrawer = () => null } = props;
  const { state, dispatch, filters, setFilters } = useData();

  const handleCheckboxChange = (category: keyof FiltersState, value: string, checked: boolean) => {
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
    }));
  }

  const clearFilters = (): void => {
    setFilters({
      colors: [],
      gender: [],
      type: [],
      range: [200, 600],
    });
    dispatch({ type: "filter_products", payload: state.products });
    handleDrawer();
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
    handleDrawer();

    toast("Applied Filters For: ", {
      description: (
        <div className="space-x-1">
          {!!filters.colors.length && (
            <p>Colors: {filters.colors.map((str) => <b className="capitalize" key={str}>{str}, </b>)}</p>
          )}
          {!!filters.gender.length && (
            <p>Gender: {filters.gender.map((str) => <b className="capitalize" key={str}>{str}, </b>)}</p>
          )}
          {!!filters.type.length && (
            <p>Type: {filters.type.map((str) => <b className="capitalize" key={str}>{str}, </b>)}</p>
          )}
          <p>Price Range: {filters.range.join("-")} INR</p>
        </div>
      ),
      className: "font-primary"
    })
  }

  const renderCheckboxItems = (category: keyof FiltersState, items: string[]) => (
    <div className="[&>*]:p-1 my-2">
      {items.map((item) => (
        <ItemCheckbox
          key={item}
          label={item}
          onCheckedChange={(checked: boolean) => handleCheckboxChange(category, item.toLowerCase(), checked)}
          checked={filters[category].includes(item.toLowerCase() as never)}
          aria-label={`${category} ${item}`}
        />
      ))}
    </div>
  );


  return (
    <aside className="md:w-80 p-8 md:pt-0 sticky top-16">
      <div className="sticky top-16 space-y-2">
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Colors</h5>
          {renderCheckboxItems("colors", [...new Set(state.products.map(p => p.color))].sort())}
        </div>
        <div className="flex justify-between gap-2">
          <div className="[&>*]:px-4 border rounded flex-grow">
            <h5 className="font-medium border-b bg-muted p-2">Gender</h5>
            {renderCheckboxItems("gender", [...new Set(state.products.map(p => p.gender))].sort())}
          </div>
          <div className="[&>*]:px-4 border rounded flex-grow">
            <h5 className="font-medium border-b bg-muted p-2">Type</h5>
            {renderCheckboxItems("type", [...new Set(state.products.map(p => p.type))].sort())}
          </div>
        </div>
        <div className="[&>*]:px-4 border rounded col-span-2">
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
              formatLabel={(value) => `${value} Rs`}
              aria-label="Price Range"
            />
          </div>
        </div>
        <div className="flex gap-1">
          <Button className="w-full" onClick={applyFilters} aria-label="Apply Filters">Apply Filters</Button>
          <Button className="w-full" variant="outline" onClick={clearFilters} aria-label="Clear Filters">Clear Filters</Button>
        </div>
      </div>
    </aside>
  )
}

export default Filters;
