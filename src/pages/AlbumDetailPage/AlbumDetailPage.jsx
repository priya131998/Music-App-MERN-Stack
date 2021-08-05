import React from 'react';
import { useLocation } from 'react-router-dom';
import AlbumInfo from '../../components/AlbumInfo/AlbumInfo';




function AlbumDetailPage() {

	const {
		state: { album },
	} = useLocation();
	console.log(album);

	return (
		<>
			<h1>Album Detail Page</h1>
			<AlbumInfo album={album} key={album._id} />
			
		</>
	);
}

export default AlbumDetailPage;