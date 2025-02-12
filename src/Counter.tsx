import { useOptimistic } from "react";
import { useCounter } from "./CounterContext";

const Counter = () => {
	const { state, dispatch } = useCounter();
	const [optimisticCount, setOptimisticCount] = useOptimistic(state.count);

	const handleIncrement = () => {
		setOptimisticCount(optimisticCount + 1);
		setTimeout(() => dispatch({ type: "increment" }), 100); // Simulate API call
	};

	const handleDecrement = () => {
		setOptimisticCount(optimisticCount - 1);
		setTimeout(() => dispatch({ type: "decrement" }), 100); // Simulate API call
	};

	return (
		<div className="p-4 text-center">
			<h2 className="text-2xl">Count: {optimisticCount}</h2>
			<button onClick={handleIncrement} className="rounded-full bg-blue-500 p-2 text-white mx-2">
				➕
			</button>
			<button onClick={handleDecrement} className="rounded-full bg-red-500 p-2 text-white mx-2">
				➖
			</button>
		</div>
	);
};

export default Counter;
