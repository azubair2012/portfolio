import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default layout;
