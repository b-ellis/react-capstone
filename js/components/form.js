import React from 'react';
import 'react-bootstrap';
import { connect } from 'react-redux';

import actions from '../actions/index';
import Country from './country';

class Form extends React.Component {
	constructor(){
		super();
		this.inputChange = this.inputChange.bind(this);
	}
	inputChange(event){
		this.props.dispatch(actions.addUserAmount(event.target.value));
	}
	render(){
		const rates = this.props.rates;
		const countries =  this.props.countries;
		let countryList = [];
		for(let i = 0; i < countries.length; i++){
			if(i == 0 || i == 21 || i == 27 || i == 29 || i == 32 || i == 47 || i == 59 || i == 67 || i == 104 || i == 112 || i == 124 || i == 140){
				countryList.push(<Country onSubmit={this.props.onSubmit} key={i} amount={this.props.amount} text={countries[i]} rates={rates[i]} />);	
			}
		}
		return(
			<form className="form-inline formDiv" onSubmit={this.props.onSubmit}>
				<div className="form-group">
				<label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
					<div className="input-group">
						<div className="input-group-addon">USD</div>
						<input autoFocus onChange={this.inputChange} step="any" min="0" name="amount" type="number" className="form-control formInput" id="exampleInputAmount" placeholder="Amount" autoComplete="off" required/>
					</div>
				</div>
				<div className='countriesDiv'>
					<ul className='countriesList'>
						{countryList}
					</ul>
				</div>
			</form>
		)
	}
}

const Container = connect()(Form)

module.exports = Container;