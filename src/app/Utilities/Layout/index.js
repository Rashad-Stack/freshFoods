import React from "react";
import { Footer, Header } from "../../Home";

function Layout({ children }) {
  return (
    <div className="w-screen h-auto flex flex-col bg-secondary">
      <Header />
      <main className="mt-16 md:mt-24 px-4 md:px-16 py-4 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
