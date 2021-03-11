import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import useLocalStorage from './Hooks/useLocalStorageState';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
	const dispatch = useDispatch();

	const allTodos = useSelector((store) => store.todos);
	const [ todos, setTodos ] = useLocalStorage('todos', allTodos);

	const addTodo = (todoObj) => {
		dispatch({
			type : 'ADD',
			todo : todoObj
		});
		setTodos((todos) => [ ...todos, todoObj ]);
	};

	const removeTodo = (id) => {
		dispatch({
			type : 'DELETE',
			id
		});
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="TodoList">
			<TodoForm add={addTodo} />
			{todos.length ? (
				<div className="TodoList-list">
					<div className="TodoList-allTodos my-5 text-center justify-content-center card border-0">
						<div className="card-body">
							<ul className="TodoList-todos list-group">
								{todos.map((todo) => (
									<Todo id={todo.id} key={todo.id} remove={removeTodo} task={todo.task} />
								))}
							</ul>
						</div>
					</div>
				</div>
			) : (
				<h2 style={{ textAlign: 'center' }} className="mt-3">
					Nothing on your todo list!
				</h2>
			)}
		</div>
	);
};

export default TodoList;
