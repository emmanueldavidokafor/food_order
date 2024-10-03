import { createContext, useReducer } from 'react';

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {},
});

function cartReducer(state, action) {
	if (action.type === 'ADD_ITEM') {
		// ....update the state to add a meal item
		// state.items.push(action.item);
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		let updatedItems = [...state.items];
		if (existingCartItemIndex > -1) {
			const existingItem = state.items[existingCartItemIndex];
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			// updatedItems.push({ ...action.item, quantity: 1 });
			updatedItems = [...state.items, { ...action.item, quantity: 1 }];
		}

		return { ...state, items: updatedItems };
	}

	if (action.type === 'REMOVE_ITEM') {
		// ....update the state to remove a meal item
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingCartItem = state.items[existingCartItemIndex];

		// if (existingCartItem.quantity === 1) {
		// 	const updatedItems = [...state.items];
		// 	updatedItems.splice(existingCartItemIndex, 1);
		// } else {
		// 	const updatedItem = {
		// 		...existingCartItem,
		// 		quantity: existingCartItem.quantity - 1,
		// 	};

		// 	updatedItems[existingCartItemIndex] = updatedItem;
		// }
		let updatedItems;
		if (existingCartItem.quantity === 1) {
			// Remove the item if quantity is 1
			updatedItems = state.items.filter((item) => item.id !== action.id);
			// return { ...state, items: updatedItems };
		} else {
			// Reduce the quantity
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = {
				...existingCartItem,
				quantity: existingCartItem.quantity - 1,
			};
			// return { ...state, items: updatedItems };
		}

		return { ...state, items: updatedItems };
	}

	return state;
}

export function CartContextProvider({ children }) {
	const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

	function addItem(item) {
		dispatchCartAction({ type: 'ADD_ITEM', item });
	}

	function removeItem(id) {
		dispatchCartAction({ type: 'REMOVE_ITEM', id });
	}

	const cartContext = {
		items: cart.items,
		addItem,
		removeItem,
	};
	console.log(cartContext);

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
}

export default CartContext;
