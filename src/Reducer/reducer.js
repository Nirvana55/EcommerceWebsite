export const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_SIDEMENU':
			return { ...state, sideMenu: !state.sideMenu };
		case 'TOGGLE_DARK':
			return { ...state, darkMode: !state.darkMode };
		default:
			return state;
	}
};
