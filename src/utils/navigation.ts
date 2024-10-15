// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "About", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Contact Information",
    links: [
      { name: `Email: sales@btsserv.com`, url: "mailto:sales@btsserv.com" },
      { name: "Phone: +92 302 3738158", url: "tel:+923023738158" },
      { name: "Address: 71-75 Shelton Street Covent Garden London.", url: "#" },
      { name: "Ward no 14B, street no 10 near SoFi Faraz darbar kot addu muzaffargarh Punjab Pakistan", url: "#" },
      { name: "Address: 1209 mountain rd pl ne ste ralbuquerque, NM 87110", url: "#" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/about" },
      { name: "Careers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};