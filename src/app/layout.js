import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "jessicaluong.github.io",
  description: "Jessica Luong Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
