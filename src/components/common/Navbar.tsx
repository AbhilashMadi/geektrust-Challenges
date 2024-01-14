import { useData } from "@/hooks/context";
import { Paths } from "@/routes/paths";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { FC, lazy } from "react";
import { Link } from "react-router-dom";

const ModeToggle = lazy(() => import("@/components/custom/ModToggle"));
const Cart = lazy(() => import("@/components/custom/Cart"));

const Navbar: FC = () => {
  const { navigateToRoute, state } = useData();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 max-w-screen-2xl flex items-center bg-muted justify-between">
        <h2 className="font-bold text-lg" onClick={() => navigateToRoute(Paths.LANDING)} role="button">TeeRex Store</h2>
        <nav className="flex gap-4 items-center">
          <div className="flex items-center gap-1">
            <Input placeholder="Search products" />
            <Button size={"sm"}>Search</Button>
          </div>
          <ModeToggle />
          <Link to={Paths.CART}>
            <Cart count={state.cart.length} />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar