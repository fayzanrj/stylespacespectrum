import Navbar from "@/components/navbar";
import React from "react";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import { Provider } from "@/context/Provider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <Provider>
          <Navbar />
          <main className="min_height">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
