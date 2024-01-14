import { useData } from "@/hooks/context";
import { FC, lazy } from "react";

const CartProductCard = lazy(() => import("@/components/custom/CartProductCard"));

const Cart: FC = () => {
  const { state } = useData();

  return (
    <div>
      <section>
        {state.cart.map((product) => {
          return <CartProductCard product={product} />
        })}
      </section>
    </div>
  )
}

export default Cart;