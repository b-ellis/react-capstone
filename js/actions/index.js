// const fetch = require('isomorphic-fetch');
import fetch from 'isomorphic-fetch';

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
			console.log(res)
			return res;
		})
		.then(res => res.json())
		.then((data) => {
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

exports.fetchAPI = fetchAPI;

exports.FETCH_API_SUCCESS = FETCH_API_SUCCESS;
exports.fetchAPISuccess = fetchAPISuccess;

exports.FETCH_API_ERROR = FETCH_API_ERROR;
exports.fetchAPIError = fetchAPIError;