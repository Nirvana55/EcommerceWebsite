import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { useGlobalContext } from '../components/useContext';
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { FormControl, InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import Productcard from '../Home/Product/Productcard';
import Masonry from 'react-masonry-css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { MenuList, MenuItem } from '@material-ui/core';
import { useMediaQuery, createTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
	return {
		clothesHeader: {
			marginTop: '8rem',
			padding: '1em 0',
			[theme.breakpoints.down('md')]: {
				marginTop: '6rem',
			},
		},
		clothesImg: {
			width: '100%',
		},
		selectCart: {
			display: 'flex',
			flexDirection: 'column',
		},
		owlCarousel: {
			position: 'relative',
		},
		btnLeft: {
			position: 'absolute',
			padding: '1.5px',
			left: 0,
			top: '180px',
			borderRadius: '50px',
		},
		btnRight: {
			position: 'absolute',
			padding: '1.5px',
			right: 0,
			top: '180px',
			borderRadius: '50px',
		},
		cartBtn: {
			margin: '10px 0',
		},
		formSelection: {
			marginTop: '10px',
		},
		socialIcons: {
			textAlign: 'center',
		},
	};
});

function Viewclothes() {
	const classes = useStyles();
	const breakpoints = {
		default: 4,
		1100: 4,
		700: 3,
		500: 2,
	};
	const matches = useMediaQuery(theme.breakpoints.up('md'));
	const { clothesData, cartData } = useGlobalContext();
	return (
		<>
			<Container>
				<section className={classes.clothesHeader}>
					{clothesData.map((items) => {
						const { id, img, price, names, type, description } = items;
						return (
							<section key={id}>
								<Typography color='primary' variant='caption'>
									{type}
								</Typography>
								<div>
									<Typography variant='h5'>{names}</Typography>
									<Typography variant='body1'>"White Oreo"</Typography>
								</div>
								<Typography variant='h6'>
									${price} <Typography variant='caption'>& up</Typography>
								</Typography>
								<div className={classes.owlCarousel}>
									<IconButton color='primary' className={classes.btnLeft}>
										<NavigateBeforeIcon />
									</IconButton>
									<img className={classes.clothesImg} src={img} alt={names} />
									<IconButton color='primary' className={classes.btnRight}>
										<NavigateNextIcon />
									</IconButton>
								</div>
								<div className={classes.selectCart}>
									<FormControl
										variant='filled'
										className={classes.formSelection}>
										<InputLabel htmlFor='Size of products'>Size</InputLabel>
										<Select
											native
											variant='filled'
											inputProps={{
												name: 'Size',
											}}
											className={classes.select}>
											<option aria-label='None' value='' />
											<option value={'x'}>x</option>
											<option value={'m'}>m</option>
											<option value={'xl'}>xl</option>
											<option value={'2xl'}>2xl</option>
										</Select>
									</FormControl>
									<Button
										className={classes.cartBtn}
										variant='contained'
										color='primary'>
										Add to cart
									</Button>
								</div>
								<div>
									<Typography>{description}</Typography>
									<Typography>Read more</Typography>
								</div>
								<div className={classes.socialIcons}>
									<IconButton>
										<FacebookIcon />
									</IconButton>
									<IconButton>
										<TwitterIcon />
									</IconButton>
									<IconButton>
										<MailOutlineIcon />
									</IconButton>
								</div>
								<Divider />
								<MenuList>
									<MenuItem>Authencity Guaranteed</MenuItem>
									<MenuItem>Ready to ship</MenuItem>
									<MenuItem>Returns accepted</MenuItem>
								</MenuList>
								<div>
									<Typography>You may also like</Typography>
									<Masonry
										breakpointCols={breakpoints}
										className='my-masonry-grid'
										columnClassName='my-masonry-grid_column'>
										{cartData.map((items) => {
											return (
												<div key={items.id}>
													<Productcard items={items} />
												</div>
											);
										})}
									</Masonry>
								</div>
							</section>
						);
					})}
				</section>
			</Container>
		</>
	);
}

export default Viewclothes;
