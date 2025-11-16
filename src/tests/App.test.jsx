import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

// Mock dos componentes para isolar testes
jest.mock("../components/Layout", () => ({ children }) => (
  <div data-testid="layout">{children}</div>
));

jest.mock("../pages/LoginPage", () => () => <div>Login Page Mock</div>);
jest.mock("../pages/TarefasPage", () => () => <div>Tarefas Page Mock</div>);
jest.mock("../pages/RelatoriosPage", () => () => <div>Relatórios Page Mock</div>);

describe("App.jsx — Roteamento principal da SPA", () => {
  it("deve renderizar o componente App", () => {
    render(<App />);
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });
}); 