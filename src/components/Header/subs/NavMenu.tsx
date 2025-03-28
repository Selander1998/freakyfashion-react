const navLinkClasses = `
    text-black 
    no-underline 
    hover:text-gray-700 
    focus:text-gray-600 
    transition-colors 
    duration-200
    ease-in-out
`;

export const NavMenu = () => {
	const navItems = ["Nyheter", "Topplistan", "Rea", "Kampanjer"];
	return (
		<nav>
			<ul className="flex flex-col space-y-0.5">
				{navItems.map((item) => (
					<li key={item}>
						<a href="#" className={navLinkClasses}>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
