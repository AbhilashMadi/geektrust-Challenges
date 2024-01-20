import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";
import { buttonVariants } from "@ui/button";
import { Menu } from "lucide-react";
import { lazy, useState } from "react";

const Filters = lazy(() => import("@/components/common/Filters"));

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleDrawer = (): void => {
    setOpen(!open);
  }

  return (<Drawer open={open}>
    <DrawerTrigger className={buttonVariants({ variant: "default", size: "icon" })} onClick={handleDrawer}>
      <Menu />
    </DrawerTrigger>
    <DrawerContent>
      <div className="block md:hidden">
        <Filters handleDrawer={handleDrawer} />
      </div>
    </DrawerContent>
  </Drawer>);
}

export default MobileMenu;