import ItemCheckbox from "@/components/custom/ItemCheckBox";
import { Button } from "@ui/button";
import { Slider } from "@ui/slider";
import { FC, useState } from "react";
import { toast } from "sonner";

const Filters: FC = () => {
  const [range, setRange] = useState<[number, number]>([200, 400]);

  const handleRangeChange = (value: [number, number]) => {
    setRange(value);
  };

  return (
    <aside className="w-80">
      {/* <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            className: "font-primary"
          })
        }
      >
        Show Toast
      </Button> */}
      <div className="sticky top-16 space-y-2">
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Colors</h5>
          <div className="[&>*]:p-1 my-2">
            <ItemCheckbox label={"Pink"} />
            <ItemCheckbox label={"Blue"} />
            <ItemCheckbox label={"Green"} />
            <ItemCheckbox label={"Black"} />
            <ItemCheckbox label={"Purple"} />
            <ItemCheckbox label={"Red"} />
            <ItemCheckbox label={"Grey"} />
            <ItemCheckbox label={"White"} />
            <ItemCheckbox label={"Yellow"} />
          </div>
        </div>
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Gender</h5>
          <div className="[&>*]:p-1 my-2">
            <ItemCheckbox label={"Men"} />
            <ItemCheckbox label={"Women"} />
          </div>
        </div>
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Type</h5>
          <div className="[&>*]:p-1 my-2">
            <ItemCheckbox label={"Basic"} />
            <ItemCheckbox label={"Hoodie"} />
            <ItemCheckbox label={"Polo"} />
          </div>
        </div>
        <div className="[&>*]:px-4 border rounded">
          <h5 className="font-medium border-b bg-muted p-2">Price</h5>
          <div className="[&>*]:p-1 mt-2 mb-4">
            <Slider
              defaultValue={[200, 400]}
              max={600}
              min={200}
              step={50}
              value={range}
              onValueChange={handleRangeChange}
              formatLabel={(value) => `${value} Rs`} />
          </div>
        </div>
        <div className="flex gap-1">
          <Button className="w-full">Apply Filters</Button>
          <Button className="w-full">Clear Filters</Button>
        </div>
      </div>
    </aside>
  )
}

export default Filters;