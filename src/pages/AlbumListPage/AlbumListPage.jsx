// import React, { useState } from 'react';
import React from 'react';
import './AlbumListPage.css';
import AlbumListItem from '../../components/AlbumListItem/AlbumListItem';
import * as usersService from '../../utilities/users-service';


function AlbumListPage(props) {
	// const [isLoggedIn, setIsLoggedIn] = useState(true)
	async function handleCheckToken() {
		const expDate = await usersService.checkToken();
		// const currentTime = new Date();
		// if (expDate > currentTime) {
		// 	setIsLoggedIn(true)
		// } else {
		// 	setIsLoggedIn(false)
		// }
		console.log(expDate);
	}
	return (
		<>
			<h1>Album List</h1>
			<button onClick={handleCheckToken}>
				Check When My Login Expires
			</button>
			<div className='AlbumListPage-grid'>
				{props.albums.map(album => (
					<AlbumListItem 
					// isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
						album={album}
						key={album._id}
						handleDeleteAlbum={props.handleDeleteAlbum}
						user = {props.user}
					/>
				))}
			</div>
		</>
	);
}

export default AlbumListPage;
