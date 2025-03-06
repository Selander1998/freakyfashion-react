import Logo from "../Logo";
import SearchBar from "./subs/Searchbar";
import NavButtons from "./subs/Navbuttons";

const Header = () => {
	return (
		<header className="flex flex-col items-center p-[0.2rem] sm:flex-row sm:gap-[1rem]">
			<Logo />
			<div className="flex gap-[1rem] w-full justify-between">
				<SearchBar />
				<NavButtons />
			</div>
		</header>
	);
};

export default Header;
