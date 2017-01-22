import actions from '../actions/index';
import fx from 'money';

const State = {
	data: {
		rates:{}
	},
	hoverInfo: false,
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

		case actions.HOVER_RATE:
		const hoverRateState = Object.assign({}, state, {
			hoverRate: action.hoverRate,
			hoverCode: action.hoverCode
		});
		switch(hoverRateState.hoverCode){
			case "AED":
			hoverRateState.hoverCurrency = "United Arab Emirates Dirham";
			break;

			case "CAD":
			hoverRateState.hoverCurrency = "Canadian Dollar";
			break;

			case "CNY":
			hoverRateState.hoverCurrency = "Chinese Yuan";
			break;

			case "HKD":
			hoverRateState.hoverCurrency = "Hong Kong Dollar";
			break;

			case "MXN":
			hoverRateState.hoverCurrency = "Mexican Peso";
			break;

			case "RUB":
			hoverRateState.hoverCurrency = "Russian Ruble";
			break;

			case "BTC":
			hoverRateState.hoverCurrency = "Bitcoin";
			break;

			case "CHF":
			hoverRateState.hoverCurrency = "Swiss Franc";
			break;

			case "EUR":
			hoverRateState.hoverCurrency = "Euro";
			break;

			case "INR":
			hoverRateState.hoverCurrency = "Indian Rupee";
			break;

			case "NZD":
			hoverRateState.hoverCurrency = "New Zealand Dollar";
			break;

			case "THB":
			hoverRateState.hoverCurrency = "Thai Baht";
			break;
		}
		return hoverRateState;

		case actions.HOVER_INFO:
		const hoverInfoState = Object.assign({}, state, {
			hoverInfo: action.hoverInfo
		});
		return hoverInfoState;
	}
	return state;
}

exports.reducer = reducer;