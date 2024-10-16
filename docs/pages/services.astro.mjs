/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DcJSOECO.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Cx73uur-.mjs';
import { $ as $$PrimaryCTA, a as $$HeroSectionAlt } from '../chunks/HeroSectionAlt_D1qw_5MP.mjs';
import { $ as $$MainLayout, S as SITE } from '../chunks/MainLayout_Zaka-4DA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://btsserv.net/");
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/blocks/LeftSection.astro", void 0);

const $$Astro = createAstro("https://btsserv.net/");
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose whitespace-pre-wrap text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8">   ${renderComponent($$result, "Image", $$Image, { "src": imgOne, "alt": imgOneAlt, "class": "w-full rounded-lg", "draggable": "false", "format": "webp", "loading": "eager" })} </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4">  ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "webp" })}  ${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "webp" })} </div>`} </section>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/blocks/RightSection.astro", void 0);

const ccsimg = new Proxy({"src":"/_astro/servicedesk.B_0D_xmk.webp","width":768,"height":432,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/about/servicedesk.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/about/servicedesk.webp");
							return target[name];
						}
					});

const ossimg = new Proxy({"src":"/_astro/OSS (1).BUM3nbQo.webp","width":1367,"height":2048,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/about/OSS (1).webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/about/OSS (1).webp");
							return target[name];
						}
					});

const tssimg = new Proxy({"src":"/_astro/TSS (1).DMqIB1T9.webp","width":250,"height":250,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/about/TSS (1).webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/about/TSS (1).webp");
							return target[name];
						}
					});

const feature = new Proxy({"src":"/_astro/features.Bzcaeswm.webp","width":1536,"height":960,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/about/features.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/about/features.webp");
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Blog | ${SITE.title}`;
  const articles = [
    {
      isRightSection: true,
      title: "Contact Center Services (CCS)",
      subTitle: "Brilliant Techno Services Contact Centre Solutions understand the significance of delivering cost-effective, world-class technical support. From tier-1 handling of simple issues to multi-tier support applications, our seasoned technical experts address complexities. Our 24\xD77 scalable technical support adapts to demand fluctuations, ensuring consistent customer management across different product lines and technologies.",
      single: true,
      imgOne: ccsimg,
      imgOneAlt: "Service Desk supporting client remotely"
    },
    {
      isRightSection: false,
      title: "On-Site Support Services (OSS)",
      subTitle: "Our On-Site Support Services provide installation and maintenance of technology and electronic products in both consumer and business environments. Offering end-to-end call management and various response levels, our on-site engineers eliminate long waiting hours and provide prompt troubleshooting assistance.",
      single: true,
      imgOne: ossimg,
      imgOneAlt: "Technician fix hardware"
    },
    {
      isRightSection: true,
      title: "Remote Technical Support Services",
      subTitle: "Proudly presenting fast and effective support, our Remote Technical Support Services act as an overseas extended outsourced web hosting support team. Operating 24/7, we assure a one-hour response and a six-hour resolution using time management tools. Our services cover all major operating systems with unlimited trouble tickets and are backed by service level agreements and non-disclosure agreements.",
      single: true,
      imgOne: tssimg,
      imgOneAlt: "Service Desk supporting client remotely"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://btsserv.net/blog",
    url: "https://btsserv.net/blog",
    name: "Blog | Brilliant Techno Service",
    description: "Stay up-to-date with the latest trends and developments in the construction industry with insights from Brilliant Techno Service's team of industry experts.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://btsserv.net/",
      name: "Brilliant Techno Service",
      description: "Brilliant Techno Service offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl">
Elevating Your Business Beyond Boundaries
</h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400">
At Brilliant Techno Services, we transcend the role of a
                conventional IT Solutions and Technology Provider. Leveraging
                our extensive industry expertise, we introduce a spectrum of IT
                Enabled Services categorized under Auxiliary Services.
                Meticulously crafted to meet diverse client needs, many of these
                services are delivered through our esteemed subsidiaries and
                affiliates.
</p> </div> </section> <section> ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.imgOne, "imgAlt": article.imgOneAlt })}`;
  })} <div class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mt-8"> ${renderComponent($$result2, "Image", $$Image, { "src": feature, "alt": "Futuristic image with connections", "class": "w-full rounded-lg", "draggable": "false", "format": "webp", "loading": "eager" })} </div> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
Features
</h2> <!-- Subtitle of the section --> <p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
24/7 Support
</p><p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
24/7 Monitoring
</p><p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
Support for All Major Operating Systems
</p><p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
Support for Servers With and Without Control Panels
</p><p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
Unlimited Trouble Tickets for Featured Plans
</p><p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
Qualified and Certified Engineer High Quality
</p><p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
Responses Securely Stored Customer Information Support
</p><p class="max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
Covered by Service Level Agreement and Non Disclosure
                    Agreement.
</p> </div> </div> </section> <section> ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Work with me", "subTitle": "Send me a message to discuss your needs. I always reply within 24 hours.", "url": "/contact" })} </section> ` })}`;
}, "C:/Users/phuong/Desktop/webBTS/src/pages/services.astro", void 0);

const $$file = "C:/Users/phuong/Desktop/webBTS/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
