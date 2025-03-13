interface DetailsMenuItemProps {
	open: boolean;
	title: string;
	subValues: string[];
	styling: string;
}

const CreateDetailsMenuItem = ({ open, title, subValues, styling }: DetailsMenuItemProps) => {
	return (
		<details open={open}>
			<summary className={`list-none border-2 border-r-0 border-l-0 ${styling}`}>{title}</summary>
			{subValues.map((value) => (
				<div className="flex flex-col m-1" key={value}>
					<span>{value}</span>
				</div>
			))}
		</details>
	);
};

interface MenuItem {
	open: boolean;
	title: string;
	subValues: string[];
	styling: string;
}

const MenuItems: MenuItem[] = [
	{
		open: true,
		title: "Shopping",
		subValues: ["Vinterjackor", "Pufferjackor", "Kappa", "Trenchcoats"],
		styling: "",
	},
	{
		open: false,
		title: "Mina Sidor",
		subValues: ["Mina ordrar", "Mitt konto"],
		styling: "border-b-0 border-t-0",
	},
	{
		open: false,
		title: "Kundtjänst",
		subValues: ["Returpolicy", "Integritetspolicy"],
		styling: "border-b-0",
	},
];

export const DetailsItems = () => {
	return (
		<section className="sm:hidden">
			{MenuItems.map((item) => (
				<CreateDetailsMenuItem
					key={item.title}
					open={item.open}
					title={item.title}
					subValues={item.subValues}
					styling={item.styling}
				/>
			))}
			<p className="text-center border-2 pt-2 pb-2 sm:mb-8">{"\u00A9"} Freaky Fashion</p>
		</section>
	);
};
