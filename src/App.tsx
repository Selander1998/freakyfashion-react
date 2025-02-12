import "./App.css";

import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

const App = () => {
	return (
		<CounterProvider>
			<div className="flex justify-center items-center h-screen">
				<Counter />
			</div>
		</CounterProvider>
	);
};

export default App;
