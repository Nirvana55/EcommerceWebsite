import React from 'react';
import GoogleMapReact from 'google-map-react';
import Mapmarker from './Mapmarker';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
	return {
		mapContainer: {
			width: '100%',
			height: '100vh',
		},
	};
});

const Mapcontainer = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.mapContainer}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyAw2wPheuoFFpou8wTpfECmQmkQ2fZkfOs',
						language: 'eng',
						region: 'US',
					}}
					defaultCenter={{ lat: 27.776972, lng: 85.362408 }}
					defaultZoom={13}>
					<Mapmarker lat={27.776972} lng={85.362408} />
				</GoogleMapReact>
			</div>
		</>
	);
};

export default Mapcontainer;
