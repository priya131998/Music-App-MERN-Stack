// import React, { useState } from 'react';
import React from 'react';
import './AlbumListPage.css';
import AlbumListItem from '../../components/AlbumListItem/AlbumListItem';


function AlbumListPage(props) {
	
	return (
		<>
			<h1>Album List</h1>
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
