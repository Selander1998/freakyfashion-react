import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Landingpage } from "./components/Landingpage";

export const App = () => {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Landingpage />
			<Footer />
		</div>
	);
};
