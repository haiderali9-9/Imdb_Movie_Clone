import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/header'
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Movie Clone",
  description: "Movie clone app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
