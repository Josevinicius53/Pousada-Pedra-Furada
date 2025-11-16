import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";

jest.mock("../components/Layout", () => ({ children }) => <div>{children}</div>);

describe("LoginPage.jsx — Autenticação de usuário", () => {
  it("deve exibir erro se usuário estiver vazio", () => {
    render(<LoginPage />);
    const botao = screen.getByRole("button", { name: /entrar/i });
    fireEvent.click(botao);
    expect(screen.getByText(/preencha o usuário/i)).toBeInTheDocument();
  });

  it("deve exibir erro se senha for menor que 3 caracteres", () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByPlaceholderText("Digite seu usuário"), {
      target: { value: "usuario" },
    });
    fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
      target: { value: "ab" },
    });
    const botao = screen.getByRole("button", { name: /entrar/i });
    fireEvent.click(botao);
    expect(screen.getByText(/mínimo 3 caracteres/i)).toBeInTheDocument();
  });
}); 