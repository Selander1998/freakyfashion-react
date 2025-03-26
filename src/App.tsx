import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Landingpage } from "./components/Landingpage";
import { ProductDetailsPage } from "./views/ProductDetailsPage";

const ConditionalHero = () => {
	return useLocation().pathname.startsWith("/products/") ? null : <Hero />;
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
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
};
