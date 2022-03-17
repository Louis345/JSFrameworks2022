import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
describe("Welcome component", () => {
  test("If name is provided, the component should render Hello", () => {
    render(<Welcome name="Jamal" />);
    expect(screen.getByText("Hello, Jamal")).toBeInTheDocument();
  });
  test("If name is not provided, the component should render Hello user", () => {
    render(<Welcome />);
    expect(screen.getByText("Hello, user")).toBeInTheDocument();
  });
});
