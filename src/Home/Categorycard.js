import React from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
	return {
		cardHeader: {
			padding: '0.3em 0.5em',
			border: '3px solid #1565c0',
			position: 'relative',
		},
		productsImg: {
			width: '100%',
		},

		links: {
			position: 'absolute',
			textAlign: 'center',
			top: '73%',
			fontSize: '13px',
			textDecoration: 'underline',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			letterSpacing: '1px',
			width: '100%',
		},
	};
});

const Categorycard = ({ image, name }) => {
	const classes = useStyles();
	return (
		<>
			<Card className={classes.cardHeader}>
				<CardActionArea className={classes.productsImg}>
					<CardMedia component='img' height='150' image={image} />
					<Typography className={classes.links} variant='caption'>
						{name}
					</Typography>
				</CardActionArea>
			</Card>
		</>
	);
};

export default Categorycard;
