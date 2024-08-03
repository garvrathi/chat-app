import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student-Expert Chat",
  description: "Chat with experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[url("/images/bg.jpg")] min-h-screen bg-cover bg-no-repeat bg-black'>
        {children}
      </body>
    </html>
  );
}
