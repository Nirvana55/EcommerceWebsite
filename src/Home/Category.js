import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Masonry from 'react-masonry-css';
import Typography from '@material-ui/core/Typography';
import { Categorydata } from './Categorydata';
import { Container } from '@material-ui/core';
import Categorycard from './Categorycard';

const useStyles = makeStyles((theme) => {
	return {
		contentHeader: {
			padding: '3rem 0 2rem 0',
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
		body2: {
			width: '70%',
			margin: '0 auto',
			fontStyle: 'italic',
			fontWeight: 'bold',
			fontSize: '13px',
		},
		products: {
			border: '1px solid #1565c0',
		},
	};
});

function Category() {
	const classes = useStyles();
	const breakpoints = {
		default: 4,
		1100: 4,
		500: 2,
	};
	return (
		<>
			<Container maxWidth='xl'>
				<div className={classes.contentHeader}>
					<Typography className={classes.header5} variant='h5'>
						We serve the best
					</Typography>
					<Typography className={classes.header6} variant='h6'>
						Featured Categories
					</Typography>
					<p></p>
					<Typography className={classes.body2} variant='subtitle1'>
						N.K fancy store was started on 2006. It is the oldest shop located
						at Budhanilkantha.
					</Typography>
				</div>
				<Masonry
					breakpointCols={breakpoints}
					className='my-masonry-grid'
					columnClassName='my-masonry-grid_column'>
					{Categorydata.map((items, index) => {
						return (
							<div key={index}>
								<Categorycard {...items} />
							</div>
						);
					})}
				</Masonry>
			</Container>
		</>
	);
}

export default Category;
