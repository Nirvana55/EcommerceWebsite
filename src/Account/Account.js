import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useGlobalContext } from '../components/useContext';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { TextField } from '@material-ui/core';
import { Container, Button, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		accountBar: {
			top: '13.5%',
			[theme.breakpoints.up('md')]: {
				top: '16%',
			},
		},
		accountNav: {
			display: 'flex',
			flexDirection: 'column',
			padding: '0.3em 0 0.2em 0',
		},
		link: {
			textDecoration: 'none',
			color: '#f9f9f9',
			fontSize: '15px',
			display: 'flex',
			alignItems: 'center',
		},
		homeIcon: {
			fontSize: '15px',
		},
		breadcrumbs: {
			display: 'flex',
			alignItems: 'center',
			padding: '0.2em 0 0 0',
		},
		accountForm: {
			marginTop: '11rem',
			padding: '1em 1em 2em 1em',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				justifyContent: 'space-around',
				padding: '4em 0',
			},
		},
		containers: {
			padding: '0 !important',
		},
		textField: {
			marginTop: '10px',
			marginBottom: '10px',
		},
		forgotPass: {
			color: 'grey',
			textDecoration: 'none',
			fontSize: '10px',
			fontWeight: '500',
			letterSpacing: '1px',
		},
		login: {
			fontSize: '22px',
			fontWeight: '600',
		},
		loginBtn: {
			marginTop: '10px',
			cursor: 'pointer',
		},
		accountRegister: {
			textAlign: 'center',
			padding: '0.8em 0',
			[theme.breakpoints.up('md')]: {
				flexBasis: '650px',
				marginLeft: '20px',
				padding: '0',
				paddingLeft: '1.5em',
			},
		},
		dividers: {
			margin: '1.5em 0 0 0',
			backgroundColor: 'black',
		},
		registerText: {
			padding: '0.5em 0 0 0',
			fontWeight: '600',
		},
		registerBody: {
			padding: '0.8em 0 1em 0 ',
		},
		form: {
			[theme.breakpoints.up('md')]: {
				borderRight: '3px solid #f0f0f0',
				paddingRight: '3.5em',
				borderRadius: '5px',
			},
		},
		myActText: {
			fontSize: '20px',
		},
	};
});

function Account() {
	const classes = useStyles();
	return (
		<>
			<AppBar position='absolute' className={classes.accountBar} elevation={0}>
				<Toolbar className={classes.accountNav}>
					<Typography className={classes.myActText}>My Account</Typography>
					<Breadcrumbs
						aria-label='breadcrumb'
						className={classes.breadcrumbs}
						color='secondary'>
						<Link to='/' className={classes.link}>
							<HomeIcon className={classes.homeIcon} /> Home
						</Link>
						<Typography color='secondary'>Account</Typography>
					</Breadcrumbs>
				</Toolbar>
			</AppBar>
			<Container maxWidth='md' className={classes.containers}>
				<div className={classes.accountForm}>
					<form noValidate autoComplete='off' className={classes.form}>
						<Typography className={classes.login}>Login</Typography>
						<TextField
							variant='outlined'
							color='primary'
							label='Email'
							fullWidth
							required
							className={classes.textField}></TextField>
						<TextField
							variant='outlined'
							color='primary'
							label='Password'
							fullWidth
							required
							className={classes.textField}></TextField>
						<Link className={classes.forgotPass} to='/'>
							Forgot Password?
						</Link>
						<br />
						<Button
							className={classes.loginBtn}
							size='large'
							fullWidth
							variant='outlined'
							color='primary'>
							Login
						</Button>
					</form>
					<Divider className={classes.dividers} />
					<div className={classes.accountRegister}>
						<Typography variant='h5' className={classes.registerText}>
							Register
						</Typography>
						<Typography variant='body2' className={classes.registerBody}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic
							dignissimos porro itaque ipsum repellat omnis ad velit laborum
							iure praesentium error, alias quod, iste quibusdam nihil, maiores
						</Typography>
						<Button variant='contained' color='primary'>
							Register
						</Button>
					</div>
				</div>
			</Container>
		</>
	);
}

export default Account;
