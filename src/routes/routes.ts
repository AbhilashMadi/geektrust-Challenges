import { Paths } from "@/routes/paths";
import { FC, LazyExoticComponent, lazy } from "react";

type RouteObject = {
  element: LazyExoticComponent<FC>,
  path: Paths,
}

export const routes: readonly RouteObject[] = [
  {
    element: lazy(() => import("@/pages/Landing")),
    path: Paths.LANDING,
  },
  {
    element: lazy(() => import("@/pages/Cart")),
    path: Paths.CART,
  },
  {
    element: lazy(() => import("@/pages/handlers/NotFound")),
    path: Paths.NOT_FOUND,
  }
]