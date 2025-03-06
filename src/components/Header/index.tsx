import Logo from "../Logo";
import SearchBar from "./subs/Searchbar";
import NavButtons from "./subs/Navbuttons";
import Navmenu from "./subs/Navmenu";

const Header = () => {
	return (
		<header className="flex flex-col items-center p-[0.2rem] sm:flex-row sm:gap-4">
			<Logo />
			<div className="flex gap-4 w-full justify-between">
				<SearchBar />
				<NavButtons />
			</div>
			<div className="w-full">
				<Navmenu />
			</div>
		</header>
	);
};

export default Header;
