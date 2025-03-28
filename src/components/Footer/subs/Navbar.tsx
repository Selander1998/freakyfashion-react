import { faFaceSmile, faGlobe, faPlane, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navbarIconClasses = `
    flex
	gap-2
    basis-full 
    sm:basis-2/5 
    md:basis-1/5
`;

export const NavbarIcons = () => {
	const iconItems = [
		{ icon: faGlobe, text: "Gratis frakt och returer" },
		{ icon: faPlane, text: "Expressfrakt" },
		{ icon: faShieldAlt, text: "Säkra betalningar" },
		{ icon: faFaceSmile, text: "Nyheter varje dag" },
	];

	return (
		<section className="flex flex-wrap gap-4 justify-around basis-full p-4">
			{iconItems.map((item) => (
				<div key={item.text} className={navbarIconClasses}>
					<FontAwesomeIcon icon={item.icon} className="text-2xl" />
					<h3>{item.text}</h3>
				</div>
			))}
		</section>
	);
};
