import { cn } from "@/lib/utils";
import { Paths } from "@/routes/paths";
import { buttonVariants } from "@ui/button";
import { ShoppingBag } from "lucide-react";
import { FC } from "react";

interface ICartButton {
  count: number;
}

const CartButton: FC<ICartButton> = ({ count }) => {

  return <a className={cn("relative", buttonVariants({ variant: "default" }))} href={Paths.CART}>
    <ShoppingBag />
    <span className="ml-1"> Cart</span>
    <span className="absolute top-[0.3rem] left-[2rem] bg-red-500 h-4 w-4 p-[1px] rounded-full text-xs flex-center">{count}</span>
  </a>
}

export default CartButton;