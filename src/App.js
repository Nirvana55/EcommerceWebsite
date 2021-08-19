import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import { createTheme, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useGlobalContext } from './components/useContext';
import Navbar from './Home/Navbar/Navbar';
import Sidemenu from './Home/Navbar/Navdrawer';
import Account from './Account/Account';
import Contact from './Contact/Contact';
import Footer from './footer/Footer';
import Error from './Error/Error';
import Cart from './Cart/Cart';
import Blog from './Blog/Blog';
import Wishlist from './Wishlist/Wishlist';
import Viewclothes from './View clothes/Viewclothes';

const App = () => {
	const darkTheme = createTheme({
		type: 'dark',
		palette: {
			primary: {
				main: '#000000',
			},
			secondary: {
				main: '#f9f9f9',
			},
		},
		typography: {
			fontFamily: 'Montserrat',
			fontWeightLight: 400,
			fontWeightRegular: 500,
			fontWeightMedium: 600,
			fontWeightBold: 700,
		},
		overrides: {
			MuiIconButton: {
				root: {
					padding: '8px',
				},
			},
			MuiBadge: {
				colorPrimary: {
					backgroundColor: '#b71c1c',
				},
			},
			MuiCardContent: {
				root: {
					padding: '16px 0',
				},
			},
		},
	});

	const lightTheme = createTheme({
		type: 'dark',
		palette: {
			primary: {
				main: '#1565c0',
			},
			secondary: {
				main: '#f9f9f9',
			},
			deleteIcon: {
				main: 'ff726f',
			},
		},
		typography: {
			fontFamily: 'Montserrat',
			fontWeightLight: 400,
			fontWeightRegular: 500,
			fontWeightMedium: 600,
			fontWeightBold: 700,
		},
		overrides: {
			MuiIconButton: {
				root: {
					padding: '8px',
				},
			},
			MuiBadge: {
				colorPrimary: {
					backgroundColor: '#b71c1c',
				},
			},
			MuiCardContent: {
				root: {
					padding: '16px 0',
				},
			},
		},
	});

	const { darkMode } = useGlobalContext();

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Router>
				<Navbar />
				<Sidemenu />
				<Paper color='primary'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/cart'>
							<Cart />
						</Route>
						<Route path='/wishlist'>
							<Wishlist />
						</Route>
						<Route path='/account'>
							<Account />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route path='/blog'>
							<Blog />
						</Route>
						<Route path='/viewclothes'>
							<Viewclothes />
						</Route>
						<Route path='*'>
							<Error />
						</Route>
					</Switch>
				</Paper>
				<Footer />
			</Router>
		</ThemeProvider>
	);
};

export default App;
