import React from 'react';
import { Tooltip } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
	return {
		markerBtn: {
			backgroundColor: '#b71c1c',
		},
		markerIcon: {
			color: 'white',
			fontSize: '14px',
		},
	};
});

function Mapmarker() {
	const classes = useStyles();
	return (
		<>
			<Tooltip title='N.K Fancy store'>
				<IconButton className={classes.markerBtn}>
					<ShoppingBasketIcon className={classes.markerIcon} />
				</IconButton>
			</Tooltip>
		</>
	);
}

export default Mapmarker;
