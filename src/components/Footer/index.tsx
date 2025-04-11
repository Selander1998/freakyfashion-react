import { DetailsItems } from "./subs/Detailitems";
import { NavbarIcons } from "./subs/Navbar";

export const Footer = () => {
	return (
		<footer className="flex flex-col gap-4 mt-4 mb-4 sm:ml-[-4] sm:mr-[-4] sm:border-2 sm:border-l-0 sm:border-r-0">
			<NavbarIcons />
			<DetailsItems />
		</footer>
	);
};
