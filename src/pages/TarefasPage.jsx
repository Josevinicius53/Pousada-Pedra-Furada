import React, { useState } from "react";
import Layout from "../components/Layout";

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Arrumar quarto 101", status: "Atribuída" },
    { id: 2, nome: "Lavar pátio", status: "Concluída" },
  ]);

  const statusSequence = {
    "Atribuída": "Em andamento",
    "Em andamento": "Concluída",
    "Concluída": "Concluída",
  };

  const atualizarStatus = (id) => {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, status: statusSequence[tarefa.status] }
          : tarefa
      )
    );
  };

  return (
    <Layout>
      <section>
        <h2>Tarefas do Dia</h2>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              {tarefa.nome} — <strong>{tarefa.status}</strong>{" "}
              <button onClick={() => atualizarStatus(tarefa.id)}>Atualizar</button>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}