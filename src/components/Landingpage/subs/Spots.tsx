const CreateSpot = () => {
	return (
		<a href="#" className="relative">
			<img src="https://placehold.co/700x500" alt="700x500 image" className="w-full" />
			<p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transform">
				Lorem ipsum dolor
			</p>
		</a>
	);
};

export const Spots = () => {
	const Spots = Array(3).fill(CreateSpot);
	return (
		<section className="hidden pt-4 lg:flex lg:m-1 lg:gap-4 lg:justify-evenly">
			{Spots.map((Spot, index) => (
				<CreateSpot key={index} {...Spot} />
			))}
		</section>
	);
};
