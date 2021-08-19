import React from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery, createTheme } from '@material-ui/core';
import { useGlobalContext } from '../../components/useContext';

const useStyles = makeStyles((theme) => {
	return {
		cardHeader: {
			padding: '0.3em 0.5em',
			border: '3px solid #1565c0',
			position: 'relative',
			[theme.breakpoints.up('sm')]: {
				padding: '0.3em 0.5em 1.5em 0.5em',
			},
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
			[theme.breakpoints.up('sm')]: {
				top: '100%',
			},
		},
	};
});

const theme = createTheme({});

const Categorycard = ({ categories }) => {
	const classes = useStyles();
	const { image, name } = categories;
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			<Card className={classes.cardHeader}>
				<CardActionArea className={classes.productsImg}>
					{matches ? (
						<CardMedia component='img' height='150' image={image} />
					) : (
						<CardMedia component='img' height='160' image={image} />
					)}
					<Typography className={classes.links} variant='caption'>
						{name}
					</Typography>
				</CardActionArea>
			</Card>
		</>
	);
};

export default Categorycard;
