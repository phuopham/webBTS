// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/webBTS" },
  { name: "Services", url: "/webBTS/services" },
  { name: "About", url: "/webBTS/about" },
  { name: "Contact", url: "/webBTS/contact" },
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
      { name: "Our Services", url: "webBTS/services" },
      { name: "About us", url: "webBTS/about" },

    ],
  },
];

export default {
  navBarLinks,
  footerLinks,
};