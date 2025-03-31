const apiUrl = import.meta.env.VITE_API_URL;
import { useNavigate } from "react-router-dom";

export const AdminNewProductPage = () => {
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);

		const productName = formData.get("name");
		// Create slug from product name using regex i found on stacjoverflow
		// https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
		const slug =
			typeof productName === "string"
				? productName
						.toLowerCase()
						.replace(/[^\w\s-]/g, "")
						.replace(/\s+/g, "-")
						.replace(/-+/g, "-")
				: "";

		const product = {
			name: productName,
			slug: slug,
			description: formData.get("description"),
			imageUrl: formData.get("image"),
			brand: formData.get("brand"),
			sku: formData.get("sku"),
			price: parseFloat((formData.get("price") as string) || "0"),
			createdAt: formData.get("publishingDate"),
		};

		try {
			const response = await fetch(`${apiUrl}/api/createArticle`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(product),
			});
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || "Failed to create product");
			}
			navigate("/admin/products");
		} catch (error) {
			console.error("Error creating product:", error);
		}
	};

	return (
		<div className="grid grid-cols-[1fr_3fr] grid-rows-[4.5dvh_92.5dvh] h-screen">
			<div className="col-span-2 bg-black text-white text-2xl p-2">Administration</div>

			<div className="text-2xl font-bold bg-gray-300 pl-6 pt-4 h-full border-r-2">Produkter</div>

			<main className="flex flex-col p-4 gap-4 overflow-y-auto">
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-semibold mb-2">Ny produkt</h3>
					<form id="new-product-form" className="flex flex-col gap-3" onSubmit={handleSubmit}>
						<div className="flex flex-col gap-1">
							<span>Namn</span>
							<input
								className="w-2/5 p-0.5 border rounded"
								name="name"
								type="text"
								placeholder="Ange namn"
								maxLength={25}
								required
							/>
						</div>

						<div className="flex flex-col gap-1 max-w-[65%]">
							<span>Beskrivning</span>
							<textarea
								className="p-0.5 resize-none border rounded"
								name="description"
								rows={5}
								placeholder="Ange beskrivning"
								required></textarea>
						</div>

						<div className="flex flex-col gap-1">
							<span>Bild-URL</span>
							<input
								className="max-w-[50%] p-0.5 border rounded"
								name="image"
								type="text"
								required
							/>
						</div>

						<div className="flex flex-col gap-1">
							<span>Märke</span>
							<input className="w-2/5 p-0.5 border rounded" name="brand" type="text" required />
						</div>

						<div className="flex flex-col gap-1">
							<span>SKU</span>
							<input
								className="w-2/5 p-0.5 border rounded"
								name="sku"
								type="text"
								placeholder="Ange SKU"
								maxLength={6}
								pattern="^[A-Z]{3}\d{3}$"
								required
							/>
						</div>

						<div className="flex flex-col gap-1">
							<span>Pris</span>
							<input className="w-2/5 p-0.5 border rounded" name="price" type="text" required />
						</div>

						<div className="flex flex-col gap-1">
							<span>Publiseringsdatum</span>
							<input className="w-2/5 p-0.5 border rounded" name="publishingDate" type="date" />
						</div>

						<button
							className="mt-2 py-2 px-4 border border-black rounded-lg shadow-sm w-[120px] justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
							type="submit">
							Lägg till
						</button>
					</form>
				</div>
			</main>
		</div>
	);
};
