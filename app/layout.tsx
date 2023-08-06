import { Roboto } from "next/font/google";

import "./globals.css";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
