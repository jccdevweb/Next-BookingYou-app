import { Roboto } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Booking App",
  description: "Happy Vacation",
};
const font = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
