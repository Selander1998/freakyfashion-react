import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Landingpage } from "./components/Landingpage";
import { ProductDetailsPage } from "./views/ProductDetailsPage";
import { BasketPage } from "./views/BasketPage";
import { CheckoutPage } from "./views/CheckoutPage";

const ConditionalHero = () => {
	const location = useLocation();
	const paths = ["/products/", "/basket"];
	const match = location.pathname.startsWith("/products/") || paths.includes(location.pathname);

	return match ? null : <Hero />;
};

export const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<ConditionalHero />

				<Routes>
					<Route path="/" element={<Landingpage />} />

					<Route path="/products/:name" element={<ProductDetailsPage />} />
					<Route path="basket" element={<BasketPage />} />
					<Route path="checkout" element={<CheckoutPage />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
};
