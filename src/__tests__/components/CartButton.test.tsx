import CartButton from "@/components/custom/CartButton";
import { Paths } from "@/routes/paths";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders CartButton component with count", () => {
  render(<BrowserRouter><CartButton count={3} /></BrowserRouter>);


  const cartButton = screen.getByRole("link");
  const countBadge = screen.getByText("3");

  expect(cartButton).toBeInTheDocument();
  expect(countBadge).toBeInTheDocument();
});

test("clicking on CartButton component navigates to the correct path", () => {
  const { getByRole } = render(<BrowserRouter><CartButton count={3} /></BrowserRouter>);
  const cartButton = getByRole("link");

  expect(cartButton).toBeInTheDocument();
  expect(cartButton.getAttribute("href")).toEqual(Paths.CART);
});
