/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, e as renderScript, m as maybeRenderHead } from '../chunks/astro/server_DcJSOECO.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, S as SITE } from '../chunks/MainLayout_Zaka-4DA.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Cx73uur-.mjs';
import { frontmatter, Content } from '../chunks/about_Bwq9KGNk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const wdimg = new Proxy({"src":"/_astro/jobwelldone.RUtLugnm.jpg","width":900,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/about/jobwelldone.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/about/jobwelldone.jpg");
							return target[name];
						}
					});

const wtimg = new Proxy({"src":"/_astro/topdownworkingtable.BL24G63J.jpg","width":2048,"height":1310,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/phuong/Desktop/webBTS/src/images/about/topdownworkingtable.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/phuong/Desktop/webBTS/src/images/about/topdownworkingtable.jpg");
							return target[name];
						}
					});

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = `${frontmatter.title} | ${SITE.title}`;
  const Content$1 = Content;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-16"> <h1 class="mb-4 text-balance text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200 md:mb-6 md:text-4xl"> ${frontmatter.title} </h1> </section> <section class="py-6 sm:py-8 lg:py-12"> <div class="mx-auto max-w-screen-xl px-4 md:px-8"> <div class="gap-8 md:grid md:grid-cols-3 lg:gap-12"> <div> <div class="h-64 overflow-hidden rounded-lg shadow-lg md:h-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-full object-cover object-center", "src": wtimg, "alt": frontmatter.cardImageAlt, "draggable": "false", "format": "jpg" })} </div> <div id="progress-mobile" class="fixed left-0 top-0 h-2 w-full bg-gradient-to-r from-sky-400/30 to-sky-400 md:hidden"></div> <div id="pin" class="mt-10 hidden space-y-4 md:block"> <div class="h-px w-full overflow-hidden bg-neutral-300 dark:bg-neutral-700"> <div id="progress" class="h-px w-full bg-gradient-to-r from-sky-400/30 to-sky-400"></div> </div> <p class="text-pretty text-sm font-light text-neutral-500">
Table of Contents:
</p> <div id="toc" class=""> <ul class="space-y-2 text-pretty text-base text-neutral-700 transition duration-300 dark:text-neutral-400"></ul> </div> </div> <div class="m-auto h-64 rounded-lg shadow-lg md:h-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-full object-cover object-center", "src": wdimg, "alt": "Job well done", "draggable": "false", "format": "jpg" })} </div> </div> <div class="col-span-2"> <article class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${renderComponent($$result2, "Content", Content$1, {})} </article> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/phuong/Desktop/webBTS/src/pages/about.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/phuong/Desktop/webBTS/src/pages/about.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/phuong/Desktop/webBTS/src/pages/about.astro", void 0);

const $$file = "C:/Users/phuong/Desktop/webBTS/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
