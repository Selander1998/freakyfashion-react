// I found this on the interwebs, i found this polyfill for groupBy on object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy

export const groupBy = <T>(
	arr: T[],
	callback: (...args: [currentValue: T, currentIndex: number, array: T[]]) => string
) => {
	return arr.reduce((acc, ...args) => {
		const key = callback(...args);
		acc[key] ??= [];
		acc[key].push(args[0]);
		return acc;
	}, {} as Record<string, T[]>);
};
