import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/menu/Navbar";
import Bar from "@/components/menu/Bar";
import Footer from "@/components/Footer";
import WspButton from "@/components/button/WspButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Website",
  description: "Tienda de productos y servicios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Bar />
        <Navbar />
        {children}
        <WspButton />
        <Footer />
      </body>
    </html>
  );
}
