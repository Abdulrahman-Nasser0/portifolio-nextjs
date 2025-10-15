import "./globals.css";
import LenisProvider from './_hooks/use-lenis';
import { Header } from "./_components/ui/header";



export const metadata = {
  title: "Abdulrahman Nasser - Portfolio",
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio showcasing innovative web applications, UI/UX designs, and creative solutions. Computer Science student with a passion for clean code and exceptional user experiences.",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
      >
        <LenisProvider />
        <Header />
        {children}
      </body>
    </html>
  );
}
