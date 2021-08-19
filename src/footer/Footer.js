import React from 'react';
import { Box, Divider } from '@material-ui/core';
import { Typography, Paper, IconButton } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => {
	return {
		borderBottoms: {
			borderBottom: '3px solid white',
			width: '10%',
		},

		links: {
			marginTop: '0.5rem',
			display: 'flex',
			flexDirection: 'column',
			padding: '0.2em 0',
		},
		hello: {
			padding: '0.3em 0',
			fontSize: '15px',
		},
		text: {
			marginTop: '0.5rem',
		},
		paper: {
			background: 'black',
			color: 'white',
			padding: '0.8em 0',
		},
		copy: {
			textAlign: 'center',
			padding: '1em',
		},
		socialIcons: {
			display: 'flex',
			justifyContent: 'center',
			padding: '1em',
		},
	};
});

function Footer() {
	const classes = useStyles();
	return (
		<>
			<Box bgcolor='black' color='white'>
				<footer className={classes.footer}>
					<Container maxWidth='xl'>
						<div className={classes.socialIcons}>
							<IconButton color='secondary'>
								<FacebookIcon />
							</IconButton>
							<IconButton color='secondary'>
								<TwitterIcon />
							</IconButton>
							<IconButton color='secondary'>
								<MailOutlineIcon />
							</IconButton>
						</div>
						<Grid container>
							<Grid item xs={12} sm={3}>
								<Paper className={classes.paper}>
									<Typography>Our Stories</Typography>
									<div className={classes.borderBottoms}></div>
									<div className={classes.links}>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Budhanilkantha
										</Link>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Taulung
										</Link>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Golfutar
										</Link>
									</div>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={3}>
								<Paper className={classes.paper}>
									<Typography>Information</Typography>
									<div className={classes.borderBottoms}></div>
									<div className={classes.links}>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											About Store
										</Link>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Contact
										</Link>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Latest News
										</Link>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Mens Collection
										</Link>
									</div>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={3}>
								<Paper className={classes.paper}>
									<Typography>Important</Typography>
									<div className={classes.borderBottoms}></div>
									<div className={classes.links}>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Privacy Policy
										</Link>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Terms and condition
										</Link>
										<Link
											className={classes.hello}
											variant='body2'
											color='secondary'
											href='/'>
											Return
										</Link>
									</div>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={3}>
								<Paper className={classes.paper}>
									<Typography>Information</Typography>
									<div className={classes.borderBottoms}></div>
									<div className={classes.text}>
										<Typography className={classes.hello}>
											N.K Fancy store is a collection of mens fashion which is
											ready to provide every goods you love
										</Typography>
										<Typography className={classes.hello}>
											<LocationOnIcon /> Budhanilkantha gate-3, Kathmandu
										</Typography>
										<Typography className={classes.hello}>
											<PhoneAndroidIcon /> Phone: +977-9843049235
										</Typography>
									</div>
								</Paper>
							</Grid>
						</Grid>
						<Divider className={classes.divider} />
						<div className={classes.copy}>
							<Typography>© 2021. All rights reserved. </Typography>
						</div>
					</Container>
				</footer>
			</Box>
		</>
	);
}

export default Footer;
