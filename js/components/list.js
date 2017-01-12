import React from 'react';

class List extends React.Component{
	constructor(){
		super();
	}
	render(){
		const rates = this.props.rates;
		const countries =  this.props.countries;
		console.log(this.props);
		let countryList = [];
		for(let i = 0; i < countries.length; i++){
			countryList.push(<Country id={i} keys={i} text={countries[i]} />)
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
	render(){
		return(
			<li className='country'><button className='countryButton'>{this.props.text}</button></li>
		)
	}
}

module.exports = List;