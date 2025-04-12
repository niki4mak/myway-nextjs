import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { inter, julius, montserrat, manrope } from "./fonts";
import Nav from "@/components/layout/nav";
import { Suspense } from "react";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "MyWay - стандарты высокого качества - то, чем мы руководствуемся",
  description:
    "Правильные стрижки. Мы шли к этому несколько лет, это наша основа.",
  metadataBase: new URL("https://myway-nextjs.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          julius.variable,
          montserrat.variable,
          manrope.variable,
          "text-black z-1"
        )}
      >
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex w-screen flex-col items-center justify-center bg-white pt-0 md:pt-[100px]">
          {children}
        </main>
        
        <Analytics />
      </body>
    </html>
  );
}
