import React from "react";
import Link from "next/link";
import styles from "./Headers.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Pousada Pedra Furada</h1>
      <nav className={styles.nav}>
        <Link href="/LoginPage" className={styles.link}>Login</Link>
        <Link href="/TarefasPage" className={styles.link}>Tarefas</Link>
        <Link href="/RelatoriosPage" className={styles.link}>Relatórios</Link>
      </nav>
    </header>
  );
}