import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

const ToDoForm = ({ add }) => {
	const INITIAL_STATE = {
		task : ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((f) => ({
			...f,
			[name] : value
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		add({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};
	return (
		<div className="TodoForm-wrapper pt-5">
			<h1 style={{ textAlign: 'center' }}>Todo List</h1>
			<form
				className="TodoForm form container col-md-6 offset-md-3 mt-5 mb-4"
				onSubmit={handleSubmit}
			>
				<div className="TodoForm-task form-group">
					<input
						type="text"
						value={formData.task}
						id="task"
						name="task"
						placeholder="New Task..."
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-block btn-success">
					Add todo!
				</button>
			</form>
		</div>
	);
};

export default ToDoForm;
