import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/common/Footer";


test("Footer component renders correctly", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  expect(screen.getByText(/TeeRex Store/i)).toBeInTheDocument();

  const githubLink = screen.getByLabelText(/GitHub Repository/);
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/AbhilashMadi/geektrust-Challenges.git");
  expect(githubLink).toHaveAttribute("target", "_blank");
  expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
});
