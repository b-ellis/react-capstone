// const fetch = require('isomorphic-fetch');
import fetch from 'isomorphic-fetch';
import fx from 'money';

const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
const fetchAPISuccess = (data) => {
	return{
		type: FETCH_API_SUCCESS,
		data: data
	}
}

const FETCH_API_ERROR = 'FETCH_API_ERROR';
const fetchAPIError = (error) => {
	return{
		type: FETCH_API_ERROR,
		error: error
	}
}

const fetchAPI = () => {
	return (dispatch) => {
		const url = 'https://openexchangerates.org/api/latest.json?app_id=21b80883e2ef46588d89236f9b3dc5c5';
		return fetch(url).then((res) => {
			if(res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.response = res;
				throw error;
			}
			return res;
		})
		.then(res => res.json())
		.then((data) => {
			if ( typeof fx !== "undefined" && fx.rates ) {
                fx.rates = data.rates;
                fx.base = data.base;
            } else {
                // If not, apply to fxSetup global:
                var fxSetup = {
                    rates : data.rates,
                    base : data.base
                }
            }
			return dispatch(
				fetchAPISuccess(data)
			);
		})
		.catch((error) => {
			return dispatch(
				fetchAPIError(error)
			)
		});
	}
}

const USER_AMOUNT = 'USER_AMOUNT';
const addUserAmount = (amount) => {
	return{
		type: USER_AMOUNT,
		amount: amount
	}
}

const GET_RATE = 'GET_RATE';
const getRate = (rate) => {
	return{
		type: GET_RATE,
		rate: rate
	}
}

const GET_CODE = 'GET_CODE';
const getCode = (code) => {
	return{
		type: GET_CODE,
		code: code
	}
}

const EXCHANGE = 'EXCHANGE';
const exchange = (exchange) => {
	return{
		type: EXCHANGE,
		exchange: exchange
	}
}

exports.fetchAPI = fetchAPI;

exports.FETCH_API_SUCCESS = FETCH_API_SUCCESS;
exports.fetchAPISuccess = fetchAPISuccess;

exports.FETCH_API_ERROR = FETCH_API_ERROR;
exports.fetchAPIError = fetchAPIError;

exports.USER_AMOUNT = USER_AMOUNT;
exports.addUserAmount = addUserAmount;

exports.GET_RATE = GET_RATE;
exports.getRate = getRate;

exports.GET_CODE = GET_CODE;
exports.getCode = getCode;

exports.EXCHANGE = EXCHANGE;
exports.exchange = exchange;