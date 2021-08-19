import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	CardActions,
} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useGlobalContext } from '../components/useContext';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		blogPost: {
			padding: '0.8em',
			marginBottom: '10px',
			border: '3px solid #1565c0',
		},
		blogPostBread: {
			fontSize: '11px',
		},
	};
});

function BlogCard({ items }) {
	const { img, writer, blog, title } = items;
	const classes = useStyles();
	return (
		<>
			<Card className={classes.blogPost}>
				<CardActionArea>
					<CardMedia alt={title} image={img} component='img' title={title} />
					<CardContent>
						<Typography variant='h5'>{title}</Typography>
						<Breadcrumbs
							className={classes.blogPostBread}
							aria-label='breadcrumb'>
							<Typography variant='caption'> By {writer}</Typography>
							<Typography variant='caption'>comment</Typography>
						</Breadcrumbs>
						<Typography variant='body2'>{blog}</Typography>
					</CardContent>
					<CardActions>
						<Typography>Read more</Typography>
					</CardActions>
				</CardActionArea>
			</Card>
		</>
	);
}

export default BlogCard;
