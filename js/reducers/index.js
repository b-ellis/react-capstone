import actions from '../actions/index';
import fx from 'money';

const State = {
	data: {
		rates:{}
	},
	// exchange: null
}

const reducer = (state, action) => {
	state = state || State;

	switch(action.type) {
		case actions.FETCH_API_SUCCESS:
		const newState = Object.assign({}, state, {
			data: action.data
		});
		return newState;

		case actions.USER_AMOUNT:
		const amountState = Object.assign({}, state, {
			amount: action.amount
		});
		return amountState;

		case actions.GET_RATE:
		const rateState = Object.assign({}, state, {
			rate: action.rate
		});
		return rateState;

		case actions.GET_CODE:
		const codeState = Object.assign({}, state, {
			code: action.code
		});
		return codeState;

		case actions.EXCHANGE:
		const exchangeState = Object.assign({}, state, {
			exchange: action.exchange
		});
		return exchangeState;
	}
	return state;
}

exports.reducer = reducer;