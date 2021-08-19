import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './Reducer/reducer';
import { Productdata } from '../Home/Product/Productdata';

const defaultData = {
	cart: [], // for the cart
	favourite: [], // for the favourite wishlist
	loading: true, // for loading
	darkMode: false, // for darkmode
	sideMenu: false, // mobile side Menu
	searchText: '', // for searching text
	photoIndex: 0, // for finding the index of photo
	liked: false, // for wishlisht backgorund color
	cartBadge: 0,
	likedBadge: 0,
	color: '',
	totalPrice: 0, // for the total price of cart
	cartData: Productdata,
	clothesData: [],
};

const ShoppingContext = React.createContext();

const ShoppingProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultData);

	const handleSideMenu = () => {
		dispatch({ type: 'TOGGLE_SIDEMENU' });
	};

	const handleDarkMode = () => {
		dispatch({ type: 'TOGGLE_DARK' });
	};

	const handleLiked = (id, product) => {
		dispatch({ type: 'TOGGLE_LIKED', payload: { id, product } });
	};

	const handleBuyItems = (product, type) => {
		dispatch({ type: 'ADDING_ITEMS', payload: { product, type } });
	};

	const handleRemoveItem = (id, type) => {
		dispatch({ type: 'REMOVE_ITEMS', payload: { id, type } });
	};

	const handleClearCart = (type) => {
		dispatch({ type: 'CLEAR_ITEMS', payload: type });
	};

	const toggleCartPrice = (id, type) => {
		dispatch({ type: 'TOOGLE_AMOUNT', payload: { id, type } });
	};

	const handleViewClothes = (id) => {
		dispatch({ type: 'VIEW_CLOTHES', payload: id });
	};

	useEffect(() => {
		dispatch({ type: 'CART_TOTAL' });
	}, [state.cart]);

	return (
		<ShoppingContext.Provider
			value={{
				...state,
				handleSideMenu,
				handleDarkMode,
				handleLiked,
				handleBuyItems,
				handleRemoveItem,
				handleClearCart,
				toggleCartPrice,
				handleViewClothes,
			}}>
			{children}
		</ShoppingContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(ShoppingContext);
};

export { useGlobalContext, ShoppingProvider };
