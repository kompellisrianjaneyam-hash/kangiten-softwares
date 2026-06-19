export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kangiten Softwares",
    url: "https://kangitensoftwares.in",
    logo: "https://kangitensoftwares.in/logo.png",
    email: "kangitensoftware@gmail.com",
    telephone: "+918106092063",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}