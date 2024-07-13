import { Quicksand } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Simple UI Page",
  description: "Simple UI Page",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={quickSand.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
