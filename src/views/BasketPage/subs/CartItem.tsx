import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ProductCardProps } from "../../ProductDetailsPage/subs/ProductCard";

interface CartItemProps {
	itemName: string;
	items: ProductCardProps["article"][];
	onItemCountChange: (itemName: string, event: React.ChangeEvent<HTMLInputElement>) => void;
	onDelete?: (itemName: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
	itemName,
	items,
	onItemCountChange,
	onDelete,
}) => {
	const totalAmount = (items: ProductCardProps["article"][]) => {
		return items.map((item) => item.price).reduce((a, b) => a + b, 0);
	};

	const individualAmount = (items: ProductCardProps["article"][]) => {
		return totalAmount(items) / items.length;
	};

	return (
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
					{onDelete && (
						<FontAwesomeIcon
							icon={faTrashCan}
							className="cursor-pointer"
							onClick={() => onDelete(itemName)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
