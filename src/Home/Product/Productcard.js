import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
	CardActionArea,
	CardMedia,
	createTheme,
	IconButton,
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useGlobalContext } from '../../components/useContext';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

const theme = createTheme({});

const useStyles = makeStyles((theme) => {
	return {
		cardHeader: {
			padding: '0.3em 0.5em 0 0.5em',
			border: '3px solid #1565c0',
			position: 'relative',
		},
		// productsImg: {
		// 	width: '100%',
		// },
		productsImgs: {
			[theme.breakpoints.up('md')]: {
				height: '190px',
				width: '100%',
				maxWidth: '350px',
				margin: 'auto',
			},
		},
		prodcutsName: {
			fontSize: '18px !important',
			fontWeight: '700',
			marginBottom: '3px',
		},
		productsRate: {
			marginTop: '3px',
		},
		rateDiv: {
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
		cartIcon: {
			cursor: 'pointer',
		},
		favs: {
			color: 'red',
		},
	};
});

const Productcard = ({ items }) => {
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const { id, img, price, names, rate, icons } = items;
	const { handleBuyItems, handleViewClothes } = useGlobalContext();
	return (
		<>
			<Card className={classes.cardHeader}>
				<Link to='/viewclothes'>
					<CardActionArea
						onClick={() => handleViewClothes(id)}
						className={classes.productsImg}>
						{matches ? (
							<CardMedia
								className={classes.productsImgs}
								component='img'
								height='150'
								title={names}
								image={img}
							/>
						) : (
							<CardMedia
								className={classes.productsImgs}
								component='img'
								title={names}
								image={img}
							/>
						)}
					</CardActionArea>
				</Link>

				<IconButton
					onClick={() => handleBuyItems(items, 'ADD_WISHLIST')}
					className={classes.heart}>
					{icons}
				</IconButton>
				<CardContent>
					<div>
						<Typography className={classes.prodcutsName}>{names}</Typography>
						<Typography variant='body2'>${price}</Typography>
					</div>
					<div className={classes.rateDiv}>
						<Rating
							className={classes.productsRate}
							name={names}
							size='small'
							value={rate}
							max={rate}
						/>
						<IconButton onClick={() => handleBuyItems(items, 'ADD_CART')}>
							<ShoppingCartOutlinedIcon className={classes.cartIcon} />
						</IconButton>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default Productcard;
