import { useData } from "@/hooks/context";
import { FC, lazy } from "react";

const CartProductCard = lazy(() => import("@/components/custom/CartProductCard"));
const EmptyCart = lazy(() => import("@/components/custom/EmptyCart"));

const Cart: FC = () => {
  const { state } = useData();
  const { cart } = state;

  return (
    <div className="min-h-[75dvh]">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3">Cart</h3>
      <div className="overflow-scroll md:flex-center flex-col">
        {!cart.length
          ? <EmptyCart />
          : <CartProductCard products={cart} />}
      </div>
    </div >
  )
}

export default Cart;