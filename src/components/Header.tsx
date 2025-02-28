import Logo from "./Logo";
import SearchBar from "./Searchbar";
import NavButtons from "./Navbuttons";

const Header = () => {
	return (
		<header>
			<Logo />
			<div className="flex">
				<SearchBar />
				<NavButtons />
			</div>
		</header>
	);
};

export default Header;
