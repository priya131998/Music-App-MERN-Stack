import * as usersService from '../../utilities/users-service';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AlbumInfo from '../../components/AlbumInfo/AlbumInfo';




function AlbumDetailPage() {
    async function handleCheckToken() {
		const expDate = await usersService.checkToken();
		console.log(expDate);
	}

	const {
		state: { album },
	} = useLocation();

	return (
		<>
			<h1>Album Detail Page</h1>
			<button onClick={handleCheckToken}>
				Check When My Login Expires
			</button>
			<AlbumInfo album={album} key={album._id} />
			
		</>
	);
}

export default AlbumDetailPage;