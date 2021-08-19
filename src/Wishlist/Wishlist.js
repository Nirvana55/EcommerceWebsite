import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useGlobalContext } from '../components/useContext';
import CardContent from '@material-ui/core/CardContent';
import {
	CardActionArea,
	CardMedia,
	createTheme,
	IconButton,
} from '@material-ui/core';
import Masonry from 'react-masonry-css';
import Rating from '@material-ui/lab/Rating';
import { useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

const theme = createTheme({});

const useStyles = makeStyles((theme) => {
	return {
		allWishList: {
			marginTop: '6.5rem',
			padding: '1em 0',
			[theme.breakpoints.up('md')]: {
				marginTop: '8.1rem',
			},
		},
		cardHeader: {
			padding: '0.3em 0.5em 0 0.5em',
			border: '3px solid #1565c0',
			position: 'relative',
		},
		wishlistImg: {
			width: '100%',
		},
		wishlistName: {
			fontSize: '16px !important',
			fontWeight: 'bold',
			marginBottom: '3px',
		},
		wishlistRate: {
			marginTop: '3px',
		},
		wishlistDiv: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: '0.2rem',
		},
		wishlist: {
			backgroundColor: '#1565c0',
			padding: '1.5px',
		},
		heart: {
			fontSize: '20px',
			position: 'absolute',

			top: '5px',
			right: '7px',
			padding: '5px',
		},
		cartBtn: {
			marginTop: '0.2em',
			cursor: 'pointer',
		},
	};
});

function Wishlist() {
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const { favourite, handleRemoveItem, handleBuyItems, handleClearCart } =
		useGlobalContext();
	const breakpoints = {
		default: 4,
		1100: 4,
		700: 3,
		500: 2,
	};
	return (
		<>
			<Container maxWidth='xl'>
				<div className={classes.allWishList}>
					<Typography>Wishlist</Typography>
					{favourite.length === 0 ? (
						<>
							<h1>WishList is Empty</h1>
						</>
					) : (
						<>
							<Masonry
								breakpointCols={breakpoints}
								className='my-masonry-grid'
								columnClassName='my-masonry-grid_column'>
								{favourite.map((items) => {
									return (
										<Card key={items.id} className={classes.cardHeader}>
											<CardActionArea className={classes.wishlistImg}>
												{matches ? (
													<CardMedia
														component='img'
														height='150'
														title={items.names}
														image={items.img}
														className={classes.mediaImg}
													/>
												) : (
													<CardMedia
														component='img'
														height='170'
														title={items.names}
														image={items.img}
														className={classes.mediaImg}
													/>
												)}
											</CardActionArea>
											<CardContent>
												<div>
													<Typography className={classes.wishlistName}>
														{items.names}
													</Typography>
													<Typography variant='body2'>
														${items.price}
													</Typography>
												</div>
												<div className={classes.wishlistDiv}>
													<Rating
														className={classes.wishlistRate}
														name={items.names}
														size='small'
														value={items.rate}
														max={items.rate}
													/>
													<IconButton
														color='primary'
														onClick={() =>
															handleRemoveItem(items.id, 'REMOVE_WISHLISTITEM')
														}>
														<DeleteIcon />
													</IconButton>
												</div>
												<Button
													onClick={() => handleBuyItems(items, 'ADD_CART')}
													className={classes.cartBtn}
													fullWidth
													variant='contained'
													color='primary'>
													Add to cart
												</Button>
											</CardContent>
										</Card>
									);
								})}
							</Masonry>
						</>
					)}
					<Button
						color='primary'
						variant='contained'
						className={classes.removeAll}
						onClick={() => handleClearCart('CLEAR_WISHLIST')}>
						Remove All
					</Button>
				</div>
			</Container>
		</>
	);
}

export default Wishlist;
