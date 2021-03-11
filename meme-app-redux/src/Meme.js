import React from 'react';
import './Meme.css';
const Meme = ({ id, topText, url, bottomText, remove }) => {
	const handleDelete = () => {
		remove(id);
	};

	return (
		<div className="Meme mx-3 my-4" style={{ backgroundImage: `url(${url})` }}>
			<p className="Meme-topText">{topText}</p>
			<p className="Meme-bottomText">{bottomText}</p>
			<button className="btn btn-danger btn-small Meme-delete" onClick={handleDelete}>
				DELETE
			</button>
		</div>
	);
};

export default Meme;
