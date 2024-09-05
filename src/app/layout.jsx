import "./globals.css";
import Head from "next/head";
export const metadata = {
  title: "Modi Jass | Monetize on X",
  description:
    "Monetize on X I help you build and scale your brand create better content and sign more clients with my 3-step system in 30 days",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Modi Jass | Monetize on X</title>
        <meta
          name="description"
          content="Monetize on X I help you build and scale your brand create better content and sign more clients with my 3-step system in 30 days"
          key="desc"
        />
        <meta property="og:title" content="Modi Jass | Monetize on X" />
        <meta
          property="og:description"
          content="Monetize on X I help you build and scale your brand create better content and sign more clients with my 3-step system in 30 days"
        />
        <meta property="og:image" content="/src/assets/hero/modipfp.webp" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
