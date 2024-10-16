import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DcJSOECO.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"SF-FN F303","description":"Boulons hexagonaux","main":{"id":4,"content":"Découvrez les boulons hexagonaux SF-FN F303 – le choix parfait pour les applications de fixation lourdes. Conçus avec précision et durabilité, ces boulons hexagonaux offrent la force et la fiabilité dont vous avez besoin pour vos projets les plus exigeants.\n","imgCard":"@/images/product-image-4.avif","imgMain":"@/images/product-image-main-4.avif","imgAlt":"Maquettes de boîtes de boulons hexagonaux"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Spécifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Plans"}],"longDescription":{"title":"Solutions de fixation robustes","subTitle":"Les boulons hexagonaux SF-FN F303 sont conçus pour relever les défis de fixation les plus difficiles avec aisance. Que vous travailliez sur des projets de construction ou des machines lourdes, ces boulons hexagonaux offrent la force et la fiabilité nécessaires.\n","btnTitle":"Contactez le service commercial pour en savoir plus","btnURL":"#"},"descriptionList":[{"title":"Solidité et durabilité","subTitle":"Fabriqués à partir de matériaux de haute qualité, ces boulons hexagonaux sont conçus pour supporter des charges lourdes et des conditions difficiles."},{"title":"Ingénierie de précision","subTitle":"Conçus avec des filets coupés avec précision et des spécifications exactes, garantissant un ajustement serré et sécurisé à chaque fois."},{"title":"Polyvalence","subTitle":"Adaptés à une large gamme d'applications, de la construction aux machines, offrant des solutions de fixation polyvalentes."}],"specificationsLeft":[{"title":"Matériau","subTitle":"Fabriqués en acier ou en alliage de qualité supérieure, offrant une résistance exceptionnelle et une résistance à la corrosion."},{"title":"Conception du filetage","subTitle":"Des filets coupés avec précision assurent une adhérence optimale et une fiabilité même dans des environnements à haute contrainte."},{"title":"Quantité","subTitle":"Chaque ensemble comprend une quantité suffisante de boulons hexagonaux pour divers projets et applications."},{"title":"Tailles","subTitle":"Disponible dans une gamme de tailles pour répondre aux différentes exigences des projets, garantissant polyvalence et compatibilité."}],"specificationsRight":[{"title":"Finition","subTitle":"Fini avec un revêtement protecteur pour améliorer la résistance à la corrosion et prolonger la durée de vie."},{"title":"Capacité de charge","subTitle":"Conçus pour répondre ou dépasser les normes industrielles en matière de capacité de charge, garantissant des performances fiables sous des charges lourdes."},{"title":"Certifications","subTitle":"Conformes aux normes et certifications industrielles pertinentes, garantissant qualité et fiabilité."},{"title":"Applications","subTitle":"Idéal pour une utilisation dans la construction, les machines, l'automobile et d'autres applications lourdes nécessitant une fixation solide et fiable."}],"blueprints":{"first":"@/images/blueprint-1.avif","second":"@/images/blueprint-2.avif"}};
				const file = "C:/Users/phuong/Desktop/webBTS/src/content/products/fr/item-f303.md";
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
