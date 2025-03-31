import { Link } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

export const AdminProductListPage = () => {
	type article = {
		id: number;
		name: string;
		sku: string;
		price: number;
	};
	const [articles, setArticles] = useState<article[]>([]);

	const fetchAllArticles = async () => {
		try {
			const response = await fetch(`${apiUrl}/api/fetchAllArticles`);
			if (!response.ok) {
				throw new Error("Products not found");
			}
			const data = await response.json();
			setArticles(Array.isArray(data) ? data : [data]);
		} catch (error) {
			console.error("Error fetching articles:", error);
		}
	};

	useEffect(() => {
		fetchAllArticles();
	}, []);

	const handleDeleteArticle = async (id: number) => {
		try {
			const response = await fetch(`${apiUrl}/api/deleteArticle/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error("Failed to delete article");
			}

			setArticles(articles.filter((article) => article.id !== id));
		} catch (error) {
			console.error("Error deleting article:", error);
		}
	};

	return (
		<div className="grid grid-cols-[1fr_3fr] grid-rows-[4.5dvh_92.5dvh] h-screen">
			<div className="col-span-2 bg-black text-white text-2xl p-2">Administration</div>

			<div className="text-2xl font-bold bg-gray-300 pl-6 pt-4 h-full border-r-2">Produkter</div>

			<main className="flex flex-col p-4 gap-4">
				<div className="flex justify-between items-center preamble">
					<h3 className="text-xl font-semibold">Produkter</h3>
					<Link to="/admin/products/new">
						<button className="p-2 rounded-lg shadow-2xs border-2 shadow-black cursor-pointer">
							Ny produkt
						</button>
					</Link>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<colgroup>
							<col className="border-2 border-black" />
							<col className="border-2 border-black" />
							<col className="border-2 border-black" />
							<col className="border-2 border-black" />
						</colgroup>

						<thead className="bg-gray-400">
							<tr>
								<th scope="col" className="text-left border-b-2 border-black pl-1">
									Namn
								</th>
								<th scope="col" className="text-left border-b-2 border-black pl-1">
									SKU
								</th>
								<th scope="col" className="text-left border-b-2 border-black pl-1">
									Pris
								</th>
								<th scope="col" className="text-left border-b-2 border-black"></th>
							</tr>
						</thead>

						<tbody className="[&>tr:nth-child(odd)]:bg-gray-300">
							{articles.map((article) => (
								<tr key={article.id}>
									<td className="py-1 pl-1">{article.name}</td>
									<td className="py-0.5 pl-1">{article.sku}</td>
									<td className="py-0.5 pl-1">{article.price} kr</td>
									<td className="py-0.5 pl-1">
										<div className="flex justify-evenly table-icons">
											<FontAwesomeIcon
												icon={faTrashCan}
												className="cursor-pointer"
												onClick={() => handleDeleteArticle(article.id)}
											/>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
};
