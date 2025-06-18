import React from "react";
import Header from "./header";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />

      {children}

      <Footer />
    </main>
  );
}
