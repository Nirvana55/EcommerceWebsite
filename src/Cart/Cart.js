import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import { useGlobalContext } from '../components/useContext';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => {
	return {
		cartHeader: {
			marginTop: '8rem',
			padding: '1em 0',
			[theme.breakpoints.down('md')]: {
				marginTop: '6rem',
			},
		},
		cartItems: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '0.5em',
			margin: '10px 0',
		},
		imgProduct: {
			width: '100px',
			height: '100px',
			objectFit: 'cover',
		},
		addSubCart: {
			display: 'flex',
			alignItems: 'center',
		},
		amountValue: {
			border: '1px solid black',
			padding: '0.2em 0.5em',
		},
		allCart: {
			border: '2px solid #1565c0',
			borderRadius: '5px',
		},
		removeAll: {
			marginTop: '5px',
		},
		priceTotal: {
			display: 'flex',
			justifyContent: 'flex-end',
			padding: '0.2em 0.5em',
		},
	};
});
function Cart() {
	const classes = useStyles();
	const {
		cart,
		handleRemoveItem,
		toggleCartPrice,
		handleClearCart,
		totalPrice,
	} = useGlobalContext();
	return (
		<>
			<Container maxWidth='md'>
				<section className={classes.cartHeader}>
					<Typography>Cart Items</Typography>
					<div className={classes.allCart}>
						{cart.length === 0 ? (
							<>
								<h1>Cart is Empty</h1>
							</>
						) : (
							<>
								{cart.map((products) => {
									return (
										<div key={products.id} className={classes.cartItems}>
											<img
												src={products.img}
												alt={products.names}
												className={classes.imgProduct}
											/>
											<div className={classes.cartDetail}>
												<Typography>{products.names}</Typography>
												<Typography>${products.price}</Typography>
											</div>
											<div className={classes.addSubCart}>
												<IconButton
													onClick={() =>
														toggleCartPrice(products.id, 'DECREASE_PRODUCT')
													}>
													<RemoveIcon />
												</IconButton>
												<Typography className={classes.amountValue}>
													{products.amount}
												</Typography>
												<IconButton
													onClick={() =>
														toggleCartPrice(products.id, 'INCREASE_PRODUCT')
													}>
													<AddIcon />
												</IconButton>
											</div>
											<IconButton
												color='primary'
												onClick={() =>
													handleRemoveItem(products.id, 'REMOVE_CARTITEM')
												}>
												<DeleteIcon />
											</IconButton>
										</div>
									);
								})}
								<Divider />
								<div className={classes.priceTotal}>
									<Typography style={{ padding: '0 0.5em' }}>Total:</Typography>
									<Typography>${totalPrice}</Typography>
								</div>
							</>
						)}
					</div>
					<Button
						color='primary'
						variant='contained'
						className={classes.removeAll}
						onClick={() => handleClearCart('CLEAR_CART')}>
						Remove All
					</Button>
				</section>
			</Container>
		</>
	);
}

export default Cart;
