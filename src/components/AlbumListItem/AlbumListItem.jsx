import React from 'react';
import { Link } from 'react-router-dom';
import './AlbumListItem.css';

function AlbumListItem({ album, handleDeleteAlbum, user }) {
// function AlbumListItem({ album, handleDeleteAlbum, isLoggedIn }) {

	
	// const specialButton = 
	// <div>
	// 	<Link
	// 				className='btn btn-xs btn-warning'
	// 				to={{
	// 					pathname: '/edit',
	// 					state: { album },
	// 				}}
	// 			>
	// 				EDIT
	// 			</Link>
	// 	<button
	// 				className='btn btn-xs btn-danger margin-left-10'
	// 				onClick={() => handleDeleteAlbum(album._id)}
	// 			>
	// 				DELETE
	// 			</button>

	// </div>

	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{album.name}</h3>
			</div>
			<div className='panel-footer AlbumListItem-action-panel'>
                <img src={album.albumcoverlink} alt="" /> 
				<Link
					className='btn btn-xs btn-info'
					to={{
						pathname: '/details',
						state: { album },
					}}
				>
					DETAILS
				</Link>
				{/* {isLoggedIn && specialButton } */}
				<Link
					className='btn btn-xs btn-warning'
					to={{
						pathname: '/edit',
						state: { album },
					}}
				>
					EDIT
				</Link>
		 { user && <button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeleteAlbum(album._id)}
				>
					DELETE
				</button> }

			</div>
		</div>
	);
}

export default AlbumListItem;
