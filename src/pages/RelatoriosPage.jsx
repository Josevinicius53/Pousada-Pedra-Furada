// src/pages/RelatoriosPage.jsx
import React from "react";
import Layout from "../components/Layout";

export default function RelatoriosPage() {
 const { total, concluidas, emAndamento, pendentes } = {
 total: 10,
 concluidas: 6,
 emAndamento: 3,
 pendentes: 1,
 };

 return (
 <Layout>
 <section>
 <h2>Relatórios de Desempenho</h2>
 <ul>
 <li>Total de tarefas: {total}</li>
 <li>Concluídas: {concluidas}</li>
 <li>Em andamento: {emAndamento}</li>
 <li>Pendentes: {pendentes}</li>
 </ul>
 </section>
 </Layout>
 );
} 