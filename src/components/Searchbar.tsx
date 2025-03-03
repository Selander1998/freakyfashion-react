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
		<form onSubmit={handleSearch}>
			<FontAwesomeIcon icon={faSearch} />
			<input
				id="searchInput"
				type="search"
				name="query"
				placeholder="Sök produkt"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
};

export default SearchBar;
