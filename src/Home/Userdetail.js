import React from 'react';
import { Userdata } from './Userdata';
import { Avatar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import { useGlobalContext } from '../components/useContext';

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
		userCard: {
			padding: '1.5em 0.5em',
			textAlign: 'center',
			display: 'grid',
			placeItems: 'center',
			border: '3px solid #1565c0',
			height: '30vh',
			marginBottom: '3rem',
		},
		avatarImg: {
			objectFit: 'cover',
			width: '120px',
			height: '110px',
		},
		sectionUser: {
			[theme.breakpoints.up('sm')]: {},
		},
	};
});

function Userdetail() {
	const classes = useStyles();

	const { photoIndex } = useGlobalContext();
	const datas = Userdata[photoIndex];
	return (
		<>
			<Container maxWidth='xl'>
				<section className={classes.sectionUser}>
					<div className={classes.contentHeader}>
						<Typography className={classes.header5} variant='h5'>
							Customers
						</Typography>
						<Typography className={classes.header6} variant='h6'>
							What they say about us
						</Typography>
					</div>
					<Card color='secondary' className={classes.userCard} elevation={1}>
						<Avatar
							className={classes.avatarImg}
							alt={datas.name}
							src={datas.img}
						/>
						<Typography variant='body1' color='textSecondary'>
							{datas.detail}
						</Typography>
						<Typography variant='body2'>{datas.name}</Typography>
					</Card>
				</section>
			</Container>
		</>
	);
}

export default Userdetail;
