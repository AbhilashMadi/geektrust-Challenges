import { Product } from "@/context/reducers";
import { FC } from "react";
import { Button } from "@ui/button";
import { PlusCircle, MinusCircle, XCircle } from "lucide-react";
import { useData } from "@/hooks/context";

interface ICartProductCard {
  products: Product[];
}

const CartProductCard: FC<ICartProductCard> = (props) => {
  const { products } = props;
  const { dispatch } = useData();

  return <div>
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      Cart
    </h3>
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead className="bg-muted">
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Details
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Quantity
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Price<br />
              <span className="text-sm text-muted-foreground font-light">(INR)</span>
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Total Price<br />
              <span className="text-sm text-muted-foreground font-light">(Price x Quantity)</span>
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <tr className="m-0 border-t p-0" key={product.id}>
              <td className="border px-4 py-2 text-right [&[align=center]]:text-center [&[align=right]]:text-right">
                <img src={product.imageURL} alt={product.name} height={100} width={100} className="bg-cover h-auto mx-auto" />
                <p className="text-center text-sm text-muted-foreground mt-1">{product.name}</p>
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {product.quantity < 10 ? `0${product.quantity}` : product.quantity}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {product.price}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {product.quantity * product.price}
              </td>
              <td className="border px-4 py-2 text-center [&[align=center]]:text-center [&[align=right]]:text-center">
                <div className="flex gap-2 justify-center">
                  <Button
                    size={"icon"}
                    title="Add One"
                    onClick={() => dispatch({ type: "increase_quantity", payload: product.id })}>
                    <PlusCircle size={20} /></Button>
                  <Button
                    size={"icon"}
                    title="Remove One"
                    onClick={() => dispatch({ type: "decrease_quantity", payload: product.id })}
                  >
                    <MinusCircle size={20} /></Button>
                  <Button
                    size={"icon"}
                    title="Delete from Cart"
                    variant={"destructive"}
                    onClick={() => dispatch({ type: "delete_cart_product", payload: product.id })}
                  >
                    <XCircle size={20} /></Button>
                </div>
              </td>
            </tr>
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="border px-4 py-2 text-center [&[align=center]]:text-center [&[align=right]]:text-center" colSpan={4}>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tightss">
                Total Amount
              </h4>
            </td>
            <td className="border px-4 py-2 text-center [&[align=center]]:text-center [&[align=right]]:text-center" colSpan={4}>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {products.reduce((amount, product) => {
                  return amount += product.quantity * product.price
                }, 0)} Rs
              </h4>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div >
}

export default CartProductCard;