import { useData } from "@/hooks/context";
import { Paths } from "@/routes/paths";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { ChangeEvent, FC, lazy } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ModeToggle = lazy(() => import("@/components/custom/ModToggle"));
const Cart = lazy(() => import("@/components/custom/Cart"));

const Navbar: FC = () => {
  const { navigateToRoute, state, dispatch } = useData();
  const [searchParams, setSearchParams] = useSearchParams({
    search: ""
  });

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((pre) => {
      pre.set("search", e.target.value);
      return pre;
    }, {
      replace: true
    });
  }

  const handleSearch = (): void => {
    dispatch({
      type: "filter_products",
      payload: state.products.filter((p) => JSON.stringify(p).includes(searchParams.get("search") || "")),
    })
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter] border-b border-border/40">
      <div className="container h-14 max-w-screen-2xl flex items-center justify-between bg-muted">
        {/* Logo/Brand */}
        <h2 className="font-bold text-lg cursor-pointer" onClick={() => navigateToRoute(Paths.LANDING)}>
          TeeRex Store
        </h2>
        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-1">
            <Input
              placeholder="Search products"
              value={searchParams.get("search")!}
              onChange={onSearchInputChange}
            />
            <Button
              size="sm"
              onClick={handleSearch}
            >Search</Button>
          </div>
          {/* Dark/Light Mode Toggle */}
          <ModeToggle />
          {/* Cart Link */}
          <Link to={Paths.CART}>
            <Cart count={state.cart.length} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
