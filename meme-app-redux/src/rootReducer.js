const INITIAL_STATE = { memes: [] };
function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD':
			return { ...state, memes: [ ...state.memes, { ...action.meme } ] };
		case 'DELETE':
			return { ...state, memes: state.memes.filter((meme) => meme.id !== action.id) };
		default:
			return state;
	}
}
export default rootReducer;
