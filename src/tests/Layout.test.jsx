import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

// Mock de Header e Footer para isolar o Layout
jest.mock("../components/Headers", () => () => <header>Mock Header</header>);
jest.mock("../components/Footer", () => () => <footer>Mock Footer</footer>);

describe("Layout.jsx — Estrutura principal da aplicação", () => {
  it("deve renderizar Header, conteúdo filho e Footer", () => {
    render(<Layout><p>Conteúdo interno</p></Layout>);
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
  });
}); 