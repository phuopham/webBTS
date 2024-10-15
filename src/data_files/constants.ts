import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Brilliant Techno Service",
  tagline: "Your Trusted Partner for Cutting-Edge Engineering Solutions",
  description: "Brilliant Techno Service stand at the forefront of the industry, specializing in the delivery of innovative and sustainable engineering solutions. Our core focus lies in providing top-notch IT infrastructure management services, tailored to meet the diverse needs of a wide range of industries",
  description_short: "Brilliant Techno Service lead the industry with innovative, sustainable engineering solutions and top-notch IT infrastructure management, tailored for diverse industries.",
  url: "https://btsserv.net/",
  author: "phuopham",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://btsserv.net/",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: IT service management`,
  description: "Brilliant Techno Service stand at the forefront of the industry, specializing in the delivery of innovative and sustainable engineering solutions. Our core focus lies in providing top-notch IT infrastructure management services, tailored to meet the diverse needs of a wide range of industries",
  image: ogImageSrc,
};
