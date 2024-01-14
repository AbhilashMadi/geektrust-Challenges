import { Button } from "@/components/ui/button";
import { type Product } from "@/context/reducers";
import { lazy, useEffect, type FC } from "react";
import { useData } from "@/hooks/context";
import { cn } from "@/lib/utils";
import { Api } from "@/resources/api";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { ShoppingCart } from "lucide-react";

const Filters = lazy(() => import("@/components/common/Filters"));

const Landing: FC = () => {
  const { dispatch, state } = useData();

  const fetchProducts = async () => {
    const controller = new AbortController();
    try {
      const response = await fetch(Api.GET_PRODUCTS, {
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Products");
      }

      const data = await response.json();
      dispatch({ type: "fetch_products", payload: data });

    } catch (error) {
      console.error(error);
    } finally {
      controller.abort();
    }
  };

  const ProductColor: FC<{ product: Product }> = ({ product }) => {
    const colorsMap: Readonly<Record<string, string>> = {
      pink: "bg-pink-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      black: "bg-black",
      purple: "bg-purple-500",
      red: "bg-red-500",
      grey: "bg-gray-500",
      white: "bg-white",
      yellow: "bg-yellow-500",
    };

    return <div className={cn("h-5 w-5 rounded-full border", colorsMap[product.color.toLowerCase()])} />
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex gap-4 relative">
      <Filters />
      <section className="flex-grow col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.products.map((product) => {
          return <Card key={product.id}>
            <CardHeader>
              <CardTitle>
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img src={product.imageURL}
                alt={product.name}
                decoding="async"
                loading="lazy"
                height={200}
                width={300}
                className="h-52 w-72 object-contain"
              />
              <CardDescription className="grid grid-cols-4 gap-2 mt-2 [&>*]:bg-muted [&>*]:p-1 text-xs [&>*]:rounded [&>*]:flex-center">
                <span className="flex-col">Color:{<ProductColor product={product} />}</span>
                <span>Gender: {product.gender}</span>
                <span>Quantity: {product.quantity}</span>
                <span>Type: {product.type}</span>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => dispatch({
                  type: "add_to_cart",
                  payload: product,
                })}
              >Add To Cart <ShoppingCart className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        })}
      </section>
    </div>
  )
}

export default Landing;