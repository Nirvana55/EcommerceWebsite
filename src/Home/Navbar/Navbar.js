import React from 'react';
import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	List,
	ListItem,
	createTheme,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useGlobalContext } from '../../components/useContext';
import Badge from '@material-ui/core/Badge';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useMediaQuery } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const theme = createTheme({});

const useStyles = makeStyles((theme) => {
	return {
		firstNav: {
			display: 'flex',
			justifyContent: 'center',
			minHeight: '50px',
			[theme.breakpoints.up('md')]: {
				justifyContent: 'space-between',
			},
		},
		phoneNumber: {
			display: 'flex',
			fontSize: '11px',
			alignItems: 'center',
			letterSpacing: '2px',
			[theme.breakpoints.up('sm')]: {
				letterSpacing: '0px',
				fontSize: '13px',
			},
		},
		myAccount: {
			display: 'flex',
			alignItems: 'center',
			letterSpacing: '0px',
			fontSize: '13px',
			cursor: 'pointer',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
		menuList: {
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
		firstNavlist: {
			fontSize: '13px',
			marginLeft: '10px',
			cursor: 'pointer',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
		icon: {
			fontSize: '14px',
			marginRight: '5px',
		},
		spanNumber: {
			textDecoration: 'underline',
			fontSize: '11px',
		},
		shiftbar: {
			top: '6.1%',
		},
		navBar: {
			padding: '0px 5px !important',
			display: 'flex',
			justifyContent: 'space-between',
			[theme.breakpoints.up('sm')]: {
				padding: '0px 16px !important',
			},
		},
		logo: {
			fontSize: '20px',
			fontWeight: 'bold',
		},
		listItems: {
			padding: '0px 14px',
		},
		secondNavlist: {
			marginLeft: '20px',
			fontSize: '13px',
			textTransform: 'uppercase',
			display: 'flex',
			alignItems: 'center',
			cursor: 'pointer',
		},
		home: {
			fontSize: '13px',
			textTransform: 'uppercase',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
		},
		cartMoney: {
			fontSize: '12px',
			fontWeight: 'bold',
			color: 'black',
			marginLeft: '0.8rem',
			cursor: 'pointer',
		},
		tools: {
			display: 'flex',
			alignItems: 'center',
		},
		login: {
			fontSize: '12px',
			fontStyle: 'italic',
			fontWeight: 'bold',
			padding: '0 10px',
			marginTop: '1.8rem',
			textDecoration: 'none',
		},
		register: {
			borderRight: '2px solid #f0f0f0',
			height: '80px',
		},
		cartBtn: {
			display: 'flex',
			alignItems: 'center',
		},
		expandIcon: {
			fontSize: '12px',
		},
		link: {
			textDecoration: 'none',

			color: '#f9f9f9',
		},
		links: {
			textDecoration: 'none',
			color: 'black',
		},
		navlink: {
			textDecoration: 'none',
			color: 'black',
		},
	};
});

const Navbar = () => {
	const classes = useStyles();
	const { handleSideMenu, likedBadge, cartBadge } = useGlobalContext();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const secondNav = () => {
		return (
			<AppBar
				color='secondary'
				position='absolute'
				className={classes.shiftbar}
				elevation={0}>
				<Toolbar className={classes.navBar}>
					<List>
						<ListItem className={classes.listItems}>
							<Link to='/' className={classes.navlink}>
								<Typography className={classes.home}>
									Home
									<ExpandMoreIcon className={classes.expandIcon} />
								</Typography>
							</Link>
							<Link to='/shop' className={classes.navlink}>
								<Typography className={classes.secondNavlist}>
									Shop
									<ExpandMoreIcon className={classes.expandIcon} />
								</Typography>
							</Link>

							<Link to='/blog' className={classes.navlink}>
								<Typography className={classes.secondNavlist}>
									Blog
									<ExpandMoreIcon className={classes.expandIcon} />
								</Typography>
							</Link>
							<Link to='/features' className={classes.navlink}>
								<Typography className={classes.secondNavlist}>
									Features
									<ExpandMoreIcon className={classes.expandIcon} />
								</Typography>
							</Link>
						</ListItem>
					</List>
					<Typography className={classes.logo}>N.K Fancy Store</Typography>

					<div className={classes.tools}>
						<div className={classes.register}>
							<Link to='/contact' className={classes.links}>
								<Typography className={classes.login}>
									Login / Register
								</Typography>
							</Link>
						</div>
						<div className={classes.toolIcons}>
							<Link to='/account'>
								<IconButton>
									<PersonIcon />
								</IconButton>
							</Link>
							<Link to='/wishlist'>
								<IconButton>
									<Badge
										badgeContent={likedBadge}
										max={100}
										color='primary'
										className={classes.badge}>
										<FavoriteBorderIcon />
									</Badge>
								</IconButton>
							</Link>
						</div>
						<div className={classes.cartBtn}>
							<Link to='/cart'>
								<IconButton>
									<Badge
										badgeContent={cartBadge}
										max={100}
										color='primary'
										className={classes.badge}>
										<ShoppingCartIcon />
									</Badge>
								</IconButton>
							</Link>
							<Typography className={classes.cartMoney}>0 / $0.00</Typography>
						</div>
					</div>
				</Toolbar>
			</AppBar>
		);
	};
	return (
		<>
			<Container maxWidth='xl'>
				<AppBar color='primary' elevation={1} position='absolute'>
					<Toolbar className={classes.firstNav}>
						<Typography className={classes.phoneNumber}>
							<PhoneIcon className={classes.icon} />
							Our Phone Number: &nbsp;
							<span className={classes.spanNumber}> +977-9818456725</span>
						</Typography>
						<div className={classes.menuList}>
							<Link to='/account' className={classes.link}>
								<Typography className={classes.myAccount}>
									<AccountCircleIcon className={classes.icon} />
									My Account
								</Typography>
							</Link>
							<Link to='/cart' className={classes.link}>
								<Typography className={classes.firstNavlist}>
									My Cart
								</Typography>
							</Link>
							<Link to='/' className={classes.link}>
								<Typography className={classes.firstNavlist}>
									Location
								</Typography>
							</Link>
							<Link to='/Contact' className={classes.link}>
								<Typography className={classes.firstNavlist}>
									Contact Us
								</Typography>
							</Link>
						</div>
					</Toolbar>
				</AppBar>
				{matches ? (
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
								<div className={classes.toolIcons}>
									<Link to='/account'>
										<IconButton>
											<PersonIcon />
										</IconButton>
									</Link>
									<Link to='/cart'>
										<IconButton>
											<Badge
												badgeContent={cartBadge}
												max={100}
												color='primary'
												className={classes.badge}>
												<ShoppingCartIcon />
											</Badge>
										</IconButton>
									</Link>
								</div>
							</div>
						</Toolbar>
					</AppBar>
				) : (
					secondNav()
				)}
			</Container>
		</>
	);
};

export default Navbar;
