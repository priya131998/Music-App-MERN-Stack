// import React from 'react';
import React, { Component, useState, useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import AlbumInfo from '../../components/AlbumInfo/AlbumInfo';

export default function AAlbumDetailPage(props) {

	const {
		state: { album },
	} = useLocation();
	console.log(album);


	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState({
		songlink: '',
        songname: '',
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddSong(formData, album._id);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Album Detail Page</h1>
			<AlbumInfo album={album} key={album._id} />
			
			<form autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Song Link (required)</label>
					<input
						className='form-control'
						name='songlink'
						value={formData.songlink}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Song Name (required)</label>
					<input
						className='form-control'
						name='songname'
						value={formData.songname}
						onChange={handleChange}
					/>
				</div>

				<button type='submit' className='btn' disabled={invalidForm}>
					ADD SONG
				</button>
			</form>
			{/* <div>
			{props.songs.map(song => (
					<PuppyListItem
						song={song}
						key={song._id}
					/>
				))}
			</div> */}


		</>
	);
}

