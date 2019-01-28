import { INCREMENT, DECREMENT, RESET } from '../actions';

const initialState = {
	count: 0,
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			console.log('increment reducer ' + action.payload.count);
			return { ...state, count: action.payload.count };
		case DECREMENT:
			console.log('decrement reducer ' + action.payload.count);
			return { ...state, count: action.payload.count };
		case RESET:
			return { ...state, count: action.payload.count };
		default:
			return state;
	}
};
