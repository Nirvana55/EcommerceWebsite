import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Container,
	TextField,
	Button,
	Typography,
	createTheme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { IconButton } from '@material-ui/core';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import { useMediaQuery } from '@material-ui/core';
import Mapcontainer from './Map';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
	return {
		map: {
			marginTop: '6.8rem',

			[theme.breakpoints.up('md')]: {
				marginTop: '8rem',
			},
		},
		formFields: {
			marginTop: '10px',
			padding: '0.8em 0',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
			},
		},
		inputs: {
			marginTop: '10px',
			marginBottom: '10px',
		},
		detailList: {
			display: 'flex',

			padding: '0.5em 0',
		},
		detailIcon: {
			fontSize: '30px',
			alignSelf: 'flex-start',
		},
		detailText: {
			padding: '0 0.5em',
		},
		contactDetails: {
			marginTop: '5px',
			[theme.breakpoints.up('md')]: {
				marginTop: '0',
				padding: '0',
				flexBasis: '680px',
				marginLeft: '3rem',
			},
		},
		Btn: {
			marginTop: '10px',
		},
		socialIcons: {
			padding: '1em 0',
		},
		facebook: {
			backgroundColor: '#4267B2',
		},
		insta: {
			backgroundColor: '#8a3ab9',
			marginLeft: '10px',
		},
		mail: {
			backgroundColor: '#FAD02C',
			marginLeft: '10px',
		},
		textFields: {
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				justifyContent: 'space-between',
			},
		},
		input: {
			marginLeft: '5px',
			marginBottom: '10px',
		},
		textHead: {
			paddingBottom: '1em',
			fontWeight: '600',
		},
		infoText: {
			padding: '0.5em',
			[theme.breakpoints.up('md')]: {
				padding: '0',
			},
		},
		form: {
			[theme.breakpoints.up('md')]: {
				borderRight: '3px solid #f0f0f0',
				paddingRight: '3.5em',
				borderRadius: '5px',
			},
		},
	};
});

function Contact() {
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<>
			<div className={classes.map}>
				<Mapcontainer />
			</div>
			<Container maxWidth='md'>
				<div className={classes.formFields}>
					<form noValidate autoComplete='off' className={classes.form}>
						<Typography className={classes.textHead}>
							Get in Touch With Us
						</Typography>
						{matches ? (
							<div className={classes.textFields}>
								<TextField
									variant='outlined'
									color='primary'
									label='Your Name'
									type='text'
									required
									size='small'></TextField>
								<TextField
									variant='outlined'
									color='primary'
									label='Your Email'
									type='text'
									size='small'
									required
									className={classes.input}></TextField>
							</div>
						) : (
							<div className={classes.textFields}>
								<TextField
									variant='outlined'
									color='primary'
									label='Your Name'
									type='text'
									fullWidth
									required
									className={classes.inputs}></TextField>
								<TextField
									variant='outlined'
									color='primary'
									label='Your Email'
									type='text'
									fullWidth
									required
									className={classes.inputs}></TextField>
							</div>
						)}
						<TextField
							variant='outlined'
							color='primary'
							label='Your Phonenumber'
							fullWidth
							required
							type='text'
							className={classes.inputs}></TextField>
						<TextField
							variant='outlined'
							color='primary'
							label='Your Message'
							fullWidth
							multiline
							rows={7}
							required
							type='text'
							className={classes.inputs}></TextField>
						<Button variant='contained' color='primary' className={classes.Btn}>
							Send a message
						</Button>
					</form>
					<div className={classes.contactDetails}>
						<div>
							<Typography variant='h6' className={classes.infoText}>
								Information About Us
							</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
								minima magni molestiae reiciendis est alias fugiat excepturi
								quaerat suscipit animi illo vero corporis, dolore perspiciatis?
								Debitis fuga suscipit dolores dolorum? Porro vel cupiditate,
							</Typography>
						</div>
						<div className={classes.contactInfo}>
							<Typography variant='h6' style={{ paddingTop: '0.5em ' }}>
								Contact Us
							</Typography>
							<div className={classes.detailList}>
								<EmailIcon className={classes.detailIcon} />
								<span className={classes.detailText}>
									<Typography variant='body2'>Tel: 9818847634</Typography>
									<Typography variant='body2'>Email: asd@gmail.com</Typography>
								</span>
							</div>
							<div className={classes.detailList}>
								<NearMeIcon className={classes.detailIcon} />
								<span className={classes.detailText}>
									<Typography variant='body2'>
										Budhanilkantha Kathmandu
									</Typography>
									<Typography variant='body2'>Bagmati, Nepal</Typography>
								</span>
							</div>
							<div className={classes.detailList}>
								<AccessTimeIcon className={classes.detailIcon} />
								<span className={classes.detailText}>
									<Typography variant='body2'>Support Forum</Typography>
									<Typography variant='body2'>for 24hr</Typography>
								</span>
							</div>
							<div className={classes.detailList}>
								<AirplanemodeActiveIcon className={classes.detailIcon} />
								<span className={classes.detailText}>
									<Typography variant='body2'>Free Standard Shiping</Typography>
									<Typography variant='body2'>on all orders</Typography>
								</span>
							</div>
							<div className={classes.socialIcons}>
								<IconButton className={classes.facebook} color='secondary'>
									<FacebookIcon />
								</IconButton>
								<IconButton className={classes.insta} color='secondary'>
									<InstagramIcon />
								</IconButton>
								<IconButton className={classes.mail} color='secondary'>
									<MailRoundedIcon />
								</IconButton>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

export default Contact;
