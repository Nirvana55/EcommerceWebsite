import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Typography,
	createTheme,
	AppBar,
	Toolbar,
	InputAdornment,
} from '@material-ui/core';
import { Breadcrumbs } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Box } from '@material-ui/core';
import { BlogData } from './BlogData';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Pagination } from '@material-ui/lab';
import { useMediaQuery } from '@material-ui/core';
import { Productdata } from '../Home/Product/Productdata';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
	return {
		blogBar: {
			top: '13.5%',
			[theme.breakpoints.up('md')]: {
				top: '16%',
			},
		},
		blogNav: {
			display: 'flex',
			flexDirection: 'column',
			padding: '0.3em 0 0.2em 0',
		},
		link: {
			textDecoration: 'none',
			color: '#f9f9f9',
			fontSize: '15px',
			display: 'flex',
			alignItems: 'center',
		},
		homeIcon: {
			fontSize: '15px',
		},
		breadcrumbs: {
			display: 'flex',
			alignItems: 'center',
			padding: '0.2em 0 0 0',
		},
		blogPost: {
			marginTop: '11rem',
			padding: '1em 1em 2em 1em',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				padding: '4em 0',
			},
		},
		listImg: {
			width: '90px',
			height: '70px',
			paddingRight: '0.8em',
			[theme.breakpoints.up('md')]: {
				width: '70px',
				height: '50px',
			},
		},
		listContainer: {
			display: 'flex',
			flexDirection: 'row',
			padding: '0.8em 0',
		},
		searchBtn: {
			padding: '0.8em 1em',
			right: '-13%',
			[theme.breakpoints.up('md')]: {
				padding: '0.5em ',
				right: '-18%',
				fontSize: '13px',
			},
		},
		blogWidget: {
			padding: '1em 0 0.5em 0',
		},
		headers: {
			borderBottom: '3px solid grey',
			width: '10%',
		},

		link: {
			textDecoration: 'none',
			display: 'flex',
			alignItems: 'center',
			color: '#f9f9f9',
		},
		socialLinks: {
			display: 'flex',
			alignItems: 'center',
			padding: '1em 0',
			color: 'black',
		},
		inputSearch: {
			marginTop: '15px',
		},
		pagignation: {
			display: 'flex',
			justifyContent: 'center',
			margin: '15px 0',
		},
		blogContainer: {
			[theme.breakpoints.up('md')]: {
				display: 'flex',
			},
		},
		allBlog: {
			[theme.breakpoints.up('md')]: {
				flexBasis: '100%',
				marginRight: '3rem',
			},
		},
		textHeader: {
			[theme.breakpoints.up('md')]: {
				fontSize: '16px',
			},
		},
		listss: {
			padding: '10px 0  !important',
		},
	};
});

function Blog() {
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.up('md'));
	const listItem = [
		{
			type: 'Shoes',
		},
		{
			type: 'T-shirts',
		},
		{
			type: 'Bags',
		},
		{
			type: 'Underwear',
		},
	];

	return (
		<>
			<AppBar position='absolute' className={classes.blogBar} elevation={0}>
				<Toolbar className={classes.blogNav}>
					<Typography className={classes.blogText}>Blogs</Typography>
					<Breadcrumbs
						aria-label='breadcrumb'
						className={classes.breadcrumbs}
						color='secondary'>
						<Link to='/' className={classes.link}>
							<HomeIcon className={classes.homeIcon} /> Home
						</Link>
						<Typography color='secondary'>Blog</Typography>
					</Breadcrumbs>
				</Toolbar>
			</AppBar>
			<Box className={classes.blogPost}>
				<Container>
					<div className={classes.blogContainer}>
						<section className={classes.allBlog}>
							{BlogData.map((items) => {
								return <BlogCard key={items.id} items={items} />;
							})}
							<Pagination
								className={classes.pagignation}
								count={2}
								shape='rounded'
							/>
						</section>
						<section className={classes.widgetContainer}>
							<div className={classes.blogWidgets}>
								<Typography variant='h6' className={classes.textHeader}>
									Search
								</Typography>
								<div className={classes.headers}></div>
								<TextField
									variant='outlined'
									type='text'
									size={matches ? 'small' : 'medium'}
									color='primary'
									className={classes.inputSearch}
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>
												<Button
													className={classes.searchBtn}
													color='primary'
													variant='contained'>
													Search
												</Button>
											</InputAdornment>
										),
									}}
								/>
							</div>
							<div className={classes.blogWidget}>
								<Typography variant='h6' className={classes.textHeader}>
									Categories
								</Typography>
								<div className={classes.headers}></div>
								<List>
									{listItem.map((types, index) => {
										return (
											<ListItem key={index} className={classes.listss}>
												<Typography variant={matches ? 'body2' : 'body1'}>
													{types.type}
												</Typography>
											</ListItem>
										);
									})}
								</List>
							</div>
							<div className={classes.blogWidget}>
								<Typography variant='h6' className={classes.textHeader}>
									Recent Post
								</Typography>
								<div className={classes.headers}></div>
								{BlogData.map((items) => {
									return (
										<div key={items.id} className={classes.listContainer}>
											<img
												className={classes.listImg}
												src={items.img}
												alt={items.names}
											/>
											<span>
												<Typography variant={matches ? 'body2' : 'body1'}>
													{items.title}
												</Typography>
												<Typography variant='caption' color='textSecondary'>
													{items.date}
												</Typography>
											</span>
										</div>
									);
								})}
							</div>
							<div className={classes.blogWidget}>
								<Typography variant='h6' className={classes.textHeader}>
									Products
								</Typography>
								<div className={classes.headers}></div>
								{Productdata.map((items) => {
									return (
										<div key={items.id} className={classes.listContainer}>
											<img
												className={classes.listImg}
												src={items.img}
												alt={items.names}
											/>
											<span className={classes.productText}>
												<Typography variant={matches ? 'body2' : 'body1'}>
													{items.names}
												</Typography>
												<Typography variant='caption' color='textSecondary'>
													${items.price}
												</Typography>
											</span>
										</div>
									);
								})}
							</div>
							<div className={classes.blogWidget}>
								<Typography variant='h6' className={classes.textHeader}>
									Follow
								</Typography>
								<div className={classes.headers}></div>
								<Link to='/'>
									<Typography
										variant={matches ? 'body2' : 'body1'}
										className={classes.socialLinks}>
										<FacebookIcon /> Facebook
									</Typography>
								</Link>
							</div>
						</section>
					</div>
				</Container>
			</Box>
		</>
	);
}

export default Blog;
