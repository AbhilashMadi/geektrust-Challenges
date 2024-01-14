import { ShoppingBag } from "lucide-react";
import { FC } from "react";
import { Button } from "@ui/button";
import { useData } from "@/hooks/context";
import { Paths } from "@/routes/paths";

interface ICart {
  count: number;
}

const Cart: FC<ICart> = ({ count }) => {
  const { navigateToRoute } = useData();

  return <Button className="relative" onClick={() => navigateToRoute(Paths.CART)}>
    <ShoppingBag />
    <span className="ml-1"> Cart</span>
    <span className="absolute top-[0.3rem] left-[2rem] bg-red-500 h-4 w-4 p-[1px] rounded-full text-xs flex-center">{count}</span>
  </Button>
}

export default Cart;