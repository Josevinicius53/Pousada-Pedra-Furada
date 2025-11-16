import { render, screen } from "@testing-library/react";
import Header from "../components/Headers";

describe("Header", () => {
  it("deve renderizar o título da pousada", () => {
    render(<Header />);
    expect(screen.getByText("Pousada Pedra Furada")).toBeInTheDocument();
  });
}); 