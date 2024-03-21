import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Laasyavi's 1st Birthday",
  description: "Happy Birthday Laasyavi!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel={'preload'} href={'/bg-1.svg'} as={'image'} />
        <title>Laasyavi's 1st Birthday</title>
      </head>
      <body className={inter.className}>
        <main className={'min-h-screen'}>
          {children}
        </main>
      </body>
    </html>
  );
}
