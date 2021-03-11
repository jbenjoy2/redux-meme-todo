const INITIAL_STATE = { todos: [] };
function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD':
			return { ...state, todos: [ ...state.todos, { ...action.todo } ] };
		case 'DELETE':
			return { ...state, todos: state.todos.filter((todo) => todo.id !== action.id) };
		case 'EDIT':
			const todos = state.todos.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, task: action.updatedTask };
				}
				return todo;
			});
			return { ...state, todos };
		case 'RESET':
			return { todos: [] };
		default:
			return state;
	}
}
export default rootReducer;
