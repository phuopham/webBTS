import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_DcJSOECO.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Cx73uur-.mjs';
/* empty css                                  */
import { p as $$Card, o as $$CardGrid } from './Code_DxNBJEzf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Brilliant Techno Service docs",
  "head": [{
    "tag": "title",
    "content": "Brilliant Techno Service docs"
  }],
  "description": "Explore Brilliant Techno Service's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "مرکز اسناد",
    "tagline": "مرکز مرکزی شما برای راهنمایی ساده‌سازی شده ابزار، اسناد خدمات تفصیلی و پشتیبانی پروژه.",
    "image": {
      "alt": "A Brilliant Techno Service's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/fa/guides/getting-started/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "link": "https://github.com/mearashadowfax/Brilliant Techno Service"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "راهنمای شروع سریع",
      icon: "document",
      "set:html": "<p>با راهنماهای مستقیم و مختصر ما، برای کاربران جدید و کارشناسان تجربه‌یافته، به سرعت به راه بیافتید.</p>"
    }), createVNode($$Card, {
      title: "ابزارها و تجهیزات",
      icon: "seti:eslint",
      "set:html": "<p>تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Brilliant Techno Service را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است.</p>"
    }), createVNode($$Card, {
      title: "خدمات ساخت و ساز",
      icon: "seti:puppet",
      "set:html": "<p>تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Brilliant Techno Service را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است.</p>"
    }), createVNode($$Card, {
      title: "مباحث پیشرفته",
      icon: "seti:terraform",
      "set:html": "<p>تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Brilliant Techno Service را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است.</p>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/fa/welcome-to-docs.mdx";
const file = "C:/Users/phuong/Desktop/webBTS/src/content/docs/fa/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/phuong/Desktop/webBTS/src/content/docs/fa/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
