import Footer from "@/components/common/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  it("should render a footer component with the current year and a link to the source code on GitHub", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    const linkElement = screen.getByRole("link", { name: /Source Code: GitHub/i });

    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(`© ${new Date().getFullYear()} TeeRex Store`);
    expect(footerElement).toHaveTextContent("Source Code: GitHub ↗");
    expect(linkElement).toHaveAttribute("href", "https://github.com/AbhilashMadi/geektrust-Challenges.git");
  });
});
