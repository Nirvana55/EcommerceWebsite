import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
	return {
		error: {
			marginTop: '10rem',
		},
	};
});

function Error() {
	const classes = useStyles();
	return (
		<div className={classes.error}>
			<h1>Hello I am Error</h1>
		</div>
	);
}

export default Error;
