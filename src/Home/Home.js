import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { IconButton } from '@material-ui/core';
import { useGlobalContext } from '../components/useContext';
import homeDescritpion from './Homedata';
import Category from './Category/Category';
import Userdetail from './Userdetail';
import Product from './Product/Product';
import Patner from './Patner';

const useStyles = makeStyles((theme) => {
	return {
		descriptionBar: {
			marginTop: '2.7rem',
			backgroundSize: 'cover',
			height: '45vh',
			padding: '2.5em 2em',
		},

		shiftbar: theme.mixins.toolbar,
		homeText: {
			width: '95%',

			marginTop: '2rem',
			marginBottom: '2rem',

			position: 'relative',
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		btnShop: {
			marginTop: '1rem',
			textTransform: 'normal',
		},

		prevBtn: {
			padding: '1.5px',
			position: 'absolute',
			left: 0,
			top: '260px',
			backgroundColor: '#1565c0',
			borderRadius: '50px',
			'&:hover': {
				backgroundColor: '#1565c0',
			},
		},
		nextBtn: {
			padding: '1.5px',
			position: 'absolute',
			right: 0,
			top: '260px',
			backgroundColor: '#1565c0',
			borderRadius: '50px',
			'&:hover': {
				backgroundColor: '#1565c0',
			},
		},
	};
});

const Home = () => {
	const classes = useStyles();
	const { photoIndex } = useGlobalContext();

	const { img, description } = homeDescritpion[photoIndex];

	return (
		<>
			<div className={classes.shiftbar}></div>
			<section
				style={{ backgroundImage: `url(${img})`, objectFit: 'cover' }}
				className={classes.descriptionBar}>
				<div className={classes.homeText}>
					<Typography
						variant='h2'
						component='h3'
						color='secondary'
						className={classes.description}>
						{description}
					</Typography>
					<Typography variant='subtitle2' color='secondary'>
						We welcome you to N.K fancy store. Only for men
					</Typography>
					<Button
						className={classes.btnShop}
						variant='contained'
						color='primary'>
						Shop now
					</Button>
				</div>
				<div className='carouselBtn'>
					<IconButton color='secondary' className={classes.prevBtn}>
						<NavigateBeforeIcon />
					</IconButton>
					<IconButton color='secondary' className={classes.nextBtn}>
						<NavigateNextIcon />
					</IconButton>
				</div>
			</section>
			<Category />
			<Product />
			<Userdetail />
			<Patner />
		</>
	);
};

export default Home;
