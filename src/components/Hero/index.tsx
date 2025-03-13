import { TextContainer } from "./subs/Textcontainer";

export const Hero = () => {
	return (
		<section className="flex flex-col p-4 m-1 lg:flex-row-reverse border-2">
			<img src="https://placehold.co/400x300" alt="400x300 image" />
			<TextContainer />
		</section>
	);
};
