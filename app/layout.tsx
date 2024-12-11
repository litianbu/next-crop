import "./globals.css";
import { Yuji_Mai } from 'next/font/google'
const inter = Yuji_Mai({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
