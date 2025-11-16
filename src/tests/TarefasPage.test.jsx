import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../pages/TarefasPage";

describe("TarefasPage.jsx — Gerenciamento das tarefas diárias", () => {
  it("deve atualizar o status da tarefa ao clicar no botão", () => {
    render(<TarefasPage />);
    const botoes = screen.getAllByRole("button", { name: /atualizar/i });
    fireEvent.click(botoes[0]);
    expect(screen.getByText("Em andamento")).toBeInTheDocument();
  });
});