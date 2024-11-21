
import "./globals.css";
import Nav from "./components/nav";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>DJ Sharlot</title>
        <meta name="description" content="Official portfolio website of DJ Sharlot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
