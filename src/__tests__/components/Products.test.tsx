import Landing from "@/pages/Landing";
import { render } from "@testing-library/react";

describe("Landing page", () => {
  it("should render the page", () => {
    render(<Landing />);
  });
});