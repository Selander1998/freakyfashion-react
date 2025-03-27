import { Logo } from "../Logo";
import { SearchBar } from "./subs/Searchbar";
import { NavIcons } from "./subs/NavIcons";
import { NavMenu } from "./subs/NavMenu";

export const Header = () => {
	return (
		<header className="flex flex-col items-center p-1 sm:flex-row sm:gap-4">
			<Logo />
			<div className="flex gap-4 w-full justify-between">
				<SearchBar />
				<NavIcons />
			</div>
			<div className="w-full">
				<NavMenu />
			</div>
		</header>
	);
};
