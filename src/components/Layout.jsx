import React from "react";
import Header from "./Headers.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
 return (
 <div className="layout">
 <Header />
 <main style={{ padding: "1rem" }}>
 {children}
 </main>
 <Footer />
 </div>
 );
} 