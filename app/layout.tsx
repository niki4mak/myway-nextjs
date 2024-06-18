import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import cx from "classnames";
import {inter, julius, montserrat} from "./fonts";
import Nav from "@/components/layout/nav";
import {Suspense} from "react";

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
    <body className={cx(inter.variable, julius.variable, montserrat.variable, "text-c-text-light z-1")}>
    <Suspense fallback="...">
      <Nav/>
    </Suspense>
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-c-bg-1">
      {children}
    </main>
    {/*<Footer />*/}
    <Analytics/>
    </body>
    </html>
  );
}
