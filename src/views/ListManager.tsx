import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProductCardProps } from "./ProductDetailsPage/subs/ProductCard";
import { groupBy } from "./BasketPage/groupBy";

interface ListPageProps {
	pageTitle: string;
	buttonText: string;
	buttonLink?: string;
	onButtonClick?: () => void;
}

export const ListPage: React.FC<ListPageProps> = ({
	pageTitle,
	buttonText,
	buttonLink,
	onButtonClick,
}) => {
	const [listState, setListState] = useState<ProductCardProps["article"][]>(
		JSON.parse(localStorage.getItem("cart") || "[]")
	);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(listState));
	}, [listState]);

	const totalAmount = (items: ProductCardProps["article"][]) => {
		return items.map((item) => item.price).reduce((a, b) => a + b, 0);
	};

	const individualAmount = (items: ProductCardProps["article"][]) => {
		return totalAmount(items) / items.length;
	};

	const onItemCountChange = (itemName: string, event: React.ChangeEvent<HTMLInputElement>) => {
		const newCount = parseInt(event.target.value);
		const currentItems = listState.filter((item) => item.name === itemName);
		const updatedList = listState.filter((item) => item.name !== itemName);
		const newListItems = [...updatedList, ...Array(newCount).fill(currentItems[0])];

		setListState(newListItems);
	};

	const onItemDelete = (itemName: string) => {
		const updatedList = listState.filter((item) => item.name !== itemName);
		setListState(updatedList);
	};

	const group = groupBy(listState, (item: ProductCardProps["article"]) => item.name);

	if (listState.length === 0) {
		return <div>{pageTitle} is empty</div>;
	}

	return (
		<div>
			<h1 className="text-center text-2xl font-bold mb-4">{pageTitle}</h1>
			{Object.entries(group).map(([itemName, items]) => (
				<div key={itemName} className="relative p-4 m-1 border-2">
					<div className="flex justify-between items-center mb-2">
						<h1 className="text-lg font-semibold">
							{items.length} x {itemName}
						</h1>
						<div className="font-medium">{totalAmount(items)}kr</div>
					</div>
					<div className="flex justify-between">
						<div className="pt-1">{individualAmount(items).toFixed(2)}kr</div>
						<div className="flex justify-end items-center space-x-2">
							<input
								type="number"
								value={items.length}
								onChange={(event) => onItemCountChange(itemName, event)}
								min="0"
								className="w-20 p-1 border rounded"
							/>
							<FontAwesomeIcon
								icon={faTrashCan}
								className="cursor-pointer"
								onClick={() => onItemDelete(itemName)}
							/>
						</div>
					</div>
				</div>
			))}
			<div className="flex justify-center pt-6">
				{buttonLink ? (
					<Link to={buttonLink}>
						<button className="border-2 text-2xl pt-2 pb-2 pr-8 pl-8 cursor-pointer">
							{buttonText}
						</button>
					</Link>
				) : (
					<button
						className="border-2 text-2xl pt-2 pb-2 pr-8 pl-8 cursor-pointer"
						onClick={onButtonClick}>
						{buttonText}
					</button>
				)}
			</div>
		</div>
	);
};
