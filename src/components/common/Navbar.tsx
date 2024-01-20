import { useData } from "@/hooks/context";
import { Paths } from "@/routes/paths";
import { Badge } from "@ui/badge";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { ChangeEvent, FC, KeyboardEvent, lazy, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const ModeToggle = lazy(() => import("@/components/custom/ModToggle"));
const CartButton = lazy(() => import("@/components/custom/CartButton"));
const MobileMenu = lazy(() => import("@/components/custom/MobileMenu"));

const Navbar: FC = () => {
  const { navigateToRoute, state, dispatch } = useData();
  const [searchParams, setSearchParams] = useSearchParams({
    search: ""
  });
  const inputRef = useRef<HTMLInputElement>(null);

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

  const isInputInFocus = (): boolean => {
    return inputRef.current === document.activeElement;
  }

  const handleSearchOnPressEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (isInputInFocus() && e.key === "Enter") {
      handleSearch();
    }
  }

  /**
   * @description
   * Here we can impliment the sharing of the search url work across the different browsers by taking the existing params from the
   * current shared url and applying custom filters and showing the filtered products to user on intial load
   */

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter] border-b border-border/40">
      <div className="container h-14 max-w-screen-2xl flex items-center justify-between bg-muted">
        {/* Logo/Brand */}
        <h2 className="font-bold text-lg cursor-pointer" onClick={() => navigateToRoute(Paths.LANDING)}>
          TeeRex Store
        </h2>
        {/* Navigation */}
        <nav className="items-center gap-4 hidden md:flex">
          {/* Search */}
          <div className="flex items-center gap-1">
            <Input
              placeholder="Search products"
              value={searchParams.get("search") || ""}
              onChange={onSearchInputChange}
              ref={inputRef}
              onKeyDown={handleSearchOnPressEnter}
            />
            <Button
              size="sm"
              onClick={handleSearch}
              className="search-button-container"
            >
              Search<Badge className="bg-muted/20 rounded ml-1">&#9166;</Badge>
            </Button>
          </div>
          {/* Dark/Light Mode Toggle */}
          <ModeToggle />
          {/* Cart Link */}
          <CartButton count={state.cart.length} />
        </nav>
        <div className="flex gap-2 md:hidden">
          <ModeToggle />
          <CartButton count={state.cart.length} />
          <MobileMenu />
        </div>
      </div>
    </header >
  );
};

export default Navbar;
