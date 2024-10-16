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
    "title": "Centro de Documentación",
    "tagline": "Tu centro central para orientación de herramientas simplificada, documentos de servicio detallados y apoyo al proyecto.",
    "image": {
      "alt": "A Brilliant Techno Service's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/es/guides/getting-started/"
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
      title: "Guías de Inicio Rápido",
      icon: "document",
      "set:html": "<p>Levántate y comienza rápidamente con nuestras guías directas y concisas, diseñadas para nuevos usuarios y expertos experimentados por igual.</p>"
    }), createVNode($$Card, {
      title: "Herramientas y Equipos",
      icon: "seti:eslint",
      "set:html": "<p>Descubre la línea completa de herramientas y equipos de calidad superior de Brilliant Techno Service. Cada subsección ofrece especificaciones detalladas, instrucciones de uso y consejos de mantenimiento.</p>"
    }), createVNode($$Card, {
      title: "Servicios de Construcción",
      icon: "seti:puppet",
      "set:html": "<p>Descubre la línea completa de herramientas y equipos de calidad superior de Brilliant Techno Service. Cada subsección ofrece especificaciones detalladas, instrucciones de uso y consejos de mantenimiento.</p>"
    }), createVNode($$Card, {
      title: "Temas Avanzados",
      icon: "seti:terraform",
      "set:html": "<p>Descubre la línea completa de herramientas y equipos de calidad superior de Brilliant Techno Service. Cada subsección ofrece especificaciones detalladas, instrucciones de uso y consejos de mantenimiento.</p>"
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
const url = "src/content/docs/es/welcome-to-docs.mdx";
const file = "C:/Users/phuong/Desktop/webBTS/src/content/docs/es/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/phuong/Desktop/webBTS/src/content/docs/es/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
