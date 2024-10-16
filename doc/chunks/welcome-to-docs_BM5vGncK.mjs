import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_DcJSOECO.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Cx73uur-.mjs';
/* empty css                                  */
import { p as $$Card, o as $$CardGrid } from './Code_DxNBJEzf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Brilliant Techno Service Docs",
  "head": [{
    "tag": "title",
    "content": "Brilliant Techno Service Docs"
  }],
  "description": "Explore Brilliant Techno Service's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Documentation Hub",
    "tagline": "Your central hub for streamlined tool guidance, detailed service docs, and project support.",
    "image": {
      "alt": "A Brilliant Techno Service's Logo",
      "dark": "../../images/starlight/screwfast_hero.svg",
      "light": "../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/guides/getting-started/"
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
      title: "Quick Start Guides",
      icon: "document",
      "set:html": "<p>Get up and running swiftly with our straightforward and concise guides, tailored for new users and seasoned experts alike.</p>"
    }), createVNode($$Card, {
      title: "Tools & Equipment",
      icon: "seti:eslint",
      "set:html": "<p>Discover the complete lineup of Brilliant Techno Service’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.</p>"
    }), createVNode($$Card, {
      title: "Construction Services",
      icon: "seti:puppet",
      "set:html": "<p>Discover the complete lineup of Brilliant Techno Service’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.</p>"
    }), createVNode($$Card, {
      title: "Advanced Topics",
      icon: "seti:terraform",
      "set:html": "<p>Discover the complete lineup of Brilliant Techno Service’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.</p>"
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
const url = "src/content/docs/welcome-to-docs.mdx";
const file = "C:/Users/phuong/Desktop/webBTS/src/content/docs/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/phuong/Desktop/webBTS/src/content/docs/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
