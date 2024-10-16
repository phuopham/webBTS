import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_DcJSOECO.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Cx73uur-.mjs';
import { o as $$CardGrid, p as $$Card, q as $$Steps, r as $$LinkCard } from './Code_DxNBJEzf.mjs';
import 'clsx';

const frontmatter = {
  "title": "First Project Checklist",
  "description": "Explore Brilliant Techno Service's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "project-preparation",
    "text": "Project Preparation"
  }, {
    "depth": 2,
    "slug": "project-execution",
    "text": "Project Execution"
  }, {
    "depth": 3,
    "slug": "initial-phase",
    "text": "Initial Phase"
  }, {
    "depth": 2,
    "slug": "additional-resources",
    "text": "Additional Resources"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Embarking on a new project can be exciting and challenging in equal measure. With the right preparation and guidance, your venture is poised for success. The Brilliant Techno Service First Project Checklist is designed to provide a clear and structured approach to ensure you’re well-prepared every step of the way.</p>\n<h2 id=\"project-preparation\">Project Preparation</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Scope and Objectives",
        "set:html": "<ul>\n<li>Ensure clarity of the project’s scope, deliverables, and desired outcomes</li>\n<li>Define clear objectives and success criteria for project completion</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Tools and Equipment",
        "set:html": "<ul>\n<li>Make a list of all required Brilliant Techno Service tools and equipment</li>\n<li>Verify inventory availability and condition before starting</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Arranging Services",
        "set:html": "<ul>\n<li>If additional expertise or manpower is needed, arrange for Brilliant Techno Service construction services in advance</li>\n<li>Clarify service level agreements and timelines with your Brilliant Techno Service representative</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"project-execution\">Project Execution</h2>\n<h3 id=\"initial-phase\">Initial Phase</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Set up the project site according to Brilliant Techno Service setup guidelines</p>\n</li>\n<li>\n<p>Conduct an initial team meeting to align on project goals and Brilliant Techno Service methodologies</p>\n</li>\n<li>\n<p>Establish project checkpoints and milestones for regular assessment</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"additional-resources\">Additional Resources</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Detailed Guides",
        description: "Access in-depth documentation and user manuals for Brilliant Techno Service tools and services.",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Support Contacts",
        description: "Keep handy the contact details for Brilliant Techno Service support, available for assistance throughout your project.",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Advanced Learning",
        description: "Explore further educational resources provided by Brilliant Techno Service to refine your skills and knowledge base.",
        href: "/guides/getting-started"
      })]
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
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/guides/first-project-checklist.mdx";
const file = "C:/Users/phuong/Desktop/webBTS/src/content/docs/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/phuong/Desktop/webBTS/src/content/docs/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
