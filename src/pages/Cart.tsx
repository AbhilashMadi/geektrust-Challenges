import { useData } from "@/hooks/context";
import { FC, lazy } from "react";

const CartProductCard = lazy(() => import("@/components/custom/CartProductCard"));
const EmptyCart = lazy(() => import("@/components/custom/EmptyCart"));

const Cart: FC = () => {
  const { state } = useData();
  const { cart } = state;

  return (
    <div className="flex-center min-h-[75dvh]">
      <div className="w-2/3">
        {!cart.length
          ? <EmptyCart />
          : <CartProductCard products={cart} />}
      </div>
    </div >
  )
}

export default Cart;