import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import cx from "classnames";
import {inter, julius, montserrat} from "./fonts";
import Nav from "@/components/layout/nav";
import {Suspense} from "react";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
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
        <div className="fixed h-screen w-full from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-c-bg-1">
          {children}
        </main>
        {/*<Footer />*/}
        <Analytics />
      </body>
    </html>
  );
}
