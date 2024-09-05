import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Modi Jass | Monetize on X</title>
        <meta
          name="description"
          content="Monetize on X I help you build and scale your brand create better content and sign more clients with my 3-step system in 30 days"
        />
        <meta property="og:url" content="https://www.moayadj.com/" />
        <meta property="og:site_name" content="Modi Jass" />
        <meta property="og:image" content="/src/assets/modipfp.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Modi Jass" />
        <meta
          name="twitter:description"
          content="Monetize on X I help you build and scale your brand create better content and sign more clients with my 3-step system in 30 days"
        />
        <meta
          name="twitter:image"
          content="https://marcelweb.com/assets/img/og.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
