import React, { createContext, useContext, useReducer, ReactNode } from "react";

type State = { count: number };
type Action = { type: "increment" | "decrement" };
type CounterContextType = { state: State; dispatch: React.Dispatch<Action> };

const CounterContext = createContext<CounterContextType | undefined>(undefined);

const counterReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		default:
			return state;
	}
};

export const CounterProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(counterReducer, { count: 0 });

	return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
};

export const useCounter = () => {
	const context = useContext(CounterContext);
	if (!context) throw new Error("useCounter must be used within CounterProvider");
	return context;
};
