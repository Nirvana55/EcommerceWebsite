import React, { useState, useContext, useReducer } from 'react';
import { reducer } from '../Reducer/reducer';

const defaultData = {
	cart: [],
	loading: true,
	amount: 0,
	total: 0,
	darkMode: false,
	sideMenu: false,
	searchText: '',
	badgeContents: 1,
	photoIndex: 0,
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

	return (
		<ShoppingContext.Provider
			value={{ ...state, handleSideMenu, handleDarkMode }}>
			{children}
		</ShoppingContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(ShoppingContext);
};

export { useGlobalContext, ShoppingProvider };
