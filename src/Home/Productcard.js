import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, CardMedia, IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';
import { Fab } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => {
	return {
		cardHeader: {
			padding: '0.3em 0.5em 0 0.5em',
			border: '3px solid #1565c0',
		},
		productsImg: {
			width: '100%',
			position: 'relative',
		},
		prodcutsName: {
			fontSize: '16px !important',
			fontWeight: 'bold',
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
			right: '3px',
		},
		cartIcon: {},
	};
});

const Productcard = ({ names, img, price, rate }) => {
	const classes = useStyles();
	return (
		<>
			<Card className={classes.cardHeader}>
				<CardActionArea className={classes.productsImg}>
					<CardMedia component='img' height='150' title={names} image={img} />
					<FavoriteBorderIcon color='primary' className={classes.heart} />
				</CardActionArea>
				<CardContent>
					<div>
						<Typography className={classes.prodcutsName}>{names}</Typography>
						<Typography variant='caption'>${price}</Typography>
					</div>
					<div className={classes.rateDiv}>
						<Rating
							className={classes.productsRate}
							name={names}
							size='small'
							defaultValue={rate}
						/>
						<ShoppingCartOutlinedIcon className={classes.cartIcon} />
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default Productcard;
