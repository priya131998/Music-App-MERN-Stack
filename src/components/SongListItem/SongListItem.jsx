import React from 'react';

function SongListItem({ song }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
			</div>
			<div className='panel-footer PuppyListItem-action-panel'>
				<div
					className='form-control'
                    name='songlink'
                    value={formData.songlink}
                    onChange={handleChange}
                    required
				>
				</div>
				
				<div
					className='form-control'
                    name='songname'
                    value={formData.songname}
                    onChange={handleChange}
				>
				</div>
			
			</div>
		</div>
	);
}

export default SongListItem;