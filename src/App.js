import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Cart from './Pages/Cart';
import { createTheme, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors';
import { useGlobalContext } from './components/useContext';
import Navbar from './Navbar/Navbar';
import Sidemenu from './Navbar/Navdrawer';

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
					</Switch>
				</Paper>
			</Router>
		</ThemeProvider>
	);
};

export default App;
