import { Metadata } from "next";
import "../styles/global.scss";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";

const font = localFont({
  src: [
    {
      path: "../fonts/TTNorms-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TTNorms-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TTNorms-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/TTNorms-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <div className="wrapper">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
