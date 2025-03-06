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
		<form className="pb-[0.2rem] pt-[0.2rem] relative w-full sm:w-72" onSubmit={handleSearch}>
			<FontAwesomeIcon
				icon={faSearch}
				className="absolute top-0 bottom-0 my-auto mx-0 left-[0.1rem]"
			/>
			<input
				id="searchInput"
				type="search"
				name="query"
				placeholder="Sök produkt"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="p-[0.1rem] pl-[1.2rem] w-full rounded-2xl"
			/>
		</form>
	);
};

export default SearchBar;
