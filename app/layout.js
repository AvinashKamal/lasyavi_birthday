import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Laasyavi's 1st Birthday",
  description: "Mark Laasyavi's milestone 1st birthday with us! Share in the joy of this special occasion by sending your warmest wishes and joining the celebrations.",
  keywords: 'Laasyavi, Laasyavi\'s first birthday, first birthday wishes, birthday wishes for baby girl, birthday, Happy Birthday, Happy Birthday Laasyavi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel={'preload'} href={'/bg-1.svg'} as={'image'} />
        <link rel={'preload'} href={'/hero-img.png'} as={'image'} />
        <link rel={'preload'} href={'/AnandaNamaste.ttf'} as={'font'} type={'font/ttf'} />
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
