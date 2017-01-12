import actions from '../actions/index';

const State = {
	data: {
		rates:{}
	}
}

const reducer = (state, action) => {
	state = State || state;

	switch(action.type) {
		case actions.FETCH_API_SUCCESS:
		const newState = Object.assign({}, state, {
			data: action.data
		});
		return newState;
	}
}

exports.reducer = reducer;