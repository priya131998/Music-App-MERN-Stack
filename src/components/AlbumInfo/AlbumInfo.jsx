import React from 'react';
import { Link } from 'react-router-dom';

function AlbumInfo({ album }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{album.name}</h3>
			</div>
			<div className='panel-body'>
				<dl>
				<dt>Album Cover</dt>
                <img src={album.albumcoverlink} alt="" />
					<dt>Artist</dt>
					<dd>{album.artist}</dd>
					<dt>Age</dt>
					<dd>{album.age}</dd>
                    <dt>Release Year</dt>
                    <dd>{album.releaseyear}</dd>		
				</dl>
			</div>
			<div className='panel-footer'>
				<Link to='/'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default AlbumInfo;
