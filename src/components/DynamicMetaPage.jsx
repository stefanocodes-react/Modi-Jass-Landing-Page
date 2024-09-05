import { Helmet } from "react-helmet-async";

function DynamicMetaPage() {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Modi Jass" />
      <meta
        name="twitter:description"
        content="Monetize on X I help you build and scale your brand Create
    better content and sign more clients with my 3-step system in 30 days"
      />
      <meta
        name="twitter:image"
        content="https://https://www.moayadj.com/src/assets/modipfp3.png"
      />
    </Helmet>
  );
}
export default DynamicMetaPage;
