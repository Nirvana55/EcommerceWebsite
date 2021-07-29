import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
	Divider,
	Drawer,
	InputAdornment,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	IconButton,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { useGlobalContext } from '../components/useContext';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => {
	return {
		drawerWidth: {
			padding: '0.1rem 0.5rem',
		},
		closeDiv: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		closeBtn: {
			padding: '15px 0',
		},
		signText: {
			padding: '0.5rem 0.8rem',
		},
		searchBox: {
			margin: '0.5rem 0',
		},
		active: {
			background: '#1976d2',
			borderRadius: '5px',
		},
	};
});

function Sidemenu() {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const { sideMenu, searchText, handleSideMenu, handleDarkMode } =
		useGlobalContext();

	const firstMenuItems = [
		{
			text: 'Home',
			icons: <HomeIcon />,
			path: '/',
		},
		{
			text: 'About',
			icons: <InfoOutlinedIcon />,
			path: '/about',
		},
		{
			text: 'Shop',
			icons: <LocalMallOutlinedIcon />,
			path: '/shop',
		},
	];
	const secondMenu = [
		{
			text: 'Policy',
			icons: <SettingsIcon />,
			path: '/policy',
		},
		{
			text: 'Sign in',
			icons: <AccountBoxIcon />,
			path: '/login',
		},
	];

	const renderFirstlist = () => {
		return (
			<List className={classes.listItems}>
				{firstMenuItems.map((menu, index) => {
					return (
						<ListItem
							onClick={() => history.push(menu.path)}
							key={index}
							className={
								location.pathname === menu.path ? classes.active : null
							}
							button>
							<ListItemIcon>{menu.icons}</ListItemIcon>
							<ListItemText>{menu.text}</ListItemText>
						</ListItem>
					);
				})}
			</List>
		);
	};
	const renderSecondlist = () => {
		return (
			<List className={classes.listItems}>
				{secondMenu.map((menu, index) => {
					return (
						<ListItem
							onClick={() => history.push(menu.path)}
							key={index}
							className={
								location.pathname === menu.path ? classes.active : null
							}
							button>
							<ListItemIcon>{menu.icons}</ListItemIcon>
							<ListItemText>{menu.text}</ListItemText>
						</ListItem>
					);
				})}
			</List>
		);
	};

	return (
		<>
			<Drawer
				variant='persistent'
				className={classes.navDrawer}
				open={sideMenu}
				onClose={handleSideMenu}
				classes={{ paper: classes.drawerWidth }}
				anchor='left'>
				<div className={classes.closeDiv}>
					<IconButton className={classes.closeBtn} onClick={handleSideMenu}>
						<ArrowBackIcon />
					</IconButton>
					<IconButton onClick={() => handleDarkMode()}>
						<NightsStayIcon />
					</IconButton>
				</div>
				<Divider />
				<div className={classes.searchBox}>
					<TextField
						type='text'
						variant='outlined'
						label='Search'
						fullWidth
						color='primary'
						value={searchText}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</div>
				<Divider />
				{renderFirstlist()}
				<Divider />
				{renderSecondlist()}
				<Divider />
				<Typography className={classes.signText}>Personal Info</Typography>
			</Drawer>
		</>
	);
}

export default Sidemenu;
