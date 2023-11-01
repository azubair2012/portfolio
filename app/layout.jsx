import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Studio Zubair",
  description:
    "Passionate web developer creating responsive, user-friendly websites with expertise in HTML, CSS and JavaScript with react.",
};

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
