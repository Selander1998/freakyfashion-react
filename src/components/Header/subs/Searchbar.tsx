import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
	const [query, setQuery] = useState<string>("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			window.location.href = `/search?query=${query}`;
		}
	};

	return (
		<form className="p-[0.2rem] relative w-full sm:w-[18rem]" onSubmit={handleSearch}>
			<FontAwesomeIcon
				icon={faSearch}
				className="absolute top-0 bottom-0 my-auto mx-0 left-[0.5rem]"
			/>
			<input
				id="searchInput"
				type="search"
				name="query"
				placeholder="Sök produkt"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="p-[0.1rem] pl-[1.2rem] w-full rounded-[1rem]"
			/>
		</form>
	);
};
export default SearchBar;
