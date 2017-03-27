import React from 'react';
import 'react-bootstrap';
import { connect } from 'react-redux';
import getRate from 'money';
import fx from 'money';
import fxSetup from 'money';

import actions from '../actions/index';
import Country from './country';
import Info from './info';

class Form extends React.Component {
	constructor(){
		super();
		this.state = {value: 'Base'}
		this.inputChange = this.inputChange.bind(this);
		this.handelChange = this.handelChange.bind(this);
	}
	inputChange(event){
		this.props.dispatch(actions.addUserAmount(event.target.value));
	}
	handelChange(event){
		const value = event.target.value;
		let rate;
		event.target.childNodes.forEach((target, index) => {
			if(target.value === value){
				rate = target.id;	
			}
		})
		this.setState({
			value: value,
			rate: rate
		});
		this.props.dispatch(actions.changeBase(value));
	}
	render(){
		const rates = this.props.rates;
		const countries =  this.props.countries;
		let countryList = [];
		let selectList = [];
		countries.forEach((country, index) => {
			if(country == 'AED' || country == 'CAD' || country == 'CNY' || country == 'HKD' || country == 'MXN' || country == 'RUB' || country == 'BTC' || country == 'CHF' || country == 'EUR' || country =='INR' || country == 'NZD' || country == 'THB' || country == 'USD'){
				countryList.push(<Country baseRate={this.state.rate} onSubmit={this.props.onSubmit} key={index} base={this.props.base} amount={this.props.amount} text={countries[index]} rates={rates[index]} />);
				selectList.push(<option id={rates[index]} key={index}>{country}</option>)
			}
		});
		return(
			<form className="form-inline formDiv" onSubmit={this.props.onSubmit}>
				<div className="form-group">
				<label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
					<div className="input-group">
						<div className="input-group-addon">
							<select name='base' required value={this.state.value} onChange={this.handelChange} >
								<option disabled>Base</option>
								{selectList}
							</select>
						</div>
						<input autoFocus onChange={this.inputChange} step="any" min="0" name="amount" type="number" className="form-control formInput" id="exampleInputAmount" placeholder="Amount" autoComplete="off" required/>
					</div>
				</div>
				<div className='countriesDiv'>
					<ul className='countriesList'>
						{countryList}
					</ul>
				</div>
				<Info hoverRate={this.props.hoverRate} 
					  hoverInfo={this.props.hoverInfo}
					  hoverCurrency={this.props.hoverCurrency}/>
			</form>
		)
	}
}

const Container = connect()(Form)

module.exports = Container;