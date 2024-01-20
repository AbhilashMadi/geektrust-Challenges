import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@/components/common/Navbar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => ([
    { search: "" },
    { set: jest.fn(), replace: jest.fn() },
  ]),
}));

describe("Navbar Component", () => {
  it("renders the Navbar with the correct logo text and navigation links", () => {
    render(<Router><Navbar /></Router>);

    // Select the logo text using data-testid
    const logoElement = screen.getByTestId("logo-text");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.textContent).toBe("TeeRex Store");

    // The rest of your test...
  });

  it("search box placeholder text should start with \"Search\"", () => {
    render(<Router><Navbar /></Router>);

    // Select the search input using data-testid
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toHaveAttribute("placeholder", expect.stringMatching(/^Search/));
  });

  it("search icon/button should have class \"search-button-container\" or trigger search on ENTER", async () => {
    render(<Router><Navbar /></Router>);

    // Select the search button using data-testid
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toHaveClass("search-button-container");

    // The rest of your test...
  });

  // Add more test cases as needed...

});
