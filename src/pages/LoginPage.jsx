import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    if (!usuario.trim()) {
      setErro("Por favor, preencha o usuário.");
      setLoading(false);
      return;
    }

    if (senha.length < 3) {
      setErro("Senha deve ter no mínimo 3 caracteres.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      router.push("/TarefasPage");
    }, 1000);
  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1 className={styles.title}>Bem-vindo</h1>
          <p className={styles.subtitle}>Pousada Pedra Furada</p>

          <form onSubmit={handleLogin} className={styles.form}>
            {erro && <div className={styles.error}>{erro}</div>}

            <div className={styles.formGroup}>
              <label htmlFor="usuario" className={styles.label}>
                Usuário ou Email
              </label>
              <input
                id="usuario"
                type="text"
                placeholder="Digite seu usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="senha" className={styles.label}>
                Senha
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p className={styles.footer}>
            Problemas para acessar? <a href="#">Recuperar senha</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
