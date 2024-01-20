import CartButton from "@/components/custom/CartButton";
import { Paths } from "@/routes/paths";
import { render, screen } from "@testing-library/react";

test("renders CartButton component with count", () => {
  render(<CartButton count={3} />);

  const cartButton = screen.getByRole("link", { name: /cart/i });
  const countBadge = screen.getByText("3");

  expect(cartButton).toBeInTheDocument();
  expect(countBadge).toBeInTheDocument();
});

test("clicking on CartButton component navigates to the correct path", () => {
  const { getByRole } = render(<CartButton count={3} />);
  const cartButton = getByRole("link");

  expect(cartButton).toBeInTheDocument();
  expect(cartButton.getAttribute("href")).toEqual(Paths.CART);
});
