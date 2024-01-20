import { cn } from "@/lib/utils";
import { Paths } from "@/routes/paths";
import { buttonVariants } from "@ui/button";
import { ShoppingBag } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ICartButton {
  count: number;
}

const CartButton: FC<ICartButton> = ({ count }) => {

  return <Link className={cn("relative", buttonVariants({ variant: "default" }))} to={Paths.CART}>
    <ShoppingBag />
    <span className="ml-1"> Cart</span>
    <span className="absolute top-[0.3rem] left-[2rem] bg-red-500 h-4 w-4 p-[1px] rounded-full text-xs flex-center">{count}</span>
  </Link>
}

export default CartButton;