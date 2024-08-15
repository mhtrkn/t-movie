import 'server-only';

import { Poppins } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from '../views/providers';
import Header from '@/views/header';
import Footer from '@/views/footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
