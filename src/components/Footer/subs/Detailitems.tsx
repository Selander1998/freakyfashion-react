const DetailsItems = () => {
	return (
		<section className="sm:hidden">
			<details open>
				<summary className="list-none border-2 border-l-0 border-r-0">Shopping</summary>
				<div className="footer-details-span">
					<span>Vinterjackor</span>
					<span>Pufferjackor</span>
					<span>Kappa</span>
					<span>Trenchcoats</span>
				</div>
			</details>
			<details>
				<summary className="list-none border-2 border-l-0 border-r-0 border-t-0 border-b-0">
					Mina Sidor
				</summary>
				<div className="footer-details-span">
					<span>Mina ordrar</span>
					<span>Mitt konto</span>
				</div>
			</details>
			<details>
				<summary className="list-none border-2 border-b-0 border-l-0 border-r-0">
					Kundtjänst
				</summary>
				<div className="footer-details-span">
					<span>Returpolicy</span>
					<span>Integritetspolicy</span>
				</div>
			</details>
			<p className="text-center border-2 pt-2 pb-2 sm:mb-8">&copy;Freaky Fashion</p>
		</section>
	);
};

export default DetailsItems;
