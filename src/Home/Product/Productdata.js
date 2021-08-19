import hoodie from '../../images/hoodie.jpg';
import jordanshoes from '../../images/jordan.jpg';
import presto from '../../images/presto.jpg';
import sportsWear from '../../images/sports.jpg';
import jordanHoodie from '../../images/jordansss.jpg';
import under from '../../images/under.jpg';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export const Productdata = [
	{
		id: 1,
		price: 50.59,
		names: 'Mexico Jersey',
		img: sportsWear,
		rate: 3,
		amount: 1,
		type: 'CLOTHES',
		icons: <FavoriteBorderIcon style={{ color: '#1565c0' }} />,
		description:
			"'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus expedita quaerat deserunt accusamus repudiandae sequi velit voluptatum repellendus voluptas, ullam quasi ipsum dolores cum laborum, vitae quod iure ipsa!",
	},
	{
		id: 2,
		price: 250.59,
		names: 'Jordan Shoes',
		img: jordanshoes,
		rate: 4,
		amount: 1,
		type: 'SHOES',
		size: ['s', 'm', 'xl', '2xl'],
		icons: <FavoriteBorderIcon style={{ color: '#1565c0' }} />,
		description:
			"'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus expedita quaerat deserunt accusamus repudiandae sequi velit voluptatum repellendus voluptas, ullam quasi ipsum dolores cum laborum, vitae quod iure ipsa!",
	},
	{
		id: 3,
		price: 65.59,
		names: 'Jordan T-Shirt',
		img: jordanHoodie,
		rate: 4,
		amount: 1,
		type: 'CLOTHES',
		size: ['s', 'm', 'xl', '2xl'],
		icons: <FavoriteBorderIcon style={{ color: '#1565c0' }} />,
		description:
			"'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus expedita quaerat deserunt accusamus repudiandae sequi velit voluptatum repellendus voluptas, ullam quasi ipsum dolores cum laborum, vitae quod iure ipsa!",
	},
	{
		id: 4,
		price: 1.59,
		names: 'Blazer',
		img: hoodie,
		rate: 3,
		amount: 1,
		type: 'CLOTHES',
		size: ['s', 'm', 'xl', '2xl'],
		icons: <FavoriteBorderIcon style={{ color: '#1565c0' }} />,
		description:
			"'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus expedita quaerat deserunt accusamus repudiandae sequi velit voluptatum repellendus voluptas, ullam quasi ipsum dolores cum laborum, vitae quod iure ipsa!",
	},
	{
		id: 5,
		price: 20.59,
		names: 'Calvien klien',
		img: under,
		rate: 3,
		amount: 1,
		type: 'CLOTHES',
		size: ['s', 'm', 'xl', '2xl'],
		icons: <FavoriteBorderIcon style={{ color: '#1565c0' }} />,
		description:
			"'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus expedita quaerat deserunt accusamus repudiandae sequi velit voluptatum repellendus voluptas, ullam quasi ipsum dolores cum laborum, vitae quod iure ipsa!",
	},
	{
		id: 6,
		price: 140.59,
		names: 'Nike Presto',
		img: presto,
		rate: 4,
		amount: 1,
		type: 'SHOES',
		size: ['s', 'm', 'xl', '2xl'],
		icons: <FavoriteBorderIcon style={{ color: '#1565c0' }} />,
		description:
			"'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus expedita quaerat deserunt accusamus repudiandae sequi velit voluptatum repellendus voluptas, ullam quasi ipsum dolores cum laborum, vitae quod iure ipsa!",
	},
];
