import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.moayadj.com"),
  title: "Modi Jass | Monetize on X",
  description:
    "Monetize on X I help you build and scale your brand create better content and sign more clients with my 3-step system in 30 days",
  openGraph: {
    title: "Modi Jass",
    description:
      "Monetize on X I help you build and scale your brand create better content and sign more clients with my 3-step system in 30 days",
    url: "https://www.moayadj.com",
    siteName: "Modi Jass",
    images: [
      {
        url: "/public/modi.png",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
