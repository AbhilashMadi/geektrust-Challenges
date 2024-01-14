import { Product } from "@/context/reducers";
import { FC } from "react";

interface ICartProductCard {
  product: Product;
}

const CartProductCard: FC<ICartProductCard> = (props) => {
  const { product } = props;

  return <div>
    <p>{product.name}</p>
  </div>
}

export default CartProductCard;