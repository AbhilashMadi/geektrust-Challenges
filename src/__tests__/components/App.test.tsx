import App from "@/App";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders App without errors", () => {

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // If the test reaches this point without throwing an error,
  // it means that the App component rendered without any issues.
  // You can add more specific assertions based on your component structure.
});
