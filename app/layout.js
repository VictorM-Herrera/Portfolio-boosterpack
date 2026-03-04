
import Script from 'next/script';
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
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <html lang="en">
      <head>
        {isProd && (
          <Script>
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vqlspa7gbz");
          `}
        </Script>
        )}
      </head>
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
