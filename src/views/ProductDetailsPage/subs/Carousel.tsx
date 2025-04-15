import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

type article = {
	id: number;
	name: string;
	brand: string;
	imageUrl: string;
	price: number;
	slug: string;
};

// Vibe code paradise right here, absolute mess
export const Carousel = () => {
	const [products, setProducts] = useState<article[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(`${apiUrl}/api/fetchAllArticles`);

				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const data = await response.json();
				setProducts(data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else if (typeof err === "string") {
					setError(err);
				} else {
					setError("An unknown error occurred");
				}
				console.error("Error fetching products:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const maxIndex = Math.max(0, products.length - 3);

	const goToNext = () => {
		setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
	};

	const goToPrev = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
	};

	if (loading) return <div className="flex justify-center p-8">Loading carousel products...</div>;
	if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
	if (products.length === 0) return <div className="p-4">No products to display</div>;

	return (
		<div className="w-full max-w-6xl mx-auto py-8">
			<h2 className="text-center text-2xl font-semibold mb-6">Liknande produkter</h2>

			<div className="relative">
				<button
					onClick={goToPrev}
					disabled={currentIndex === 0}
					className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full px-2 flex items-center justify-center`}
					aria-label="Previous products">
					<FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" />
				</button>

				<div className="flex overflow-hidden">
					<div
						className="flex transition-transform duration-300 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
						{products.map((product, index) => (
							<div key={product.id || index} className="w-1/3 flex-shrink-0 px-2">
								<div className="border border-gray-200 rounded h-full flex flex-col">
									<div className="aspect-square relative">
										<div className="absolute inset-0 flex items-center justify-center border-b">
											<img
												src={product.imageUrl}
												alt={product.name}
												className="max-w-full max-h-full object-contain"
											/>
										</div>
									</div>

									<div className="p-3 flex flex-col">
										<h3 className="font-medium text-base">{product.name}</h3>
										<p className="text-gray-600 text-sm">{product.brand}</p>
										<p className="mt-2 font-bold">{product.price} SEK</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<button
					onClick={goToNext}
					className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full px-2 flex items-center justify-center`}
					aria-label="Next products">
					<FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" />
				</button>
			</div>
		</div>
	);
};
