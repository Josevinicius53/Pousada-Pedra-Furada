import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "/workspaces/Pedra-Furada/src/components/Layout.jsx";
import LoginPage from "/workspaces/Pedra-Furada/src/pages/LoginPage.jsx";
import TarefasPage from "/workspaces/Pedra-Furada/src/pages/TarefasPage.jsx";
import RelatoriosPage from "/workspaces/Pedra-Furada/src/pages/RelatoriosPage.jsx";
export default function App() {
 return (
 <Layout>
 <Routes>
 <Route path="/" element={<Navigate to="/login" />} />
 <Route path="/login" element={<LoginPage />} />
 <Route path="/tarefas" element={<TarefasPage />} />
 <Route path="/relatorios" element={<RelatoriosPage />} />
 <Route path="*" element={<h2>Página não encontrada</h2>} />
 </Routes>
 </Layout>
 );
}
