import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component{
	constructor(){
		super();
	}
	render(){
		const rates = this.props.rates;
		const countries =  this.props.countries;
		let countryList = [];
		for(let i = 0; i < countries.length; i++){
			countryList.push(<Country id={i} key={i} text={countries[i]} rates={rates[i]} />)
		}
		return(
			<div className='countriesDiv'>
					<ul className='countriesList'>
						{countryList}
					</ul>
			</div>
		)
	}
}

class Country extends React.Component{
	constructor(){
		super();
		this.getInfo = this.getInfo.bind(this);
	}
	getInfo(){
		console.log(this.props)
	}
	render(){
		return(
			<li className='country'><button onClick={this.getInfo} className='countryButton'>{this.props.text}</button></li>
		)
	}
}

const Container = connect()(List)

module.exports = Container;