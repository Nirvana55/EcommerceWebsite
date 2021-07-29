import React from 'react';
import Userdata from './Userdata';
import { Avatar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({});

function Userdetail() {
	const classes = useStyles();

	return (
		<>
			<Container maxWidth='xl'>
				{Userdata.map((items, index) => {
					const { img, name, details } = items;
					return (
						<section key={index}>
							<Avatar></Avatar>
							<Typography></Typography>
						</section>
					);
				})}
			</Container>
		</>
	);
}

export default Userdetail;
