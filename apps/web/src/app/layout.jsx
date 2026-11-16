import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  title: "Emiliano Gasco • Full Stack Developer (MERN)",
  description:
    "Desarrollador Full Stack especializado en el stack MERN (MongoDB, Express, React 19, Node.js), Técnico en Computación y Redes y UX/UI Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <body className="bg-canvas text-text-body antialiased selection:bg-accent-lime selection:text-canvas">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
