import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		patnersSponsor: {
			height: '10vh',
			backgroundColor: '#e4e4e4',
		},
		fonts: {
			fontWeight: '600',
		},
		patner: {
			borderRight: '2px solid grey',
			paddingRight: '1em',
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
	};
});

function Patner() {
	const classes = useStyles();
	const MobileDesign = () => {
		return <></>;
	};
	return (
		<>
			<Grid
				container
				justifyContent='space-around'
				alignItems='center'
				className={classes.patnersSponsor}>
				<Typography className={classes.patner} variant='h5'>
					Our Patner
				</Typography>
				<Typography className={classes.fonts} variant='h5'>
					Puma
				</Typography>
				<Typography className={classes.fonts} variant='h5'>
					Nike
				</Typography>
				<Typography className={classes.fonts} variant='h5'>
					X-tep
				</Typography>
				<Typography className={classes.fonts} variant='h5'>
					Addidas
				</Typography>
			</Grid>
		</>
	);
}

export default Patner;
