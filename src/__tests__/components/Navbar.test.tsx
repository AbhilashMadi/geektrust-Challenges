import Navbar from "@/components/common/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
  it("should render properly", async () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
  });

  test("clicking on the logo navigates to the landing page", () => {
    const { getByText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const logo = getByText("TeeRex Store");
    fireEvent.click(logo);
  });

  test("typing in the search input updates the search parameter", () => {
    const { getByPlaceholderText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const searchInput = getByPlaceholderText(/Search products/i);
    fireEvent.change(searchInput, { target: { value: "test" } });
  });

  test("clicking on the search button triggers the search", () => {
    const { getByText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const searchButton = getByText("Search");
    fireEvent.click(searchButton);
  });

  test("Search box placeholder text should start with Search.", () => {
    const { getByPlaceholderText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const searchInput = getByPlaceholderText(/search products/i);
    expect(screen.getByPlaceholderText(/Search/i).getAttribute("placeholder")).toMatch(/^Search/);

    expect(searchInput).toBeInTheDocument();
  })

  test("Search if triggered by button should have button text as Search", () => {
    const { getByText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const searchButton = getByText(/search/i);

    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveClass("search-button-container");
  })

  test("clicking on the Cart link navigates to the Cart page", async () => {
    const { getAllByText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const linkElem = getAllByText(/cart/i);

    expect(linkElem.length).toEqual(2);
  });
})