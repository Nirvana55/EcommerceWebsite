import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Productcard from './Productcard';
import { Container } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import { useGlobalContext } from '../../components/useContext';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		contentHeader: {
			padding: '2rem 0 2rem 0',
			textAlign: 'center',
		},
		header5: {
			fontSize: '16px',
			textTransform: 'uppercase',
			color: 'grey',
			letterSpacing: '1px',
		},
		header6: {
			fontSize: '16px',
			padding: '0.3em 0',
			textTransform: 'uppercase',
		},
	};
});

const Product = () => {
	const classes = useStyles();
	const breakpoints = {
		default: 4,
		1100: 4,
		700: 3,
		500: 2,
	};
	const { cartData } = useGlobalContext();
	return (
		<>
			<Box>
				<Container maxWidth='xl'>
					<div className={classes.contentHeader}>
						<Typography className={classes.header5} variant='h5'>
							Our best
						</Typography>
						<Typography className={classes.header6} variant='h6'>
							Featured Products
						</Typography>
					</div>
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
				</Container>
			</Box>
		</>
	);
};

export default Product;
