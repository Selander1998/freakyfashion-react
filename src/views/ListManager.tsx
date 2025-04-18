import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ProductCardProps } from "./ProductDetailsPage/subs/ProductCard";
import { groupBy } from "./BasketPage/groupBy";

export const BasketList: React.FC = () => {
	const [cartItems, setCartItems] = useState<ProductCardProps["article"][]>(
		JSON.parse(localStorage.getItem("cart") || "[]")
	);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

	const totalAmount = (items: ProductCardProps["article"][]) => {
		return items.map((item) => item.price).reduce((a, b) => a + b, 0);
	};

	const individualAmount = (items: ProductCardProps["article"][]) => {
		return totalAmount(items) / items.length;
	};

	const onItemCountChange = (itemName: string, event: React.ChangeEvent<HTMLInputElement>) => {
		const newCount = parseInt(event.target.value);
		const currentItems = cartItems.filter((item) => item.name === itemName);
		const updatedList = cartItems.filter((item) => item.name !== itemName);
		const newListItems = [...updatedList, ...Array(newCount).fill(currentItems[0])];

		setCartItems(newListItems);
	};

	const onItemDelete = (itemName: string) => {
		const updatedList = cartItems.filter((item) => item.name !== itemName);
		setCartItems(updatedList);
	};

	const groupedItems = groupBy(cartItems, (item: ProductCardProps["article"]) => item.name);

	return (
		<>
			<div className="sm:hidden">
				<ListPage
					pageTitle="Varukorgen"
					cartItems={cartItems}
					groupedItems={groupedItems}
					totalAmount={totalAmount}
					individualAmount={individualAmount}
					onItemCountChange={onItemCountChange}
					onItemDelete={onItemDelete}
				/>
			</div>
			<div className="hidden sm:block">
				<TableList
					pageTitle="Varukorgen"
					cartItems={cartItems}
					groupedItems={groupedItems}
					totalAmount={totalAmount}
					individualAmount={individualAmount}
					onItemCountChange={onItemCountChange}
					onItemDelete={onItemDelete}
				/>
			</div>
		</>
	);
};

interface ListPageProps {
	pageTitle: string;
	cartItems: ProductCardProps["article"][];
	groupedItems: Record<string, ProductCardProps["article"][]>;
	totalAmount: (items: ProductCardProps["article"][]) => number;
	individualAmount: (items: ProductCardProps["article"][]) => number;
	onItemCountChange: (itemName: string, event: React.ChangeEvent<HTMLInputElement>) => void;
	onItemDelete: (itemName: string) => void;
}

export const ListPage: React.FC<ListPageProps> = ({
	pageTitle,
	cartItems,
	groupedItems,
	totalAmount,
	individualAmount,
	onItemCountChange,
	onItemDelete,
}) => {
	const isEmpty = (cartItems?.length ?? 0) === 0;
	if (isEmpty) {
		return <div>{pageTitle} is empty</div>;
	}

	return (
		<div>
			<h1 className="text-center text-2xl font-bold mb-4">{pageTitle}</h1>
			{Object.entries(groupedItems).map(([itemName, items]) => (
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
		</div>
	);
};

interface TableListProps {
	pageTitle: string;
	cartItems: ProductCardProps["article"][];
	groupedItems: Record<string, ProductCardProps["article"][]>;
	totalAmount: (items: ProductCardProps["article"][]) => number;
	individualAmount: (items: ProductCardProps["article"][]) => number;
	onItemCountChange: (itemName: string, event: React.ChangeEvent<HTMLInputElement>) => void;
	onItemDelete: (itemName: string) => void;
}

export const TableList: React.FC<TableListProps> = ({
	pageTitle,
	cartItems,
	groupedItems,
	totalAmount,
	individualAmount,
	onItemCountChange,
	onItemDelete,
}) => {
	if (cartItems.length === 0) {
		return <div>{pageTitle} is empty</div>;
	}

	return (
		<div>
			<h1 className="text-center text-2xl font-bold mb-4">{pageTitle}</h1>
			<table className="table w-full [&_td]:p-1 [&_th]:p-1">
				<colgroup className="border-2">
					<col />
					<col />
					<col />
					<col />
				</colgroup>
				<thead>
					<tr className="text-left">
						<th scope="col">Produkt</th>
						<th scope="col">Pris</th>
						<th scope="col">Totalt</th>
						<th scope="col">Antal</th>
					</tr>
				</thead>
				<tbody className="[&>tr:nth-child(odd)]:bg-gray-300">
					{Object.entries(groupedItems).map(([itemName, items]) => (
						<tr key={itemName}>
							<td>{itemName}</td>
							<td>{individualAmount(items).toFixed(2)}kr</td>
							<td>{totalAmount(items)}kr</td>
							<td className="flex items-center space-x-2">
								<input
									type="number"
									value={items.length}
									onChange={(event) => onItemCountChange(itemName, event)}
									min="0"
									className="w-16 p-1 border rounded"
								/>
								<FontAwesomeIcon
									icon={faTrashCan}
									className="cursor-pointer"
									onClick={() => onItemDelete(itemName)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
