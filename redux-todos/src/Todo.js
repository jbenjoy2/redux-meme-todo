import React, { useState } from 'react';
import './Todo.css';
const Todo = ({ id, task, remove, update }) => {
	const [ toEdit, setToEdit ] = useState(task);
	const [ isEditing, setIsEditing ] = useState(false);

	const toggleEdit = () => {
		setIsEditing((e) => !e);
	};

	const handleFormChange = (evt) => {
		setToEdit(evt.target.value);
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		update(id, toEdit);
		setIsEditing(false);
	};

	const handleRemove = () => {
		remove(id);
	};

	if (isEditing) {
		return (
			<div>
				<form className="form" onSubmit={handleFormSubmit}>
					<input type="text" value={toEdit} onChange={handleFormChange} />
					<button className="btn btn-sm rounded-pill btn-success text-light" type="submit">
						Update
					</button>
				</form>
			</div>
		);
	}

	return (
		<li className="list-group-item list-group-item-success my-2 rounded-pill border-top-3 Todo">
			{toEdit}
			<button onClick={toggleEdit} className="btn btn-sm rounded-pill btn-secondary float-left">
				Edit
			</button>
			<button
				onClick={handleRemove}
				className="btn btn-sm rounded-pill btn-light float-right text-light"
			>
				{' '}
				❌{' '}
			</button>
		</li>
	);
};

export default Todo;
