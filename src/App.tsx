import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Landingpage } from "./components/Landingpage";
import { ProductDetailsPage } from "./views/ProductDetailsPage";
import { BasketPage } from "./views/BasketPage";
import { CheckoutPage } from "./views/CheckoutPage";
import { SearchPage } from "./views/SearchPage";
import { AdminProductListPage } from "./views/AdminPages/ProductListPage";
import { AdminNewProductPage } from "./views/AdminPages/NewProductPage";

const ConditionalHero = () => {
	const location = useLocation();
	const paths = ["/products/", "/basket", "/checkout", "/search"];
	const match = location.pathname.startsWith("/products/") || paths.includes(location.pathname);

	return match ? null : <Hero />;
};

export const App = () => {
	const isAdminRoute = location.pathname.startsWith("/admin");

	return (
		<div className={`App ${isAdminRoute ? "p-0" : "p-4"}`}>
			<BrowserRouter>
				{!isAdminRoute && <Header />}
				{!isAdminRoute && <ConditionalHero />}
				{/* Multilayered check or whatever, who cares lmao */}
				<Routes>
					<Route path="/" element={<Landingpage />} />

					<Route path="/products/:name" element={<ProductDetailsPage />} />
					<Route path="basket" element={<BasketPage />} />
					<Route path="checkout" element={<CheckoutPage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="admin/products" element={<AdminProductListPage />} />
					<Route path="admin/products/new" element={<AdminNewProductPage />} />
				</Routes>
				{!isAdminRoute && <Footer />}
			</BrowserRouter>
		</div>
	);
};
