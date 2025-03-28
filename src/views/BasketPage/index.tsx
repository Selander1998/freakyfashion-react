import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductCardProps } from "../ProductDetailsPage/subs/ProductCard";
import { groupBy } from "./groupBy";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const BasketPage = () => {
	const [cartState, setCartState] = useState<ProductCardProps["article"][]>(
		JSON.parse(localStorage.getItem("cart") || "[]")
	);

	const individualAmount = (items: ProductCardProps["article"][]) => {
		return totalAmount(items) / items.length;
	};

	const totalAmount = (items: ProductCardProps["article"][]) => {
		const totalPrice: number = items.map((item) => item.price).reduce((a, b) => a + b, 0);
		return totalPrice;
	};

	const onItemCountChange = (itemName: string, event: React.ChangeEvent<HTMLInputElement>) => {
		const newCount = parseInt(event.target.value);
		const currentItems = cartState.filter((item) => item.name === itemName);
		const updatedCart = cartState.filter((item) => item.name !== itemName);
		const newCartItems = [...updatedCart, ...Array(newCount).fill(currentItems[0])];

		setCartState(newCartItems);
		localStorage.setItem("cart", JSON.stringify(newCartItems));
	};

	const group = groupBy(cartState, (item: ProductCardProps["article"]) => item.name);

	if (cartState.length === 0) {
		return <div>Cart is empty</div>;
	}

	return (
		<div>
			{Object.entries(group).map(([itemName, items]) => (
				<div key={itemName} className="relative p-4 m-1 border-2">
					<div className="flex justify-between items-center mb-2">
						<h1 className="text-lg font-semibold">
							{items.length} x {itemName}
						</h1>
						<div className="font-medium">{totalAmount(items)}kr</div>
					</div>
					<div className="flex justify-between">
						<div className="pt-1">{individualAmount(items)}kr</div>
						<div className="flex justify-end items-center space-x-2">
							<input
								type="number"
								value={items.length}
								onChange={(event) => onItemCountChange(itemName, event)}
								min="0"
								className="w-20 p-1 border rounded"
							/>
							<FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
						</div>
					</div>
				</div>
			))}
			<div className="flex justify-center pt-6">
				<Link to="/checkout">
					<button className="border-2 text-2xl pt-2 pb-2 pr-8 pl-8 cursor-pointer">
						Till kassan
					</button>
				</Link>
			</div>
		</div>
	);
};
