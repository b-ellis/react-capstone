import React from 'react';
import { connect } from 'react-redux';
import fx from 'money';

import actions from '../actions/index';
import Info from './info';

class Country extends React.Component{
	constructor(){
		super();
		this.state = {
			info: false
		}
		this.settings = this.settings.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}
	settings(){
		this.props.dispatch(actions.getCode(this.props.text));
		const amount = this.props.amount;
		const base = this.props.base;
		const currency = this.props.text;
		const convert = fx.convert(amount, {from: base, to: currency});
		const exchange = convert.toFixed(2);
		this.props.dispatch(actions.exchange(exchange));
	}
	mouseEnter(){
		this.props.dispatch(actions.hoverRate(this.props.rates, this.props.text));
		this.props.dispatch(actions.hoverInfo(true));
	}
	mouseLeave(){
		this.props.dispatch(actions.hoverInfo(false));
	}
	render(){
		return(
			<li className='country'>
				<button onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} type="button" onClick={this.settings} className='countryButton'>
					{this.props.text}
				</button>
			</li>
		)	
	}
}

const Container = connect()(Country)

module.exports = Container;