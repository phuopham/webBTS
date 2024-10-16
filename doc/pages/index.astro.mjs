/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, e as renderScript } from '../chunks/astro/server_DcJSOECO.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Zaka-4DA.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Cx73uur-.mjs';
import { $ as $$PrimaryCTA, a as $$HeroSectionAlt } from '../chunks/HeroSectionAlt_D1qw_5MP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$6 = createAstro("https://btsserv.net/");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$5 = createAstro("https://btsserv.net/");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800", "src": src, "alt": alt, "inferSize": true, "loading": "eager" })}`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/avatars/Avatar.astro", void 0);

const $$FullStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="text-brightsky-500 dark:text-brightsky-400 h-4 w-4" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path> </svg>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/stars/FullStar.astro", void 0);

const $$HalfStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="text-brightsky-500 dark:text-brightsky-400 h-4 w-4" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"></path> <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"></path> </svg>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/stars/HalfStar.astro", void 0);

const $$Astro$4 = createAstro("https://btsserv.net/");
const $$ReviewComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ReviewComponent;
  const { avatars, starCount = 0, rating, reviews } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 lg:mt-10"> <div class="py-5"> <div class="text-center sm:flex sm:items-center sm:text-start"> <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5"> <!-- Avatar Group --> <div class="flex justify-center -space-x-3"> ${avatars?.map((src) => renderTemplate`${renderComponent($$result, "Avatar", $$Avatar, { "src": src, "alt": "Avatar Description" })}`)} <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800"> <span class="text-xs font-medium uppercase leading-none text-white">7k+</span> </span> </div> </div> <div class="mx-auto h-px w-32 border-t border-neutral-400 dark:border-neutral-500 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"></div> <!-- Review Ratings --> <div class="flex flex-col items-center sm:items-start"> <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0"> <div class="flex space-x-1"> <!-- Your star ratings --> ${Array(starCount).fill(0).map((_, i) => renderTemplate`${renderComponent($$result, "FullStar", $$FullStar, { "key": i })}`)} <!-- Adding additional half-star --> ${renderComponent($$result, "HalfStar", $$HalfStar, {})} </div> <p class="text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(rating)}` })} </p> </div> <div class="text-sm text-neutral-800 dark:text-neutral-200 sm:ps-5"> <p> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(reviews)}` })} </p> </div> </div> </div> </div> </div>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/blocks/ReviewComponent.astro", void 0);

const $$Astro$3 = createAstro("https://btsserv.net/");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"> ${subTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> <!-- Review Section: This section presents avatars, review ratings and the number of reviews --> ${withReview ? renderTemplate`${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews })}` : ""} </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$2 = createAstro("https://btsserv.net/");
const $$TabNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="hs-tab-active:text-brightsky-500 dark:hs-tab-active:text-brightsky-400 block text-lg font-bold text-neutral-800 dark:text-neutral-200">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/blocks/TabNav.astro", void 0);

const $$Astro$1 = createAstro("https://btsserv.net/");
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  const secondClass = second ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`<!-- Container for tab content that controls visibility and accessibility -->${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": secondClass, "draggable": "false", "format": "avif", "loading": "eager" })} </div>`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/ui/blocks/TabContent.astro", void 0);

const $$Astro = createAstro("https://btsserv.net/");
const $$FeaturesNavs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, description, tabs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative p-6 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-sky-500 text-2xl font-bold dark:text-neutral-200 sm:text-3xl"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(description)}` })} </p> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first })}`)} </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6"> <div class="relative"> <div> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`)} </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12"> <!-- Decorative background and sizing --> <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div> </div> </div> </section> <!--Import the necessary Tabs plugin--> <!--https://preline.co/plugins/html/tabs.html--> ${renderScript($$result, "C:/Users/phuong/Desktop/webBTS/src/components/sections/features/FeaturesNavs.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/phuong/Desktop/webBTS/src/components/sections/features/FeaturesNavs.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.D8w6rgrF.jpg","width":1000,"height":721,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/hero-image.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/hero-image.jpg");
							return target[name];
						}
					});

const hospital = new Proxy({"src":"/_astro/HealthCare-Hospitals.i9lvpLTJ.jpg","width":3163,"height":2705,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/HealthCare-Hospitals.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/HealthCare-Hospitals.jpg");
							return target[name];
						}
					});

const bank = new Proxy({"src":"/_astro/bank.yYNCRobM.webp","width":612,"height":612,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/bank.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/bank.webp");
							return target[name];
						}
					});

const airTravel = new Proxy({"src":"/_astro/airTravel.ejP6T0wM.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/airTravel.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/airTravel.webp");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Your <span class="text-brightsky-500 dark:text-brightsky-400">Trusted Partner</span> for Cutting-Edge Engineering Solutions!`, "primaryBtn": "Contact us", "primaryBtnURL": "/contact", "secondaryBtn": "About Our Services", "secondaryBtnURL": "/services", "withReview": false, "avatars": avatarSrcs, "src": heroImage, "alt": "Stack of Brilliant Techno Service product boxes containing assorted hardware tools" })}   ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Industries We Serve`, "description": "A Glimpse of Projects Completed showcasing our expertise and commitment to excellence", "tabs": [
    {
      heading: "Financial Companies",
      content: "We collaborate with a variety of financial institutions, including banks and insurance companies, providing comprehensive services such as network installation, migration, and change management. Our highly skilled team of engineers has successfully completed numerous projects for diverse global clients",
      src: bank,
      alt: "Financial Companies",
      first: true
    },
    {
      heading: "HealthCare & Hospitals",
      content: "Empowering healthcare facilities, we specialize in the installation of crucial equipment such as ticketing systems, cameras, and wall screens. Our team of professional and highly skilled engineers ensures precision in every setup. Additionally, we offer seamless network migration support during after-hours, prioritizing minimal disruption for our valued healthcare clients",
      src: hospital,
      alt: "HealthCare & Hospitals",
      second: true
    },
    {
      heading: "Air Travel & Airport",
      content: "Our expertise extends to working with multiple airlines and airports, conducting pre and post-installation Wi-Fi surveys. Utilizing licensed Air Magnet software/tools, we ensure seamless Wi-Fi solutions and provide comprehensive design reports to our clients.",
      src: airTravel,
      alt: "Air Travel & Airport"
    }
  ] })}  ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Innovative Sustainable Engineering & IT", "subTitle": "We stand at the forefront of the industry, specializing in the delivery of innovative and sustainable engineering solutions. Our core focus lies in providing top-notch IT infrastructure management services, tailored to meet the diverse needs of a wide range of industries", "url": "/contact" })} ` })}`;
}, "C:/Users/phuong/Desktop/webBTS/src/pages/index.astro", void 0);

const $$file = "C:/Users/phuong/Desktop/webBTS/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
