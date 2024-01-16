import Navbar from "@/components/common/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar Component", () => {

  it("renders navbar component & should have a logo text", () => {
    render(<Navbar />);

    const logoElem = screen.getByText(/teerex store/i);
    expect(logoElem).toBeInTheDocument();
  })
})