import CartProductCard from "@/components/custom/CartProductCard"; // Adjust the path accordingly
import { Product } from "@/context/reducers";
import { useData } from "@/hooks/context";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("@/hooks/context", () => ({
  useData: jest.fn(),
}));

const mockDispatch = jest.fn();
const mockNavigateToRoute = jest.fn();

const sampleProducts: Product[] = [
  {
    "id": 1,
    "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
    "name": "Black Polo",
    "type": "Polo",
    "price": 250,
    "currency": "INR",
    "color": "Black",
    "gender": "Men",
    "quantity": 3
  },
];

describe("CartProductsCard Table Component", () => {
  beforeEach(() => {
    (useData as jest.Mock).mockReturnValue({
      dispatch: mockDispatch,
      state: { products: sampleProducts },
      navigateToRoute: mockNavigateToRoute,
    });
  });

  it("should render the component properly", () => {
    render(<CartProductCard products={sampleProducts} />);

    // Check for elements that should be present in a properly rendered component
    const imageElement = screen.getByAltText("Black Polo");
    const productNameElement = screen.getByText("Black Polo");
    const inStockElement = screen.getByText(/In Stock/i);
    const quantityElement = screen.getByTestId("quantity");
    const priceElement = screen.getByTestId("price");
    const totalPriceElement = screen.getByTestId("price-x-quantity");
    const actionsElement = screen.getByText("Actions");

    // Assertions for each element
    expect(imageElement).toBeInTheDocument();
    expect(productNameElement).toBeInTheDocument();
    expect(inStockElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(totalPriceElement).toBeInTheDocument();
    expect(actionsElement).toBeInTheDocument();
  });

  it("should handle button clicks properly", () => {
    render(<CartProductCard products={sampleProducts} />);

    const addOneButtons = screen.getAllByTitle(/Add One/i);
    fireEvent.click(addOneButtons[0]);

    const removeOneButtons = screen.getAllByTitle(/Remove One/i);
    fireEvent.click(removeOneButtons[0]);

    const deleteButtons = screen.getAllByTitle(/Delete from Cart/i);
    fireEvent.click(deleteButtons[0]);

    // Assert that the mock dispatch function was called with the expected payload
    expect(mockDispatch).toHaveBeenCalledWith({ type: "increase_quantity", payload: 1 });
    expect(mockDispatch).toHaveBeenCalledWith({ type: "decrease_quantity", payload: 1 });
    expect(mockDispatch).toHaveBeenCalledWith({ type: "remove_from_cart", payload: 1 });
  });

  it("should render the component properly with correct total amount", () => {
    render(<CartProductCard products={sampleProducts} />);
    const totalAmountElement = screen.getByTestId("total-amount");
    const expectedTotalAmount = sampleProducts.reduce((amount, product) => amount + product.quantity * product.price, 0);
    const formattedExpectedTotalAmount = `${expectedTotalAmount} Rs`;

    expect(totalAmountElement).toBeInTheDocument();
    expect(totalAmountElement).toHaveTextContent(formattedExpectedTotalAmount);
  });


});
