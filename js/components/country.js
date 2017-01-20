import React from 'react';
import { connect } from 'react-redux';
import fx from 'money';

import actions from '../actions/index';

class Country extends React.Component{
	constructor(){
		super();
		this.settings = this.settings.bind(this);
	}
	settings(){
		this.props.dispatch(actions.getRate(this.props.rates));
		this.props.dispatch(actions.getCode(this.props.text));
		const amount = this.props.amount;
		const USD = "USD";
		const currency = this.props.text;
		const convert = fx.convert(amount, {from: USD, to: currency});
		const exchange = convert.toFixed(2);
		this.props.dispatch(actions.exchange(exchange));
	}
	render(){
		return(
			<li className='country'><button type="button" onClick={this.settings} className='countryButton'>{this.props.text}</button></li>
		)
	}
}

const Container = connect()(Country)

module.exports = Container;