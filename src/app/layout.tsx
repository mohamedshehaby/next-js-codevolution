import React from "react";
import "./styles.css";

export const metadata = {
  title: "Next JS App Router",
  description: "A Next JS App Router example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body>
        <header
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "2rem",
          }}
        >
          Page Header
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "lightblue",
            color: "white",
            padding: "2rem",
          }}
        >
          Page Footer
        </footer>
      </body>
    </html>
  );
}
