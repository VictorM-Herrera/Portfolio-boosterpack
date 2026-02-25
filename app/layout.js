
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { LanguageProvider } from './context/LanguageContex';
import { ToastProvider } from './context/ToastContext';
import './global.css';

import { Inter, Space_Grotesk } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Victor M. Herrera | Portfolio Pack",
  description: "Open the pack to reveal my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar/>
          <ToastProvider>
            {children}

          </ToastProvider>
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
