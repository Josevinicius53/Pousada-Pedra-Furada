import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "/workspaces/Pedra-Furada/src/components/Headers.jsx";
describe("Header", () => {
 test("deve renderizar o título da pousada", () => {
render(
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
 expect(screen.getByText("Pousada Pedra Furada")).toBeInTheDocument();
 });
}); 