import React from "react";
import Link from "next/link";

export default function Header() {
 return (
 <header
 style={{
 background: "#234",
 color: "#fff",
 padding: "1rem",
 display: "flex",
 justifyContent: "space-between",
 }}
 >
 <h1>Pousada Pedra Furada</h1>
 <nav>
 <Link href="/LoginPage" style={{ color: "#fff", marginRight: "1rem" }}>Login</Link>
 <Link href="/TarefasPage" style={{ color: "#fff", marginRight: "1rem" }}>Tarefas</Link>
 <Link href="/RelatoriosPage" style={{ color: "#fff" }}>Relatórios</Link>
 </nav>
 </header>
 );
}