import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const MemeForm = ({ add }) => {
	const INITIAL_STATE = {
		topText    : '',
		url        : '',
		bottomText : ''
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		add({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};
	return (
		<div className="MemeForm-wrapper container col-md-6 offset-md-3 mt-5 mb-4">
			<form className="MemeForm form" onSubmit={handleSubmit}>
				<div className="MemeForm-topText form-group">
					<label htmlFor="topText">Top Text</label>
					<input
						type="text"
						value={formData.topText}
						placeholder="Top Text"
						onChange={handleChange}
						name="topText"
						id="topText"
						className="form-control"
					/>
				</div>
				<div className="MemeForm-url form-group">
					<label htmlFor="url">Image URL</label>
					<input
						type="text"
						value={formData.url}
						placeholder="Image URl"
						onChange={handleChange}
						name="url"
						id="url"
						className="form-control"
					/>
				</div>
				<div className="MemeForm-bottomText form-group">
					<label htmlFor="bottomText">Bottom Text</label>
					<input
						type="text"
						value={formData.bottomText}
						placeholder="Bottom Text"
						onChange={handleChange}
						name="bottomText"
						id="bottomText"
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-lg btn-primary btn-block">
					Generate Meme
				</button>
			</form>
		</div>
	);
};

export default MemeForm;
