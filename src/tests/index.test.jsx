import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "/workspaces/Pedra-Furada/src/tests/App.jsx";
jest.mock("../pages/LoginPage", () => () => <div>Login Mock</div>);
jest.mock("../pages/TarefasPage", () => () => <div>Tarefas Mock</div>);
jest.mock("../pages/RelatoriosPage", () => () => <div>Relatórios Mock</div>);
test("deve renderizar a página de login por padrão", () => {
 render(
 <MemoryRouter initialEntries={["/"]}>
 <App />
 </MemoryRouter>
 );
 expect(screen.getByText("Login Mock")).toBeInTheDocument();
});
test("deve renderizar a página de tarefas ao navegar para /tarefas", () => {
 render(
 <MemoryRouter initialEntries={["/tarefas"]}>
 <App />
 </MemoryRouter>
 );
 expect(screen.getByText("Tarefas Mock")).toBeInTheDocument();
});