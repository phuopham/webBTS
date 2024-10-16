import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DcJSOECO.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Simplifiez l'Approvisionnement et Restez dans les Limites du Budget avec Brilliant Techno Service","description":"Outils abordables et durables pour des projets de construction efficaces","author":"Olga Zabegina","role":"Directrice Marketing Stratégique","authorImage":"@/images/blog/anna.avif","authorImageAlt":"Avatar Description","pubDate":"2024-02-18T00:00:00.000Z","cardImage":"@/images/blog/post-3.avif","cardImageAlt":"Side view worker wearing gloves","readTime":3,"tags":["approvisionnement","abordable","efficacité"],"contents":["Gérer un projet de construction peut être écrasant, surtout en ce qui concerne l'approvisionnement. C'est pourquoi Brilliant Techno Service s'engage à simplifier le processus et à maintenir vos projets dans les limites du budget.","Avec notre gamme d'outils et d'équipements abordables, vous pouvez trouver tout ce dont vous avez besoin sans vous ruiner. Notre design centré sur l'utilisateur garantit que nos produits sont faciles à utiliser, vous faisant gagner du temps et de la frustration sur le chantier.","Mais abordable ne signifie pas sacrifier la qualité. Les produits Brilliant Techno Service sont conçus pour durer, offrant des performances fiables et une durabilité lorsque vous en avez le plus besoin. Et avec notre documentation complète et nos tutoriels, vous pouvez intégrer nos produits de manière transparente dans votre flux de travail, maximisant ainsi l'efficacité et la productivité.","Que vous soyez un passionné du bricolage ou un entrepreneur expérimenté, Brilliant Techno Service a les solutions dont vous avez besoin pour réussir. Découvrez la différence par vous-même et voyez pourquoi Brilliant Techno Service est le choix de confiance pour les besoins en matériel et en construction."]};
				const file = "C:/Users/phuong/Desktop/webBTS/src/content/blog/fr/post-3.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
