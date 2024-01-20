import { Product } from "@/context/reducers";
import { useData } from "@/hooks/context";
import { Paths } from "@/routes/paths";
import { Button } from "@ui/button";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { FC } from "react";

interface ICartProductCard {
  products: Product[];
}

const CartProductCard: FC<ICartProductCard> = ({ products }) => {
  const { dispatch, state, navigateToRoute } = useData();

  return (
    <div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Cart</h3>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 font-bold text-center">
                Details
              </th>
              <th className="border px-4 py-2 font-bold text-center">
                In Stock
              </th>
              <th className="border px-4 py-2 font-bold text-center">
                Quantity
              </th>
              <th className="border px-4 py-2 font-bold text-center">
                Price <span className="text-sm text-muted-foreground font-light">(INR)</span>
              </th>
              <th className="border px-4 py-2 font-bold text-center">
                Total Price <span className="text-sm text-muted-foreground font-light">(Price x Quantity)</span>
              </th>
              <th className="border px-4 py-2 font-bold text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="m-0 border-t p-0">
                <td className="border px-4 py-2 text-right">
                  <img src={product.imageURL} alt={product.name} height={100} width={100} className="bg-cover h-auto mx-auto" />
                  <p className="text-center text-sm text-muted-foreground mt-1">{product.name}</p>
                </td>
                <td className="border px-4 py-2 text-center">
                  {state.products.find((p) => p.id === product.id)?.quantity}
                </td>
                <td className="border px-4 py-2 text-center">
                  {product.quantity}
                </td>
                <td className="border px-4 py-2 text-center">
                  {product.price}
                </td>
                <td className="border px-4 py-2 text-center">
                  {product.quantity * product.price}
                </td>
                <td className="border px-4 py-2 text-center">
                  <div className="flex gap-2 justify-center">
                    <Button
                      size="icon"
                      title="Add One"
                      onClick={() => dispatch({ type: "increase_quantity", payload: product.id })}
                    >
                      <PlusCircle size={20} />
                    </Button>
                    <Button
                      size="icon"
                      title="Remove One"
                      disabled={product.quantity === 1}
                      onClick={() => dispatch({ type: "decrease_quantity", payload: product.id })}
                    >
                      <MinusCircle size={20} />
                    </Button>
                    <Button
                      size="icon"
                      title="Delete from Cart"
                      variant="destructive"
                      onClick={() => dispatch({ type: "remove_from_cart", payload: product.id })}
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="border px-4 py-2 font-bold text-center">
                <h4 className="scroll-m-20 text-xl tracking-tight">Total Amount</h4>
              </td>
              <td colSpan={4} className="border px-4 py-2 font-bold text-center">
                <h4 className="scroll-m-20 text-xl tracking-tight">
                  {products.reduce((amount, product) => amount + product.quantity * product.price, 0)} Rs
                </h4>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-end gap-2">
        <Button onClick={() => navigateToRoute(Paths.LANDING)} variant={"outline"}>Explore More</Button>
        <Button>Complete Purchase 🎉</Button>
      </div>
    </div>
  );
};

export default CartProductCard;
