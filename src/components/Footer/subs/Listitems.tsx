const footerListItemClasses = `
    hidden 
    list-none 
    ml-4 
    mr-8 
    sm:flex 
    sm:flex-row
`;

export const ListItems = () => {
	const listSections = [
		{
			title: "Shopping",
			items: ["Vinterjackor", "Pufferjackor", "Kappa", "Trenchcoats"],
		},
		{
			title: "Mina Sidor",
			items: ["Mina ordrar", "Mitt konto"],
		},
		{
			title: "Kundtjänst",
			items: ["Returpolicy", "Integritetspolicy"],
		},
	];

	return (
		<div>
			{listSections.map((section) => (
				<ul key={section.title} className={footerListItemClasses}>
					<li>
						<h3>{section.title}</h3>
					</li>
					{section.items.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			))}
		</div>
	);
};
