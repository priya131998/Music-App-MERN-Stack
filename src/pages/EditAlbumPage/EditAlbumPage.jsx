import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function EditAlbumPage(props) {
	const location = useLocation();

	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState(location.state.album);

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleUpdateAlbum(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Edit Album</h1>
			<form ref={formRef} autoComplete='off' onSubmit={handleSubmit}>
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
				<button
					type='submit'
					className='btn btn-xs'
					disabled={invalidForm}
				>
					SAVE Album
				</button>
				&nbsp;&nbsp;
				<Link to='/'>CANCEL</Link>
			</form>
		</>
	);
}

