import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
	const [query, setQuery] = useState<string>("");
	const navigate = useNavigate();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			navigate(`/search?query=${encodeURIComponent(query)}`);
		}
	};

	return (
		<form className="pb-1 pt-1 relative w-full sm:w-72 sm:self-center" onSubmit={handleSearch}>
			<div className="relative flex items-center w-full">
				<FontAwesomeIcon icon={faSearch} className="absolute left-2 text-gray-500" />
				<input
					id="searchInput"
					type="search"
					name="query"
					placeholder="Sök produkt"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="p-0.5 pl-8 w-full rounded-2xl"
				/>
			</div>
		</form>
	);
};
