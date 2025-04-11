interface DetailsMenuItemProps {
	open: boolean;
	title: string;
	subValues: string[];
	styling?: string;
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

const DesktopMenuColumn = ({ title, subValues }: { title: string; subValues: string[] }) => {
	return (
		<div className="flex flex-col">
			<h3 className="font-bold mb-2">{title}</h3>
			{subValues.map((value) => (
				<span key={value} className="mb-1 block">
					{value}
				</span>
			))}
		</div>
	);
};

const MenuItems: DetailsMenuItemProps[] = [
	{
		open: true,
		title: "Shopping",
		subValues: ["Vinterjackor", "Pufferjackor", "Kappa", "Trenchcoats"],
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
	},
];

export const DetailsItems = () => {
	return (
		<div className="bg-gray-200">
			<div className="sm:hidden">
				{MenuItems.map((item) => (
					<CreateDetailsMenuItem
						key={item.title}
						open={item.open}
						title={item.title}
						subValues={item.subValues}
						styling={item.styling}
					/>
				))}
				<p className="text-center pt-6">{"\u00A9"} Freaky Fashion</p>
			</div>

			<div className="hidden sm:block">
				<div className="border border-gray-800 p-4">
					<div className="grid grid-cols-3 gap-8">
						{MenuItems.map((item) => (
							<DesktopMenuColumn key={item.title} title={item.title} subValues={item.subValues} />
						))}
					</div>
					<p className="text-center pt-6 mb-2">{"\u00A9"} Freaky Fashion</p>
				</div>
			</div>
		</div>
	);
};
