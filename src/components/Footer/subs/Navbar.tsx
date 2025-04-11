import { faFaceSmile, faGlobe, faPlane, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
				<div
					key={item.text}
					className="flex gap-2 basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
					<FontAwesomeIcon icon={item.icon} className="text-2xl" />
					<h3>{item.text}</h3>
				</div>
			))}
		</section>
	);
};
