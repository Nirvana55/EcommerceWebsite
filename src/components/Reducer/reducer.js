import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_SIDEMENU':
			return { ...state, sideMenu: !state.sideMenu };
		case 'TOGGLE_DARK':
			return { ...state, darkMode: !state.darkMode };
		case 'ADDING_ITEMS':
			if (action.payload.type === 'ADD_CART') {
				let exist = state.cart.find(
					(item) => item.id === action.payload.product.id
				);
				if (exist) {
					alert('It is already in Cart');
					return { ...state };
				} else {
					alert('Item Added');
					return {
						...state,
						cart: [...state.cart, action.payload.product],
						cartBadge: state.cartBadge + 1,
					};
				}
			}
			if (action.payload.type === 'ADD_WISHLIST') {
				let exist = state.favourite.find(
					(item) => item.id === action.payload.product.id
				);
				let findIcons = state.cartData.find(
					(icons) => icons.id === action.payload.product.id
				);
				if (state.liked && exist) {
					alert('Liked item removed');
					return {
						...state,
						liked: false,
						favourite: state.favourite.filter(
							(item) => item.id !== action.payload.product.id
						),
						likedBadge: state.likedBadge - 1,
						cartData: state.cartData.map((items) => {
							let favouriteIcons = (findIcons.icons = (
								<FavoriteBorderIcon style={{ color: '#1565c0' }} />
							));
							return {
								...items,
								favouriteIcons,
							};
						}),
					};
				} else {
					alert('You Liked an item');
					return {
						...state,
						liked: true,
						favourite: [...state.favourite, action.payload.product],
						likedBadge: state.likedBadge + 1,
						cartData: state.cartData.map((items) => {
							let favouriteIcon = (findIcons.icons = (
								<FavoriteIcon style={{ color: 'red' }} />
							));
							return {
								...items,
								favouriteIcon,
							};
						}),
					};
				}
			}

		case 'REMOVE_ITEMS': {
			if (action.payload.type === 'REMOVE_CARTITEM') {
				const findId = state.cart.find((item) => item.id === action.payload.id);
				return {
					...state,
					cart: state.cart.filter((items) => items.id !== action.payload.id),
					cartBadge: state.cartBadge - findId.amount,
				};
			}
			if (action.payload.type === 'REMOVE_WISHLISTITEM') {
				let findIcons = state.cartData.find(
					(icons) => icons.id === action.payload.id
				);
				return {
					...state,
					favourite: state.favourite.filter(
						(items) => items.id !== action.payload.id
					),
					likedBadge: state.likedBadge - 1,
					cartData: state.cartData.map((items) => {
						let favouriteIcons = (findIcons.icons = (
							<FavoriteBorderIcon style={{ color: '#1565c0' }} />
						));
						return {
							...items,
							favouriteIcons,
						};
					}),
				};
			}
		}
		case 'CLEAR_ITEMS': {
			if (action.payload === 'CLEAR_CART') {
				return {
					...state,
					cart: [],
					cartBadge: 0,
				};
			}
			if (action.payload === 'CLEAR_WISHLIST') {
				return {
					...state,
					favourite: [],
					likedBadge: 0,
				};
			}
		}
		case 'TOOGLE_AMOUNT': {
			const toogleAmount = state.cart
				.map((items) => {
					if (items.id === action.payload.id) {
						if (action.payload.type === 'INCREASE_PRODUCT') {
							return { ...items, amount: items.amount + 1 };
						}
						if (action.payload.type === 'DECREASE_PRODUCT') {
							return { ...items, amount: items.amount - 1 };
						}
					}
					return items;
				})
				.filter((removeZero) => removeZero.amount !== 0);
			return {
				...state,
				cart: toogleAmount,
				cartBadge:
					action.payload.type === 'INCREASE_PRODUCT'
						? state.cartBadge + 1
						: state.cartBadge - 1,
			};
		}
		case 'CART_TOTAL': {
			let totalPrices = state.cart.reduce(
				(cartTotal, items) => {
					const { price, amount } = items;
					const totalCalc = price * amount;

					cartTotal.allTotal += totalCalc;
					return cartTotal;
				},
				{
					allTotal: 0,
				}
			);
			totalPrices = parseFloat(totalPrices.allTotal.toFixed(2));
			return {
				...state,
				totalPrice: totalPrices,
			};
		}

		case 'VIEW_CLOTHES': {
			let findClothesId = state.cartData.find(
				(items) => items.id === action.payload
			);

			return {
				...state,
				clothesData: [findClothesId],
			};
		}
		default:
			throw new Error('no matching action type');
	}
};
export default reducer;
