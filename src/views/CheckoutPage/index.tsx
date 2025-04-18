import { BasketList } from "../ListManager";

export const CheckoutPage = () => {
	return (
		<div>
			<BasketList />
			<div className="text-center text-2xl mt-6">Kunduppgifter</div>
			<form className="mt-4 flex flex-col">
				<label>Förnamn</label>
				<input className="border-2 mt-2 mb-4" type="text" />

				<label>Efternamn</label>
				<input className="border-2 mt-2 mb-4" type="text" />

				<label>E-post</label>
				<input className="border-2 mt-2 mb-4" type="email" />
				<fieldset className="border-2 flex flex-col">
					<legend className="ml-2">Adress</legend>

					<label className="ml-4 mt-4">Gata</label>
					<input className="border-2 mt-2 mb-4 ml-4 mr-4" type="text" />

					<label className="ml-4">Postnummer</label>
					<input className="border-2 mt-2 mb-4 ml-4 mr-4" type="text" />

					<label className="ml-4">Stad</label>
					<input className="border-2 mt-2 mb-4 ml-4 mr-4" type="text" />
				</fieldset>
			</form>
			<div className="flex flex-wrap p-4 pl-2 gap-2">
				<input type="checkbox" />
				<label>Jag vill ta emot nyhetsbrev</label>
			</div>
			<div className="flex justify-center gap-3 pt-6">
				<button className="border-2 text-2xl pt-2 pb-2 pr-8 pl-8 cursor-pointer">Köp</button>
			</div>
		</div>
	);
};
