import React from 'react';
import { Link } from 'react-router-dom';
import './AlbumListItem.css';

function AlbumListItem({ album, handleDeleteAlbum, user }) {
	

	return (
		
			
			<div className = "main-container">
				{/* <div className='panel panel-default'> */}
			<div className='panel-heading'>
				<h3 className='panel-title'>{album.name}</h3>
			</div>
			<div className='panel-footer AlbumListItem-action-panel'>
			<section className = "second-container">
				<div className="container">
				
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
				{ (user && user._id === album.user) && <Link
					className='btn btn-xs btn-warning'
					to={{
						pathname: '/edit',
						state: { album },
					}}
				>
					EDIT
				</Link>

}


		 { (user && user._id === album.user) && <button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeleteAlbum(album._id)}
				>
					DELETE
				</button> }
				</div>
</section>
        </div>
			</div>
		// </div>
	);
}

export default AlbumListItem;
