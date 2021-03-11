import React from 'react';
import './Todo.css';
const Todo = ({ id, task, remove }) => {
	const handleRemove = () => {
		remove(id);
	};

	return (
		<li className="list-group-item my-2 rounded-pill border-top-3 Todo">
			{task}
			<button onClick={handleRemove} className="btn btn-sm btn-danger float-right">
				{' '}
				X{' '}
			</button>
		</li>
	);
};

export default Todo;
