import React from 'react';
import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useGlobalContext } from '../components/useContext';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => {
	return {
		firstNav: {
			display: 'flex',
			justifyContent: 'center',
			minHeight: '50px',
		},
		phoneNumber: {
			display: 'flex',
			fontSize: '11px',
			alignItems: 'center',
			letterSpacing: '2px',
		},
		phoneIcon: {
			fontSize: '14px',
			marginRight: '8px',
		},
		spanNumber: {
			textDecoration: 'underline',
		},
		shiftbar: {
			top: '6.5%',
		},
		navBar: {
			padding: '0px 5px !important',
			display: 'flex',
			justifyContent: 'space-between',
		},
		logo: {
			fontSize: '20px',
			fontWeight: 'bold',
		},
	};
});
const Navbar = () => {
	const classes = useStyles();
	const { handleSideMenu, badgeContents } = useGlobalContext();
	return (
		<>
			<Container maxWidth='xl'>
				<AppBar color='primary' elevation={1} position='absolute'>
					<Toolbar className={classes.firstNav}>
						<Typography className={classes.phoneNumber}>
							<PhoneIcon className={classes.phoneIcon} />
							Our Phone Number: &nbsp;
							<span className={classes.spanNumber}> +977-9818456725</span>
						</Typography>
					</Toolbar>
				</AppBar>
				<AppBar
					color='secondary'
					position='absolute'
					className={classes.shiftbar}
					elevation={0}>
					<Toolbar className={classes.navBar}>
						<IconButton onClick={() => handleSideMenu()}>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.logo}>N.K Fancy Store</Typography>
						<div className={classes.tools}>
							<IconButton>
								<PersonIcon />
							</IconButton>
							<IconButton>
								<Badge
									badgeContent={badgeContents}
									max={100}
									color='primary'
									className={classes.badge}>
									<ShoppingCartIcon />
								</Badge>
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</Container>
		</>
	);
};

export default Navbar;
