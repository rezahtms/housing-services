import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import cx from 'classnames';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={cx(`body,${geistSans.variable} ${geistMono.variable}  antialiased  bg-primary-950 text-primary-100 min-h-screen py-4 px-6 capitalize scroll-smooth overflow-x-hidden	`)}
      >
        {children}
      </body>
    </html>
  );
}
