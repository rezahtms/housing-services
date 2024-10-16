import type { Metadata } from "next";
import "./globals.css";
import cx from 'classnames';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Housing services",
  description: "A housing buying and selling system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(`body,${inter.className}  antialiased  bg-primary-950 text-primary-100 min-h-screen py-4 px-6 capitalize scroll-smooth overflow-x-hidden	`)}
      >
        {children}
      </body>
    </html>
  );
}
