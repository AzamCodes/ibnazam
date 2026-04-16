export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Azam Shaikh",
    "jobTitle": "Full Stack Developer",
    "url": "https://azamshaikh.com",
    "sameAs": [
      // Add social links here if available
    ],
    "knowsAbout": ["Next.js", "MERN Stack", "Web Development", "Frontend Development", "Backend Development", "UI/UX Design"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Azam Shaikh | Full Stack Developer",
    "url": "https://azamshaikh.com"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
