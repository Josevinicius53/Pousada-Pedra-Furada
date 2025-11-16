import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("../pages/LoginPage", () => () => <div>Login Mock</div>);
jest.mock("../pages/TarefasPage", () => () => <div>Tarefas Mock</div>);
jest.mock("../pages/RelatoriosPage", () => () => <div>Relatórios Mock</div>);

describe("App — Páginas principais", () => {
  it("deve renderizar a aplicação", () => {
    render(<App />);
    expect(screen.getByText("Login Mock")).toBeInTheDocument();
  });
});