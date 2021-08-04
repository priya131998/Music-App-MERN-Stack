import React, { Component, useState, useRef, useEffect } from 'react';

export default function AddAlbumPage(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState({
		name: '',
        artist: '',
		releaseyear: '',
		albumcoverlink: '',
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddAlbum(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Add Album</h1>
			<form autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Album Name (required)</label>
					<input
						className='form-control'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Artist (required)</label>
					<input
						className='form-control'
						name='artist'
						value={formData.artist}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Release Year</label>
					<input
						className='form-control'
						name='releaseyear'
						value={formData.releaseyear}
						onChange={handleChange}
					/>
				</div>
                <div className='form-group'>
					<label>Cover Link</label>
					<input
						className='form-control'
						name='albumcoverlink'
						value={formData.albumcoverlink}
						onChange={handleChange}
					/>
				</div>
				<button type='submit' className='btn' disabled={invalidForm}>
					ADD ALBUM
				</button>
			</form>
		</>
	);
}
