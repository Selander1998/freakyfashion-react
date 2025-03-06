import ListItems from "./subs/Listitems";
import DetailsItems from "./subs/Detailitems";
import NavbarIcons from "./subs/Navbar";

const Footer = () => {
	return (
		<footer className="flex flex-col gap-4 mt-4 mb-4 sm:ml-[-1rem] sm:mr-[-1rem] sm:border-2 sm:border-l-0 sm:border-r-0">
			<NavbarIcons />
			<ListItems />
			<DetailsItems />
		</footer>
	);
};

export default Footer;
