import React from 'react';
import 'react-bootstrap';
import { connect } from 'react-redux';

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
		this.setState({
			value: value
		});
		this.props.dispatch(actions.changeBase(value));
	}
	render(){
		const rates = this.props.rates;
		const countries =  this.props.countries;
		let countryList = [];
		let selectList = [];
		for(let i = 0; i < countries.length; i++){
			if(i == 0 || i == 21 || i == 27 || i == 29 || i == 32 || i == 47 || i == 59 || i == 67 || i == 104 || i == 112 || i == 124 || i == 140 || i == 151){
				countryList.push(<Country onSubmit={this.props.onSubmit} key={i} base={this.props.base} amount={this.props.amount} text={countries[i]} rates={rates[i]} />);
				selectList.push(<option key={i}>{countries[i]}</option>)
			}
		}
		return(
			<form className="form-inline formDiv" onSubmit={this.props.onSubmit}>
				<div className="form-group">
				<label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
					<div className="input-group">
						<div className="input-group-addon">
							<select name='base' required value={this.state.value} onChange={this.handelChange}>
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