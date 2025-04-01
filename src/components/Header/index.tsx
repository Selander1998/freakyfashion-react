import { Logo } from "../Logo";
import { SearchBar } from "./subs/Searchbar";
import { NavIcons } from "./subs/NavIcons";
import { NavMenu } from "./subs/NavMenu";

export const Header = () => {
	return (
		<header className="flex flex-col items-center p-1">
			<div className="flex flex-col sm:flex-row sm:gap-4 w-full">
				<Logo />
				<div className="flex w-full justify-between">
					<SearchBar />
					<NavIcons />
				</div>
			</div>
			<div className="w-full">
				<NavMenu />
			</div>
		</header>
	);
};
