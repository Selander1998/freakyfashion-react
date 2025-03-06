const Hero = () => {
	return (
		<section className="flex flex-col p-4 m-[0.2rem] lg:flex-row-reverse border-2">
			<img src="https://placehold.co/400x300" alt="400x300 image" />
			<div className="text-center p-2">
				<h1>Lorem ipsum dolor</h1>
				<p>
					Vestibulum iaculis justo ac dui semper dictum. Maecenas ac porttitor dui, in luctus arcu.
					Nulla id orci eget tellus suscipit faucibus. Vivamus tincidunt tempus dui nec euismod.
					Fusce posuere lorem tellus, eget vehicula ligula tincidunt eget. Nunc orci dui, molestie
					quis turpis vitae, dapibus interdum diam. Vivamus nec pretium dui, sed tempor massa. Etiam
					et libero vel turpis suscipit iaculis.
				</p>
			</div>
		</section>
	);
};

export default Hero;
